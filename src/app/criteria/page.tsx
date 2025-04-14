"use client";

import Link from "next/link";

export default function AcceptanceCriteriaPage() {
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
              <h1 className="text-3xl font-bold text-gray-900">Membership Acceptance Criteria</h1>
              <p className="mt-2 text-lg text-gray-600">
                Requirements for joining the Naija NextGen Alliance
              </p>
            </div>

            <div className="prose prose-indigo max-w-none">
              <div className="bg-blue-50 p-6 rounded-lg mb-8">
                <h2 className="text-xl font-semibold text-blue-800 mb-4">Introduction</h2>
                <p className="text-gray-700">
                  To ensure the integrity, commitment, and effectiveness of our community, all members must meet the following criteria before joining:
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">1. Nationality & Legal Requirements</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Must be a Nigerian citizen (by birth, registration, or naturalization)</li>
                  <li>Must be at least 18 years old at the time of registration</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">2. Educational & Ethical Standards</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Must have completed at least primary or secondary education or possess an equivalent qualification</li>
                  <li>Must uphold ethical behavior and refrain from engaging in or promoting the use of drugs or illicit substances</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">3. Commitment to the Community&apos;s Values</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Must have a genuine passion for positive change and national development</li>
                  <li>Must be joining selflessly, with no intent for personal gain, but rather for the betterment of Nigeria&apos;s future</li>
                  <li>Must demonstrate respect for diversity, religious tolerance, and non-discrimination in all interactions</li>
                  <li>Must have no record of criminal activities related to corruption, fraud, or violent offenses</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">4. Adherence to Policies & Conduct Guidelines</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Must read, understand, and strictly adhere to all organizational policies and guidelines</li>
                  <li>Must agree to and comply with our <Link href="/terms" className="text-indigo-600 hover:underline">Terms & Conditions</Link>, <Link href="/policy" className="text-indigo-600 hover:underline">Code of Conduct</Link>, and operational procedures</li>
                  <li>Must be willing to attend meetings, participate in activities, and contribute actively to the Community&apos;s mission</li>
                  <li>Must respect hierarchy, leadership structure, and collaborative decision-making within the organization</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">5. Community Engagement & Representation</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Must be willing to engage with communities, create awareness, and actively support grassroots initiatives</li>
                  <li>Must refrain from spreading misinformation, hate speech, or politically biased propaganda</li>
                  <li>Must maintain professionalism, integrity, and accountability in all interactions, both online and offline</li>
                </ul>
              </div>

              {/* Consequences Section */}
              <div className="bg-red-50 p-6 rounded-lg">
                <h2 className="text-xl font-semibold text-red-800 mb-3">Consequences of Non-Compliance</h2>
                <p className="text-gray-700">
                  Failure to meet or uphold these criteria may lead to disqualification, suspension, or removal from the Community.
                </p>
                <p className="text-gray-700 mt-2 font-medium">
                  By joining the Commnunity, you acknowledge and agree to abide by these criteria.
                </p>
              </div>

              {/* Call to Action */}
              <div className="mt-8 text-center">
                <Link
                  href="/register"
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Proceed to Registration
                </Link>
                <p className="mt-4 text-sm text-gray-500">
                  By clicking above, you confirm you meet all acceptance criteria
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}