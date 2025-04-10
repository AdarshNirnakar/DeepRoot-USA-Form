"use client"

import type React from "react"
import { useState } from "react"
import { HelpCircle } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

function EORForm() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    companyName: "",
    employeeCount: 1,
    annualCTC: "",
    contractDuration: "3",
  })

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    companyName: "",
    annualCTC: "",
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
      annualCTC: !formData.annualCTC ? "Annual CTC is required" : "",
    }

    setErrors(newErrors)

    if (Object.values(newErrors).every((error) => !error)) {
      const submissionId = Date.now().toString()
      localStorage.setItem(`eor_${submissionId}`, JSON.stringify(formData))
      navigate(`/view/eor/${submissionId}`)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-12 w-full max-w-[800px]">
        <Link to="/" className="text-purple-600 hover:text-purple-700 mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">Thank You for your interest!</h1>

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
              <label className="block text-sm font-medium text-gray-700 mb-2">Your Email (We promise no spam)</label>
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
            <label className="block text-sm font-medium text-gray-700 mb-2">Annual CTC per EOR employee</label>
            <input
              type="number"
              value={formData.annualCTC}
              onChange={(e) => setFormData({ ...formData, annualCTC: e.target.value })}
              className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter annual CTC"
            />
            {errors.annualCTC && <p className="text-red-500 text-sm mt-1">{errors.annualCTC}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Contract Duration</label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-purple-50">
                <input
                  type="radio"
                  value="3"
                  checked={formData.contractDuration === "3"}
                  onChange={(e) => setFormData({ ...formData, contractDuration: e.target.value })}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">3 Months</span>
              </label>
              <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-purple-50">
                <input
                  type="radio"
                  value="6"
                  checked={formData.contractDuration === "6"}
                  onChange={(e) => setFormData({ ...formData, contractDuration: e.target.value })}
                  className="form-radio text-purple-600"
                />
                <span className="ml-2">6 Months or More</span>
              </label>
            </div>
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

export default EORForm
