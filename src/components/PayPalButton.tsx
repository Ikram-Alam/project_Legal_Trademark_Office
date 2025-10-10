'use client'

import { useEffect, useRef, useState } from 'react'
import { loadScript } from '@paypal/paypal-js'
import { AlertTriangle, CheckCircle, CreditCard } from 'lucide-react'

interface PayPalButtonProps {
  amount: number
  applicationId: string
  packageType: string
  onSuccess: (details: { paymentId: string; transactionId: string; status: string }) => void
  onError: (error: Error | string) => void
  onCancel?: () => void
}

export default function PayPalButton({ 
  amount, 
  applicationId, 
  packageType, 
  onSuccess, 
  onError, 
  onCancel 
}: PayPalButtonProps) {
  const paypalRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const initializePayPal = async () => {
      try {
        setIsLoading(true)
        setError(null)

        // Get PayPal client ID from environment
        const response = await fetch('/api/paypal/config')
        const config = await response.json()
        
        if (!config.success) {
          if (config.setupInstructions) {
            // Show detailed setup instructions
            setError(`PayPal Setup Required: ${config.message}`)
          } else {
            setError(config.error || 'Failed to load PayPal configuration')
          }
          setIsLoading(false)
          return
        }

        // Load PayPal script
        const paypalInstance = await loadScript({
          clientId: config.clientId,
          components: 'buttons',
          currency: 'USD',
          intent: 'capture',
          enableFunding: 'paylater,venmo,card',
          disableFunding: ''
        })

        if (!paypalInstance?.Buttons) {
          throw new Error('PayPal SDK failed to load')
        }

        // Render PayPal buttons
        paypalInstance.Buttons({
          style: {
            shape: 'rect',
            layout: 'vertical',
            color: 'gold',
            label: 'paypal',
            height: 50,
            tagline: false
          },
          
          createOrder: async () => {
            try {
              const response = await fetch('/api/paypal/create-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  applicationId,
                  packageType,
                  amount: amount.toFixed(2),
                  currency: 'USD'
                }),
              })

              const orderData = await response.json()

              if (!orderData.success) {
                throw new Error(orderData.error || 'Failed to create order')
              }

              return orderData.orderId
            } catch (error) {
              console.error('Error creating PayPal order:', error)
              const errorMessage = error instanceof Error ? error : new Error('Failed to create order')
              onError(errorMessage)
              throw error
            }
          },

          onApprove: async (data) => {
            try {
              const response = await fetch('/api/paypal/capture-order', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  orderId: data.orderID,
                  applicationId
                }),
              })

              const captureData = await response.json()

              if (!captureData.success) {
                throw new Error(captureData.error || 'Failed to capture payment')
              }

              onSuccess(captureData)
            } catch (error) {
              console.error('Error capturing PayPal payment:', error)
              const errorMessage = error instanceof Error ? error : new Error('Failed to capture payment')
              onError(errorMessage)
            }
          },

          onCancel: (data) => {
            console.log('PayPal payment cancelled:', data)
            if (onCancel) {
              onCancel()
            }
          },

          onError: (err) => {
            console.error('PayPal payment error:', err)
            const errorMessage = typeof err === 'string' ? new Error(err) : new Error('PayPal payment error')
            onError(errorMessage)
          }
        }).render(paypalRef.current!)

        setIsLoading(false)
      } catch (error) {
        console.error('PayPal initialization error:', error)
        setError(error instanceof Error ? error.message : 'Failed to initialize PayPal')
        setIsLoading(false)
      }
    }

    initializePayPal()
  }, [amount, applicationId, packageType, onSuccess, onError, onCancel])

  if (error) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <div className="flex items-center text-yellow-800">
          <AlertTriangle className="w-5 h-5 mr-2" />
          <div className="flex-1">
            <h4 className="font-semibold">PayPal Configuration Required</h4>
            <p className="text-sm text-yellow-700 mt-1">
              To enable payments, you need to configure PayPal credentials.
            </p>
            <div className="mt-3 p-3 bg-white rounded border text-xs">
              <div className="font-medium mb-2">Quick Setup Instructions:</div>
              <ol className="list-decimal list-inside space-y-1 text-gray-700">
                <li>Go to <a href="https://developer.paypal.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">developer.paypal.com</a></li>
                <li>Create a developer account or sign in</li>
                <li>Create a new app for your business</li>
                <li>Copy the Client ID and Client Secret</li>
                <li>Update your .env.local file with real credentials</li>
              </ol>
            </div>
            <p className="text-xs text-yellow-600 mt-2">
              For testing, you can use PayPal&apos;s sandbox environment.
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* Payment Security Notice */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-start">
          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-0.5" />
          <div>
            <h4 className="font-semibold text-blue-800">Secure Payment Processing</h4>
            <p className="text-sm text-blue-700 mt-1">
              Your payment is processed securely through PayPal. You can pay using:
            </p>
            <ul className="text-xs text-blue-600 mt-2 space-y-1">
              <li>• Any debit or credit card (Visa, MasterCard, American Express, Discover)</li>
              <li>• PayPal account balance</li>
              <li>• Bank account (where available)</li>
              <li>• Pay Later options (where available)</li>
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

      {/* PayPal Buttons Container */}
      <div className="relative">
        {isLoading && (
          <div className="flex items-center justify-center py-12 bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-3"></div>
              <p className="text-gray-600 font-medium">Loading Secure Payment Options...</p>
              <p className="text-sm text-gray-500 mt-1">Connecting to PayPal servers</p>
            </div>
          </div>
        )}
        
        <div 
          ref={paypalRef} 
          className={`paypal-buttons-container ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}
        />
      </div>

      {/* Alternative Payment Notice */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
        <div className="flex items-center text-gray-700">
          <CreditCard className="w-4 h-4 mr-2" />
          <p className="text-sm">
            <strong>No PayPal account required.</strong> You can pay with any credit or debit card.
          </p>
        </div>
      </div>
    </div>
  )
}