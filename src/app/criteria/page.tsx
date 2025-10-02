"use client";

import Link from "next/link";
import { useState } from "react";

export default function AcceptanceCriteriaPage() {
  const [activeSection, setActiveSection] = useState("nationality");

  const criteriaSections = [
    {
      id: "nationality",
      title: "Nationality & Legal Requirements",
      icon: "🇳🇬",
      requirements: [
        "Must be a Nigerian citizen (by birth, registration, or naturalization)",
        "Must be at least 16 years old at the time of registration",
        "Must have valid identification documents"
      ]
    },
    {
      id: "education",
      title: "Educational & Ethical Standards",
      icon: "🎓",
      requirements: [
        "Must have completed at least primary or secondary education or possess equivalent qualification",
        "Must uphold ethical behavior and refrain from engaging in or promoting the use of drugs or illicit substances",
        "Must demonstrate good moral character and community standing"
      ]
    },
    {
      id: "commitment",
      title: "Commitment to Values",
      icon: "❤️",
      requirements: [
        "Must have genuine passion for positive change and national development",
        "Must be joining selflessly, with no intent for personal gain",
        "Must demonstrate respect for diversity, religious tolerance, and non-discrimination",
        "Must have no record of criminal activities related to corruption, fraud, or violent offenses"
      ]
    },
    {
      id: "policies",
      title: "Policy Adherence",
      icon: "📋",
      requirements: [
        "Must read, understand, and strictly adhere to all organizational policies and guidelines",
        "Must agree to and comply with Terms & Conditions, Code of Conduct, and operational procedures",
        "Must be willing to attend meetings and participate in activities",
        "Must respect hierarchy, leadership structure, and collaborative decision-making"
      ]
    },
    {
      id: "engagement",
      title: "Community Engagement",
      icon: "🤝",
      requirements: [
        "Must be willing to engage with communities and support grassroots initiatives",
        "Must refrain from spreading misinformation, hate speech, or biased propaganda",
        "Must maintain professionalism, integrity, and accountability in all interactions",
        "Must actively contribute to the organization's mission and objectives"
      ]
    }
  ];

  const currentSection = criteriaSections.find(section => section.id === activeSection);

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
              <Link href="/policy" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Policies</Link>
              <Link href="/criteria" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">Criteria</Link>
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
          <h1 className="text-4xl font-bold mb-4">Membership Acceptance Criteria</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Requirements and standards for joining Nigerian Unity and Rights Advocacy
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Age 16+</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Nigerian Citizen</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Good Character</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Commitment Required</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 sticky top-32">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50 rounded-t-2xl">
                <h3 className="text-lg font-bold text-gray-900">Criteria Categories</h3>
                <p className="text-sm text-gray-600 mt-1">5 key requirement areas</p>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {criteriaSections.map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => setActiveSection(section.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 flex items-center ${
                          activeSection === section.id
                            ? 'bg-green-50 text-green-700 border-l-4 border-green-600 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                        }`}
                      >
                        <span className="text-lg mr-3">{section.icon}</span>
                        <span className="text-sm">{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Quick Stats */}
              <div className="p-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Membership Overview</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Minimum Age:</span>
                    <span className="font-semibold text-green-600">16 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Citizenship:</span>
                    <span className="font-semibold text-green-600">Required</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Education:</span>
                    <span className="font-semibold text-green-600">Basic Level</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Background Check:</span>
                    <span className="font-semibold text-green-600">Required</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              {/* Content Header */}
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold">{currentSection?.title}</h2>
                    <p className="text-blue-100">
                      Section {criteriaSections.findIndex(s => s.id === activeSection) + 1} of {criteriaSections.length}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl">{currentSection?.icon}</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Introduction */}
                <div className="bg-blue-50 rounded-xl p-6 mb-8">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 text-blue-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">Membership Requirements Overview</h3>
                      <p className="text-blue-700">
                        To ensure the integrity, commitment, and effectiveness of our organization, all prospective members must meet the following criteria. These standards help maintain NURA's mission of promoting national unity and protecting human rights.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Requirements List */}
                <div className="space-y-4 mb-8">
                  {currentSection?.requirements.map((requirement, index) => (
                    <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg border border-gray-200">
                      <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="text-gray-700 text-lg leading-relaxed">{requirement}</p>
                    </div>
                  ))}
                </div>

                {/* Additional Section-Specific Information */}
                {activeSection === "nationality" && (
                  <div className="bg-green-50 rounded-xl p-6">
                    <h4 className="font-semibold text-green-800 mb-3">Documentation Required</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        National ID Card (NIN)
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        International Passport (if applicable)
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        Driver's License
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                        </svg>
                        Voter's Card
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
                  <div>
                    {criteriaSections.findIndex(s => s.id === activeSection) > 0 && (
                      <button
                        onClick={() => {
                          const currentIndex = criteriaSections.findIndex(s => s.id === activeSection);
                          setActiveSection(criteriaSections[currentIndex - 1].id);
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
                    {criteriaSections.findIndex(s => s.id === activeSection) < criteriaSections.length - 1 && (
                      <button
                        onClick={() => {
                          const currentIndex = criteriaSections.findIndex(s => s.id === activeSection);
                          setActiveSection(criteriaSections[currentIndex + 1].id);
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

            {/* Consequences Section */}
            <div className="mt-8 bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl text-white p-8">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-yellow-300 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Consequences of Non-Compliance</h3>
                  <p className="text-red-100 mb-4">
                    Failure to meet or uphold these criteria may lead to disqualification, suspension, or removal from the organization. All applications are subject to verification and background checks.
                  </p>
                  <p className="text-yellow-200 font-semibold">
                    By joining NURA, you acknowledge and agree to abide by these criteria and our organizational values.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mt-8 text-center">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join NURA?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  If you meet all the acceptance criteria and are committed to our mission of national unity and rights advocacy, proceed with your registration.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    href="/register"
                    className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    </svg>
                    Proceed to Registration
                  </Link>
                  <Link
                    href="/policy"
                    className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 inline-flex items-center justify-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Review Policies
                  </Link>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  By proceeding, you confirm that you meet all acceptance criteria and agree to our terms
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}