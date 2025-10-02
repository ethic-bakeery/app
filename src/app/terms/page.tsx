"use client";

import Link from "next/link";
import { useState } from "react";

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState("introduction");

  const termsSections = [
    {
      id: "introduction",
      title: "Introduction",
      content: "Welcome to NURA. By registering as a member, you agree to abide by these Terms and Conditions, which govern your participation and conduct within the Organisation."
    },
    {
      id: "eligibility",
      title: "Eligibility",
      content: "To become a member of NURA, you must:",
      items: [
        "Be a Nigerian citizen aged 16 years or above",
        "Support the objectives and mission of the Organisation",
        "Complete the official registration form",
        "Agree to the Organisation's Terms and Conditions",
        "Accept and commit to upholding the Constitution"
      ]
    },
    {
      id: "responsibilities",
      title: "Member Responsibilities",
      content: "As a member, you agree to:",
      items: [
        "Promote and uphold the values, mission, and objectives of the Organisation",
        "Actively participate in activities and consistently uphold the Organisation's principles",
        "Comply with all lawful resolutions, codes of conduct, and internal policies",
        "Pay all prescribed dues, levies, and financial contributions",
        "Refrain from any act capable of bringing the Organisation into disrepute"
      ]
    },
    {
      id: "rights",
      title: "Member Rights",
      content: "As a registered member, you are entitled to:",
      items: [
        "Participate fully in activities, programs, and initiatives at all levels",
        "Vote and be voted for in elections and decision-making processes",
        "Receive relevant updates, publications, and information",
        "A fair hearing before any disciplinary action",
        "A copy of the Constitution upon registration"
      ]
    },
    {
      id: "prohibited",
      title: "Prohibited Activities",
      content: "Members must not engage in:",
      items: [
        "Any form of misconduct or breach of organisational rules",
        "Violence, hate speech, or incitement of any kind",
        "Discrimination, harassment, or abuse based on ethnicity, religion, or gender",
        "Misuse of funds or organisational resources for personal gain",
        "Disclosure of confidential information without authorization"
      ]
    },
    {
      id: "termination",
      title: "Membership Termination",
      content: "Membership may be suspended or revoked due to:",
      items: [
        "Gross misconduct or violation of the Constitution",
        "Non-participation in organisational activities",
        "Breach of rules or code of conduct",
        "Actions that harm the integrity of the Organisation",
        "Failure to comply with national laws and organisational policies"
      ]
    },
    {
      id: "privacy",
      title: "Privacy and Data Protection",
      items: [
        "Member information will be collected and stored securely",
        "Personal data will only be used for Organisation-related activities",
        "Identity of whistleblowers will be maintained in strict confidence",
        "Members are protected against retaliation for good faith reporting",
        "The Organisation will not share personal data with third parties without consent"
      ]
    },
    {
      id: "amendments",
      title: "Amendments",
      content: "The Organisation may update these Terms and Conditions as necessary. Members will be notified of any changes, and continued participation will signify acceptance of the revised terms."
    },
    {
      id: "acceptance",
      title: "Acceptance of Terms",
      content: "By joining NURA, you acknowledge that you have read, understood, and agreed to these Terms and Conditions and the Organisation's Constitution."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation Bar - Consistent with Homepage */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  NURA
                </Link>
                <span className="ml-2 text-xs text-gray-500 hidden sm:block">
                  Nigerian Unity and Rights Advocacy
                </span>
              </div>
            </div>
            
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">About Us</Link>
              <Link href="/constitution" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Constitution</Link>
              <Link href="/structure" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Structure</Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Contact</Link>
              <Link href="/join" className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">Join Us</Link>
            </div>

            <div className="lg:hidden flex items-center">
              <button className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100">
                <span className="sr-only">Open main menu</span>
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Terms and Conditions</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Governing your participation in Nigerian Unity and Rights Advocacy (NURA)
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Member Agreement</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Code of Conduct</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Rights & Responsibilities</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-32">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Quick Navigation</h3>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {termsSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                          activeSection === section.id
                            ? 'bg-green-50 text-green-700 border-l-4 border-green-600 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Quick Actions */}
            <div className="mt-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h4 className="font-semibold text-gray-900 mb-4">Related Documents</h4>
              <div className="space-y-3">
                <Link href="/constitution" className="flex items-center text-green-600 hover:text-green-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Organization Constitution
                </Link>
                <Link href="/policy" className="flex items-center text-green-600 hover:text-green-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  Code of Conduct
                </Link>
                <Link href="/criteria" className="flex items-center text-green-600 hover:text-green-700 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Membership Criteria
                </Link>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              {/* Progress Header */}
              <div className="bg-gray-50 px-8 py-4 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-sm text-gray-500">Currently viewing:</span>
                    <h2 className="text-xl font-bold text-gray-900">
                      {termsSections.find(s => s.id === activeSection)?.title}
                    </h2>
                  </div>
                  <div className="text-right">
                    <span className="text-sm text-gray-500">
                      Section {termsSections.findIndex(s => s.id === activeSection) + 1} of {termsSections.length}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Area */}
              <div className="p-8">
                {termsSections.map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className={`${activeSection === section.id ? 'block' : 'hidden'}`}
                  >
                    <div className="prose prose-lg max-w-none">
                      <p className="text-gray-700 text-lg leading-relaxed mb-6">
                        {section.content}
                      </p>
                      
                      {section.items && (
                        <div className="bg-blue-50 rounded-lg p-6 mb-6">
                          <ul className="space-y-3">
                            {section.items.map((item, index) => (
                              <li key={index} className="flex items-start">
                                <svg className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Special styling for acceptance section */}
                      {section.id === "acceptance" && (
                        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-l-4 border-green-500 p-6 rounded-lg mt-6">
                          <div className="flex items-start">
                            <svg className="w-8 h-8 text-green-600 mr-4 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Join NURA?</h4>
                              <p className="text-gray-700 mb-4">
                                By proceeding with registration, you confirm your acceptance of these terms and your commitment to our shared vision for Nigeria.
                              </p>
                              <div className="flex flex-wrap gap-3">
                                <Link
                                  href="/register"
                                  className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                                >
                                  Proceed to Registration
                                </Link>
                                <Link
                                  href="/contact"
                                  className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
                                >
                                  Have Questions?
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                  <div>
                    {termsSections.findIndex(s => s.id === activeSection) > 0 && (
                      <button
                        onClick={() => {
                          const currentIndex = termsSections.findIndex(s => s.id === activeSection);
                          setActiveSection(termsSections[currentIndex - 1].id);
                        }}
                        className="flex items-center text-green-600 hover:text-green-700 font-semibold"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous Section
                      </button>
                    )}
                  </div>
                  <div>
                    {termsSections.findIndex(s => s.id === activeSection) < termsSections.length - 1 && (
                      <button
                        onClick={() => {
                          const currentIndex = termsSections.findIndex(s => s.id === activeSection);
                          setActiveSection(termsSections[currentIndex + 1].id);
                        }}
                        className="flex items-center text-green-600 hover:text-green-700 font-semibold"
                      >
                        Next Section
                        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Resources */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Need Help Understanding?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Our team is available to clarify any aspect of these terms and conditions.
                </p>
                <Link href="/contact" className="text-green-600 font-semibold hover:text-green-700">
                  Contact Support →
                </Link>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Full Constitution</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Read the complete NURA constitution for detailed governance information.
                </p>
                <Link href="/constitution" className="text-green-600 font-semibold hover:text-green-700">
                  View Constitution →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}