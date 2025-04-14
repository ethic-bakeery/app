"use client";

import Link from "next/link";
import { useState } from "react";

export default function AboutPage() {
  const [activeSection, setActiveSection] = useState<string | null>("who-we-are");

  const sections = [
    { id: "who-we-are", title: "Who We Are" },
    { id: "mission", title: "Our Mission" },
    { id: "vision", title: "Our Vision" },
    { id: "structure", title: "Our Structure" },
    { id: "what-we-do", title: "What We Do" },
    { id: "get-involved", title: "How to Get Involved" },
    { id: "contact", title: "Contact Us" },
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
                href="/policy"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Policy
              </Link>
              <Link
                href="/about"
                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About Us
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
              <h2 className="text-lg font-bold text-gray-900 mb-4">National Youth Reform Movement</h2>
              <h3 className="text-md font-semibold text-gray-800 mb-6">About Our Organization</h3>
              
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
              <h1 className="text-3xl font-bold text-gray-900 mb-6">About National Youth Reform Movement</h1>
              
              {/* Who We Are Section */}
              <section id="who-we-are" className={`mb-12 ${activeSection === "who-we-are" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
                <p className="text-gray-600 mb-4">
                  The National Youth Reform Movement is a collective of passionate and forward-thinking Nigerians committed to transforming the nation through unity, activism, and strategic advocacy. We believe that the key to solving Nigeria&apos;s challenges—corruption, insecurity, economic instability, and lack of accountability—lies in the power of the people, especially the youth.
                </p>
              </section>

              {/* Mission Section */}
              <section id="mission" className={`mb-12 ${activeSection === "mission" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
                <p className="text-gray-600 mb-4">
                  Our mission is to unite Nigerians across ethnic, religious, and regional lines to create a national movement that demands transparency, justice, and sustainable development. We strive to empower individuals to take an active role in governance, ensuring that leaders remain accountable to the people.
                </p>
              </section>

              {/* Vision Section */}
              <section id="vision" className={`mb-12 ${activeSection === "vision" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
                <p className="text-gray-600 mb-4">
                  We envision a Nigeria where:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Every citizen has a voice in decision-making.</li>
                  <li>Tribal and religious divisions no longer hinder national progress.</li>
                  <li>Corruption is eliminated, and leaders serve the people with integrity.</li>
                  <li>Economic opportunities are accessible to all, reducing poverty and hunger.</li>
                  <li>Security and justice systems function effectively to protect all Nigerians.</li>
                </ul>
              </section>

              {/* Structure Section */}
              <section id="structure" className={`mb-12 ${activeSection === "structure" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Structure</h2>
                <p className="text-gray-600 mb-4">
                  To ensure efficiency, we operate on a three-tier system:
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">1. National Leadership</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Oversees the movement&apos;s vision and strategies.</li>
                    <li>Engages with national policymakers, media, and international bodies.</li>
                    <li>Coordinates nationwide events and campaigns.</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">2. State Leadership</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Represents the movement at the state level.</li>
                    <li>Works with local government teams to implement grassroots initiatives.</li>
                    <li>Handles state-wide media engagements and outreach programs.</li>
                  </ul>
                </div>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-2">3. Local Government Teams</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Directly engage with communities through town halls, events, and grassroots mobilization.</li>
                    <li>Educate citizens on their rights and responsibilities.</li>
                    <li>Collect feedback and provide reports to the state leadership.</li>
                  </ul>
                </div>
              </section>

              {/* What We Do Section */}
              <section id="what-we-do" className={`mb-12 ${activeSection === "what-we-do" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Do</h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Card 1 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="text-indigo-600 mb-3">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Public Awareness &amp; Education</h3>
                    <p className="text-gray-600">
                      We organize events, radio programs, and social media campaigns to educate Nigerians on governance, rights, and responsibilities.
                    </p>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="text-indigo-600 mb-3">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v1h8v-1zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-1a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v1h-3zM4.75 12.094A5.973 5.973 0 004 15v1H1v-1a3 3 0 013.75-2.906z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Community Engagement &amp; Mobilization</h3>
                    <p className="text-gray-600">
                      Our teams in every state and local government area work directly with communities to drive participation in reform efforts.
                    </p>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="text-indigo-600 mb-3">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Advocacy &amp; Policy Influence</h3>
                    <p className="text-gray-600">
                      We engage with policymakers, pushing for reforms that prioritize the interests of Nigerians.
                    </p>
                  </div>
                  
                  {/* Card 4 */}
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <div className="text-indigo-600 mb-3">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 mb-2">Leadership Training &amp; Development</h3>
                    <p className="text-gray-600">
                      We mentor and empower young Nigerians to take on leadership roles and drive change at all levels.
                    </p>
                  </div>
                </div>
              </section>

              {/* Get Involved Section */}
              <section id="get-involved" className={`mb-12 ${activeSection === "get-involved" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">How to Get Involved</h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Join Us */}
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-indigo-800 mb-3">Join Us</h3>
                    <p className="text-gray-700 mb-4">
                      Sign up to become a member and take an active role in the movement.
                    </p>
                    <Link
                      href="/register"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
                    >
                      Register Now
                    </Link>
                  </div>
                  
                  {/* Spread the Word */}
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-blue-800 mb-3">Spread the Word</h3>
                    <p className="text-gray-700">
                      Follow us on social media and share our message.
                    </p>
                  </div>
                  
                  {/* Volunteer */}
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-green-800 mb-3">Volunteer</h3>
                    <p className="text-gray-700 mb-4">
                      Contribute your skills and expertise to support our initiatives.
                    </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
                    >
                      Volunteer Now
                    </Link>
                  </div>
                  
                  {/* Donate */}
                  <div className="bg-purple-50 p-6 rounded-lg">
                    <h3 className="text-lg font-medium text-purple-800 mb-3">Donate</h3>
                    <p className="text-gray-700 mb-4">
                      Support our programs and activities through financial contributions.
                    </p>
                    <button
                      className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700"
                    >
                      Donate Now
                    </button>
                  </div>
                </div>
              </section>

              {/* Contact Section */}
              <section id="contact" className={`mb-12 ${activeSection === "contact" ? "block" : "hidden"}`}>
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Email</h3>
                    <p className="text-gray-600">info@youthreform.org</p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Website</h3>
                    <p className="text-gray-600">www.youthreform.org</p>
                  </div>
                  
                  <div className="sm:col-span-2">
                    <h3 className="text-lg font-medium text-gray-700 mb-3">Social Media</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-gray-500 hover:text-indigo-500">
                        <span className="sr-only">Facebook</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-indigo-500">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-indigo-500">
                        <span className="sr-only">Instagram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-indigo-500">
                        <span className="sr-only">YouTube</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                        </svg>
                      </a>
                      <a href="#" className="text-gray-500 hover:text-indigo-500">
                        <span className="sr-only">Telegram</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394a.759.759 0 0 1-.6.295h-.005l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}