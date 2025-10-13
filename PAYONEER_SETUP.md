# Payoneer Payment Gateway Integration Guide

## Complete End-to-End Setup for USPTO Legal Trademark Office

This guide provides comprehensive instructions for integrating Payoneer payment gateway into your USPTO trademark registration application.

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Prerequisites](#prerequisites)
3. [Payoneer Account Setup](#payoneer-account-setup)
4. [Environment Configuration](#environment-configuration)
5. [Testing the Integration](#testing-the-integration)
6. [Production Deployment](#production-deployment)
7. [Webhook Configuration](#webhook-configuration)
8. [Troubleshooting](#troubleshooting)

---

## 🎯 Overview

### What is Payoneer?

Payoneer is a global payment platform that enables businesses to accept payments from customers worldwide. It supports:

- **Credit/Debit Cards**: Visa, MasterCard, American Express, Discover
- **Bank Transfers**: Direct bank account payments
- **Local Payment Methods**: Region-specific payment options
- **Multi-Currency**: Accept payments in 150+ currencies
- **International Coverage**: Available in 200+ countries

### Integration Architecture

```
User (Step 3) → PayoneerButton Component → Create Session API
     ↓
Payoneer Checkout Page (External)
     ↓
Payment Success → Webhook Notification → Database Update
     ↓
User Returns → Success Page → Verify Payment API
```

---

## ✅ Prerequisites

Before starting, ensure you have:

1. **Payoneer Business Account**
   - Sign up at [https://myaccount.payoneer.com/](https://myaccount.payoneer.com/)
   - Complete business verification
   - Provide tax information (W-9 or W-8BEN)

2. **Development Environment**
   - Node.js 18+ installed
   - Next.js 15 application running
   - Prisma database configured

3. **SSL Certificate** (Required for production)
   - Webhook endpoints must use HTTPS
   - Use services like Let's Encrypt for free SSL

---

## 🔐 Payoneer Account Setup

### Step 1: Create Your Payoneer Account

1. Visit [https://myaccount.payoneer.com/](https://myaccount.payoneer.com/)
2. Click **"Sign Up"** and choose **Business Account**
3. Fill in your business information:
   - Legal business name
   - Business address
   - Tax ID (EIN or SSN)
   - Business type (LLC, Corporation, Sole Proprietorship)
4. Verify your email address
5. Complete identity verification (upload documents if requested)

### Step 2: Set Up Payment Receiving

1. Log in to your Payoneer account
2. Navigate to **Settings** → **Payment Services**
3. Enable **"Payoneer Checkout"** service
4. Complete merchant verification:
   - Business website
   - Expected transaction volume
   - Product/service description
5. Wait for approval (usually 1-3 business days)

### Step 3: Generate API Credentials

1. Go to **Settings** → **API Access** (or **Developer Settings**)
2. Click **"Generate API Key"**
3. Save the following credentials securely:
   - **API Key**: Used for authentication
   - **Program ID**: Your unique merchant identifier
   - **Webhook Secret**: For verifying webhook signatures

4. Note your environment:
   - **Sandbox**: For testing (test credit cards, no real money)
   - **Production**: For live payments (real transactions)

### Step 4: Configure Webhook URL

1. In **API Access** settings, find **Webhook Configuration**
2. Add your webhook URL:
   ```
   https://yourdomain.com/api/payoneer/webhook
   ```
3. Select events to receive:
   - `checkout.session.completed`
   - `checkout.session.failed`
   - `checkout.session.cancelled`
4. Save webhook configuration

---

## ⚙️ Environment Configuration

### Step 1: Update `.env.local`

Create or update your `.env.local` file in the project root:

```env
# Payoneer Configuration
PAYONEER_API_KEY=your_actual_api_key_here
PAYONEER_PROGRAM_ID=your_actual_program_id_here
PAYONEER_ENVIRONMENT=sandbox
PAYONEER_WEBHOOK_SECRET=your_actual_webhook_secret_here

# Application URL (important for redirects)
NEXT_PUBLIC_APP_URL=http://localhost:3001

# Database
DATABASE_URL="file:./dev.db"
```

### Step 2: Environment Variables Explanation

| Variable | Description | Example |
|----------|-------------|---------|
| `PAYONEER_API_KEY` | Your Payoneer API authentication key | `pk_live_abc123...` |
| `PAYONEER_PROGRAM_ID` | Your merchant program identifier | `100012345` |
| `PAYONEER_ENVIRONMENT` | Set to `sandbox` for testing, `production` for live | `sandbox` |
| `PAYONEER_WEBHOOK_SECRET` | Secret for verifying webhook signatures | `whsec_abc123...` |
| `NEXT_PUBLIC_APP_URL` | Your application's public URL | `http://localhost:3001` |

### Step 3: Restart Development Server

After updating `.env.local`:

```bash
# Stop the server (Ctrl+C)
# Then restart
npm run dev
```

---

## 🧪 Testing the Integration

### Step 1: Verify Configuration

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Navigate to the registration flow:
   ```
   http://localhost:3001/register/step-1
   ```

3. Complete Steps 1 and 2, then proceed to Step 3 (Payment)

4. Check for configuration status:
   - ✅ Green checkmark = Configured correctly
   - ⚠️ Yellow warning = Configuration issue

### Step 2: Test Payment Flow

**Using Sandbox Environment:**

1. On Step 3, select a package
2. Accept terms and conditions
3. Click **"Proceed to Secure Payment"**
4. You'll be redirected to Payoneer's checkout page

**Test Credit Cards (Sandbox Only):**

```
Successful Payment:
Card Number: 4242 4242 4242 4242
Expiry: Any future date (e.g., 12/25)
CVV: Any 3 digits (e.g., 123)
ZIP: Any 5 digits (e.g., 12345)

Failed Payment (Declined):
Card Number: 4000 0000 0000 0002
Expiry: Any future date
CVV: Any 3 digits
ZIP: Any 5 digits

Insufficient Funds:
Card Number: 4000 0000 0000 9995
Expiry: Any future date
CVV: Any 3 digits
ZIP: Any 5 digits
```

5. Complete the payment
6. You'll be redirected back to the success page
7. Check the database to verify payment status

### Step 3: Verify Database Updates

Check your database using Prisma Studio:

```bash
npx prisma studio
```

Verify the `TrademarkApplication` record has:
- ✅ `paymentStatus`: `completed`
- ✅ `paymentId`: Session ID from Payoneer
- ✅ `transactionId`: Transaction ID from Payoneer
- ✅ `paymentMethod`: `payoneer`
- ✅ `paymentDate`: Timestamp of payment
- ✅ `status`: `submitted`

### Step 4: Test Webhook (Local Development)

For local webhook testing, use **ngrok** or **localtunnel**:

**Using ngrok:**

```bash
# Install ngrok
npm install -g ngrok

# Start ngrok tunnel
ngrok http 3001

# Copy the HTTPS URL (e.g., https://abc123.ngrok.io)
# Update Payoneer webhook URL to: https://abc123.ngrok.io/api/payoneer/webhook
```

**Using localtunnel:**

```bash
# Install localtunnel
npm install -g localtunnel

# Start tunnel
lt --port 3001 --subdomain uspto-trademark

# Use URL: https://uspto-trademark.loca.lt/api/payoneer/webhook
```

---

## 🚀 Production Deployment

### Step 1: Switch to Production Environment

1. Update `.env.local` (or `.env.production`):
   ```env
   PAYONEER_ENVIRONMENT=production
   PAYONEER_API_KEY=pk_live_YOUR_PRODUCTION_KEY
   PAYONEER_PROGRAM_ID=YOUR_PRODUCTION_PROGRAM_ID
   PAYONEER_WEBHOOK_SECRET=whsec_YOUR_PRODUCTION_SECRET
   NEXT_PUBLIC_APP_URL=https://your-domain.com
   ```

2. Use **production** API credentials from Payoneer dashboard

### Step 2: Update Webhook URL

1. Log in to Payoneer production account
2. Navigate to **Settings** → **API Access**
3. Update webhook URL to your production domain:
   ```
   https://your-domain.com/api/payoneer/webhook
   ```

### Step 3: SSL Certificate

Ensure your production domain has a valid SSL certificate:
- Use Let's Encrypt for free SSL
- Or use your hosting provider's SSL
- Payoneer requires HTTPS for webhooks

### Step 4: Test Production Payments

1. Deploy your application
2. Make a **small real payment** to test ($1-5)
3. Verify the entire flow works correctly
4. Check database updates
5. Confirm webhook notifications are received

### Step 5: Security Checklist

- ✅ Environment variables are secure (not in git)
- ✅ HTTPS enabled on production
- ✅ Webhook signature verification enabled
- ✅ Database backups configured
- ✅ Error logging and monitoring set up
- ✅ PCI compliance reviewed

---

## 🔔 Webhook Configuration

### Understanding Webhooks

Webhooks notify your application when payment events occur:

| Event | Description | Action |
|-------|-------------|--------|
| `checkout.session.completed` | Payment successful | Update database, send confirmation email |
| `checkout.session.failed` | Payment failed | Update status, notify user |
| `checkout.session.cancelled` | User cancelled payment | Reset status, allow retry |

### Webhook Endpoint

Your webhook endpoint is located at:
```
/src/app/api/payoneer/webhook/route.ts
```

### Security

Webhooks are secured with signature verification:

```typescript
const isValid = await payoneer.verifyWebhookSignature(payload, signature)
if (!isValid) {
  return NextResponse.json({ error: 'Invalid signature' }, { status: 401 })
}
```

### Testing Webhooks

Use Payoneer's dashboard to send test webhooks:
1. Go to **API Access** → **Webhooks**
2. Click **"Send Test Event"**
3. Select event type and send
4. Check your application logs

---

## 🐛 Troubleshooting

### Common Issues

#### 1. **Configuration Error: Credentials Not Found**

**Problem**: "Payoneer credentials are not configured"

**Solution**:
```bash
# Check .env.local exists and has correct values
cat .env.local

# Restart server after updating
npm run dev
```

#### 2. **Redirect URL Mismatch**

**Problem**: User redirected to wrong URL after payment

**Solution**:
- Verify `NEXT_PUBLIC_APP_URL` in `.env.local`
- Ensure it matches your actual domain
- For local dev: `http://localhost:3001`
- For production: `https://your-domain.com`

#### 3. **Webhook Not Receiving Events**

**Problem**: Database not updating after payment

**Solution**:
1. Verify webhook URL is correct in Payoneer dashboard
2. Check webhook URL uses HTTPS (production)
3. Test webhook using ngrok (development)
4. Check server logs for webhook requests
5. Verify webhook secret matches

#### 4. **Payment Session Creation Fails**

**Problem**: Error when clicking payment button

**Solution**:
```typescript
// Check API response in browser console
// Common errors:
// - Invalid API key
// - Incorrect program ID
// - Amount format issue (must be string with 2 decimals)
// - Missing customer email
```

#### 5. **Database Not Updating**

**Problem**: Payment completes but database status doesn't change

**Solution**:
```bash
# Check Prisma schema is up to date
npx prisma db push

# Regenerate Prisma client
npx prisma generate

# Verify database connection
npx prisma studio
```

### Debug Mode

Enable verbose logging:

```typescript
// In /src/lib/payoneer.ts
console.log('Payoneer API Request:', {
  url: `${baseURL}/v1/checkout/sessions`,
  body: JSON.stringify(requestBody, null, 2)
})
```

### Support Resources

- **Payoneer Support**: https://support.payoneer.com/
- **Developer Documentation**: https://developers.payoneer.com/
- **API Reference**: https://api-docs.payoneer.com/
- **Status Page**: https://status.payoneer.com/

---

## 📊 Payment Flow Diagram

```
┌─────────────┐
│   User      │
│  Step 3     │
└──────┬──────┘
       │
       │ 1. Click "Proceed to Payment"
       ↓
┌─────────────────────┐
│ PayoneerButton.tsx  │
│ (Client Component)  │
└──────┬──────────────┘
       │
       │ 2. Create checkout session
       ↓
┌────────────────────────────┐
│ /api/payoneer/create-session│
│ (Server API Route)          │
└──────┬─────────────────────┘
       │
       │ 3. Call Payoneer API
       ↓
┌─────────────────┐
│ Payoneer API    │
│ Creates Session │
└──────┬──────────┘
       │
       │ 4. Return checkout URL
       ↓
┌────────────────────┐
│ Redirect to        │
│ Payoneer Checkout  │
│ (External Page)    │
└──────┬─────────────┘
       │
       │ 5. User completes payment
       ↓
┌──────────────────┐
│ Payoneer sends   │
│ webhook to:      │
│ /api/payoneer/   │
│ webhook          │
└──────┬───────────┘
       │
       │ 6. Update database
       ↓
┌──────────────────┐
│ User redirected  │
│ to success page  │
└──────┬───────────┘
       │
       │ 7. Verify payment
       ↓
┌───────────────────────┐
│ /api/payoneer/        │
│ verify-payment        │
│ (Double-check status) │
└───────────────────────┘
```

---

## 🎓 Best Practices

### Security

1. **Never commit** `.env.local` to version control
2. **Use environment variables** for all credentials
3. **Verify webhook signatures** on every webhook request
4. **Use HTTPS** in production (required)
5. **Sanitize user inputs** before processing

### Error Handling

1. **Graceful degradation**: Show helpful error messages
2. **Retry logic**: Handle temporary API failures
3. **Logging**: Track all payment attempts
4. **Alerting**: Monitor failed payments

### User Experience

1. **Loading states**: Show spinners during API calls
2. **Clear instructions**: Guide users through payment flow
3. **Error recovery**: Allow users to retry failed payments
4. **Confirmation**: Send email receipts after successful payment

### Performance

1. **Async processing**: Use webhooks for database updates
2. **Caching**: Cache API responses where appropriate
3. **Timeouts**: Set reasonable API timeout limits
4. **Rate limiting**: Implement rate limiting on webhook endpoint

---

## ✅ Integration Checklist

Before going live, verify:

- [ ] Payoneer account verified and approved
- [ ] Production API credentials obtained
- [ ] Environment variables configured correctly
- [ ] Webhook URL configured in Payoneer dashboard
- [ ] SSL certificate installed (HTTPS)
- [ ] Test payments completed successfully
- [ ] Webhook signature verification working
- [ ] Database updates occurring correctly
- [ ] Email notifications sending (if implemented)
- [ ] Error handling and logging in place
- [ ] Security best practices followed
- [ ] Backup and monitoring configured
- [ ] Terms of service and privacy policy updated
- [ ] PCI compliance reviewed

---

## 📞 Need Help?

### Payoneer Support
- Website: https://support.payoneer.com/
- Email: developers@payoneer.com
- Phone: Available in dashboard under "Contact Us"

### Application Support
- Check GitHub issues
- Review error logs in browser console
- Test with Prisma Studio: `npx prisma studio`
- Use debug mode for detailed logging

---

## 📝 Additional Notes

### Fees

Payoneer charges transaction fees based on your agreement:
- Typical: 2.9% + $0.30 per transaction
- Volume discounts available
- International fees may apply
- Check your Payoneer contract for exact rates

### Refunds

To issue a refund:
```typescript
const payoneer = PayoneerPaymentGateway.getInstance()
await payoneer.refundPayment(transactionId, amount)
```

### Multi-Currency

Payoneer supports multiple currencies. Update the amount and currency in the session creation:
```typescript
amount: { value: '99.99', currency: 'EUR' }
```

---

**Last Updated**: October 2025
**Version**: 1.0.0
**Integration Status**: ✅ Complete
