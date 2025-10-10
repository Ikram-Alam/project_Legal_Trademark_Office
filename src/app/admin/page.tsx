'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown, ChevronUp, Calendar, User, DollarSign, FileText, LogOut } from 'lucide-react'
import LoginForm from '@/components/LoginForm'

interface Application {
  id: number
  currentStep: number
  status: string
  trademarkName?: string
  slogan?: string
  description?: string
  trademarkType?: string
  logoFile?: string
  internationalClass?: string
  useInCommerce?: boolean
  firstUseDate?: Date
  commerceUseDate?: Date
  disclaimerText?: string
  translationRequired?: boolean
  translationText?: string
  significanceExplanation?: string
  businessEntityType?: string
  searchPerformed?: boolean
  conflictsFound?: boolean
  applicantType?: string
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
  address?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
  citizenshipCountry?: string
  domiciledInUS?: boolean
  organizationName?: string
  organizationType?: string
  contactPerson?: string
  organizationEmail?: string
  organizationPhone?: string
  organizationAddress?: string
  organizationCity?: string
  organizationState?: string
  organizationZipCode?: string
  organizationCountry?: string
  businessFormationState?: string
  taxId?: string
  attorneyDesignation?: string
  attorneyName?: string
  attorneyEmail?: string
  attorneyPhone?: string
  correspondencePreference?: string
  signatureMethod?: string
  emergencyContact?: string
  emergencyPhone?: string
  packageType?: string
  packagePrice?: number
  governmentFee?: number
  discount?: number
  promoCode?: string
  totalAmount?: number
  paymentStatus?: string
  paymentId?: string
  paymentMethod?: string
  paymentIntentId?: string
  submissionDate?: Date
  usto_applicationNumber?: string
  notes?: string
  createdAt: Date
  updatedAt: Date
}

export default function AdminDashboard() {
  const [applications, setApplications] = useState<Application[]>([])
  const [loading, setLoading] = useState(true)
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set())
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [authError, setAuthError] = useState('')
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Check if user is already authenticated on component mount
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('adminAuthenticated') === 'true'
    setIsAuthenticated(isLoggedIn)
    setIsCheckingAuth(false)
  }, [])

  // Handle login
  const handleLogin = async (username: string, password: string) => {
    setAuthError('')
    
    // Simple authentication check
    if (username === 'sarim' && password === 'sarim') {
      setIsAuthenticated(true)
      localStorage.setItem('adminAuthenticated', 'true')
      setAuthError('')
    } else {
      setAuthError('Invalid username or password. Please try again.')
    }
  }

  // Handle logout
  const handleLogout = () => {
    setIsAuthenticated(false)
    localStorage.removeItem('adminAuthenticated')
    setApplications([])
    setExpandedItems(new Set())
  }

  useEffect(() => {
    if (!isAuthenticated) {
      setLoading(false)
      return
    }

    const fetchApplications = async () => {
      try {
        const response = await fetch('/api/registration')
        const data = await response.json()
        
        if (data.success && data.applications) {
          // Sort by createdAt in descending order (latest first)
          const sortedApplications = data.applications.sort((a: Application, b: Application) => 
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
          setApplications(sortedApplications)
        }
      } catch (error) {
        console.error('Error fetching applications:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [isAuthenticated])

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  // Show login form if not authenticated
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Checking authentication...</p>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return <LoginForm onLogin={handleLogin} error={authError} />
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading applications...</p>
        </div>
      </div>
    )
  }

  const stats = {
    total: applications.length,
    draft: applications.filter(app => app.status === 'draft').length,
    submitted: applications.filter(app => app.status === 'submitted').length,
    completed: applications.filter(app => app.paymentStatus === 'completed' || app.paymentStatus === 'paid').length,
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Database Dashboard</h1>
            <p className="text-gray-600">View all trademark applications stored in PostgreSQL (Latest first)</p>
          </div>
          <button
            onClick={handleLogout}
            className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <FileText className="w-4 h-4 mr-2" />
                Total Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                Draft Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">{stats.draft}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Submitted Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">{stats.submitted}</div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 flex items-center">
                <DollarSign className="w-4 h-4 mr-2" />
                Paid Applications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">{stats.completed}</div>
            </CardContent>
          </Card>
        </div>

        {/* Applications List */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Applications</CardTitle>
            <CardDescription>Complete trademark application records (click to expand details)</CardDescription>
          </CardHeader>
          <CardContent>
            {applications.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No applications found in database</p>
            ) : (
              <div className="space-y-3">
                {applications.map((app) => {
                  const isExpanded = expandedItems.has(app.id)
                  return (
                    <div key={app.id} className="border rounded-lg bg-white shadow-sm overflow-hidden">
                      {/* Collapsed View - Main Row */}
                      <div 
                        className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                        onClick={() => toggleExpanded(app.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              {isExpanded ? (
                                <ChevronUp className="w-5 h-5 text-gray-400" />
                              ) : (
                                <ChevronDown className="w-5 h-5 text-gray-400" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center space-x-4">
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-900 truncate">
                                    {app.trademarkName || 'Unnamed Trademark'}
                                  </h3>
                                  <p className="text-sm text-gray-600">
                                    {app.applicantType === 'individual' 
                                      ? `${app.firstName || ''} ${app.lastName || ''}`.trim() || 'Individual'
                                      : app.organizationName || 'Organization'
                                    }
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4">
                            <div className="text-right">
                              <div className="flex items-center space-x-2">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  app.status === 'submitted' ? 'bg-green-100 text-green-800' :
                                  app.status === 'draft' ? 'bg-gray-100 text-gray-800' :
                                  'bg-blue-100 text-blue-800'
                                }`}>
                                  {app.status.toUpperCase()}
                                </span>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                  app.paymentStatus === 'completed' || app.paymentStatus === 'paid' ? 'bg-green-100 text-green-800' :
                                  app.paymentStatus === 'failed' ? 'bg-red-100 text-red-800' :
                                  'bg-yellow-100 text-yellow-800'
                                }`}>
                                  {app.paymentStatus || 'pending'}
                                </span>
                              </div>
                              <p className="text-sm text-gray-500 mt-1">
                                ID: {app.id} | Step: {app.currentStep}/3
                              </p>
                            </div>
                            <div className="text-right">
                              <p className="text-sm font-medium text-gray-900">
                                {new Date(app.createdAt).toLocaleDateString()}
                              </p>
                              <p className="text-sm text-gray-500">
                                {new Date(app.createdAt).toLocaleTimeString()}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Expanded View - Detailed Information */}
                      {isExpanded && (
                        <div className="border-t bg-gray-50 p-6">
                          {/* Header with basic info */}
                          <div className="flex justify-between items-start mb-6 pb-4 border-b border-gray-200">
                            <div>
                              <div className="flex items-center gap-4 mt-2">
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
                                  Step {app.currentStep}/3
                                </span>
                                {app.usto_applicationNumber && (
                                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
                                    USPTO: {app.usto_applicationNumber}
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="text-right">
                              <p className="text-sm text-gray-600">Created: {new Date(app.createdAt).toLocaleString()}</p>
                              <p className="text-sm text-gray-600">Updated: {new Date(app.updatedAt).toLocaleString()}</p>
                            </div>
                          </div>

                    {/* Step 1: Trademark Information */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">1</span>
                        Trademark Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-blue-50 p-4 rounded-lg">
                        <div>
                          <p className="text-sm"><span className="font-medium">Trademark Name:</span> {app.trademarkName || 'Not provided'}</p>
                          <p className="text-sm"><span className="font-medium">Slogan:</span> {app.slogan || 'None'}</p>
                          <p className="text-sm"><span className="font-medium">Type:</span> {app.trademarkType || 'Not specified'}</p>
                          <p className="text-sm"><span className="font-medium">International Class:</span> {app.internationalClass || 'Not selected'}</p>
                        </div>
                        <div>
                          <p className="text-sm"><span className="font-medium">Use in Commerce:</span> {app.useInCommerce ? 'Yes' : 'No'}</p>
                          <p className="text-sm"><span className="font-medium">First Use Date:</span> {app.firstUseDate ? new Date(app.firstUseDate).toLocaleDateString() : 'Not provided'}</p>
                          <p className="text-sm"><span className="font-medium">Commerce Use Date:</span> {app.commerceUseDate ? new Date(app.commerceUseDate).toLocaleDateString() : 'Not provided'}</p>
                          <p className="text-sm"><span className="font-medium">Business Entity:</span> {app.businessEntityType || 'Not specified'}</p>
                        </div>
                        <div>
                          <div className="text-sm">
                            <span className="font-medium">Logo:</span>
                            {app.logoFile ? (
                              <div className="mt-2 flex items-center gap-2">
                                <div className="w-16 h-16 border rounded flex items-center justify-center bg-gray-50">
                                  {app.logoFile.startsWith('/uploads/') || app.logoFile.startsWith('http') ? (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img 
                                      src={app.logoFile} 
                                      alt="Trademark Logo" 
                                      className="w-full h-full object-contain"
                                      onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        if (e.currentTarget.parentElement) {
                                          e.currentTarget.parentElement.innerHTML = `<span class="text-xs text-gray-500 text-center p-2">Logo file not found</span>`;
                                        }
                                      }}
                                    />
                                  ) : (
                                    <span className="text-xs text-gray-500 text-center p-2">
                                      {app.logoFile}
                                    </span>
                                  )}
                                </div>
                                {(app.logoFile.startsWith('/uploads/') || app.logoFile.startsWith('http')) && (
                                  <a 
                                    href={app.logoFile} 
                                    download 
                                    className="bg-blue-500 text-white px-2 py-1 rounded text-xs hover:bg-blue-600"
                                  >
                                    Download
                                  </a>
                                )}
                              </div>
                            ) : <span> None</span>}
                          </div>
                          <p className="text-sm"><span className="font-medium">Search Performed:</span> {app.searchPerformed ? 'Yes' : 'No'}</p>
                          <p className="text-sm"><span className="font-medium">Conflicts Found:</span> {app.conflictsFound ? 'Yes' : 'No'}</p>
                          <p className="text-sm"><span className="font-medium">Translation Required:</span> {app.translationRequired ? 'Yes' : 'No'}</p>
                        </div>
                        {app.description && (
                          <div className="md:col-span-3 mt-2">
                            <p className="text-sm"><span className="font-medium">Description:</span> {app.description}</p>
                          </div>
                        )}
                        {app.disclaimerText && (
                          <div className="md:col-span-3">
                            <p className="text-sm"><span className="font-medium">Disclaimer:</span> {app.disclaimerText}</p>
                          </div>
                        )}
                        {app.translationText && (
                          <div className="md:col-span-3">
                            <p className="text-sm"><span className="font-medium">Translation:</span> {app.translationText}</p>
                          </div>
                        )}
                        {app.significanceExplanation && (
                          <div className="md:col-span-3">
                            <p className="text-sm"><span className="font-medium">Significance Explanation:</span> {app.significanceExplanation}</p>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Step 2: Applicant Information */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">2</span>
                        Applicant Information
                      </h4>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* Individual Information */}
                          {app.applicantType === 'individual' && (
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Individual Applicant</h5>
                              <p className="text-sm"><span className="font-medium">Name:</span> {app.firstName} {app.lastName}</p>
                              <p className="text-sm"><span className="font-medium">Email:</span> {app.email}</p>
                              <p className="text-sm"><span className="font-medium">Phone:</span> {app.phone}</p>
                              <p className="text-sm"><span className="font-medium">Address:</span> {app.address}</p>
                              <p className="text-sm"><span className="font-medium">City:</span> {app.city}</p>
                              <p className="text-sm"><span className="font-medium">State:</span> {app.state}</p>
                              <p className="text-sm"><span className="font-medium">ZIP:</span> {app.zipCode}</p>
                              <p className="text-sm"><span className="font-medium">Country:</span> {app.country}</p>
                              <p className="text-sm"><span className="font-medium">Citizenship:</span> {app.citizenshipCountry}</p>
                              <p className="text-sm"><span className="font-medium">US Domiciled:</span> {app.domiciledInUS ? 'Yes' : 'No'}</p>
                            </div>
                          )}

                          {/* Organization Information */}
                          {app.applicantType === 'organization' && (
                            <div>
                              <h5 className="font-medium text-gray-800 mb-2">Organization Applicant</h5>
                              <p className="text-sm"><span className="font-medium">Organization:</span> {app.organizationName}</p>
                              <p className="text-sm"><span className="font-medium">Type:</span> {app.organizationType}</p>
                              <p className="text-sm"><span className="font-medium">Contact Person:</span> {app.contactPerson}</p>
                              <p className="text-sm"><span className="font-medium">Email:</span> {app.organizationEmail}</p>
                              <p className="text-sm"><span className="font-medium">Phone:</span> {app.organizationPhone}</p>
                              <p className="text-sm"><span className="font-medium">Address:</span> {app.organizationAddress}</p>
                              <p className="text-sm"><span className="font-medium">City:</span> {app.organizationCity}</p>
                              <p className="text-sm"><span className="font-medium">State:</span> {app.organizationState}</p>
                              <p className="text-sm"><span className="font-medium">ZIP:</span> {app.organizationZipCode}</p>
                              <p className="text-sm"><span className="font-medium">Country:</span> {app.organizationCountry}</p>
                              <p className="text-sm"><span className="font-medium">Formation State:</span> {app.businessFormationState}</p>
                              <p className="text-sm"><span className="font-medium">Tax ID:</span> {app.taxId || 'Not provided'}</p>
                            </div>
                          )}

                          {/* Additional Information */}
                          <div>
                            <h5 className="font-medium text-gray-800 mb-2">Additional Details</h5>
                            <p className="text-sm"><span className="font-medium">Attorney Designation:</span> {app.attorneyDesignation || 'Not specified'}</p>
                            {app.attorneyDesignation === 'yes' && (
                              <>
                                <p className="text-sm"><span className="font-medium">Attorney Name:</span> {app.attorneyName}</p>
                                <p className="text-sm"><span className="font-medium">Attorney Email:</span> {app.attorneyEmail}</p>
                                <p className="text-sm"><span className="font-medium">Attorney Phone:</span> {app.attorneyPhone}</p>
                              </>
                            )}
                            <p className="text-sm"><span className="font-medium">Correspondence:</span> {app.correspondencePreference}</p>
                            <p className="text-sm"><span className="font-medium">Signature Method:</span> {app.signatureMethod}</p>
                            {app.emergencyContact && (
                              <>
                                <p className="text-sm"><span className="font-medium">Emergency Contact:</span> {app.emergencyContact}</p>
                                <p className="text-sm"><span className="font-medium">Emergency Phone:</span> {app.emergencyPhone}</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Package & Payment */}
                    <div className="mb-4">
                      <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                        <span className="bg-purple-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-2">3</span>
                        Package & Payment Information
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-purple-50 p-4 rounded-lg">
                        <div>
                          <p className="text-sm"><span className="font-medium">Package Type:</span> {app.packageType || 'Not selected'}</p>
                          <p className="text-sm"><span className="font-medium">Package Price:</span> ${app.packagePrice?.toString() || '0'}</p>
                          <p className="text-sm"><span className="font-medium">Government Fee:</span> ${app.governmentFee?.toString() || '0'}</p>
                          <p className="text-sm"><span className="font-medium">Discount:</span> {app.discount?.toString() || '0'}%</p>
                        </div>
                        <div>
                          <p className="text-sm"><span className="font-medium">Promo Code:</span> {app.promoCode || 'None'}</p>
                          <p className="text-sm"><span className="font-medium">Total Amount:</span> ${app.totalAmount?.toString() || '0'}</p>
                          <p className="text-sm"><span className="font-medium">Payment Status:</span> {app.paymentStatus}</p>
                          <p className="text-sm"><span className="font-medium">Payment Method:</span> {app.paymentMethod || 'Not specified'}</p>
                        </div>
                        <div>
                          <p className="text-sm"><span className="font-medium">Payment ID:</span> {app.paymentId || 'Not generated'}</p>
                          <p className="text-sm"><span className="font-medium">Payment Intent:</span> {app.paymentIntentId || 'Not available'}</p>
                          <p className="text-sm"><span className="font-medium">Submission Date:</span> {app.submissionDate ? new Date(app.submissionDate).toLocaleString() : 'Not submitted'}</p>
                          {app.notes && (
                            <p className="text-sm"><span className="font-medium">Notes:</span> {app.notes}</p>
                          )}
                        </div>
                      </div>
                    </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}