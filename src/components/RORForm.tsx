"use client"

import type React from "react"
import { useState } from "react"
import { HelpCircle } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

function RORForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    location: "remote",
    state: "",
    workPermit: "citizen",
    roleDesignation: "",
    experienceLevel: "junior",
    startDate: "",
    employeeCount: 1,
    budget: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    companyName: "",
    workPermit: "",
    roleDesignation: "",
    budget: "",
  })

  const validateEmail = (email: string) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors = {
      name: !formData.name ? "Please fill what do you liked to be called?" : "",
      email: !validateEmail(formData.email) ? "Please fill your email correctly" : "",
      companyName: !formData.companyName ? "Company name is required" : "",
      workPermit: !formData.workPermit ? "Work permit status is required" : "",
      roleDesignation: !formData.roleDesignation ? "Role designation is required" : "",
      budget: !formData.budget ? "Budget per position is required" : "",
    }

    setErrors(newErrors)

    if (Object.values(newErrors).every((error) => !error)) {
      const submissionId = Date.now().toString()
      localStorage.setItem(`ror_${submissionId}`, JSON.stringify(formData))
      navigate(`/view/ror/${submissionId}`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 w-full max-w-[800px]">
        <Link to="/" className="text-purple-600 hover:text-purple-700 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Remote Onboarding Request</h1>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Enter your email"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Company Name</label>
            <input
              type="text"
              value={formData.companyName}
              onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter company name"
            />
            {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
              <select
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="remote">Remote</option>
                <option value="office">Office</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
              <select
                value={formData.state}
                onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Anywhere in U.S.</option>
                <option value="ca">California</option>
                <option value="ny">New York</option>
                <option value="tx">Texas</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Work Permit</label>
              <select
                value={formData.workPermit}
                onChange={(e) => setFormData({ ...formData, workPermit: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="citizen">Citizen</option>
                <option value="greencard">Green Card</option>
                <option value="h1b">H1-B Visa</option>
                <option value="other">Other</option>
              </select>
              {errors.workPermit && <p className="text-red-500 text-sm mt-1">{errors.workPermit}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Experience Level</label>
              <select
                value={formData.experienceLevel}
                onChange={(e) => setFormData({ ...formData, experienceLevel: e.target.value })}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="junior">Junior</option>
                <option value="mid">Mid</option>
                <option value="senior">Senior</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role Designation</label>
            <input
              type="text"
              value={formData.roleDesignation}
              onChange={(e) => setFormData({ ...formData, roleDesignation: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter role designation"
            />
            {errors.roleDesignation && <p className="text-red-500 text-sm mt-1">{errors.roleDesignation}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tentative Start Date</label>
            <input
              type="date"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Number of employees for this role</label>
            <div className="flex items-center gap-4">
              <input
                type="range"
                min="1"
                max="100"
                value={formData.employeeCount}
                onChange={(e) => setFormData({ ...formData, employeeCount: Number.parseInt(e.target.value) })}
                className="flex-1 h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
              />
              <span className="w-16 text-center font-medium">{formData.employeeCount}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Budget per position</label>
            <input
              type="number"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter budget amount"
            />
            {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition duration-200 text-lg font-medium"
          >
            Get Service Order
          </button>
        </form>

        <div className="mt-8 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
          <HelpCircle size={16} />
          <p>Need help, reach us at support@deerspot.io</p>
        </div>
      </div>
    </div>
  )
}

export default RORForm
