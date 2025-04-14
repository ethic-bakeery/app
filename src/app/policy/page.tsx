"use client";

import Link from "next/link";
import { useState } from "react";

export default function PolicyPage() {
  const [activeSection, setActiveSection] = useState<string | null>("introduction");

  const sections = [
    { id: "introduction", title: "1. Introduction" },
    { id: "membership", title: "2. Membership Policy" },
    { id: "communication", title: "3. Communication Guidelines" },
    { id: "decision-making", title: "4. Decision-Making Process" },
    { id: "security", title: "5. Security &amp; Safety Protocols" },
    { id: "events", title: "6. Event &amp; Activity Guidelines" },
    { id: "financial", title: "7. Financial Management" },
    { id: "legal", title: "8. Legal &amp; Ethical Standards" },
    { id: "enforcement", title: "9. Policy Enforcement &amp; Review" },
  ];

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
                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Policy
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="lg:flex">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4 pr-8 mb-8 lg:mb-0">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Naija NextGen Alliance</h2>
              <h3 className="text-md font-semibold text-gray-800 mb-4">Policies, Guidelines, and Procedures</h3>
              <p className="text-sm text-gray-500 mb-6">Version: 1.0<br />Last Updated: 10/02/2025</p>
              
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`block w-full text-left px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === section.id
                        ? "bg-indigo-50 text-indigo-700"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                    }`}
                  >
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:w-3/4">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h1 className="text-3xl font-bold text-gray-900 mb-6">Naija NextGen Alliance Policies</h1>
              
              {/* Introduction Section */}
              <section id="introduction" className={`mb-12 ${activeSection === "introduction" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                <p className="text-gray-600 mb-4">
                  The Naija NextGen Alliance is committed to bringing unity and political awareness to Nigerians through structured activism. This document outlines the policies, guidelines, and procedures that govern our operations at the national, state, and local government levels.
                </p>
              </section>

              {/* Membership Policy Section */}
              <section id="membership" className={`mb-12 ${activeSection === "membership" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Membership Policy</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">2.1 Eligibility Criteria</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Must be 18 years or older</li>
                  <li>Must be committed to peaceful activism and national unity</li>
                  <li>Should be willing to participate in Community activities</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">2.2 Registration Process</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Sign up via our official website</li>
                  <li>Provide personal details (Full Name, State, LGA, Skills, Contact Info)</li>
                  <li>Undergo a verification process</li>
                  <li>Be assigned to a local, state, or national category based on skills</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">2.3 Code of Conduct</h3>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-green-500 mr-3">✅</div>
                    <div className="text-sm text-green-700">
                      Members must respect all ethnic and religious backgrounds
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-green-500 mr-3">✅</div>
                    <div className="text-sm text-green-700">
                      No hate speech, violence, or unlawful activities
                    </div>
                  </div>
                </div>
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-green-500 mr-3">✅</div>
                    <div className="text-sm text-green-700">
                      Members must follow organizational hierarchy and procedures
                    </div>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">2.4 Termination of Membership</h3>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
                    <div className="text-sm text-red-700">
                      Violation of laws or engaging in violence
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
                    <div className="text-sm text-red-700">
                      Spreading misinformation or harming the Community&apos;s reputation
                    </div>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-400 p-4">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 text-red-500 mr-3">❌</div>
                    <div className="text-sm text-red-700">
                      Failure to follow assigned duties without valid reasons
                    </div>
                  </div>
                </div>
              </section>

              {/* Communication Guidelines Section */}
              <section id="communication" className={`mb-12 ${activeSection === "communication" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Communication Guidelines</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">3.1 Internal Communication</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Local teams communicate with state leaders</li>
                  <li>State leaders report to the national executive team</li>
                  <li>Weekly reports from local and state teams</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">3.2 Public Communication</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Only designated spokespersons can speak for the Community</li>
                  <li>Press releases and interviews must be approved by the national team</li>
                  <li>Social media content must be fact-checked before posting</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">3.3 Social Media Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Share only verified information</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">No personal attacks or incitements</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Always promote unity and national interest</p>
                  </div>
                </div>
              </section>

              {/* Decision-Making Process Section */}
              <section id="decision-making" className={`mb-12 ${activeSection === "decision-making" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Decision-Making Process</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">4.1 National-Level Decisions</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Major policy changes require approval from the National Council</li>
                  <li>Nationwide campaigns must be approved by a majority vote</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">4.2 State &amp; Local-Level Decisions</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>State teams handle regional activities within national guidelines</li>
                  <li>Local teams must submit event proposals to state teams</li>
                </ul>
              </section>

              {/* Security & Safety Protocols Section */}
              <section id="security" className={`mb-12 ${activeSection === "security" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Security &amp; Safety Protocols</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">5.1 Protection of Members</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>No member should engage in violent protests</li>
                  <li>Any threats to members must be reported immediately</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">5.2 Handling Legal Issues</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>A team of lawyers will handle any legal concerns</li>
                  <li>Members should avoid making legally compromising statements</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">5.3 Online Security</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Use secure communication channels for sensitive discussions</li>
                  <li>Avoid sharing personal details online without authorization</li>
                </ul>
              </section>

              {/* Event & Activity Guidelines Section */}
              <section id="events" className={`mb-12 ${activeSection === "events" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Event &amp; Activity Guidelines</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">6.1 Local-Level Events</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Organizing awareness campaigns in villages and communities</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Engaging local media (radio, town hall meetings)</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">6.2 State-Level Events</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Press conferences on state issues</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Social media campaigns targeting state-based audiences</p>
                  </div>
                </div>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">6.3 National-Level Events</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Nationwide protests or awareness campaigns</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Official conferences with government representatives</p>
                  </div>
                </div>
              </section>

              {/* Financial Management Section */}
              <section id="financial" className={`mb-12 ${activeSection === "financial" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Financial Management</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">7.1 Fundraising &amp; Donations</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Donations will be accepted only through official accounts</li>
                  <li>All funding sources must be transparent and legal</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">7.2 Budgeting &amp; Spending</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>State teams must submit monthly expense reports</li>
                  <li>Local teams must get approval for any large expenses</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">7.3 Financial Transparency</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>A financial report will be published every quarter</li>
                  <li>All transactions must be documented and reviewed by an independent committee</li>
                </ul>
              </section>

              {/* Legal & Ethical Standards Section */}
              <section id="legal" className={`mb-12 ${activeSection === "legal" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Legal &amp; Ethical Standards</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">8.1 Compliance with Laws</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>The Community must operate within Nigerian law</li>
                  <li>No engagement in illegal protests or unlawful activities</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">8.2 Ethical Guidelines</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Maintain honesty and integrity</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Do not accept bribes or political interference</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 text-green-500 mr-2 mt-1">✅</div>
                    <p className="text-gray-600">Focus on national unity and progress</p>
                  </div>
                </div>
              </section>

              {/* Policy Enforcement & Review Section */}
              <section id="enforcement" className={`mb-12 ${activeSection === "enforcement" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Policy Enforcement &amp; Review</h2>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">9.1 Reporting Violations</h3>
                <ul className="list-disc pl-5 mb-6 space-y-2 text-gray-600">
                  <li>Any violations should be reported to the state or national team</li>
                  <li>Investigations will be conducted before any disciplinary actions</li>
                </ul>
                
                <h3 className="text-xl font-medium text-gray-700 mb-3">9.2 Policy Review Process</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Policies will be reviewed every 6-12 months</li>
                  <li>Updates will be made based on member feedback and legal changes</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}