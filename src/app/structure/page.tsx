"use client";

import { useState } from "react";
import Link from "next/link";

export default function StructurePage() {
  const [activeTab, setActiveTab] = useState<"local" | "state" | "national">("local");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const structureData = {
    local: {
      title: "Local Government Teams",
      subtitle: "Grassroots level operations across 774 LGAs",
      color: "green",
      icon: "🏘️",
      members: 6966,
      teamSize: 9,
      responsibilities: [
        "Organizing local events and awareness campaigns",
        "Engaging traditional rulers and religious leaders",
        "Reporting weekly updates to State team",
        "Community mobilization at ward level",
        "Local media and social media engagement"
      ],
      teamStructure: [
        { count: 1, role: "Lead Coordinator" },
        { count: 3, role: "Community Organizers" },
        { count: 2, role: "Communication Officers" },
        { count: 1, role: "Legal Advisor" },
        { count: 2, role: "Security & Strategy Officers" }
      ],
      description: "The foundation of NURA's operations, ensuring community-level impact and direct citizen engagement."
    },
    state: {
      title: "State Teams",
      subtitle: "Regional coordination across 37 states (including FCT)",
      color: "blue",
      icon: "🏛️",
      members: 518,
      teamSize: 14,
      responsibilities: [
        "Overseeing Local Government teams",
        "Engaging with state media (radio, TV)",
        "Managing state-level social media",
        "Organizing state events and rallies",
        "Communicating feedback to National team"
      ],
      teamStructure: [
        { count: 1, role: "State Lead Coordinator" },
        { count: 3, role: "Assistant Coordinators" },
        { count: 3, role: "Media & Public Relations Officers" },
        { count: 2, role: "Legal & Policy Advisors" },
        { count: 3, role: "Event & Mobilization Officers" },
        { count: 2, role: "Security & Risk Officers" }
      ],
      description: "Bridging the gap between national strategy and local implementation across all states."
    },
    national: {
      title: "National Executive Council",
      subtitle: "Central leadership and strategic direction",
      color: "purple",
      icon: "🇳🇬",
      members: 25,
      teamSize: 25,
      responsibilities: [
        "High-level decision making and policy setting",
        "National media and government engagement",
        "Organizing national events and campaigns",
        "Handling legal and security challenges",
        "International representation and partnerships"
      ],
      teamStructure: [
        { count: 1, role: "National Chairperson" },
        { count: 3, role: "Vice-Chairpersons" },
        { count: 4, role: "Public Relations Officers" },
        { count: 3, role: "Legal & Compliance Officers" },
        { count: 5, role: "Mobilization & Strategy Officers" },
        { count: 3, role: "Security & Risk Advisors" },
        { count: 6, role: "State Liaison Officers" }
      ],
      description: "The central leadership body providing strategic direction and national coordination."
    }
  };

  const currentData = structureData[activeTab];

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
              <Link href="/checklist" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Checklist</Link>
              <Link href="/structure" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">Structure</Link>
              <Link href="/contact" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Contact</Link>
              <Link href="/join" className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">Join Us</Link>
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
              href="/checklist"
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Checklist
            </Link>
            <Link
              href="/structure"
              className="bg-green-50 text-green-600 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Structure
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Contact
            </Link>
            <Link
              href="/join"
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
          <h1 className="text-4xl font-bold mb-4">Organizational Structure</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our efficient three-tier structure designed for nationwide impact and grassroots engagement
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">7,509 Total Members</span>
            <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm">774 Local Governments</span>
            <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">37 States Coverage</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Structure Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {Object.entries(structureData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key as "local" | "state" | "national")}
              className={`text-left p-6 rounded-xl border-2 transition-all duration-300 ${
                activeTab === key
                  ? `border-${data.color}-500 bg-${data.color}-50 shadow-lg transform scale-105`
                  : "border-gray-200 bg-white hover:shadow-md hover:border-gray-300"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{data.icon}</span>
                <span className={`px-3 py-1 rounded-full text-sm font-semibold bg-${data.color}-100 text-${data.color}-800`}>
                  {data.members.toLocaleString()} members
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{data.title}</h3>
              <p className="text-gray-600 text-sm">{data.subtitle}</p>
              <div className="mt-4 flex items-center text-sm text-gray-500">
                <span className={`w-3 h-3 rounded-full bg-${data.color}-500 mr-2`}></span>
                {data.teamSize} members per unit
              </div>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Tab Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <span className="text-4xl">{currentData.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold">{currentData.title}</h2>
                  <p className="text-blue-100">{currentData.subtitle}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{currentData.members.toLocaleString()}</div>
                <div className="text-blue-100 text-sm">Total Members</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Description */}
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">{currentData.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Responsibilities */}
              <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {currentData.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 bg-green-500 rounded-full mt-2 mr-3"></span>
                      <span className="text-gray-700">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Team Structure */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                  Team Composition ({currentData.teamSize} members)
                </h3>
                <div className="space-y-4">
                  {currentData.teamStructure.map((member, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <span className="text-gray-700 font-medium">{member.role}</span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                        {member.count} {member.count === 1 ? 'member' : 'members'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Role Details */}
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Officer Roles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeTab === "local" && (
                  <>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-green-700 mb-2">Lead Coordinator</h4>
                      <p className="text-sm text-gray-600">Heads the LGA chapter, directs local initiatives, and coordinates with state teams.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-green-700 mb-2">Community Organizers</h4>
                      <p className="text-sm text-gray-600">Mobilize residents, facilitate local participation, and conduct outreach.</p>
                    </div>
                  </>
                )}
                {activeTab === "state" && (
                  <>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-blue-700 mb-2">State Lead Coordinator</h4>
                      <p className="text-sm text-gray-600">Leads the state chapter, executes national directives, and manages state programs.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-blue-700 mb-2">Media & PR Officers</h4>
                      <p className="text-sm text-gray-600">Handle all public messaging, media relations, and visibility campaigns in the state.</p>
                    </div>
                  </>
                )}
                {activeTab === "national" && (
                  <>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-purple-700 mb-2">National Chairperson</h4>
                      <p className="text-sm text-gray-600">Provides overall leadership, chairs NEC meetings, represents NURA at national and international levels.</p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-purple-700 mb-2">Legal & Compliance Officers</h4>
                      <p className="text-sm text-gray-600">Provide legal advice, draft policies, ensure compliance with Nigerian law and internal regulations.</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Nationwide Summary */}
        <div className="mt-12 bg-gradient-to-r from-green-600 to-blue-700 rounded-2xl shadow-xl text-white overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-2 text-center">Nationwide Structure Summary</h2>
            <p className="text-blue-100 text-center mb-8">Comprehensive coverage across all levels of governance</p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2 text-red-500">774</div>
                <div className="text-sm text-green-600">Local Government Areas</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2 text-red-500">37</div>
                <div className="text-sm text-green-600">States & FCT</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2 text-red-500">3</div>
                <div className="text-sm text-green-600">Tier Structure</div>
              </div>
              <div className="bg-white bg-opacity-20 rounded-xl p-6 text-center backdrop-blur-sm">
                <div className="text-3xl font-bold mb-2 text-red-500">7,509</div>
                <div className="text-sm text-green-600">Total Members</div>
              </div>
            </div>

            <div className="mt-8 bg-white bg-opacity-10 rounded-xl p-6 backdrop-blur-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-gray-900">
                  <thead>
                    <tr className="border-b border-gray-300">
                      <th className="text-left pb-4 font-semibold">Level</th>
                      <th className="text-left pb-4 font-semibold">Units</th>
                      <th className="text-left pb-4 font-semibold">Team Size</th>
                      <th className="text-left pb-4 font-semibold">Total Members</th>
                      <th className="text-left pb-4 font-semibold">Coverage</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="py-4 font-medium text-blue-700">Local Government</td>
                      <td className="py-4 text-gray-800">774</td>
                      <td className="py-4 text-green-700">9 per LGA</td>
                      <td className="py-4 text-red-700">6,966</td>
                      <td className="py-4 text-indigo-700">Grassroots</td>
                    </tr>

                    <tr>
                      <td className="py-4 font-medium text-blue-700">State Level</td>
                      <td className="py-4 text-gray-800">37</td>
                      <td className="py-4 text-green-700">14 per state</td>
                      <td className="py-4 text-red-700">518</td>
                      <td className="py-4 text-indigo-700">Regional</td>
                    </tr>

                    <tr>
                      <td className="py-4 font-medium text-blue-700">National Level</td>
                      <td className="py-4 text-gray-800">1 Council</td>
                      <td className="py-4 text-green-700">25 members</td>
                      <td className="py-4 text-red-700">25</td>
                      <td className="py-4 text-indigo-700">National</td>
                    </tr>

                    <tr className="border-t border-gray-300">
                      <td className="py-4 font-bold text-blue-800">Total</td>
                      <td className="py-4 text-gray-600">-</td>
                      <td className="py-4 text-gray-600">-</td>
                      <td className="py-4 font-bold text-lg text-green-800">7,509</td>
                      <td className="py-4 text-indigo-800">Nationwide</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Join Our Structure?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Become part of NURA's nationwide network and contribute to building a better Nigeria through our structured organizational framework.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/register"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
              >
                Join NURA Today
              </Link>
              <Link
                href="/checklist"
                className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
              >
                Checklist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
