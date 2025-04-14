"use client";

import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar - Consistent with other pages */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-800">NNGA</span>
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/policy"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Policy
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/structure"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Structure
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900">Terms and Conditions</h1>
              <p className="mt-2 text-lg text-gray-600">
                Governing your participation in the National Youth Reform Movement
              </p>
            </div>

            <div className="prose prose-indigo max-w-none">
              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">1. Introduction</h2>
                <p className="text-gray-700">
                  Welcome to NNGA. By registering as a member, you agree to abide by these Terms and Conditions, which govern your participation and conduct within the Movement.
                </p>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">2. Eligibility</h2>
                <p className="text-gray-700 mb-3">To become a member of the Movement, you must:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Be a Nigerian citizen</li>
                  <li>Be at least 18 years old</li>
                  <li>Have completed at least primary or secondary education</li>
                  <li>Be committed to bringing positive change to the country without personal gain</li>
                  <li>Read, understand, and adhere to the Movement's policies, guidelines, and procedures</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">3. Member Responsibilities</h2>
                <p className="text-gray-700 mb-3">As a member, you agree to:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Promote unity and national development</li>
                  <li>Refrain from spreading false information, hate speech, or engaging in divisive activities</li>
                  <li>Uphold the Movement's values, including honesty, accountability, and respect for all members</li>
                  <li>Participate actively in initiatives, events, and activities</li>
                  <li>Report any misconduct or activities that go against the Movement's principles</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">4. Prohibited Activities</h2>
                <p className="text-gray-700 mb-3">Members must not:</p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Engage in any form of corruption, bribery, or unethical conduct</li>
                  <li>Promote or partake in illegal activities, including drug use and violence</li>
                  <li>Use the Movement for personal or political gain</li>
                  <li>Disrespect fellow members based on ethnicity, religion, or political affiliations</li>
                  <li>Disclose confidential information related to the Movement without authorization</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">5. Membership Termination</h2>
                <p className="text-gray-700 mb-3">
                  The Movement reserves the right to suspend or terminate membership if a member:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Violates any of these Terms and Conditions</li>
                  <li>Engages in actions that harm the integrity of the Movement</li>
                  <li>Fails to comply with national laws and Movement policies</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">6. Privacy and Data Protection</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Member information will be collected and stored securely</li>
                  <li>Personal data will only be used for Movement-related activities</li>
                  <li>The Movement will not share members' personal data with third parties without consent</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">7. Amendments</h2>
                <p className="text-gray-700">
                  The Movement may update these Terms and Conditions as necessary. Members will be notified of any changes, and continued participation will signify acceptance of the revised terms.
                </p>
              </div>

              {/* Section 8 */}
              <div className="bg-green-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-green-800 mb-3">8. Acceptance of Terms</h2>
                <p className="text-gray-700">
                  By joining the Movement, you acknowledge that you have read, understood, and agreed to these Terms and Conditions.
                </p>
                <p className="text-gray-700 mt-2">
                  For any inquiries, please <Link href="/contact" className="text-indigo-600 hover:underline">contact us</Link>.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/criteria"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 text-center"
                >
                  View Acceptance Criteria
                </Link>
                <Link
                  href="/policy"
                  className="px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-indigo-100 hover:bg-indigo-200 text-center"
                >
                  Read Our Policies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}