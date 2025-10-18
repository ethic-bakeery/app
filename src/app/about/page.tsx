"use client";

import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string>("who-we-are");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const sections = [
    { id: "who-we-are", title: "Who We Are", icon: "👥" },
    { id: "mission", title: "Our Mission", icon: "🎯" },
    { id: "vision", title: "Our Vision", icon: "🌟" },
    { id: "structure", title: "Our Structure", icon: "🏛️" },
    { id: "what-we-do", title: "What We Do", icon: "⚡" },
    { id: "get-involved", title: "Get Involved", icon: "🤝" },
    { id: "contact", title: "Contact Us", icon: "📞" },
  ];

  const currentSection = sections.find(section => section.id === activeSection);

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
              <Link href="/about" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">About Us</Link>
              <Link href="/checklist" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Checklist</Link>
              <Link href="/structure" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Structure</Link>
              <Link href="/policy" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Policies</Link>
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
              className="bg-green-50 text-green-600 block px-3 py-2 rounded-md text-base font-medium"
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
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Structure
            </Link>
            <Link
              href="/policy"
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
              onClick={closeMenu}
            >
              Policies
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
          <h1 className="text-4xl font-bold mb-4">About NURA</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Building a united and just Nigeria through civic engagement, youth mobilization, and rights advocacy
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">National Unity</span>
            <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm">Rights Advocacy</span>
            <span className="bg-purple-500/20 text-purple-200 px-3 py-1 rounded-full text-sm">Youth Empowerment</span>
            <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Grassroots Movement</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 sticky top-32">
              <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-green-50 to-blue-50 rounded-t-2xl">
                <h3 className="text-lg font-bold text-gray-900">About NURA</h3>
                <p className="text-sm text-gray-600 mt-1">Learn about our organization</p>
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
                        <span className="text-sm">{section.title}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Quick Stats */}
              <div className="p-4 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">NURA at a Glance</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Founded:</span>
                    <span className="font-semibold text-green-600">2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Members:</span>
                    <span className="font-semibold text-green-600">7,500+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">States:</span>
                    <span className="font-semibold text-green-600">37 Coverage</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">LGAs:</span>
                    <span className="font-semibold text-green-600">774 Nationwide</span>
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
                      Section {sections.findIndex(s => s.id === activeSection) + 1} of {sections.length}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl">{currentSection?.icon}</div>
                  </div>
                </div>
              </div>

              <div className="p-8">
                {/* Who We Are Section */}
                {activeSection === "who-we-are" && (
                  <div className="prose prose-lg max-w-none">
                    <div className="bg-blue-50 rounded-xl p-6 mb-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Identity</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Nigerian Unity and Rights Advocacy (NURA) is a collective of passionate and forward-thinking Nigerians committed to transforming the nation through unity, activism, and strategic advocacy. We believe that the key to solving Nigeria&apos;s challenges—corruption, insecurity, economic instability, and lack of accountability—lies in the power of the people, especially the youth.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-lg p-5">
                        <h4 className="font-semibold text-green-800 mb-3">Our Foundation</h4>
                        <ul className="space-y-2 text-green-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Grassroots movement for national transformation
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Youth-driven advocacy and leadership
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Non-partisan and inclusive platform
                          </li>
                        </ul>
                      </div>

                      <div className="bg-blue-50 rounded-lg p-5">
                        <h4 className="font-semibold text-blue-800 mb-3">Our Approach</h4>
                        <ul className="space-y-2 text-blue-700">
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Peaceful and lawful advocacy methods
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Evidence-based policy recommendations
                          </li>
                          <li className="flex items-start">
                            <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Community-centered development
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mission Section */}
                {activeSection === "mission" && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Core Mission</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        To promote national unity, protect human rights, and mobilize Nigerian youth for peaceful, informed, and effective civic participation. We strive to empower individuals to take an active role in governance, ensuring that leaders remain accountable to the people.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🤝</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">National Unity</h4>
                        <p className="text-sm text-gray-600">Bringing Nigerians together beyond tribal, religious, and political differences</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🛡️</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Rights Protection</h4>
                        <p className="text-sm text-gray-600">Advocating for human rights and justice for all citizens</p>
                      </div>
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl">🌟</span>
                        </div>
                        <h4 className="font-semibold text-gray-900 mb-2">Youth Mobilization</h4>
                        <p className="text-sm text-gray-600">Empowering young Nigerians for civic engagement and leadership</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Vision Section */}
                {activeSection === "vision" && (
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Vision for Nigeria</h3>
                      <p className="text-gray-700 text-lg leading-relaxed">
                        We envision a Nigeria where every citizen is empowered, heard, and protected under the rule of law—a nation united in purpose and prosperous in practice.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[
                        { icon: "🗣️", text: "Every citizen has a voice in decision-making" },
                        { icon: "🌈", text: "Tribal and religious divisions no longer hinder national progress" },
                        { icon: "⚖️", text: "Corruption is eliminated, and leaders serve with integrity" },
                        { icon: "💼", text: "Economic opportunities are accessible to all Nigerians" },
                        { icon: "🛡️", text: "Security and justice systems function effectively" },
                        { icon: "🎓", text: "Quality education and healthcare are universally available" }
                      ].map((item, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center">
                          <div className="text-3xl mb-3">{item.icon}</div>
                          <p className="text-gray-700 text-sm">{item.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Structure Section */}
                {activeSection === "structure" && (
                  <div className="space-y-8">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Three-Tier Organizational Structure</h3>
                      <p className="text-gray-700 mb-6">
                        To ensure efficiency and nationwide coverage, we operate on a comprehensive three-tier system designed for maximum impact at every level of governance.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white border border-green-200 rounded-xl p-5 text-center">
                          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl">🇳🇬</span>
                          </div>
                          <h4 className="font-semibold text-green-800 mb-3">National Leadership</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>25-member Executive Council</li>
                            <li>National policy and strategy</li>
                            <li>International representation</li>
                            <li>High-level decision making</li>
                          </ul>
                        </div>

                        <div className="bg-white border border-blue-200 rounded-xl p-5 text-center">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl">🏛️</span>
                          </div>
                          <h4 className="font-semibold text-blue-800 mb-3">State Leadership</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>14 members per state</li>
                            <li>Regional coordination</li>
                            <li>State media engagement</li>
                            <li>Local team oversight</li>
                          </ul>
                        </div>

                        <div className="bg-white border border-purple-200 rounded-xl p-5 text-center">
                          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <span className="text-xl">🏘️</span>
                          </div>
                          <h4 className="font-semibold text-purple-800 mb-3">Local Government</h4>
                          <ul className="text-sm text-gray-600 space-y-2">
                            <li>9 members per LGA</li>
                            <li>Grassroots mobilization</li>
                            <li>Community engagement</li>
                            <li>Direct citizen outreach</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* What We Do Section */}
                {activeSection === "what-we-do" && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Key Activities</h3>
                      <p className="text-gray-700">
                        Through strategic programs and initiatives, we work tirelessly to achieve our mission of building a better Nigeria for all citizens.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      {[
                        {
                          icon: "📢",
                          title: "Public Awareness & Education",
                          description: "Organizing events, radio programs, and social media campaigns to educate Nigerians on governance, rights, and responsibilities.",
                          color: "green"
                        },
                        {
                          icon: "🤝",
                          title: "Community Engagement & Mobilization",
                          description: "Our teams in every state and local government area work directly with communities to drive participation in reform efforts.",
                          color: "blue"
                        },
                        {
                          icon: "⚖️",
                          title: "Advocacy & Policy Influence",
                          description: "Engaging with policymakers at all levels to push for reforms that prioritize the interests of ordinary Nigerians.",
                          color: "purple"
                        },
                        {
                          icon: "🎓",
                          title: "Leadership Training & Development",
                          description: "Mentoring and empowering young Nigerians to take on leadership roles and drive positive change in their communities.",
                          color: "orange"
                        },
                        {
                          icon: "🔍",
                          title: "Research & Data Analysis",
                          description: "Conducting evidence-based research to inform our advocacy and provide data-driven solutions to national challenges.",
                          color: "indigo"
                        },
                        {
                          icon: "🌐",
                          title: "Digital Literacy & Civic Tech",
                          description: "Enhancing digital literacy and expanding access to civic technology tools for informed participation in governance.",
                          color: "teal"
                        }
                      ].map((activity, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-200">
                          <div className={`w-12 h-12 bg-${activity.color}-100 rounded-lg flex items-center justify-center text-${activity.color}-600 text-xl mb-4`}>
                            {activity.icon}
                          </div>
                          <h4 className="text-lg font-semibold text-gray-900 mb-3">{activity.title}</h4>
                          <p className="text-gray-600">{activity.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Get Involved Section */}
                {activeSection === "get-involved" && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl text-white p-6">
                      <h3 className="text-xl font-bold mb-3">Join Our Movement</h3>
                      <p className="text-blue-100">
                        There are many ways to contribute to NURA&apos;s mission of building a better Nigeria. Choose the path that best fits your skills, interests, and availability.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl mb-4">
                          👥
                        </div>
                        <h4 className="text-lg font-semibold text-green-800 mb-3">Become a Member</h4>
                        <p className="text-green-700 mb-4">
                          Join our nationwide network of change-makers and contribute to our mission through regular participation.
                        </p>
                        <Link
                          href="/register"
                          className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                        >
                          Register Now
                        </Link>
                      </div>

                      <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-xl mb-4">
                          📢
                        </div>
                        <h4 className="text-lg font-semibold text-blue-800 mb-3">Spread Awareness</h4>
                        <p className="text-blue-700 mb-4">
                          Follow us on social media, share our content, and help amplify our message within your networks.
                        </p>
                        <div className="flex space-x-3">
                          {['Facebook', 'Twitter', 'Instagram', 'YouTube'].map((platform) => (
                            <button key={platform} className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center text-blue-700 hover:bg-blue-300 transition-colors duration-200">
                              <span className="text-xs font-semibold">{platform[0]}</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                        <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 text-xl mb-4">
                          💪
                        </div>
                        <h4 className="text-lg font-semibold text-purple-800 mb-3">Volunteer Your Skills</h4>
                        <p className="text-purple-700 mb-4">
                          Contribute your professional expertise and skills to support our initiatives and organizational development.
                        </p>
                        <Link
                          href="/contact"
                          className="inline-flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-200"
                        >
                          Volunteer Now
                        </Link>
                      </div>

                      <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                        <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-xl mb-4">
                          💡
                        </div>
                        <h4 className="text-lg font-semibold text-orange-800 mb-3">Start a Local Chapter</h4>
                        <p className="text-orange-700">
                          Help establish NURA presence in your local community and lead grassroots mobilization efforts.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Contact Section */}
                {activeSection === "contact" && (
                  <div className="space-y-8">
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">Connect With Us</h3>
                      <p className="text-gray-700">
                        We&apos;re always excited to hear from fellow Nigerians who share our vision for a better nation. Reach out to us through any of the following channels.
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Email Address</h4>
                            <p className="text-gray-600">contact@nura.org</p>
                            <p className="text-sm text-gray-500">(Coming soon)</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Website</h4>
                            <p className="text-gray-600">www.nura.ng</p>
                            <p className="text-sm text-gray-500">(Coming soon)</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mr-4 flex-shrink-0">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Headquarters</h4>
                            <p className="text-gray-600">Liaison Office: Abuja, FCT</p>
                            <p className="text-sm text-gray-500">Secretariat located with incumbent National Director</p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-4">Follow Our Journey</h4>
                        <div className="flex space-x-4">
                          {['Facebook', 'Twitter', 'Instagram', 'YouTube', 'Telegram'].map((platform) => (
                            <button key={platform} className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors duration-200">
                              <span className="text-sm font-semibold">{platform[0]}</span>
                            </button>
                          ))}
                        </div>
                        <p className="text-sm text-gray-500 mt-4">Social media channels coming soon</p>
                      </div>
                    </div>

                    <div className="bg-green-50 rounded-xl p-6 border border-green-200 text-center">
                      <h4 className="font-semibold text-green-800 mb-2">Ready to Make a Difference?</h4>
                      <p className="text-green-700 mb-4">
                        Join thousands of Nigerians who are already part of our movement for national transformation.
                      </p>
                      <Link
                        href="/join"
                        className="inline-flex items-center px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
                      >
                        Join NURA Today
                      </Link>
                    </div>
                  </div>
                )}

                {/* Navigation Controls */}
                <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-200">
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
          </div>
        </div>
      </div>
    </div>
  );
}
