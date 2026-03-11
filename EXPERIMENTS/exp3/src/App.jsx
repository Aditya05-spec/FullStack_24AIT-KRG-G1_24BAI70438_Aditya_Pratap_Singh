import { useState } from 'react'
import './App.css'

function App() {
  // State for form data
  const [jobData, setJobData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    salaryMin: '',
    salaryMax: '',
    experienceLevel: '',
    jobType: '',
    industry: '',
    skills: '',
    description: '',
    applicationDeadline: ''
  })

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setJobData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Job Search Data:', jobData)
  }

  // Reset form
  const resetForm = () => {
    setJobData({
      jobTitle: '',
      companyName: '',
      location: '',
      salaryMin: '',
      salaryMax: '',
      experienceLevel: '',
      jobType: '',
      industry: '',
      skills: '',
      description: '',
      applicationDeadline: ''
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Job Search Portal</h1>
          <p className="text-lg text-gray-600">Find your dream job by filling out the details below</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Job Search Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              Job Search Form
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Job Title */}
              <div>
                <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Title / Position
                </label>
                <input
                  type="text"
                  id="jobTitle"
                  name="jobTitle"
                  value={jobData.jobTitle}
                  onChange={handleInputChange}
                  placeholder="e.g., Frontend Developer"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Company Name */}
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                  Company Name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={jobData.companyName}
                  onChange={handleInputChange}
                  placeholder="e.g., Tech Solutions Inc."
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={jobData.location}
                  onChange={handleInputChange}
                  placeholder="e.g., New York, NY"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Salary Range */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="salaryMin" className="block text-sm font-medium text-gray-700 mb-1">
                    Min Salary ($)
                  </label>
                  <input
                    type="number"
                    id="salaryMin"
                    name="salaryMin"
                    value={jobData.salaryMin}
                    onChange={handleInputChange}
                    placeholder="50000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="salaryMax" className="block text-sm font-medium text-gray-700 mb-1">
                    Max Salary ($)
                  </label>
                  <input
                    type="number"
                    id="salaryMax"
                    name="salaryMax"
                    value={jobData.salaryMax}
                    onChange={handleInputChange}
                    placeholder="100000"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <label htmlFor="experienceLevel" className="block text-sm font-medium text-gray-700 mb-1">
                  Experience Level
                </label>
                <select
                  id="experienceLevel"
                  name="experienceLevel"
                  value={jobData.experienceLevel}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Experience Level</option>
                  <option value="Entry Level">Entry Level (0-1 years)</option>
                  <option value="Junior">Junior (1-3 years)</option>
                  <option value="Mid-level">Mid-level (3-5 years)</option>
                  <option value="Senior">Senior (5-8 years)</option>
                  <option value="Lead">Lead (8+ years)</option>
                </select>
              </div>

              {/* Job Type */}
              <div>
                <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type
                </label>
                <select
                  id="jobType"
                  name="jobType"
                  value={jobData.jobType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Job Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Remote">Remote</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>

              {/* Industry */}
              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-1">
                  Industry
                </label>
                <select
                  id="industry"
                  name="industry"
                  value={jobData.industry}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select Industry</option>
                  <option value="Technology">Technology</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Finance">Finance</option>
                  <option value="Education">Education</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Skills */}
              <div>
                <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                  Required Skills
                </label>
                <input
                  type="text"
                  id="skills"
                  name="skills"
                  value={jobData.skills}
                  onChange={handleInputChange}
                  placeholder="e.g., React, JavaScript, Node.js, Python"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Application Deadline */}
              <div>
                <label htmlFor="applicationDeadline" className="block text-sm font-medium text-gray-700 mb-1">
                  Application Deadline
                </label>
                <input
                  type="date"
                  id="applicationDeadline"
                  name="applicationDeadline"
                  value={jobData.applicationDeadline}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Job Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                  Job Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={jobData.description}
                  onChange={handleInputChange}
                  placeholder="Describe the job responsibilities and requirements..."
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                ></textarea>
              </div>

              {/* Form Buttons */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
                >
                  Search Jobs
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-200"
                >
                  Reset Form
                </button>
              </div>
            </form>
          </div>

          {/* User Profile Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
              Job Search Profile
            </h2>
            
            <div className="space-y-4">
              {/* Show message if no data */}
              {!jobData.jobTitle && !jobData.companyName && (
                <div className="text-center py-8 text-gray-500">
                  <div className="text-4xl mb-2">📋</div>
                  <p>Start filling the form to see your job search profile!</p>
                </div>
              )}

              {/* Job Title */}
              {jobData.jobTitle && (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Job Title</h3>
                  <p className="text-blue-800 font-medium">{jobData.jobTitle}</p>
                </div>
              )}

              {/* Company */}
              {jobData.companyName && (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Company</h3>
                  <p className="text-green-800 font-medium">{jobData.companyName}</p>
                </div>
              )}

              {/* Location */}
              {jobData.location && (
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Location</h3>
                  <p className="text-purple-800 font-medium">📍 {jobData.location}</p>
                </div>
              )}

              {/* Salary Range */}
              {(jobData.salaryMin || jobData.salaryMax) && (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Salary Range</h3>
                  <p className="text-yellow-800 font-medium">
                    💰 ${jobData.salaryMin || '0'} - ${jobData.salaryMax || '∞'}
                  </p>
                </div>
              )}

              {/* Experience & Job Type */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {jobData.experienceLevel && (
                  <div className="bg-indigo-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Experience</h3>
                    <p className="text-indigo-800 font-medium">🎯 {jobData.experienceLevel}</p>
                  </div>
                )}
                
                {jobData.jobType && (
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-gray-700">Job Type</h3>
                    <p className="text-pink-800 font-medium">⏰ {jobData.jobType}</p>
                  </div>
                )}
              </div>

              {/* Industry */}
              {jobData.industry && (
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Industry</h3>
                  <p className="text-orange-800 font-medium">🏢 {jobData.industry}</p>
                </div>
              )}

              {/* Skills */}
              {jobData.skills && (
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Required Skills</h3>
                  <p className="text-teal-800 font-medium">🛠️ {jobData.skills}</p>
                </div>
              )}

              {/* Application Deadline */}
              {jobData.applicationDeadline && (
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Application Deadline</h3>
                  <p className="text-red-800 font-medium">📅 {jobData.applicationDeadline}</p>
                </div>
              )}

              {/* Job Description */}
              {jobData.description && (
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-700">Job Description</h3>
                  <p className="text-gray-800 whitespace-pre-wrap">{jobData.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
