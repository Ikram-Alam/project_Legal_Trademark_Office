"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { ArrowRight, ArrowLeft, Upload, X, Search, AlertCircle, CheckCircle, Shield, Globe, Users } from "lucide-react"
import Image from "next/image"

export default function Step1Page() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    trademarkName: "",
    slogan: "",
    description: "",
    trademarkType: "word",
    categories: [],
    logoFile: null as File | null,
    internationalClass: "",
    searchPerformed: false,
    conflictsFound: false,
    useInCommerce: "intent",
    firstUseDate: "",
    commerceUseDate: "",
    disclaimerText: "",
    translationRequired: false,
    translationText: "",
    significanceExplanation: "",
    businessEntityType: ""
  })

  const [dragActive, setDragActive] = useState(false)
  const [searchResults, setSearchResults] = useState<{
    name: string;
    status: string;
    class: string;
    similarity: string;
  }[]>([])
  const [searchPerformed, setSearchPerformed] = useState(false)
  const [showSearchPopup, setShowSearchPopup] = useState(false)

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleFileUpload = (file: File) => {
    if (file.type.startsWith('image/')) {
      setFormData(prev => ({ ...prev, logoFile: file }))
    }
  }

  const handleTrademarkSearch = () => {
    if (!formData.trademarkName.trim()) return
    
    setSearchPerformed(true)
    // Show popup with availability message
    setShowSearchPopup(true)
    // Simulate search results (in real app, this would call USPTO API)
    const mockResults = [
      { name: "Similar Mark 1", status: "Active", class: "Class 35", similarity: "High" },
      { name: "Similar Mark 2", status: "Pending", class: "Class 42", similarity: "Medium" }
    ]
    setSearchResults(mockResults)
    setFormData(prev => ({ ...prev, searchPerformed: true, conflictsFound: mockResults.length > 0 }))
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileUpload(e.dataTransfer.files[0])
    }
  }

  const handleNext = () => {
    // Save to localStorage for now (will be database later)
    localStorage.setItem('trademarkStep1', JSON.stringify(formData))
    router.push('/register/step-2')
  }

  const categories = [
    "Advertising and business",
    "Chemical products",
    "Cosmetics and cleaning preparations",
    "Hand tools and metal goods",
    "Machinery and electrical goods",
    "Vehicles",
    "Firearms, fireworks, and jewelry",
    "Musical instruments",
    "Paper goods and printed matter",
    "Rubber and plastic goods",
    "Household and kitchen items",
    "Ropes, canvas, and textile goods",
    "Clothing",
    "Floor coverings",
    "Toys and sporting goods",
    "Food and beverages",
    "Light bulbs and fuel",
    "Building materials",
    "Medical and veterinary goods",
    "Transportation and storage",
    "Treatment of materials",
    "Education and entertainment",
    "Technology services",
    "Hotels and restaurants",
    "Legal and security services"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-8 relative overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-200 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-40 h-40 bg-indigo-200 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-200 rounded-full animate-pulse delay-300"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-white/80 to-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-lg">
            <div className="flex items-center text-sm text-gray-600 mb-4">
              <Shield className="w-4 h-4 mr-2 text-blue-500" />
              <span className="font-semibold">Step 1 of 3</span>
              <span className="mx-2">•</span>
              <span>Trademark Information & Search</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-3 rounded-full transition-all duration-500" style={{ width: '33.33%' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-3">
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Trademark Information
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Provide detailed information about the trademark you want to register
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8 p-8">
                {/* Trademark Name with Search */}
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <Label htmlFor="trademarkName" className="text-lg font-semibold text-gray-800">Trademark Name/Text *</Label>
                  <div className="mt-3 flex gap-3">
                    <Input
                      id="trademarkName"
                      placeholder="Enter your trademark name"
                      value={formData.trademarkName}
                      onChange={(e) => handleInputChange('trademarkName', e.target.value)}
                      className="flex-1 border-blue-200 focus:border-blue-500"
                    />
                    <Button 
                      onClick={handleTrademarkSearch}
                      disabled={!formData.trademarkName.trim()}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                    >
                      <Search className="w-4 h-4 mr-2" />
                      Search
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This is the exact text you want to trademark. We&apos;ll search for similar marks.
                  </p>
                  
                  {/* Search Results */}
                  {searchPerformed && (
                    <div className="mt-4 p-4 rounded-lg bg-white border border-gray-200">
                      <div className="flex items-center mb-3">
                        {formData.conflictsFound ? (
                          <AlertCircle className="w-5 h-5 text-amber-500 mr-2" />
                        ) : (
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                        )}
                        <h4 className="font-semibold">
                          {formData.conflictsFound ? "Potential Conflicts Found" : "No Direct Conflicts Found"}
                        </h4>
                      </div>
                      {searchResults.length > 0 ? (
                        <div className="space-y-2">
                          {searchResults.map((result, index) => (
                            <div key={index} className="flex justify-between items-center p-2 bg-gray-50 rounded">
                              <span className="font-medium">{result.name}</span>
                              <div className="text-sm text-gray-600">
                                {result.class} • {result.status}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-green-600 text-sm">Great! Your trademark appears to be available.</p>
                      )}
                    </div>
                  )}
                </div>

                {/* Trademark Type */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
                  <Label className="text-lg font-semibold text-gray-800">Trademark Type *</Label>
                  <RadioGroup 
                    value={formData.trademarkType}
                    onValueChange={(value) => handleInputChange('trademarkType', value)}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="flex items-center space-x-3 p-4 border-2 border-purple-200 rounded-xl hover:border-purple-400 transition-colors">
                        <RadioGroupItem value="word" id="word" />
                        <Label htmlFor="word" className="flex-1 cursor-pointer">
                          <div className="font-medium">Word Mark</div>
                          <div className="text-sm text-gray-600">Text only</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-purple-200 rounded-xl hover:border-purple-400 transition-colors">
                        <RadioGroupItem value="logo" id="logo" />
                        <Label htmlFor="logo" className="flex-1 cursor-pointer">
                          <div className="font-medium">Design Mark</div>
                          <div className="text-sm text-gray-600">Logo/Symbol only</div>
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-4 border-2 border-purple-200 rounded-xl hover:border-purple-400 transition-colors">
                        <RadioGroupItem value="combined" id="combined" />
                        <Label htmlFor="combined" className="flex-1 cursor-pointer">
                          <div className="font-medium">Combined Mark</div>
                          <div className="text-sm text-gray-600">Text + Logo</div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Logo Upload */}
                {(formData.trademarkType === 'logo' || formData.trademarkType === 'combined') && (
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                    <Label className="text-lg font-semibold text-gray-800">Upload Logo/Design *</Label>
                    <div
                      className={`mt-4 border-3 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                        dragActive ? 'border-orange-500 bg-orange-100 scale-105' : 'border-orange-300 hover:border-orange-400'
                      }`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      {formData.logoFile ? (
                        <div className="flex items-center justify-between bg-white rounded-lg p-4 shadow-md">
                          <div className="flex items-center">
                            <Image
                              src={URL.createObjectURL(formData.logoFile)}
                              alt="Logo preview"
                              width={64}
                              height={64}
                              className="w-16 h-16 object-cover rounded-lg shadow-sm"
                            />
                            <div className="ml-4 text-left">
                              <p className="font-medium text-gray-800">{formData.logoFile.name}</p>
                              <p className="text-sm text-gray-500">
                                {(formData.logoFile.size / 1024 / 1024).toFixed(2)} MB
                              </p>
                            </div>
                          </div>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => setFormData(prev => ({ ...prev, logoFile: null }))}
                            className="hover:bg-red-100 hover:text-red-600"
                          >
                            <X className="w-4 h-4" />
                          </Button>
                        </div>
                      ) : (
                        <>
                          <Upload className="mx-auto h-16 w-16 text-orange-400 mb-4" />
                          <h3 className="text-lg font-semibold text-gray-800 mb-2">Upload Your Logo</h3>
                          <p className="text-gray-600 mb-4">
                            Drag and drop your logo here, or{' '}
                            <label className="text-orange-600 cursor-pointer hover:text-orange-500 font-semibold underline">
                              browse files
                              <input
                                type="file"
                                className="hidden"
                                accept="image/*"
                                onChange={(e) => e.target.files?.[0] && handleFileUpload(e.target.files[0])}
                              />
                            </label>
                          </p>
                          <p className="text-sm text-gray-500">
                            Supported formats: PNG, JPG, GIF • Maximum size: 10MB
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                )}

                {/* Use in Commerce */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <Label className="text-lg font-semibold text-gray-800">Use in Commerce *</Label>
                  <RadioGroup 
                    value={formData.useInCommerce}
                    onValueChange={(value) => handleInputChange('useInCommerce', value)}
                    className="mt-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3 p-4 border-2 border-green-200 rounded-xl hover:border-green-400 transition-colors">
                        <RadioGroupItem value="intent" id="intent" className="mt-1" />
                        <Label htmlFor="intent" className="flex-1 cursor-pointer">
                          <div className="font-medium">Intent to Use</div>
                          <div className="text-sm text-gray-600">
                            I plan to use this trademark in commerce but haven&apos;t started yet
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border-2 border-green-200 rounded-xl hover:border-green-400 transition-colors">
                        <RadioGroupItem value="current" id="current" className="mt-1" />
                        <Label htmlFor="current" className="flex-1 cursor-pointer">
                          <div className="font-medium">Currently Using</div>
                          <div className="text-sm text-gray-600">
                            I am already using this trademark in commerce
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {/* Date fields for current use */}
                  {formData.useInCommerce === 'current' && (
                    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstUseDate">Date of First Use *</Label>
                        <Input
                          id="firstUseDate"
                          type="date"
                          value={formData.firstUseDate}
                          onChange={(e) => handleInputChange('firstUseDate', e.target.value)}
                          className="mt-2 border-green-200 focus:border-green-500"
                        />
                      </div>
                      <div>
                        <Label htmlFor="commerceUseDate">Date of First Use in Commerce *</Label>
                        <Input
                          id="commerceUseDate"
                          type="date"
                          value={formData.commerceUseDate}
                          onChange={(e) => handleInputChange('commerceUseDate', e.target.value)}
                          className="mt-2 border-green-200 focus:border-green-500"
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Slogan */}
                <div>
                  <Label htmlFor="slogan" className="text-lg font-semibold text-gray-800">Slogan/Tagline (Optional)</Label>
                  <Input
                    id="slogan"
                    placeholder="Enter your slogan or tagline"
                    value={formData.slogan}
                    onChange={(e) => handleInputChange('slogan', e.target.value)}
                    className="mt-3 border-gray-200 focus:border-blue-500"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Include any slogan or tagline you want to protect with your trademark
                  </p>
                </div>

                {/* Description */}
                <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-6 border border-indigo-200">
                  <Label htmlFor="description" className="text-lg font-semibold text-gray-800">Description of Goods/Services *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe what goods or services this trademark will represent..."
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="mt-3 border-indigo-200 focus:border-indigo-500"
                    rows={4}
                  />
                  <p className="text-sm text-gray-600 mt-2">
                    Be specific about the products or services you will use this trademark for. 
                    This helps determine the appropriate international class.
                  </p>
                </div>

                {/* International Class Selection */}
                <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                  <Label className="text-lg font-semibold text-gray-800">International Class *</Label>
                  <p className="text-sm text-gray-600 mt-1 mb-4">
                    Select the international class that best describes your goods/services. 
                    <span className="text-teal-600 font-medium">Additional classes cost $325 each.</span>
                  </p>
                  
                  <select
                    className="mt-2 block w-full border-2 border-teal-200 rounded-xl px-4 py-3 bg-white focus:border-teal-500 focus:ring-0 transition-colors"
                    value={formData.internationalClass}
                    onChange={(e) => handleInputChange('internationalClass', e.target.value)}
                  >
                    <option value="">Select an international class</option>
                    {categories.map((category, index) => (
                      <option key={index} value={`${index + 1}`}>
                        Class {index + 1}: {category}
                      </option>
                    ))}
                  </select>
                  
                  {formData.internationalClass && (
                    <div className="mt-4 p-4 bg-white rounded-lg border border-teal-200">
                      <h4 className="font-semibold text-teal-800 mb-2">
                        Selected: Class {formData.internationalClass}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {categories[parseInt(formData.internationalClass) - 1]}
                      </p>
                    </div>
                  )}
                </div>

                {/* Business Entity Type */}
                <div className="bg-gradient-to-r from-violet-50 to-purple-50 rounded-xl p-6 border border-violet-200">
                  <Label className="text-lg font-semibold text-gray-800">Business Entity Type *</Label>
                  <p className="text-sm text-gray-600 mt-1 mb-4">
                    Select the type of business entity that will own this trademark.
                  </p>
                  
                  <RadioGroup 
                    value={formData.businessEntityType}
                    onValueChange={(value) => handleInputChange('businessEntityType', value)}
                    className="mt-4"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-start space-x-3 p-4 border-2 border-violet-200 rounded-xl hover:border-violet-400 transition-colors">
                        <RadioGroupItem value="sole-proprietorship" id="sole-proprietorship" className="mt-1" />
                        <Label htmlFor="sole-proprietorship" className="flex-1 cursor-pointer">
                          <div className="font-medium">Sole Proprietorship</div>
                          <div className="text-sm text-gray-600">
                            Individual business owner
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border-2 border-violet-200 rounded-xl hover:border-violet-400 transition-colors">
                        <RadioGroupItem value="partnership" id="partnership" className="mt-1" />
                        <Label htmlFor="partnership" className="flex-1 cursor-pointer">
                          <div className="font-medium">Partnership</div>
                          <div className="text-sm text-gray-600">
                            Two or more business partners
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border-2 border-violet-200 rounded-xl hover:border-violet-400 transition-colors">
                        <RadioGroupItem value="llc" id="llc" className="mt-1" />
                        <Label htmlFor="llc" className="flex-1 cursor-pointer">
                          <div className="font-medium">Limited Liability Company (LLC)</div>
                          <div className="text-sm text-gray-600">
                            Limited liability business structure
                          </div>
                        </Label>
                      </div>
                      <div className="flex items-start space-x-3 p-4 border-2 border-violet-200 rounded-xl hover:border-violet-400 transition-colors">
                        <RadioGroupItem value="corporation" id="corporation" className="mt-1" />
                        <Label htmlFor="corporation" className="flex-1 cursor-pointer">
                          <div className="font-medium">Corporation</div>
                          <div className="text-sm text-gray-600">
                            Incorporated business entity
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>

                {/* Translation and Significance */}
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center space-x-3 mb-3">
                      <input
                        type="checkbox"
                        id="translationRequired"
                        checked={formData.translationRequired}
                        onChange={(e) => setFormData(prev => ({ ...prev, translationRequired: e.target.checked }))}
                        className="w-4 h-4 text-blue-600 rounded"
                      />
                      <Label htmlFor="translationRequired" className="font-semibold text-gray-800">
                        Trademark contains foreign words
                      </Label>
                    </div>
                    
                    {formData.translationRequired && (
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="translationText">English Translation *</Label>
                          <Input
                            id="translationText"
                            placeholder="Provide English translation"
                            value={formData.translationText}
                            onChange={(e) => handleInputChange('translationText', e.target.value)}
                            className="mt-2"
                          />
                        </div>
                        <div>
                          <Label htmlFor="significanceExplanation">Significance in Original Language *</Label>
                          <Textarea
                            id="significanceExplanation"
                            placeholder="Explain the significance or meaning in the original language"
                            value={formData.significanceExplanation}
                            onChange={(e) => handleInputChange('significanceExplanation', e.target.value)}
                            className="mt-2"
                            rows={3}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Disclaimer */}
                  <div>
                    <Label htmlFor="disclaimerText" className="font-semibold text-gray-800">
                      Disclaimer (Optional)
                    </Label>
                    <Textarea
                      id="disclaimerText"
                      placeholder="Enter any disclaimer text if required..."
                      value={formData.disclaimerText}
                      onChange={(e) => handleInputChange('disclaimerText', e.target.value)}
                      className="mt-2"
                      rows={2}
                    />
                    <p className="text-sm text-gray-500 mt-1">
                      Some trademarks require disclaimers for certain descriptive terms
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Enhanced Sidebar */}
          <div className="space-y-6">
            {/* Requirements Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  What You&apos;ll Need
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4 text-sm">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Exact trademark text or business name</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Logo file (if registering a design) - PNG, JPG, or GIF</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Detailed description of your goods/services</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>International class selection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-orange-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>Use in commerce information</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Search Information */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <Search className="w-5 h-5 mr-2" />
                  Trademark Search
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 mb-4">
                  Our comprehensive search includes:
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Federal trademark database
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    State trademark records
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Common law sources
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Domain name databases
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* International Classes Info */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-teal-50 to-cyan-50">
              <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-600 text-white rounded-t-lg">
                <CardTitle className="text-lg flex items-center">
                  <Globe className="w-5 h-5 mr-2" />
                  International Classes
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 mb-3">
                  International classes organize goods and services into 45 categories.
                </p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span>Classes 1-34:</span>
                    <span className="font-medium">Goods</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Classes 35-45:</span>
                    <span className="font-medium">Services</span>
                  </div>
                </div>
                <p className="text-xs text-gray-600 mt-3">
                  Each additional class costs $325 in USPTO fees.
                </p>
              </CardContent>
            </Card>

            {/* Help Card */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-t-lg">
                <CardTitle className="text-lg">Need Expert Help?</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-sm text-gray-700 mb-4">
                  Our trademark experts are here to help you through the process with personalized guidance.
                </p>
                <Button 
                  variant="outline" 
                  className="w-full border-orange-200 text-orange-700 hover:bg-orange-100"
                >
                  <Users className="w-4 h-4 mr-2" />
                  Chat with Expert
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
                onClick={() => router.push('/register')}
                className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
              >
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Overview
              </Button>
              
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  {formData.trademarkName && formData.description && formData.internationalClass && formData.businessEntityType ? (
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
                  disabled={!formData.trademarkName || !formData.description || !formData.internationalClass || !formData.businessEntityType}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Continue to Personal Details
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Trademark Search Result Popup */}
        {showSearchPopup && (
          <div className="fixed inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 transform transition-all duration-300 scale-100 border border-white/30">
              <div className="relative p-8">
                {/* Close Button */}
                <button 
                  onClick={() => setShowSearchPopup(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Success Icon */}
                <div className="text-center mb-6">
                  <div className="bg-green-100 rounded-full p-4 mx-auto mb-4 w-20 h-20 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Search Complete!</h3>
                </div>

                {/* Message */}
                <div className="text-center mb-8">
                  <p className="text-lg text-gray-700 mb-2">
                    <span className="font-semibold text-blue-600">&ldquo;{formData.trademarkName}&rdquo;</span> appears to be available!
                  </p>
                  <p className="text-gray-600 mb-4">
                    Continue with your registration to secure your brand identity.
                  </p>
                  {formData.conflictsFound && searchResults.length > 0 && (
                    <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-sm">
                      <p className="text-amber-700 mb-2">Similar marks found - review below:</p>
                      {searchResults.slice(0, 2).map((result, index) => (
                        <div key={index} className="text-amber-600 text-xs">
                          • {result.name} ({result.status})
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <Button 
                    onClick={() => setShowSearchPopup(false)}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Shield className="w-5 h-5 mr-2" />
                    Continue Registration
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowSearchPopup(false)
                      setFormData(prev => ({ ...prev, trademarkName: "" }))
                      setSearchPerformed(false)
                      setSearchResults([])
                    }}
                    className="w-full border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
                  >
                    Search Different Name
                  </Button>
                </div>

                {/* Disclaimer */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  * Professional trademark search recommended for complete clearance.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}