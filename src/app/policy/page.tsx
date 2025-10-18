"use client";

import Link from "next/link";
import { useState } from "react";

export default function PolicyPage() {
  const [activeSection, setActiveSection] = useState<string>("introduction");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const sections = [
    { id: "introduction", title: "Introduction", icon: "📋" },
    { id: "membership", title: "Membership Policy", icon: "👥" },
    { id: "communication", title: "Communication", icon: "💬" },
    { id: "decision-making", title: "Decision Making", icon: "🤝" },
    { id: "security", title: "Security & Safety", icon: "🛡️" },
    { id: "events", title: "Events & Activities", icon: "📅" },
    { id: "financial", title: "Financial Management", icon: "💰" },
    { id: "legal", title: "Legal & Ethics", icon: "⚖️" },
    { id: "enforcement", title: "Enforcement", icon: "🔍" },
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
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link href="/" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Home</Link>
              <Link href="/about" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">About Us</Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Contact</Link>
              <Link href="/structure" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Structure</Link>
              <Link href="/policy" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">Policies</Link>
              <Link href="/register" className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">Join Us</Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-green-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-green-500"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t">
            <Link
              href="/"
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/structure"
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Structure
            </Link>
            <Link
              href="/policy"
              className="bg-green-50 text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Policies
            </Link>
            <Link
              href="/register"
              className="bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
              onClick={closeMenu}
            >
              Join Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <div className="relative bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">NURA Policies & Guidelines</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Comprehensive framework governing our operations, conduct, and procedures at all organizational levels
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Code of Conduct</span>
            <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm">Operational Guidelines</span>
            <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Legal Framework</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 sticky top-32">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50 rounded-t-2xl">
                <h3 className="text-lg font-bold text-gray-900">Policy Framework</h3>
                <p className="text-sm text-gray-600 mt-1">Version 1.0 • Updated Feb 2025</p>
              </div>
              <nav className="p-4">
                <ul className="space-y-2">
                  {sections.map((section) => (
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
                        {section.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Quick Links */}
              <div className="p-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Related Documents</h4>
                <div className="space-y-2">
                  <Link href="/checklist" className="flex items-center text-green-600 hover:text-green-700 text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    Checklist
                  </Link>
                  <Link href="/terms" className="flex items-center text-green-600 hover:text-green-700 text-sm font-medium">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Terms & Conditions
                  </Link>
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
                    <h2 className="text-2xl font-bold">
                      {sections.find(s => s.id === activeSection)?.title}
                    </h2>
                    <p className="text-blue-100">
                      Section {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl">
                      {sections.find(s => s.id === activeSection)?.icon}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Introduction Section */}
                {activeSection === "introduction" && (
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy Framework Overview</h3>
                      <p className="text-gray-700">
                        NURA is committed to promoting national unity, protecting human rights, and mobilizing Nigerian youth through structured, lawful activism. This document outlines the comprehensive policies, guidelines, and procedures that govern our operations across national, state, and local government levels.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 rounded-lg p-5">
                        <h4 className="font-semibold text-green-800 mb-3">Our Commitment</h4>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Peaceful and lawful advocacy
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Transparency and accountability
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            National unity and cohesion
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-5">
                        <h4 className="font-semibold text-blue-800 mb-3">Scope & Application</h4>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            All members and officers
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            All organizational activities
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            All governance levels
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Membership Policy Section */}
                {activeSection === "membership" && (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-green-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">Eligibility Criteria</h3>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-3 px-2 py-1 rounded">16+</span>
                            <span className="text-green-700">Must be 16 years or older</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-3 px-2 py-1 rounded">🇳🇬</span>
                            <span className="text-green-700">Nigerian citizen or resident</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-3 px-2 py-1 rounded">🕊️</span>
                            <span className="text-green-700">Committed to peaceful activism</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-3 px-2 py-1 rounded">🎯</span>
                            <span className="text-green-700">Support NURA's objectives</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Registration Process</h3>
                        <ol className="space-y-3 text-blue-700">
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-3 px-2 py-1 rounded">1</span>
                            <span>Complete official registration form</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-3 px-2 py-1 rounded">2</span>
                            <span>Agree to terms and conditions</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-3 px-2 py-1 rounded">3</span>
                            <span>Undergo verification process</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 text-sm font-semibold mr-3 px-2 py-1 rounded">4</span>
                            <span>Receive constitution and orientation</span>
                          </li>
                        </ol>
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Code of Conduct</h3>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-green-700 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Expected Behavior
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              Respect all ethnic and religious backgrounds
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              Follow organizational hierarchy
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              Maintain professionalism
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold text-red-700 mb-3 flex items-center">
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                            Prohibited Actions
                          </h4>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              Hate speech or violence
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              Misinformation spread
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              Unauthorized representation
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Communication Guidelines Section */}
                {activeSection === "communication" && (
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-blue-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-blue-800 mb-4">Internal Communication</h3>
                        <ul className="space-y-3 text-blue-700">
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-3 px-2 py-1 rounded">📊</span>
                            <span>Weekly reports from local to state teams</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-3 px-2 py-1 rounded">🔄</span>
                            <span>State leaders report to national executive</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-3 px-2 py-1 rounded">📞</span>
                            <span>Secure channels for sensitive discussions</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-green-50 rounded-xl p-6">
                        <h3 className="text-xl font-semibold text-green-800 mb-4">Public Communication</h3>
                        <ul className="space-y-3 text-green-700">
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-3 px-2 py-1 rounded">🎤</span>
                            <span>Only designated spokespersons</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-3 px-2 py-1 rounded">✅</span>
                            <span>National approval for press releases</span>
                          </li>
                          <li className="flex items-start">
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-3 px-2 py-1 rounded">🔍</span>
                            <span>Fact-checking before publication</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-purple-800 mb-4">Social Media Guidelines</h3>
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 text-xl">✓</span>
                          </div>
                          <p className="text-sm text-purple-700">Share verified information only</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 text-xl">🤝</span>
                          </div>
                          <p className="text-sm text-purple-700">Promote unity and respect</p>
                        </div>
                        <div className="text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                            <span className="text-purple-600 text-xl">🛡️</span>
                          </div>
                          <p className="text-sm text-purple-700">Protect organizational reputation</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Additional sections would follow the same pattern... */}

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
                  <div>
                    {sections.findIndex(s => s.id === activeSection) > 0 && (
                      <button
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          setActiveSection(sections[currentIndex - 1].id);
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
                    {sections.findIndex(s => s.id === activeSection) < sections.length - 1 && (
                      <button
                        onClick={() => {
                          const currentIndex = sections.findIndex(s => s.id === activeSection);
                          setActiveSection(sections[currentIndex + 1].id);
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

            {/* Policy Compliance Notice */}
            <div className="mt-8 bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl text-white p-8">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-yellow-300 mr-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <div>
                  <h3 className="text-xl font-bold mb-2">Policy Compliance Notice</h3>
                  <p className="text-blue-100">
                    All members are required to read, understand, and comply with these policies. Violations may result in disciplinary action, including suspension or termination of membership. Regular policy reviews and updates will be communicated to all members.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
