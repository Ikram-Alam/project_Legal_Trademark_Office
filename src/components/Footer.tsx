import Link from "next/link"
import { Shield, Phone, MapPin, Mail, Facebook, Twitter, Linkedin, Instagram, ArrowRight, Award, Users, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-32 h-32 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-purple-400 rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-20 right-1/3 w-28 h-28 bg-blue-300 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-5">
            <div className="group">
              <div className="flex items-center mb-6">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-xl mr-4 group-hover:scale-110 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    Legal Trademark Office
                  </div>
                  <div className="text-blue-300 text-sm font-medium">
                    Your Trusted IP Protection Partner
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Secure your brand&apos;s future with Legal Trademark Office tailored protection 
                packages. Choose our DIY assisted service for a hands-on approach, or enlist 
                our expert attorneys to handle your trademark filing with precision and care.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-green-400 to-emerald-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Call Now for a Free Consultation:</p>
                    <p className="text-blue-400 text-lg font-semibold hover:text-blue-300 transition-colors cursor-pointer">
                      +1 (310) 424-4909
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Our Office:</p>
                    <p className="text-gray-300">2121 Crystal Dr, Arlington, VA 22202, USA</p>
                  </div>
                </div>

                <div className="flex items-center group">
                  <div className="bg-gradient-to-r from-orange-400 to-red-500 p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email Us:</p>
                    <p className="text-blue-400 hover:text-blue-300 transition-colors cursor-pointer">
                      info@legaltrademarkoffice.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
                <Award className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">15+</div>
                <div className="text-xs text-blue-300">Years Experience</div>
              </div>
              <div className="text-center bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-xl p-4 border border-green-500/20">
                <Users className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10K+</div>
                <div className="text-xs text-green-300">Happy Clients</div>
              </div>
              <div className="text-center bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">24/7</div>
                <div className="text-xs text-purple-300">Support</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mr-3"></div>
              Quick Links
            </h3>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/" 
                    className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:font-medium transition-all duration-300">Home</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/about" 
                    className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:font-medium transition-all duration-300">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/contact" 
                    className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:font-medium transition-all duration-300">Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/faq" 
                    className="group flex items-center text-gray-300 hover:text-blue-400 transition-all duration-300 hover:translate-x-2"
                  >
                    <ArrowRight className="w-4 h-4 mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span className="group-hover:font-medium transition-all duration-300">FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Services */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-indigo-500 rounded-full mr-3"></div>
              Our Services
            </h3>
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <ul className="space-y-4">
                <li>
                  <Link 
                    href="/services/trademark-registration" 
                    className="group flex items-start p-4 rounded-xl bg-gradient-to-r from-emerald-500/10 to-green-500/10 border border-emerald-500/20 hover:border-emerald-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full mr-3 mt-1 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <span className="text-white font-medium group-hover:text-emerald-400 transition-colors duration-300">
                        Trademark Registration
                      </span>
                      <p className="text-gray-400 text-sm mt-1">Secure your brand identity</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/trademark-renewal" 
                    className="group flex items-start p-4 rounded-xl bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full mr-3 mt-1 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <span className="text-white font-medium group-hover:text-blue-400 transition-colors duration-300">
                        Trademark Renewal
                      </span>
                      <p className="text-gray-400 text-sm mt-1">Maintain your protection</p>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/services/trademark-revival" 
                    className="group flex items-start p-4 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-400/40 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full mr-3 mt-1 group-hover:scale-125 transition-transform duration-300"></div>
                    <div>
                      <span className="text-white font-medium group-hover:text-purple-400 transition-colors duration-300">
                        Trademark Revival
                      </span>
                      <p className="text-gray-400 text-sm mt-1">Restore your trademark</p>
                    </div>
                  </Link>
                </li>
              </ul>

              {/* Social Media Links */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="group bg-gradient-to-r from-blue-600 to-blue-700 p-3 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Facebook className="w-5 h-5 text-white group-hover:animate-pulse" />
                  </a>
                  <a 
                    href="#" 
                    className="group bg-gradient-to-r from-sky-500 to-sky-600 p-3 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25"
                  >
                    <Twitter className="w-5 h-5 text-white group-hover:animate-pulse" />
                  </a>
                  <a 
                    href="#" 
                    className="group bg-gradient-to-r from-blue-700 to-blue-800 p-3 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                  >
                    <Linkedin className="w-5 h-5 text-white group-hover:animate-pulse" />
                  </a>
                  <a 
                    href="#" 
                    className="group bg-gradient-to-r from-pink-500 to-purple-600 p-3 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/25"
                  >
                    <Instagram className="w-5 h-5 text-white group-hover:animate-pulse" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8">
          <div className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="text-center md:text-left mb-4 md:mb-0">
                <p className="text-gray-300 text-sm">
                  © Copyright & all rights reserved by{' '}
                  <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-semibold">
                    Legal Trademark Office
                  </span>{' '}
                  2025
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Protecting intellectual property with excellence and integrity
                </p>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <Link 
                  href="/privacy-policy" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link 
                  href="/terms-of-service" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link 
                  href="/sitemap" 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}