"use client";

import { useState } from "react";
import Link from "next/link";

export default function StructurePage() {
  const [activeTab, setActiveTab] = useState<"local" | "state" | "national">("local");

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
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                About Us
              </Link>
              <Link
                href="/contact"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Contact Us
              </Link>
              <Link
                href="/roadmap"
                className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Roadmap
              </Link>
              <Link
                href="/structure"
                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
              >
                Structure
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Organizational Structure</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our efficient three-tier structure designed for nationwide impact
          </p>
        </div>

        {/* Structure Navigation */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab("local")}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === "local"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            Local Government (774)
          </button>
          <button
            onClick={() => setActiveTab("state")}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === "state"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            State Level (37)
          </button>
          <button
            onClick={() => setActiveTab("national")}
            className={`py-4 px-6 font-medium text-sm border-b-2 ${
              activeTab === "national"
                ? "border-indigo-500 text-indigo-600"
                : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
            }`}
          >
            National Level
          </button>
        </div>

        {/* Mobile Dropdown Navigation */}
        <div className="sm:hidden mb-6">
          <select
            onChange={(e) => setActiveTab(e.target.value as "local" | "state" | "national")}
            className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            value={activeTab}
          >
            <option value="local">Local Government (774)</option>
            <option value="state">State Level (37)</option>
            <option value="national">National Level</option>
          </select>
        </div>

        {/* Content Sections */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            {/* Local Government Section */}
            <div className={activeTab === "local" ? "block" : "hidden"}>
              <div className="border-l-4 border-green-500 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Local Government Teams</h2>
                <p className="text-gray-600">Grassroots level operations across 774 LGAs</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-green-800 mb-4">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Organizing local events and awareness campaigns</li>
                    <li>Engaging traditional rulers and religious leaders</li>
                    <li>Reporting weekly updates to State team</li>
                    <li>Community mobilization at ward level</li>
                    <li>Local media and social media engagement</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-blue-800 mb-4">Team Structure (9 per LGA)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">1</span>
                      <span className="text-gray-700">Lead Coordinator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">3</span>
                      <span className="text-gray-700">Community Organizers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">2</span>
                      <span className="text-gray-700">Communication Officers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">1</span>
                      <span className="text-gray-700">Legal Advisor</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">2</span>
                      <span className="text-gray-700">Security & Strategy</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Total Members Nationwide</h3>
                <p className="text-3xl font-bold text-gray-900">6,966 <span className="text-lg text-gray-600">members across 774 LGAs</span></p>
              </div>
            </div>

            {/* State Level Section */}
            <div className={activeTab === "state" ? "block" : "hidden"}>
              <div className="border-l-4 border-yellow-500 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">State Teams</h2>
                <p className="text-gray-600">Regional coordination across 37 states (including FCT)</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-yellow-800 mb-4">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>Overseeing Local Government teams</li>
                    <li>Engaging with state media (radio, TV)</li>
                    <li>Managing state-level social media</li>
                    <li>Organizing state events and rallies</li>
                    <li>Communicating feedback to National team</li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-800 mb-4">Team Structure (14 per state)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">1</span>
                      <span className="text-gray-700">State Lead Coordinator</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">3</span>
                      <span className="text-gray-700">Assistant Coordinators</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">3</span>
                      <span className="text-gray-700">Media & Public Relations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">2</span>
                      <span className="text-gray-700">Legal & Policy Advisors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">3</span>
                      <span className="text-gray-700">Event & Mobilization Officers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">2</span>
                      <span className="text-gray-700">Security & Risk Team</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Total Members Nationwide</h3>
                <p className="text-3xl font-bold text-gray-900">518 <span className="text-lg text-gray-600">members across 37 states</span></p>
              </div>
            </div>

            {/* National Level Section */}
            <div className={activeTab === "national" ? "block" : "hidden"}>
              <div className="border-l-4 border-red-500 pl-4 mb-6">
                <h2 className="text-2xl font-bold text-gray-800">National Team</h2>
                <p className="text-gray-600">Central leadership and strategic direction</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-red-800 mb-4">Responsibilities</h3>
                  <ul className="list-disc pl-5 space-y-2 text-gray-700">
                    <li>High-level decision making</li>
                    <li>National media and government engagement</li>
                    <li>Setting policies and strategies</li>
                    <li>Organizing national events</li>
                    <li>Handling legal and security challenges</li>
                    <li>International representation</li>
                  </ul>
                </div>

                <div className="bg-indigo-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-indigo-800 mb-4">Team Structure (25 total)</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">1</span>
                      <span className="text-gray-700">National Chairperson</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">3</span>
                      <span className="text-gray-700">Vice-Chairpersons</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">4</span>
                      <span className="text-gray-700">Public Relations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">3</span>
                      <span className="text-gray-700">Legal & Compliance</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">5</span>
                      <span className="text-gray-700">Mobilization & Strategy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">3</span>
                      <span className="text-gray-700">Security & Risk Advisors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded">6</span>
                      <span className="text-gray-700">State Liaison Officers</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-2">Total Members Nationwide</h3>
                <p className="text-3xl font-bold text-gray-900">25 <span className="text-lg text-gray-600">central leadership members</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mt-12 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Nationwide Structure Summary
            </h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Team Size Per Unit
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Total Members Nationwide
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      Local Government
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      9 per LGA
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      6,966
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      State Level
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      14 per state
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      518
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      National Level
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      25 total
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      25
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      <strong>Total</strong>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      &nbsp;
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">
                      7,509 Members
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}