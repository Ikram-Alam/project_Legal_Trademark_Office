import { Card, CardContent } from "@/components/ui/card"
import { Shield, MapPin } from "lucide-react"

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for USPTO Legal Trademark Office - Learn how we protect your information"
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6 text-blue-200" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-blue-100">
            Your privacy and data protection are our top priorities
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Thank you for visiting the USPTO Legal Trademark Office website and reviewing our privacy policy. Our privacy policy is simple: we collect no personal information about you when you visit our website unless you choose to provide that information to us.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Submitting personal information is voluntary. When you voluntarily submit information, it constitutes your consent to the use of the information for the purposes stated at the time of collection. See the Privacy Act of 1974 for more information on your rights under the Privacy Act. Except for the purposes described below, no other attempts are made to identify individual users while on the USPTO website. Here is how we handle information about your visit to our website:
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Information collected and stored automatically</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  USPTO web servers automatically collect and save the default information customarily logged by web server software. Specifically, the date and time, the originating IP address, the object requested, and the completion status of the request is collected and saved for each http request received by the server. We also use an authorized Google Analytics agent to collect comparable information on our behalf.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  On a monthly or more-frequent basis, we review this information to determine the traffic through the servers in hits, the number of pages served, and the level of demand for pages of interest. We may also analyze accesses to particular pages to determine U.S. versus non-U.S. use, government agency versus private use, and other statistics that may be of value to us in establishing priorities and allocating resources in order to better accomplish our mission. Analysis of this information may also help identify problem areas of the website or to improve overall service. Information is retained as long as necessary to perform useful analysis.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  For site security purposes and to ensure that USPTO web services remain available to all users, USPTO monitors network traffic to identify unauthorized attempts to upload or change information or otherwise cause damage. Unauthorized attempts to upload information or change information on this service are strictly prohibited and subject to prosecution under the Computer Fraud and Abuse Act of 1986 and Title 18 U.S.C. Sec.1001 and 1030. Information also may be used for authorized law enforcement investigations.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Use of cookies and tracking technology</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  The Office of Management and Budget Memorandum M-10-22, Guidance for Online Use of Web Measurement and Customization Technologies defines conditions under which federal agencies may use session and persistent cookies, and categorizes them in tiers to identify their characteristics. You may control permissions for cookies on this or any other website by adjusting your individual browser settings for customized privacy protection - see <a href="http://www.usa.gov/optout_instructions.shtml" className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">http://www.usa.gov/optout_instructions.shtml</a> for helpful guidance.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Session cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Session cookies are also known as memory-resident cookies. These cookies are not stored on your computer&apos;s hard drive, and are removed when you complete your session or exit the site. We use session cookies for some applications to improve their usability and ensure session integrity. No personal information is gathered.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Persistent cookies</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Persistent cookies remain on your computer&apos;s hard drive after you complete an activity. On www.usptolegaltrademarkoffice.com, we use &quot;Tier 2&quot; persistent cookies to help us recognize new and returning visitors, but no personally identifiable information is gathered. If you block a persistent cookie, you are not prevented from using the USPTO website in any way.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  We use persistent cookies in association with an authorized customer satisfaction survey conducted by a third party, Qualtrics. If you are randomly selected to participate in this survey, a persistent cookie is stored on your computer&apos;s hard drive for 30 days to preclude a new invitation during that time.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  We also use persistent cookies to enable the Google Analytics program to measure how new and returning visitors use the USPTO website over time.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Email</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Email submitted to USPTO is saved in accordance to Department of Commerce policy and NARA guidelines. If you choose to provide us with personal information in email, we use that information to respond to your message and to help us get you the information you have requested. We do not collect personal information for any purpose other than to respond to you. We only share the information you give us with another government agency if your inquiry relates to that agency, or as otherwise required by law. Moreover, we do not store any personal information independent of the email message, create individual profiles with the information you provide, or give it to any private organizations. We do not collect information for commercial marketing.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Comments</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  In instances where the USPTO accepts electronic comments, if you choose to submit a blog comment, only personal information that you voluntarily provide as part of the comment will be revealed. All comments are moderated, and only those that comply with USPTO Terms of Use policy will be publicly posted. The USPTO will not edit or alter individual comments. If you simply visit a blog page, your visit will be recorded for statistical purposes, as with other areas of our website.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Surveys</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  While visiting www.usptolegaltrademarkoffice.com, you may be asked to participate in a survey conducted by an authorized third party, Qualtrics. This randomized survey is voluntary. No personal information is collected unless you choose to provide it as part of a comment or to complete the survey. Survey data is retained as long as needed to permit accurate analysis, produce summary reports, and monitor overall trends. If you choose not to participate in the survey, you are not prevented from using the USPTO website in any other way. If you wish to provide feedback without taking the survey, you may send an email directly to support@usptolegaltrademarkoffice.com. If you have an immediate concern, please refer to the Contact us page. See additional notes under Use of cookies and tracking technologies above.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Kids pages</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  We are especially concerned about protecting the privacy of children. We hope parents and teachers are involved in children&apos;s internet explorations. We respect the need to protect the identity of any children who participate in an internet exhibition of their work. We do not request any information from children on the Kids pages. We do, however, sometimes encourage them to participate in contests, but such participation is often carried out through post mail.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Links to other sites</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  Our webpages may contain links to websites outside the USPTO, including those of other federal agencies, international sites, and private organizations. In some cases, the USPTO may have an official presence on an external site that we&apos;ve engaged to serve a specific function. Be aware that whenever you follow a link to another site, you are subject to the privacy policy of that site.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Privacy Act systems of records</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Where a USPTO website requests information that will be stored in a Privacy Act system of records, an individual Privacy Act statement is provided. Should there ever be a need to use information for a purpose other than one already provided for under the Privacy Act, we will give you specific instructions on how you may consent to such use. You are never required to give such consent.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  <strong>Access the USPTO Systems of Records Notices:</strong> To seek access to records about you maintained in USPTO systems of records under the Privacy Act, please use the instructions provided on the Freedom of Information Act (FOIA) webpage. The USPTO allows users to request records, provide proof of identity, and receive records electronically (unless a user prefers otherwise).
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Privacy Impact Assessments</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  OMB Circular A-11, Exhibit 300 Privacy Impact Assessments
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Chief privacy officer</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The chief information officer serves as the chief privacy officer for the USPTO and may be contacted for concerns and issues related to this privacy policy.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Department of Commerce Privacy Program</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  The USPTO participates in the Department of Commerce Privacy Program.
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">To our customers</h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">Protect yourself against identity theft</h3>
                <p className="text-gray-700 leading-relaxed mb-6">
                  When filing documentation in support of applications or petitions, please take steps to protect your personal information. &quot;Personal information&quot; includes social security, credit card, and bank account numbers. To support a petition or application, the USPTO never requires this type of personal data within the body of the petition or application. To protect your privacy, you should delete such information from any documentation that you send to the USPTO except when submitting the Credit Card Payment Form (PTO-2038). If using a USPTO electronic form where a fee is required, take care to enter the payment information (such as a credit card number) only in the specific secure payment portion of the form.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Patent and trademark public data is available directly through the USPTO website, including in bulk format. As public data, it may be disseminated from other websites as well.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  All patent application files are published and made available to the public 18 months from the filing date, unless the application includes a nonpublication request. (See MPEP Sections 724. 02-724.06 for details on making a nonpublication request.) Also, all patent application files will become available to the public upon the grant of the patent. For patents, if you have questions about what information may be published and how to remove the material from documents you plan to submit to the USPTO, please call the Inventors Assistance Center at 1-806-318-0751.
                </p>

                <p className="text-gray-700 leading-relaxed mb-8">
                  Trademark applications are available to the public within a week of their submission. For questions about public information on Trademark applications, please refer to the filing instructions or contact the Trademark Assistance Center at 1-806-318-0751 or via email at support@usptolegaltrademarkoffice.com.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8 rounded-r-lg">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-blue-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Location</h3>
                      <p className="text-gray-700">
                        2121 Crystal Dr, Arlington, VA 22202, USA
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Change History</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
                  <li>Changed Blog comments section to Comments and updated text about electronic comments</li>
                  <li>Removed the EquIP HQ section</li>
                  <li>Added EquIP HQ section</li>
                  <li>Updated text under Surveys to include changes to Contact Us email and updated the third-party survey company</li>
                  <li>Added records access paragraph to the end of Privacy Act systems of records section</li>
                  <li>Changed Privacy Act link to Commerce.gov from Justice.gov</li>
                  <li>Updated information concerning persistent cookies, external sites, and surveys</li>
                  <li>Added information related to the use of Google Analytics and external sites</li>
                  <li>Added Department of Commerce Privacy Program section</li>
                  <li>Added chief privacy officer information</li>
                </ul>

                <div className="bg-gray-100 p-6 rounded-lg mt-8">
                  <p className="text-sm text-gray-600 text-center">
                    Last Updated: December 2025
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
