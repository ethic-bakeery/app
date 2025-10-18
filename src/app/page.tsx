"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation Bar - Enhanced */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  NURA
                </span>
                <span className="ml-2 text-xs text-gray-500 hidden sm:block">
                  Nigerian Unity and Rights Advocacy
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="text-green-600 font-semibold border-b-2 border-green-600 pb-1 transition-colors duration-200"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200"
              >
                About Us
              </Link>
              <Link
                href="/checklist"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200"
              >
                Checklist
              </Link>
              <Link
                href="/structure"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200"
              >
                Structure
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/register"
                className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200"
              >
                Join Us
              </Link>
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
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
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
              className="bg-green-50 text-green-600 block px-3 py-2 rounded-md text-base font-medium"
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
              className="text-gray-600 hover:bg-gray-50 block px-3 py-2 rounded-md text-base font-medium"
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
              href="/register"
              className="bg-green-600 text-white block px-3 py-2 rounded-md text-base font-medium text-center"
              onClick={closeMenu}
            >
              Join Us
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Enhanced */}
      <section className="relative bg-gradient-to-r from-green-700 via-blue-700 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Nigerian Unity and Rights Advocacy
            </h1>
            <p className="mt-6 text-xl text-green-100 max-w-3xl mx-auto">
              <em>United for Justice, Driven by Purpose</em>
            </p>
            <p className="mt-4 text-lg text-blue-100 font-semibold">
              One Nation. One Voice. One Future.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                href="/register"
                className="bg-white text-green-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Become a Member
              </Link>
              <Link
                href="/about"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-700 transition-colors duration-200"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <blockquote className="text-xl text-gray-700 italic border-l-4 border-green-500 pl-6 py-2">
                "To build a united and just Nigeria where every citizen is empowered, heard, and protected under the rule of law."
              </blockquote>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700">
                To promote national unity, protect human rights, and mobilize Nigerian youth for peaceful, informed, and effective civic participation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Objectives Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Key Objectives</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Driving meaningful change through focused advocacy and community engagement
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "National Cohesion",
                description: "Eliminating tribalism, ethnic bias, and religious divisions through inclusive advocacy and civic education",
                icon: "🤝"
              },
              {
                title: "Civic Education",
                description: "Enhancing understanding of rights, responsibilities, and roles in a democratic society",
                icon: "📚"
              },
              {
                title: "Political Awareness",
                description: "Combating voter apathy, electoral malpractice, and political misinformation",
                icon: "🗳️"
              },
              {
                title: "Accountability",
                description: "Promoting transparency in public office and lawful civic engagement",
                icon: "⚖️"
              },
              {
                title: "Quality of Life",
                description: "Supporting access to education, healthcare, housing, and social welfare services",
                icon: "🏠"
              },
              {
                title: "Youth Engagement",
                description: "Providing platforms and resources for leadership and social change",
                icon: "🌟"
              }
            ].map((objective, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-gray-100">
                <div className="text-3xl mb-4">{objective.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{objective.title}</h3>
                <p className="text-gray-600">{objective.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Dear Fellow Nigerian,</h2>
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl mb-6">
              Our nation is at a crossroads. Every day, we face corruption, insecurity, poor leadership, and economic hardship. But in the midst of these challenges lies an opportunity the opportunity to create lasting, people-driven change.
            </p>
            <div className="bg-white bg-opacity-10 p-6 rounded-lg my-6">
              <p className="text-2xl font-semibold italic">
                <span className="text-red-400">This is not about politics.</span><br />
                <span className="text-blue-400">It's not about tribe.</span><br />
                <span className="text-green-400">It's not about religion.</span><br />
                <span className="text-yellow-300">It's about our future.</span>
              </p>
            </div>

            <p className="text-xl">
              We are building a nationwide, grassroots community of courageous, visionary Nigerians who are ready to reform this country from the ground up starting with awareness, unity, and collective action.
            </p>
          </div>
          <div className="mt-8">
            <Link
              href="/register"
              className="bg-white text-green-700 px-10 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              Join the Movement Today
            </Link>
          </div>
        </div>
      </section>

      {/* Governance Structure Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our National Structure</h2>
            <p className="mt-4 text-lg text-gray-600">
              Organized for maximum impact across all levels of governance
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🇳🇬</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">National Level</h3>
              <p className="text-gray-600 mb-4">25-member Executive Council providing strategic leadership</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>High-level decision making</li>
                <li>National policy setting</li>
                <li>International representation</li>
              </ul>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏛️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">State Level</h3>
              <p className="text-gray-600 mb-4">14-member teams across all 36 states</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>State media engagement</li>
                <li>Local event coordination</li>
                <li>Community feedback relay</li>
              </ul>
            </div>
            
            <div className="text-center p-6">
              <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏘️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Local Government</h3>
              <p className="text-gray-600 mb-4">9-member teams in 774 LGAs</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>Grassroots mobilization</li>
                <li>Community awareness</li>
                <li>Local leader engagement</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <Link
              href="/structure"
              className="text-green-600 font-semibold hover:text-green-700 transition-colors duration-200"
            >
              View Full Organizational Structure →
            </Link>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Membership is open to all Nigerians aged 16 and above who support our objectives
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register"
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-200"
            >
              Register Now
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">NURA</h3>
              <p className="text-gray-400 text-sm">
                Nigerian Unity and Rights Advocacy - Building a united and just Nigeria through civic engagement and youth mobilization.
              </p>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/policy" className="hover:text-white transition-colors">Policy</Link></li>
                <li><Link href="/structure" className="hover:text-white transition-colors">Structure</Link></li>
                <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Membership</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/register" className="hover:text-white transition-colors">Join NURA</Link></li>
                <li><Link href="/criteria" className="hover:text-white transition-colors">Membership Criteria</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-md font-semibold mb-4">Contact Info</h4>
              <div className="text-sm text-gray-400 space-y-2">
                <p>Secretariat located with incumbent National Director</p>
                <p>Liaison office in Abuja, FCT</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Nigerian Unity and Rights Advocacy (NURA). All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}