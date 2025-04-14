import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar - Responsive */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-gray-800">NNGA</span>
              </div>
            </div>
            
            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
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

        {/* Mobile Navigation */}
        <div className="sm:hidden" id="mobile-menu">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              href="/"
              className="bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              About Us
            </Link>
            <Link
              href="/policy"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Policy
            </Link>
            <Link
              href="/contact"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Contact Us
            </Link>
            <Link
              href="/structure"
              className="border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
            >
              Structure
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl sm:tracking-tight lg:text-5xl">
            Naija NextGen Alliance
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-lg text-gray-500 sm:mt-6">
            Join our community and make a difference in people&apos;s lives.
          </p>
        </div>

        {/* Call to Action Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Dear Fellow Nigerian,</h2>
          <div className="prose prose-indigo text-gray-600">
            <p>
              Our nation is at a crossroads. Every day, we face corruption, insecurity, poor leadership, and economic hardship. But in the midst of these challenges lies an opportunity the opportunity to create lasting, people-driven change.
            </p>
            <p className="font-semibold mt-4">
              This is not about politics.<br />
              It's not about tribe.<br />
              It's not about religion.<br />
              It's about our future.
            </p>
            <p className="mt-4">
              We are building a nationwide, grassroots community of courageous, visionary Nigerians who are ready to reform this country from the ground up starting with awareness, unity, and collective action.
            </p>
          </div>
        </div>

        {/* Mission Statement Section */}
        <div className="mt-8 bg-indigo-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-indigo-800 mb-4">🎯 Mission Statement</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="flex-shrink-0 text-indigo-600 mr-2">•</span>
              <span><strong>National Unity:</strong> Bringing Nigerians together beyond tribal, religious, and political differences</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-indigo-600 mr-2">•</span>
              <span><strong>Political Awareness:</strong> Educating citizens about their rights, elections, and governance</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-indigo-600 mr-2">•</span>
              <span><strong>Accountability & Transparency:</strong> Demanding responsibility from leaders</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-indigo-600 mr-2">•</span>
              <span><strong>Economic & Social Reform:</strong> Advocating for policies that improve living conditions</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-indigo-600 mr-2">•</span>
              <span><strong>Youth & Grassroots Engagement:</strong> Empowering young Nigerians and local communities</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-indigo-600 mr-2">•</span>
              <span><strong>Peaceful Advocacy:</strong> Promoting nonviolent methods of protest and activism</span>
            </li>
            <li className="flex items-start">
              <span className="flex-shrink-0 text-indigo-600 mr-2">•</span>
              <span><strong>Community Mobilization:</strong> Establishing teams in all 36 states and 774 local governments</span>
            </li>
          </ul>
        </div>

        {/* Get Involved Section */}
        <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">📌 How You Can Get Involved</h2>
          <ul className="space-y-3 text-gray-600 mb-6">
            <li>Join our local/state team in your area</li>
            <li>Participate in discussions and planning meetings</li>
            <li>Help raise awareness through social media and community events</li>
            <li>Engage with local leaders, youth groups, and activists</li>
          </ul>

          <div className="bg-blue-50 p-4 rounded-md">
            <p className="text-blue-800 mb-3">
              If you're interested, please read our <Link href="/policy" className="font-semibold underline">Policy</Link>, <Link href="/terms" className="font-semibold underline">Terms and Conditions</Link>, and <Link href="/criteria" className="font-semibold underline">Acceptance Criteria</Link>.
            </p>
            <p className="text-blue-800">
              If you agree to the terms and meet the criteria, you can <Link href="/register" className="font-semibold underline">register here</Link> to get started.
            </p>
          </div>
        </div>

       
        {/* Features Section */}
        <div className="mt-12 px-2">
          <h2 className="text-xl font-bold text-gray-900 text-center mb-6 sm:text-2xl">
            Why Choose NNGA?
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-3">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-md font-medium text-gray-900 mb-1 sm:text-lg">Make an Impact</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Connect with meaningful causes and create real change in your community.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-3">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </div>
              <h3 className="text-md font-medium text-gray-900 mb-1 sm:text-lg">Build Skills</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Gain valuable experience and develop new skills through volunteering.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="text-indigo-600 mb-3">
                <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="text-md font-medium text-gray-900 mb-1 sm:text-lg">Join a Community</h3>
              <p className="text-sm text-gray-500 sm:text-base">
                Meet like-minded people and be part of a supportive network.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}