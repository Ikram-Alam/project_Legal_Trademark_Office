/**
 * PayPal Configuration
 * Handles both sandbox and production environments using REST API
 */
class PayPalConfig {
  private static instance: PayPalConfig

  private constructor() {
    const clientId = process.env.PAYPAL_CLIENT_ID
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET

    if (!clientId || !clientSecret) {
      throw new Error('PayPal credentials are not configured. Please set PAYPAL_CLIENT_ID and PAYPAL_CLIENT_SECRET in your environment variables.')
    }
  }

  public static getInstance(): PayPalConfig {
    if (!PayPalConfig.instance) {
      PayPalConfig.instance = new PayPalConfig()
    }
    return PayPalConfig.instance
  }

  public getEnvironment(): string {
    return process.env.PAYPAL_ENVIRONMENT || 'sandbox'
  }

  public getBaseURL(): string {
    return this.getEnvironment() === 'live' 
      ? 'https://api-m.paypal.com' 
      : 'https://api-m.sandbox.paypal.com'
  }

  public getClientId(): string {
    const clientId = process.env.PAYPAL_CLIENT_ID
    if (!clientId) {
      throw new Error('PAYPAL_CLIENT_ID is not configured')
    }
    return clientId
  }

  public getClientSecret(): string {
    const clientSecret = process.env.PAYPAL_CLIENT_SECRET
    if (!clientSecret) {
      throw new Error('PAYPAL_CLIENT_SECRET is not configured')
    }
    return clientSecret
  }

  public async getAccessToken(): Promise<string> {
    const clientId = this.getClientId()
    const clientSecret = this.getClientSecret()
    const baseURL = this.getBaseURL()

    const response = await fetch(`${baseURL}/v1/oauth2/token`, {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: 'grant_type=client_credentials'
    })

    const data = await response.json()

    if (!data.access_token) {
      throw new Error('Failed to get PayPal access token')
    }

    return data.access_token
  }
}

export default PayPalConfig