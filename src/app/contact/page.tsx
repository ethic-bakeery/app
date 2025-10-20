"use client";

import { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";

const ContactForm = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: "success" | "error", message: string} | null>(null);

  const submitContact = useMutation(api.contact.submitContact);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    try {
      await submitContact({ name, email, message, subject: subject || "General Inquiry" });
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
      setSubmitStatus({type: "success", message: "Thank you for your message! We'll get back to you within 24-48 hours."});
    } catch (error) {
      console.error(error);
      setSubmitStatus({type: "error", message: "Failed to submit form. Please try again or email us directly."});
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Email Us",
      description: "Send us a detailed message",
      value: "contact@nura.org",
      action: "mailto:contact@nura.org"
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Headquarters",
      description: "Main liaison office",
      value: "Abuja, FCT, Nigeria",
      action: null
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Response Time",
      description: "We typically reply within",
      value: "24-48 hours",
      action: null
    }
  ];

  const subjectOptions = [
    "General Inquiry",
    "Membership Questions",
    "Partnership Opportunities",
    "Media Inquiry",
    "Event Information",
    "Technical Support",
    "Volunteer Opportunities",
    "Other"
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
              <Link href="/checklist" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Checklist</Link>
              <Link href="/structure" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Structure</Link>
              <Link href="/policy" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Policies</Link>
              <Link href="/contact" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">Contact</Link>
              <Link href="/register" className="bg-green-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200">Join Us</Link>
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
          <h1 className="text-4xl font-bold mb-4">Contact NURA</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Get in touch with us for inquiries, partnerships, or to learn more about our mission
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Quick Response</span>
  <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm">National Reach</span>
  <span className="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full text-sm">24/7 Support</span>
</div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sticky top-32">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              
              <div className="space-y-6">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-4">
                      {method.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{method.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                      {method.action ? (
                        <a 
                          href={method.action} 
                          className="text-green-600 font-medium hover:text-green-700 transition-colors duration-200"
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-gray-900 font-medium">{method.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">National Coverage</h4>
                <p className="text-sm text-blue-700">
                  With teams across all 36 states and 774 local governments, we're always close by to address your concerns and inquiries.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
                <h2 className="text-2xl font-bold">Send us a Message</h2>
                <p className="text-blue-100">We're here to help and answer any questions you might have</p>
              </div>

              <div className="p-8">
                {submitStatus && (
                  <div className={`p-4 mb-6 rounded-lg border ${
                    submitStatus.type === "success" 
                      ? "bg-green-50 text-green-800 border-green-200" 
                      : "bg-red-50 text-red-800 border-red-200"
                  }`}>
                    <div className="flex items-center">
                      <svg className={`w-5 h-5 mr-2 ${submitStatus.type === "success" ? "text-green-600" : "text-red-600"}`} fill="currentColor" viewBox="0 0 20 20">
                        {submitStatus.type === "success" ? (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        ) : (
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        )}
                      </svg>
                      {submitStatus.message}
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
        Full Name *
      </label>
      <div className="relative">
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white placeholder-gray-500"
          placeholder="Enter your full name"
        />
        <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
    </div>

    <div>
      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Email Address *
      </label>
      <div className="relative">
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white placeholder-gray-500"
          placeholder="your.email@example.com"
        />
        <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      </div>
    </div>
  </div>

  <div>
    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
      Subject *
    </label>
    <select
      id="subject"
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      required
      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
    >
      <option value="" className="text-gray-500">Select a subject</option>
      {subjectOptions.map((option) => (
        <option key={option} value={option} className="text-gray-900">{option}</option>
      ))}
    </select>
  </div>

 <div>
  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
    Message *
  </label>
  <textarea
    id="message"
    rows={6}
    value={message}
    onChange={(e) => setMessage(e.target.value)}
    required
    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 resize-none text-gray-900 bg-white placeholder-gray-500"
    placeholder="Please provide details about your inquiry, question, or how we can assist you..."
  />
</div>

  <div>
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-full py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center justify-center ${
        isSubmitting 
          ? 'bg-green-400 text-white cursor-not-allowed' 
          : 'bg-green-600 text-white hover:bg-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
      }`}
    >
      {isSubmitting ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Sending Message...
        </>
      ) : (
        <>
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>
          Send Message
        </>
      )}
    </button>
  </div>

  <div className="text-center">
    <p className="text-sm text-gray-500">
      We respect your privacy and will never share your information with third parties.
    </p>
  </div>
</form>
              </div>
            </div>

            {/* Additional Support */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Quick Support</h4>
                <p className="text-sm text-gray-600">For urgent matters, expect faster response times</p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Secure Communication</h4>
                <p className="text-sm text-gray-600">All your information is protected and confidential</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
