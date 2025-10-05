// "use client"

// import { useState, useEffect } from "react"
// import { useRouter } from "next/navigation"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { ArrowRight, ArrowLeft, User, Building, Shield, CheckCircle, AlertCircle, Mail, Phone, MapPin, Users, FileText } from "lucide-react"

// export default function Step2Page() {
//   const router = useRouter()
//   const [formData, setFormData] = useState({
//     applicantType: "individual",
//     // Individual fields
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     address: "",
//     city: "",
//     state: "",
//     zipCode: "",
//     country: "United States",
//     // Organization fields
//     organizationName: "",
//     organizationType: "",
//     contactPerson: "",
//     organizationEmail: "",
//     organizationPhone: "",
//     organizationAddress: "",
//     organizationCity: "",
//     organizationState: "",
//     organizationZipCode: "",
//     organizationCountry: "United States",
//     // Additional fields
//     attorneyDesignation: "no",
//     attorneyName: "",
//     attorneyEmail: "",
//     attorneyPhone: "",
//     correspondencePreference: "email",
//     signatureMethod: "electronic",
//     domiciledInUS: true,
//     citizenshipCountry: "United States",
//     businessFormation: "",
//     businessFormationState: "",
//     taxId: "",
//     emergencyContact: "",
//     emergencyPhone: ""
//   })

//   useEffect(() => {
//     // Load step 1 data if available
//     const step1Data = localStorage.getItem('trademarkStep1')
//     if (!step1Data) {
//       router.push('/register/step-1')
//     }
//   }, [router])

//   const handleInputChange = (field: string, value: string) => {
//     setFormData(prev => ({ ...prev, [field]: value }))
//   }

//   const handleNext = () => {
//     // Save to localStorage for now (will be database later)
//     localStorage.setItem('trademarkStep2', JSON.stringify(formData))
//     router.push('/register/step-3')
//   }

//   const isFormValid = () => {
//     if (formData.applicantType === "individual") {
//       return formData.firstName && formData.lastName && formData.email && 
//              formData.phone && formData.address && formData.city && 
//              formData.state && formData.zipCode
//     } else {
//       return formData.organizationName && formData.contactPerson && 
//              formData.organizationEmail && formData.organizationPhone && 
//              formData.organizationAddress && formData.organizationCity && 
//              formData.organizationState && formData.organizationZipCode
//     }
//   }

//   const usStates = [
//     "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
//     "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
//     "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
//     "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
//     "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
//     "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
//     "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 relative overflow-hidden">
//       {/* Floating Elements */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full animate-pulse"></div>
//         <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-200 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
//         <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Progress Header */}
//         <div className="mb-8">
//           <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
//             <div className="flex items-center text-sm text-gray-600 mb-4">
//               <Shield className="w-4 h-4 mr-2 text-green-500" />
//               <span className="font-semibold">Step 2 of 3</span>
//               <span className="mx-2">•</span>
//               <span>Personal & Contact Details</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-3">
//               <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500" style={{ width: '66.66%' }}></div>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Form */}
//           <div className="lg:col-span-3">
//             <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
//               <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
//                 <CardTitle className="text-2xl flex items-center">
//                   <User className="w-6 h-6 mr-3" />
//                   Applicant Information
//                 </CardTitle>
//                 <CardDescription className="text-green-100">
//                   Provide your contact details and preferences for the trademark application
//                 </CardDescription>
//               </CardHeader>
//               <CardContent className="space-y-8 p-8">
//                 {/* Applicant Type */}
//                 <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
//                   <Label className="text-lg font-semibold text-gray-800">Who is applying for this trademark? *</Label>
//                   <RadioGroup 
//                     value={formData.applicantType}
//                     onValueChange={(value: string) => handleInputChange('applicantType', value)}
//                     className="mt-4"
//                   >
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div className="flex items-center space-x-3 p-6 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all duration-300 hover:shadow-md">
//                         <RadioGroupItem value="individual" id="individual" />
//                         <Label htmlFor="individual" className="flex items-center cursor-pointer flex-1">
//                           <User className="w-5 h-5 mr-3 text-blue-600" />
//                           <div>
//                             <div className="font-medium text-gray-800">Individual Person</div>
//                             <div className="text-sm text-gray-600">Filing as an individual</div>
//                           </div>
//                         </Label>
//                       </div>
//                       <div className="flex items-center space-x-3 p-6 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all duration-300 hover:shadow-md">
//                         <RadioGroupItem value="organization" id="organization" />
//                         <Label htmlFor="organization" className="flex items-center cursor-pointer flex-1">
//                           <Building className="w-5 h-5 mr-3 text-blue-600" />
//                           <div>
//                             <div className="font-medium text-gray-800">Business/Organization</div>
//                             <div className="text-sm text-gray-600">Filing as a business entity</div>
//                           </div>
//                         </Label>
//                       </div>
//                     </div>
//                   </RadioGroup>
//                 </div>

//                 {/* Individual Form */}
//                 {formData.applicantType === "individual" && (
//                   <div className="space-y-6">
//                     <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
//                       <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
//                         <User className="w-5 h-5 mr-2 text-green-600" />
//                         Personal Information
//                       </h3>
                      
//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                         <div>
//                           <Label htmlFor="firstName" className="font-semibold text-gray-700">First Name *</Label>
//                           <Input
//                             id="firstName"
//                             placeholder="Enter your first name"
//                             value={formData.firstName}
//                             onChange={(e) => handleInputChange('firstName', e.target.value)}
//                             className="mt-2 border-green-200 focus:border-green-500"
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="lastName" className="font-semibold text-gray-700">Last Name *</Label>
//                           <Input
//                             id="lastName"
//                             placeholder="Enter your last name"
//                             value={formData.lastName}
//                             onChange={(e) => handleInputChange('lastName', e.target.value)}
//                             className="mt-2 border-green-200 focus:border-green-500"
//                           />
//                         </div>
//                       </div>

//                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                         <div>
//                           <Label htmlFor="email" className="font-semibold text-gray-700 flex items-center">
//                             <Mail className="w-4 h-4 mr-1 text-green-600" />
//                             Email Address *
//                           </Label>
//                           <Input
//                             id="email"
//                             type="email"
//                             placeholder="your@email.com"
//                             value={formData.email}
//                             onChange={(e) => handleInputChange('email', e.target.value)}
//                             className="mt-2 border-green-200 focus:border-green-500"
//                           />
//                         </div>
//                         <div>
//                           <Label htmlFor="phone" className="font-semibold text-gray-700 flex items-center">
//                             <Phone className="w-4 h-4 mr-1 text-green-600" />
//                             Phone Number *
//                           </Label>
//                           <Input
//                             id="phone"
//                             type="tel"
//                             placeholder="(555) 123-4567"
//                             value={formData.phone}
//                             onChange={(e) => handleInputChange('phone', e.target.value)}
//                             className="mt-2 border-green-200 focus:border-green-500"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     {/* Address Information */}
//                     <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
//                       <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
//                         <MapPin className="w-5 h-5 mr-2 text-purple-600" />
//                         Address Information
//                       </h3>

//                       <div className="space-y-4">
//                         <div>
//                           <Label htmlFor="address" className="font-semibold text-gray-700">Street Address *</Label>
//                           <Input
//                             id="address"
//                             placeholder="123 Main Street"
//                             value={formData.address}
//                             onChange={(e) => handleInputChange('address', e.target.value)}
//                             className="mt-2 border-purple-200 focus:border-purple-500"
//                           />
//                         </div>

//                         <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                           <div>
//                             <Label htmlFor="city" className="font-semibold text-gray-700">City *</Label>
//                             <Input
//                               id="city"
//                               placeholder="City"
//                               value={formData.city}
//                               onChange={(e) => handleInputChange('city', e.target.value)}
//                               className="mt-2 border-purple-200 focus:border-purple-500"
//                             />
//                           </div>
//                           <div>
//                             <Label htmlFor="state" className="font-semibold text-gray-700">State *</Label>
//                             <select
//                               id="state"
//                               value={formData.state}
//                               onChange={(e) => handleInputChange('state', e.target.value)}
//                               className="mt-2 block w-full border-2 border-purple-200 rounded-lg px-3 py-2 bg-white focus:border-purple-500 focus:ring-0"
//                             >
//                               <option value="">Select State</option>
//                               {usStates.map(state => (
//                                 <option key={state} value={state}>{state}</option>
//                               ))}
//                             </select>
//                           </div>
//                           <div>
//                             <Label htmlFor="zipCode" className="font-semibold text-gray-700">ZIP Code *</Label>
//                             <Input
//                               id="zipCode"
//                               placeholder="12345"
//                               value={formData.zipCode}
//                               onChange={(e) => handleInputChange('zipCode', e.target.value)}
//                               className="mt-2 border-purple-200 focus:border-purple-500"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="firstName">First Name *</Label>
//                         <Input
//                           id="firstName"
//                           placeholder="Enter your first name"
//                           value={formData.firstName}
//                           onChange={(e) => handleInputChange('firstName', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="lastName">Last Name *</Label>
//                         <Input
//                           id="lastName"
//                           placeholder="Enter your last name"
//                           value={formData.lastName}
//                           onChange={(e) => handleInputChange('lastName', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="email">Email Address *</Label>
//                         <Input
//                           id="email"
//                           type="email"
//                           placeholder="your@email.com"
//                           value={formData.email}
//                           onChange={(e) => handleInputChange('email', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="phone">Phone Number *</Label>
//                         <Input
//                           id="phone"
//                           type="tel"
//                           placeholder="(555) 123-4567"
//                           value={formData.phone}
//                           onChange={(e) => handleInputChange('phone', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="address">Street Address *</Label>
//                       <Input
//                         id="address"
//                         placeholder="123 Main Street"
//                         value={formData.address}
//                         onChange={(e) => handleInputChange('address', e.target.value)}
//                         className="mt-1"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <Label htmlFor="city">City *</Label>
//                         <Input
//                           id="city"
//                           placeholder="City"
//                           value={formData.city}
//                           onChange={(e) => handleInputChange('city', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="state">State *</Label>
//                         <select
//                           id="state"
//                           className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
//                           value={formData.state}
//                           onChange={(e) => handleInputChange('state', e.target.value)}
//                         >
//                           <option value="">Select State</option>
//                           {usStates.map((state) => (
//                             <option key={state} value={state}>{state}</option>
//                           ))}
//                         </select>
//                       </div>
//                       <div>
//                         <Label htmlFor="zipCode">ZIP Code *</Label>
//                         <Input
//                           id="zipCode"
//                           placeholder="12345"
//                           value={formData.zipCode}
//                           onChange={(e) => handleInputChange('zipCode', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Organization Form */}
//                 {formData.applicantType === "organization" && (
//                   <div className="space-y-4">
//                     <h3 className="text-lg font-semibold">Organization Information</h3>
                    
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="organizationName">Organization Name *</Label>
//                         <Input
//                           id="organizationName"
//                           placeholder="Company or Organization Name"
//                           value={formData.organizationName}
//                           onChange={(e) => handleInputChange('organizationName', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="organizationType">Organization Type *</Label>
//                         <select
//                           id="organizationType"
//                           className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
//                           value={formData.organizationType}
//                           onChange={(e) => handleInputChange('organizationType', e.target.value)}
//                         >
//                           <option value="">Select Type</option>
//                           <option value="corporation">Corporation</option>
//                           <option value="llc">LLC</option>
//                           <option value="partnership">Partnership</option>
//                           <option value="sole-proprietorship">Sole Proprietorship</option>
//                           <option value="non-profit">Non-Profit</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="contactPerson">Contact Person *</Label>
//                       <Input
//                         id="contactPerson"
//                         placeholder="Primary contact name"
//                         value={formData.contactPerson}
//                         onChange={(e) => handleInputChange('contactPerson', e.target.value)}
//                         className="mt-1"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                       <div>
//                         <Label htmlFor="organizationEmail">Email Address *</Label>
//                         <Input
//                           id="organizationEmail"
//                           type="email"
//                           placeholder="contact@company.com"
//                           value={formData.organizationEmail}
//                           onChange={(e) => handleInputChange('organizationEmail', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="organizationPhone">Phone Number *</Label>
//                         <Input
//                           id="organizationPhone"
//                           type="tel"
//                           placeholder="(555) 123-4567"
//                           value={formData.organizationPhone}
//                           onChange={(e) => handleInputChange('organizationPhone', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <Label htmlFor="organizationAddress">Business Address *</Label>
//                       <Input
//                         id="organizationAddress"
//                         placeholder="123 Business Street"
//                         value={formData.organizationAddress}
//                         onChange={(e) => handleInputChange('organizationAddress', e.target.value)}
//                         className="mt-1"
//                       />
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                       <div>
//                         <Label htmlFor="organizationCity">City *</Label>
//                         <Input
//                           id="organizationCity"
//                           placeholder="City"
//                           value={formData.organizationCity}
//                           onChange={(e) => handleInputChange('organizationCity', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                       <div>
//                         <Label htmlFor="organizationState">State *</Label>
//                         <select
//                           id="organizationState"
//                           className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
//                           value={formData.organizationState}
//                           onChange={(e) => handleInputChange('organizationState', e.target.value)}
//                         >
//                           <option value="">Select State</option>
//                           {usStates.map((state) => (
//                             <option key={state} value={state}>{state}</option>
//                           ))}
//                         </select>
//                       </div>
//                       <div>
//                         <Label htmlFor="organizationZipCode">ZIP Code *</Label>
//                         <Input
//                           id="organizationZipCode"
//                           placeholder="12345"
//                           value={formData.organizationZipCode}
//                           onChange={(e) => handleInputChange('organizationZipCode', e.target.value)}
//                           className="mt-1"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Important Notes</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <ul className="space-y-3 text-sm">
//                   <li className="flex items-start">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                     <span>Use your legal name as it appears on official documents</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                     <span>Provide accurate contact information for USPTO correspondence</span>
//                   </li>
//                   <li className="flex items-start">
//                     <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
//                     <span>For organizations, use the registered business address</span>
//                   </li>
//                 </ul>
//               </CardContent>
//             </Card>

//             <Card>
//               <CardHeader>
//                 <CardTitle className="text-lg">Privacy & Security</CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <p className="text-sm text-gray-600 mb-4">
//                   Your information is encrypted and secure. We only use it for your trademark application.
//                 </p>
//                 <div className="flex items-center text-sm text-green-600">
//                   <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
//                   SSL Encrypted
//                 </div>
//               </CardContent>
//             </Card>
//           </div>
//         </div>

//         {/* Navigation */}
//         <div className="flex justify-between mt-8">
//           <Button 
//             variant="outline"
//             onClick={() => router.push('/register/step-1')}
//           >
//             <ArrowLeft className="mr-2 w-4 h-4" />
//             Back to Trademark Info
//           </Button>
//           <Button 
//             onClick={handleNext}
//             disabled={!isFormValid()}
//           >
//             Continue to Payment
//             <ArrowRight className="ml-2 w-4 h-4" />
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }
"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ArrowLeft, User, Building, Shield, CheckCircle, AlertCircle, Mail, Phone, MapPin, Users, FileText } from "lucide-react"

export default function Step2Page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    applicantType: "individual",
    // Individual fields
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
    // Organization fields
    organizationName: "",
    organizationType: "",
    contactPerson: "",
    organizationEmail: "",
    organizationPhone: "",
    organizationAddress: "",
    organizationCity: "",
    organizationState: "",
    organizationZipCode: "",
    organizationCountry: "United States",
    // Additional fields
    attorneyDesignation: "no",
    attorneyName: "",
    attorneyEmail: "",
    attorneyPhone: "",
    correspondencePreference: "email",
    signatureMethod: "electronic",
    domiciledInUS: true,
    citizenshipCountry: "United States",
    businessFormation: "",
    businessFormationState: "",
    taxId: "",
    emergencyContact: "",
    emergencyPhone: ""
  })

  useEffect(() => {
    // Load step 1 data if available
    const step1Data = localStorage.getItem('trademarkStep1')
    if (!step1Data) {
      router.push('/register/step-1')
    }
  }, [router])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    // Save to localStorage for now (will be database later)
    localStorage.setItem('trademarkStep2', JSON.stringify(formData))
    router.push('/register/step-3')
  }

  const isFormValid = () => {
    if (formData.applicantType === "individual") {
      return formData.firstName && formData.lastName && formData.email && 
             formData.phone && formData.address && formData.city && 
             formData.state && formData.zipCode
    } else {
      return formData.organizationName && formData.contactPerson && 
             formData.organizationEmail && formData.organizationPhone && 
             formData.organizationAddress && formData.organizationCity && 
             formData.organizationState && formData.organizationZipCode
    }
  }

  const usStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware",
    "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky",
    "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi",
    "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico",
    "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania",
    "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont",
    "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50 py-8 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-green-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-blue-200 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-indigo-300 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Shield className="w-4 h-4 mr-2 text-green-500" />
              <span className="font-semibold">Step 2 of 3</span>
              <span className="mx-2">•</span>
              <span>Personal & Contact Details</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-3 rounded-full transition-all duration-500" style={{ width: '66.66%' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <User className="w-6 h-6 mr-3" />
                  Applicant Information
                </CardTitle>
                <CardDescription className="text-green-100">
                  Provide your contact details and preferences for the trademark application
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                {/* Applicant Type */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <Label className="text-lg font-semibold text-gray-800">Who is applying for this trademark? *</Label>
                  <RadioGroup 
                    value={formData.applicantType}
                    onValueChange={(value: string) => handleInputChange('applicantType', value)}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-6 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all duration-300 hover:shadow-md">
                        <RadioGroupItem value="individual" id="individual" />
                        <Label htmlFor="individual" className="flex items-center cursor-pointer flex-1">
                          <User className="w-5 h-5 mr-3 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-800">Individual Person</div>
                            <div className="text-sm text-gray-600">Filing as an individual</div>
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-6 border-2 border-blue-200 rounded-xl hover:border-blue-400 transition-all duration-300 hover:shadow-md">
                        <RadioGroupItem value="organization" id="organization" />
                        <Label htmlFor="organization" className="flex items-center cursor-pointer flex-1">
                          <Building className="w-5 h-5 mr-3 text-blue-600" />
                          <div>
                            <div className="font-medium text-gray-800">Business/Organization</div>
                            <div className="text-sm text-gray-600">Filing as a business entity</div>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Individual Form */}
                {formData.applicantType === "individual" && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <User className="w-5 h-5 mr-2 text-green-600" />
                        Personal Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="firstName" className="font-semibold text-gray-700">First Name *</Label>
                          <Input
                            id="firstName"
                            placeholder="Enter your first name"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            className="mt-2 border-green-200 focus:border-green-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName" className="font-semibold text-gray-700">Last Name *</Label>
                          <Input
                            id="lastName"
                            placeholder="Enter your last name"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            className="mt-2 border-green-200 focus:border-green-500"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <Label htmlFor="email" className="font-semibold text-gray-700 flex items-center">
                            <Mail className="w-4 h-4 mr-1 text-green-600" />
                            Email Address *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="mt-2 border-green-200 focus:border-green-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="font-semibold text-gray-700 flex items-center">
                            <Phone className="w-4 h-4 mr-1 text-green-600" />
                            Phone Number *
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={(e) => handleInputChange('phone', e.target.value)}
                            className="mt-2 border-green-200 focus:border-green-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Address Information */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                        Address Information
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="address" className="font-semibold text-gray-700">Street Address *</Label>
                          <Input
                            id="address"
                            placeholder="123 Main Street"
                            value={formData.address}
                            onChange={(e) => handleInputChange('address', e.target.value)}
                            className="mt-2 border-purple-200 focus:border-purple-500"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="city" className="font-semibold text-gray-700">City *</Label>
                            <Input
                              id="city"
                              placeholder="City"
                              value={formData.city}
                              onChange={(e) => handleInputChange('city', e.target.value)}
                              className="mt-2 border-purple-200 focus:border-purple-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="state" className="font-semibold text-gray-700">State *</Label>
                            <select
                              id="state"
                              value={formData.state}
                              onChange={(e) => handleInputChange('state', e.target.value)}
                              className="mt-2 block w-full border-2 border-purple-200 rounded-lg px-3 py-2 bg-white focus:border-purple-500 focus:ring-0"
                            >
                              <option value="">Select State</option>
                              {usStates.map(state => (
                                <option key={state} value={state}>{state}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="zipCode" className="font-semibold text-gray-700">ZIP Code *</Label>
                            <Input
                              id="zipCode"
                              placeholder="12345"
                              value={formData.zipCode}
                              onChange={(e) => handleInputChange('zipCode', e.target.value)}
                              className="mt-2 border-purple-200 focus:border-purple-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Citizenship & Domicile */}
                    <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-6">Citizenship & Domicile</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="citizenshipCountry" className="font-semibold text-gray-700">Citizenship Country *</Label>
                          <select
                            id="citizenshipCountry"
                            value={formData.citizenshipCountry}
                            onChange={(e) => handleInputChange('citizenshipCountry', e.target.value)}
                            className="mt-2 block w-full border-2 border-orange-200 rounded-lg px-3 py-2 bg-white focus:border-orange-500 focus:ring-0"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>

                        <div className="flex items-center space-x-3">
                          <input
                            type="checkbox"
                            id="domiciledInUS"
                            checked={formData.domiciledInUS}
                            onChange={(e) => setFormData(prev => ({ ...prev, domiciledInUS: e.target.checked }))}
                            className="w-4 h-4 text-orange-600 rounded"
                          />
                          <Label htmlFor="domiciledInUS" className="font-semibold text-gray-700">
                            I am domiciled in the United States
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Organization Form */}
                {formData.applicantType === "organization" && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <Building className="w-5 h-5 mr-2 text-blue-600" />
                        Organization Information
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="organizationName" className="font-semibold text-gray-700">Organization Name *</Label>
                          <Input
                            id="organizationName"
                            placeholder="Company or Organization Name"
                            value={formData.organizationName}
                            onChange={(e) => handleInputChange('organizationName', e.target.value)}
                            className="mt-2 border-blue-200 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="organizationType" className="font-semibold text-gray-700">Organization Type *</Label>
                          <select
                            id="organizationType"
                            value={formData.organizationType}
                            onChange={(e) => handleInputChange('organizationType', e.target.value)}
                            className="mt-2 block w-full border-2 border-blue-200 rounded-lg px-3 py-2 bg-white focus:border-blue-500 focus:ring-0"
                          >
                            <option value="">Select Type</option>
                            <option value="corporation">Corporation</option>
                            <option value="llc">LLC</option>
                            <option value="partnership">Partnership</option>
                            <option value="nonprofit">Non-Profit</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="mt-6">
                        <Label htmlFor="contactPerson" className="font-semibold text-gray-700">Primary Contact Person *</Label>
                        <Input
                          id="contactPerson"
                          placeholder="Primary contact name"
                          value={formData.contactPerson}
                          onChange={(e) => handleInputChange('contactPerson', e.target.value)}
                          className="mt-2 border-blue-200 focus:border-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div>
                          <Label htmlFor="organizationEmail" className="font-semibold text-gray-700 flex items-center">
                            <Mail className="w-4 h-4 mr-1 text-blue-600" />
                            Email Address *
                          </Label>
                          <Input
                            id="organizationEmail"
                            type="email"
                            placeholder="contact@company.com"
                            value={formData.organizationEmail}
                            onChange={(e) => handleInputChange('organizationEmail', e.target.value)}
                            className="mt-2 border-blue-200 focus:border-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="organizationPhone" className="font-semibold text-gray-700 flex items-center">
                            <Phone className="w-4 h-4 mr-1 text-blue-600" />
                            Phone Number *
                          </Label>
                          <Input
                            id="organizationPhone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.organizationPhone}
                            onChange={(e) => handleInputChange('organizationPhone', e.target.value)}
                            className="mt-2 border-blue-200 focus:border-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Organization Address */}
                    <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <MapPin className="w-5 h-5 mr-2 text-purple-600" />
                        Business Address
                      </h3>

                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="organizationAddress" className="font-semibold text-gray-700">Business Address *</Label>
                          <Input
                            id="organizationAddress"
                            placeholder="123 Business Street"
                            value={formData.organizationAddress}
                            onChange={(e) => handleInputChange('organizationAddress', e.target.value)}
                            className="mt-2 border-purple-200 focus:border-purple-500"
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <Label htmlFor="organizationCity" className="font-semibold text-gray-700">City *</Label>
                            <Input
                              id="organizationCity"
                              placeholder="City"
                              value={formData.organizationCity}
                              onChange={(e) => handleInputChange('organizationCity', e.target.value)}
                              className="mt-2 border-purple-200 focus:border-purple-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="organizationState" className="font-semibold text-gray-700">State *</Label>
                            <select
                              id="organizationState"
                              value={formData.organizationState}
                              onChange={(e) => handleInputChange('organizationState', e.target.value)}
                              className="mt-2 block w-full border-2 border-purple-200 rounded-lg px-3 py-2 bg-white focus:border-purple-500 focus:ring-0"
                            >
                              <option value="">Select State</option>
                              {usStates.map(state => (
                                <option key={state} value={state}>{state}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <Label htmlFor="organizationZipCode" className="font-semibold text-gray-700">ZIP Code *</Label>
                            <Input
                              id="organizationZipCode"
                              placeholder="12345"
                              value={formData.organizationZipCode}
                              onChange={(e) => handleInputChange('organizationZipCode', e.target.value)}
                              className="mt-2 border-purple-200 focus:border-purple-500"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Business Formation Details */}
                    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                      <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                        <FileText className="w-5 h-5 mr-2 text-teal-600" />
                        Business Formation Details
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <Label htmlFor="businessFormationState" className="font-semibold text-gray-700">State of Formation</Label>
                          <select
                            id="businessFormationState"
                            value={formData.businessFormationState}
                            onChange={(e) => handleInputChange('businessFormationState', e.target.value)}
                            className="mt-2 block w-full border-2 border-teal-200 rounded-lg px-3 py-2 bg-white focus:border-teal-500 focus:ring-0"
                          >
                            <option value="">Select State</option>
                            {usStates.map(state => (
                              <option key={state} value={state}>{state}</option>
                            ))}
                          </select>
                        </div>
                        <div>
                          <Label htmlFor="taxId" className="font-semibold text-gray-700">Tax ID / EIN (Optional)</Label>
                          <Input
                            id="taxId"
                            placeholder="XX-XXXXXXX"
                            value={formData.taxId}
                            onChange={(e) => handleInputChange('taxId', e.target.value)}
                            className="mt-2 border-teal-200 focus:border-teal-500"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Attorney Designation */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-indigo-600" />
                    Attorney Designation (Optional)
                  </h3>

                  <RadioGroup 
                    value={formData.attorneyDesignation}
                    onValueChange={(value) => handleInputChange('attorneyDesignation', value)}
                    className="mb-6"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center space-x-3 p-4 border-2 border-indigo-200 rounded-xl hover:border-indigo-400 transition-colors">
                        <RadioGroupItem value="no" id="no-attorney" />
                        <Label htmlFor="no-attorney" className="cursor-pointer">
                          <div className="font-medium">No Attorney</div>
                          <div className="text-sm text-gray-600">Handle correspondence directly</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-indigo-200 rounded-xl hover:border-indigo-400 transition-colors">
                        <RadioGroupItem value="yes" id="yes-attorney" />
                        <Label htmlFor="yes-attorney" className="cursor-pointer">
                          <div className="font-medium">Designate Attorney</div>
                          <div className="text-sm text-gray-600">Attorney will handle USPTO correspondence</div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {formData.attorneyDesignation === "yes" && (
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="attorneyName" className="font-semibold text-gray-700">Attorney Name *</Label>
                        <Input
                          id="attorneyName"
                          placeholder="Attorney full name"
                          value={formData.attorneyName}
                          onChange={(e) => handleInputChange('attorneyName', e.target.value)}
                          className="mt-2 border-indigo-200 focus:border-indigo-500"
                        />
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="attorneyEmail" className="font-semibold text-gray-700">Attorney Email *</Label>
                          <Input
                            id="attorneyEmail"
                            type="email"
                            placeholder="attorney@lawfirm.com"
                            value={formData.attorneyEmail}
                            onChange={(e) => handleInputChange('attorneyEmail', e.target.value)}
                            className="mt-2 border-indigo-200 focus:border-indigo-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="attorneyPhone" className="font-semibold text-gray-700">Attorney Phone *</Label>
                          <Input
                            id="attorneyPhone"
                            type="tel"
                            placeholder="(555) 123-4567"
                            value={formData.attorneyPhone}
                            onChange={(e) => handleInputChange('attorneyPhone', e.target.value)}
                            className="mt-2 border-indigo-200 focus:border-indigo-500"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Correspondence Preferences */}
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Correspondence Preferences</h3>

                  <div className="space-y-4">
                    <div>
                      <Label className="font-semibold text-gray-700">Preferred Correspondence Method *</Label>
                      <RadioGroup 
                        value={formData.correspondencePreference}
                        onValueChange={(value) => handleInputChange('correspondencePreference', value)}
                        className="mt-3"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3 p-4 border-2 border-yellow-200 rounded-xl hover:border-yellow-400 transition-colors">
                            <RadioGroupItem value="email" id="email-pref" />
                            <Label htmlFor="email-pref" className="cursor-pointer flex items-center">
                              <Mail className="w-4 h-4 mr-2 text-yellow-600" />
                              Email (Recommended)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-4 border-2 border-yellow-200 rounded-xl hover:border-yellow-400 transition-colors">
                            <RadioGroupItem value="mail" id="mail-pref" />
                            <Label htmlFor="mail-pref" className="cursor-pointer flex items-center">
                              <MapPin className="w-4 h-4 mr-2 text-yellow-600" />
                              US Mail
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>

                    <div>
                      <Label className="font-semibold text-gray-700">Signature Method *</Label>
                      <RadioGroup 
                        value={formData.signatureMethod}
                        onValueChange={(value) => handleInputChange('signatureMethod', value)}
                        className="mt-3"
                      >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="flex items-center space-x-3 p-4 border-2 border-yellow-200 rounded-xl hover:border-yellow-400 transition-colors">
                            <RadioGroupItem value="electronic" id="electronic-sig" />
                            <Label htmlFor="electronic-sig" className="cursor-pointer">
                              <div className="font-medium">Electronic Signature</div>
                              <div className="text-sm text-gray-600">Faster and more secure</div>
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-4 border-2 border-yellow-200 rounded-xl hover:border-yellow-400 transition-colors">
                            <RadioGroupItem value="handwritten" id="handwritten-sig" />
                            <Label htmlFor="handwritten-sig" className="cursor-pointer">
                              <div className="font-medium">Handwritten Signature</div>
                              <div className="text-sm text-gray-600">Traditional paper signature</div>
                            </Label>
                          </div>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Important Notes */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Important Notes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Use your legal name as it appears on official documents</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Provide accurate contact information for USPTO correspondence</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>For organizations, use the registered business address</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-emerald-700 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Attorney designation is optional but recommended for complex cases</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Privacy & Security */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Privacy & Security
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 mb-4">
                  Your information is encrypted and secure. We only use it for your trademark application.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    SSL Encrypted
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    GDPR Compliant
                  </div>
                  <div className="flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Data Protected
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Correspondence Info */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader className="bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Correspondence Info
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 mb-3">
                  The USPTO will send all official correspondence to the address provided.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Email:</span>
                    <span className="font-medium">Faster delivery</span>
                  </div>
                  <div className="flex justify-between">
                    <span>US Mail:</span>
                    <span className="font-medium">5-7 business days</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Email correspondence is recommended for faster processing.
                </p>
              </CardContent>
            </Card>

            {/* Need Help */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-t-lg">
                <CardTitle className="text-lg">Need Expert Help?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 mb-4">
                  Our experts can help you complete your application and answer any questions.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-purple-200 text-purple-700 hover:bg-purple-100"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Get Expert Help
                </Button>
                <p className="text-xs text-gray-600 mt-3 text-center">
                  Free consultation • Available 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Navigation */}
        <div className="mt-12">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Button 
                variant="outline"
                onClick={() => router.push('/register/step-1')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Trademark Info
              </Button>
              
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  {isFormValid() ? (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Ready to continue
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1 text-amber-500" />
                      Complete required fields
                    </span>
                  )}
                </div>
                
                <Button 
                  onClick={handleNext}
                  disabled={!isFormValid()}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue to Payment
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}