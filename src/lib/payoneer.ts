/**
 * Payoneer Payment Gateway Configuration
 * Handles Payoneer Checkout API integration for secure international payments
 * 
 * Documentation: https://developers.payoneer.com/
 */

interface PayoneerConfig {
  apiKey: string
  programId: string
  environment: 'sandbox' | 'production'
  webhookSecret: string
}

interface PayoneerCheckoutSession {
  sessionId: string
  checkoutUrl: string
  expiresAt: string
}

interface PayoneerPaymentResponse {
  transactionId: string
  status: 'PENDING' | 'COMPLETED' | 'FAILED' | 'CANCELLED'
  amount: number
  currency: string
  paymentMethod: string
  timestamp: string
}

class PayoneerPaymentGateway {
  private static instance: PayoneerPaymentGateway
  private config: PayoneerConfig

  private constructor() {
    const apiKey = process.env.PAYONEER_API_KEY
    const programId = process.env.PAYONEER_PROGRAM_ID
    const environment = process.env.PAYONEER_ENVIRONMENT || 'sandbox'
    const webhookSecret = process.env.PAYONEER_WEBHOOK_SECRET

    if (!apiKey || !programId) {
      throw new Error(
        'Payoneer credentials are not configured. Please set PAYONEER_API_KEY and PAYONEER_PROGRAM_ID in your environment variables.'
      )
    }

    this.config = {
      apiKey,
      programId,
      environment: environment as 'sandbox' | 'production',
      webhookSecret: webhookSecret || ''
    }
  }

  public static getInstance(): PayoneerPaymentGateway {
    if (!PayoneerPaymentGateway.instance) {
      PayoneerPaymentGateway.instance = new PayoneerPaymentGateway()
    }
    return PayoneerPaymentGateway.instance
  }

  /**
   * Get API base URL based on environment
   */
  public getBaseURL(): string {
    return this.config.environment === 'production'
      ? 'https://api.payoneer.com'
      : 'https://api.sandbox.payoneer.com'
  }

  /**
   * Get environment
   */
  public getEnvironment(): string {
    return this.config.environment
  }

  /**
   * Get API Key
   */
  public getApiKey(): string {
    return this.config.apiKey
  }

  /**
   * Get Program ID
   */
  public getProgramId(): string {
    return this.config.programId
  }

  /**
   * Get Webhook Secret
   */
  public getWebhookSecret(): string {
    return this.config.webhookSecret
  }

  /**
   * Create a checkout session for payment
   */
  public async createCheckoutSession(params: {
    amount: number
    currency: string
    orderId: string
    description: string
    customerEmail: string
    successUrl: string
    cancelUrl: string
  }): Promise<PayoneerCheckoutSession> {
    const baseURL = this.getBaseURL()
    
    try {
      const response = await fetch(`${baseURL}/v1/checkout/sessions`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
          'X-Program-ID': this.config.programId
        },
        body: JSON.stringify({
          amount: {
            value: params.amount.toFixed(2),
            currency: params.currency
          },
          order_id: params.orderId,
          description: params.description,
          customer: {
            email: params.customerEmail
          },
          urls: {
            success: params.successUrl,
            cancel: params.cancelUrl,
            webhook: `${process.env.NEXT_PUBLIC_APP_URL}/api/payoneer/webhook`
          },
          metadata: {
            applicationId: params.orderId,
            platform: 'USPTO Legal Trademark Office'
          }
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to create checkout session')
      }

      return {
        sessionId: data.session_id,
        checkoutUrl: data.checkout_url,
        expiresAt: data.expires_at
      }
    } catch (error) {
      console.error('Payoneer checkout session creation error:', error)
      throw error
    }
  }

  /**
   * Retrieve payment details
   */
  public async getPaymentDetails(sessionId: string): Promise<PayoneerPaymentResponse> {
    const baseURL = this.getBaseURL()
    
    try {
      const response = await fetch(`${baseURL}/v1/checkout/sessions/${sessionId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'X-Program-ID': this.config.programId
        }
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to retrieve payment details')
      }

      return {
        transactionId: data.transaction_id,
        status: data.status,
        amount: parseFloat(data.amount.value),
        currency: data.amount.currency,
        paymentMethod: data.payment_method || 'card',
        timestamp: data.completed_at || data.created_at
      }
    } catch (error) {
      console.error('Payoneer payment details retrieval error:', error)
      throw error
    }
  }

  /**
   * Verify webhook signature
   */
  public async verifyWebhookSignature(payload: string, signature: string): Promise<boolean> {
    if (!this.config.webhookSecret) {
      console.warn('Webhook secret not configured')
      return false
    }

    try {
      const crypto = await import('crypto')
      const expectedSignature = crypto.default
        .createHmac('sha256', this.config.webhookSecret)
        .update(payload)
        .digest('hex')

      return crypto.default.timingSafeEqual(
        Buffer.from(signature),
        Buffer.from(expectedSignature)
      )
    } catch (error) {
      console.error('Webhook signature verification error:', error)
      return false
    }
  }

  /**
   * Refund a payment
   */
  public async refundPayment(transactionId: string, amount?: number): Promise<boolean> {
    const baseURL = this.getBaseURL()
    
    try {
      const response = await fetch(`${baseURL}/v1/transactions/${transactionId}/refund`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
          'Content-Type': 'application/json',
          'X-Program-ID': this.config.programId
        },
        body: JSON.stringify({
          amount: amount ? { value: amount.toFixed(2) } : undefined
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Failed to process refund')
      }

      return data.status === 'REFUNDED'
    } catch (error) {
      console.error('Payoneer refund error:', error)
      throw error
    }
  }
}

export default PayoneerPaymentGateway
export type { PayoneerCheckoutSession, PayoneerPaymentResponse }
