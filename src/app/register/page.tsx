"use client";

import React, { useState, FormEvent } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import Link from "next/link";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  state: string;
  localGovernment: string;
  skills: string;
  experience: string;
  interests: string;
  rolePreference: string;
}

const initialFormState: FormData = {
  fullName: "",
  email: "",
  phone: "",
  state: "",
  localGovernment: "",
  skills: "",
  experience: "",
  interests: "",
  rolePreference: "",
};

// Nigerian states for dropdown
const nigerianStates = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno", 
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT", "Gombe", "Imo", 
  "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos", "Nasarawa", 
  "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto", "Taraba", 
  "Yobe", "Zamfara"
];

// Role preferences
const rolePreferences = [
  "Community Organizer",
  "Event Coordinator",
  "Media & Publicity",
  "Legal Advisory",
  "Security & Risk Management",
  "Mobilization & Strategy",
  "Policy & Advocacy",
  "Research & Data Analysis",
  "Education & Awareness",
  "Youth Empowerment",
  "Any role needed"
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [currentStep, setCurrentStep] = useState(1);
  
  const registerUser = useMutation(api.register.registerUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 3));
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);
    
    try {
      const userId = await registerUser({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        state: formData.state,
        localGovernment: formData.localGovernment,
        skills: formData.skills,
        interests: formData.interests,
        experience: formData.experience,
        rolePreference: formData.rolePreference,
        socialMedia: {
          facebook: "",
          twitter: "",
          linkedin: "",
        },
      });
      
      console.log("User registered with ID:", userId);
      setMessage({ text: "Registration successful! Welcome to NURA.", type: "success" });
      setFormData(initialFormState);
      setCurrentStep(1);
    } catch (error) {
      console.error("Registration failed:", error);
      setMessage({ 
        text: error instanceof Error ? error.message : "Registration failed. Please try again.", 
        type: "error" 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.fullName && formData.email && formData.phone;
      case 2:
        return formData.state && formData.localGovernment;
      case 3:
        return formData.skills && formData.experience;
      default:
        return false;
    }
  };

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
              <Link href="/policy" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">policy</Link>
              <Link href="/structure" className="text-gray-600 hover:text-green-600 font-medium transition-colors duration-200">Structure</Link>
              <Link href="/contact" className="text-green-600 font-semibold border-b-2 border-green-600 pb-1">Join Us</Link>
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Join NURA Movement</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Become part of the nationwide network driving positive change in Nigeria
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
  <span className="bg-blue-500/20 text-blue-200 px-3 py-1 rounded-full text-sm">Make a Difference</span>
  <span className="bg-green-500/20 text-green-200 px-3 py-1 rounded-full text-sm">Build Your Community</span>
  <span className="bg-orange-500/20 text-orange-200 px-3 py-1 rounded-full text-sm">Create Lasting Impact</span>
</div>

        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                1
              </div>
              <span className="text-sm mt-2 text-gray-600">Personal Info</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div className={`h-full transition-all duration-300 ${
                currentStep >= 2 ? 'bg-green-600' : 'bg-gray-200'
              }`}></div>
            </div>
            <div className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                2
              </div>
              <span className="text-sm mt-2 text-gray-600">Location</span>
            </div>
            <div className="flex-1 h-1 mx-4 bg-gray-200">
              <div className={`h-full transition-all duration-300 ${
                currentStep >= 3 ? 'bg-green-600' : 'bg-gray-200'
              }`}></div>
            </div>
            <div className="text-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                currentStep >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
              }`}>
                3
              </div>
              <span className="text-sm mt-2 text-gray-600">Skills & Experience</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white p-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold">Volunteer Registration</h2>
                <p className="text-blue-100">Step {currentStep} of 3</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-blue-100">Membership Requirements</div>
                <div className="text-sm">Aged 16+ • Nigerian Citizen • Support Our Mission</div>
              </div>
            </div>
          </div>

          <div className="p-8">
            {message && (
              <div className={`p-4 mb-6 rounded-lg ${
                message.type === "success" 
                  ? "bg-green-50 text-green-800 border border-green-200" 
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}>
                <div className="flex items-center">
                  <svg className={`w-5 h-5 mr-2 ${message.type === "success" ? "text-green-600" : "text-red-600"}`} fill="currentColor" viewBox="0 0 20 20">
                    {message.type === "success" ? (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    ) : (
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    )}
                  </svg>
                  {message.text}
                </div>
              </div>
            )}
            <form onSubmit={handleSubmit}>
  {/* Step 1: Personal Information */}
  {currentStep === 1 && (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <div className="relative">
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white placeholder-gray-500"
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
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white placeholder-gray-500"
              placeholder="your.email@example.com"
            />
            <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
        
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <div className="relative">
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white placeholder-gray-500"
              placeholder="+234 800 000 0000"
            />
            <svg className="absolute right-3 top-3.5 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-blue-50 rounded-lg p-4">
        <div className="flex items-start">
          <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <p className="text-sm text-blue-700">
            Your information is secure and will only be used for NURA organizational purposes. 
            By proceeding, you agree to our <Link href="/terms" className="font-semibold underline">Terms and Conditions</Link>.
          </p>
        </div>
      </div>
    </div>
  )}

  {/* Step 2: Location Information */}
  {currentStep === 2 && (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            State of Residence *
          </label>
          <select
            id="state"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white"
          >
            <option value="" className="text-gray-500">Select your state</option>
            {nigerianStates.map(state => (
              <option key={state} value={state} className="text-gray-900">{state}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="localGovernment" className="block text-sm font-medium text-gray-700 mb-2">
            Local Government Area *
          </label>
          <input
            type="text"
            id="localGovernment"
            name="localGovernment"
            value={formData.localGovernment}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white placeholder-gray-500"
            placeholder="Enter your LGA"
          />
        </div>
      </div>

      <div>
        <label htmlFor="rolePreference" className="block text-sm font-medium text-gray-700 mb-2">
          Preferred Role (Optional)
        </label>
        <select
          id="rolePreference"
          name="rolePreference"
          value={formData.rolePreference}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white"
        >
          <option value="" className="text-gray-500">Select preferred role</option>
          {rolePreferences.map(role => (
            <option key={role} value={role} className="text-gray-900">{role}</option>
          ))}
        </select>
      </div>
    </div>
  )}

  {/* Step 3: Skills & Experience */}
  {currentStep === 3 && (
    <div className="space-y-6">
      <div>
        <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-2">
          Skills & Expertise *
        </label>
        <textarea
          id="skills"
          name="skills"
          rows={3}
          value={formData.skills}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white placeholder-gray-500"
          placeholder="List your relevant skills, expertise, or areas of interest (e.g., Community organizing, Public speaking, Legal advisory, Social media management, Event planning...)"
        />
      </div>
      
      <div>
        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-2">
          Previous Experience *
        </label>
        <textarea
          id="experience"
          name="experience"
          rows={4}
          value={formData.experience}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white placeholder-gray-500"
          placeholder="Describe your previous volunteer experience, work experience, or any relevant activities that demonstrate your commitment to community service and positive change..."
        />
      </div>

      <div>
        <label htmlFor="interests" className="block text-sm font-medium text-gray-700 mb-2">
          Areas of Interest (Optional)
        </label>
        <textarea
          id="interests"
          name="interests"
          rows={2}
          value={formData.interests}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 !text-gray-900 bg-white placeholder-gray-500"
          placeholder="Specific areas you're passionate about (e.g., Youth empowerment, Education reform, Human rights advocacy, Political awareness...)"
        />
      </div>
    </div>
  )}

  {/* Navigation Buttons */}
  <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
    <div>
      {currentStep > 1 && (
        <button
          type="button"
          onClick={prevStep}
          className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200"
        >
          Previous
        </button>
      )}
    </div>
    
    <div>
      {currentStep < 3 ? (
        <button
          type="button"
          onClick={nextStep}
          disabled={!isStepValid()}
          className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-200 ${
            isStepValid() 
              ? 'bg-green-600 text-white hover:bg-green-700' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      ) : (
        <button
          type="submit"
          disabled={isSubmitting || !isStepValid()}
          className={`px-8 py-3 rounded-lg font-semibold transition-colors duration-200 ${
            isSubmitting 
              ? 'bg-green-400 text-white cursor-not-allowed' 
              : isStepValid()
              ? 'bg-green-600 text-white hover:bg-green-700'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Processing Registration...
            </span>
          ) : 'Complete Registration'}
        </button>
      )}
    </div>
  </div>
</form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Secure Registration</h4>
            <p className="text-sm text-gray-600">Your information is protected and used only for organizational purposes</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Join a Community</h4>
            <p className="text-sm text-gray-600">Connect with like-minded Nigerians driving positive change</p>
          </div>

          <div className="bg-white rounded-xl p-6 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h4 className="font-semibold text-gray-900 mb-2">Make an Impact</h4>
            <p className="text-sm text-gray-600">Contribute to building a better Nigeria through structured advocacy</p>
          </div>
        </div>
      </div>
    </div>
  );
}
