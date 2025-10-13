'use client'

import { useState } from 'react'
import { AlertTriangle, CheckCircle, CreditCard, Loader2 } from 'lucide-react'

interface PayoneerButtonProps {
  amount: number
  applicationId: string
  packageType: string
  onSuccess: (details: { paymentId: string; transactionId: string; status: string }) => void
  onError: (error: Error | string) => void
  onCancel?: () => void
}

export default function PayoneerButton({
  amount,
  applicationId,
  packageType,
  onSuccess: _onSuccess,
  onError,
  onCancel
}: PayoneerButtonProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isConfigured, setIsConfigured] = useState<boolean | null>(null)

  // Check Payoneer configuration on component mount
  useState(() => {
    checkConfiguration()
  })

  async function checkConfiguration() {
    try {
      const response = await fetch('/api/payoneer/config')
      const config = await response.json()
      
      if (!config.success) {
        setError(config.message || 'Payoneer not configured')
        setIsConfigured(false)
      } else {
        setIsConfigured(true)
      }
    } catch (err) {
      console.error('Configuration check error:', err)
      setError('Failed to verify Payoneer configuration')
      setIsConfigured(false)
    }
  }

  async function handlePayment() {
    try {
      setIsLoading(true)
      setError(null)

      // Create checkout session
      const sessionResponse = await fetch('/api/payoneer/create-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          applicationId,
          packageType,
          amount: amount.toFixed(2),
          currency: 'USD'
        })
      })

      const sessionData = await sessionResponse.json()

      if (!sessionData.success) {
        throw new Error(sessionData.error || 'Failed to create payment session')
      }

      // Redirect to Payoneer checkout
      console.log('Redirecting to Payoneer checkout:', sessionData.checkoutUrl)
      window.location.href = sessionData.checkoutUrl

    } catch (err) {
      console.error('Payment error:', err)
      const errorMessage = err instanceof Error ? err.message : 'Payment failed'
      setError(errorMessage)
      onError(err instanceof Error ? err : new Error(errorMessage))
      setIsLoading(false)
    }
  }

  function handleCancel() {
    if (onCancel) {
      onCancel()
    }
  }

  // Show setup instructions if not configured
  if (isConfigured === false || error) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center text-yellow-800">
          <AlertTriangle className="w-5 h-5 mr-2 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="font-semibold">Payoneer Configuration Required</h4>
            <p className="text-sm text-yellow-700 mt-1">
              To enable payments, you need to configure Payoneer credentials.
            </p>
            <div className="mt-3 p-3 bg-white rounded border text-xs">
              <div className="font-medium mb-2">Quick Setup Instructions:</div>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>
                  Go to{' '}
                  <a
                    href="https://myaccount.payoneer.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    myaccount.payoneer.com
                  </a>
                </li>
                <li>Sign in to your Payoneer account</li>
                <li>Navigate to Settings → API Access</li>
                <li>Generate API Key and note your Program ID</li>
                <li>Update your .env.local file with real credentials</li>
                <li>Restart the development server</li>
              </ol>
            </div>
            <p className="text-xs text-yellow-600 mt-2">
              For testing, you can use Payoneer&apos;s sandbox environment.
            </p>
          </div>
        </div>
      </div>
    )
  }

  // Show loading state while checking configuration
  if (isConfigured === null) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="w-6 h-6 animate-spin text-blue-600" />
        <span className="ml-2 text-gray-600">Verifying payment configuration...</span>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Payment Security Notice */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="font-semibold text-blue-800">Secure Payment Processing</h4>
            <p className="text-sm text-blue-700 mt-1">
              Your payment is processed securely through Payoneer. You can pay using:
            </p>
            <ul className="text-xs text-blue-600 mt-2 space-y-1">
              <li>• Any debit or credit card (Visa, MasterCard, American Express, Discover)</li>
              <li>• Bank transfers (where available)</li>
              <li>• Local payment methods based on your location</li>
              <li>• Payoneer account balance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Payment Amount Summary */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-green-800">Payment Amount</h4>
            <p className="text-sm text-green-700">{packageType} Package</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-green-800">${amount.toFixed(2)}</div>
            <div className="text-xs text-green-600">USD</div>
          </div>
        </div>
      </div>

      {/* Payoneer Payment Button */}
      <div className="space-y-3">
        <button
          onClick={handlePayment}
          disabled={isLoading}
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 shadow-lg"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              <span>Proceed to Secure Payment</span>
            </>
          )}
        </button>

        {onCancel && (
          <button
            onClick={handleCancel}
            disabled={isLoading}
            className="w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Cancel
          </button>
        )}
      </div>

      {/* Alternative Payment Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
        <div className="flex items-center text-gray-700">
          <CreditCard className="w-4 h-4 mr-2 flex-shrink-0" />
          <p className="text-sm">
            <strong>International payments accepted.</strong> Pay securely with your preferred method.
          </p>
        </div>
      </div>

      {/* Payment Features */}
      <div className="grid grid-cols-3 gap-3">
        <div className="text-center p-3 bg-white rounded-lg border">
          <div className="text-2xl mb-1">🔒</div>
          <div className="text-xs font-medium text-gray-700">256-bit SSL</div>
          <div className="text-xs text-gray-500">Encrypted</div>
        </div>
        <div className="text-center p-3 bg-white rounded-lg border">
          <div className="text-2xl mb-1">🌍</div>
          <div className="text-xs font-medium text-gray-700">Global</div>
          <div className="text-xs text-gray-500">200+ Countries</div>
        </div>
        <div className="text-center p-3 bg-white rounded-lg border">
          <div className="text-2xl mb-1">⚡</div>
          <div className="text-xs font-medium text-gray-700">Instant</div>
          <div className="text-xs text-gray-500">Processing</div>
        </div>
      </div>
    </div>
  )
}
