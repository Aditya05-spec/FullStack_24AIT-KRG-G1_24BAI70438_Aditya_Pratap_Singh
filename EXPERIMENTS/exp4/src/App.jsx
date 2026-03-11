import { useState } from 'react'
import './App.css'

function App() {
  // State for form data
  const [formData, setFormData] = useState({
    jobTitle: '',
    companyName: '',
    location: '',
    jobType: '',
    salary: '',
    experience: '',
    description: '',
    requirements: '',
    benefits: '',
    contactEmail: '',
    postedDate: ''
  })

  // State for storing all job postings
  const [jobPostings, setJobPostings] = useState([])

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate required fields
    if (!formData.jobTitle || !formData.companyName || !formData.location || !formData.description) {
      alert('Please fill in all required fields (Job Title, Company Name, Location, and Description)')
      return
    }

    // Create new job posting with unique ID and current date
    const newJobPosting = {
      ...formData,
      id: Date.now(), // Simple unique ID
      postedDate: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    }

    // Add new job posting to the list
    setJobPostings(prev => [newJobPosting, ...prev])

    // Reset form
    setFormData({
      jobTitle: '',
      companyName: '',
      location: '',
      jobType: '',
      salary: '',
      experience: '',
      description: '',
      requirements: '',
      benefits: '',
      contactEmail: '',
      postedDate: ''
    })

    // Success message
    alert('Job posting created successfully!')
  }

  // Delete job posting
  const deleteJobPosting = (id) => {
    if (confirm('Are you sure you want to delete this job posting?')) {
      setJobPostings(prev => prev.filter(job => job.id !== id))
    }
  }

  // Job Card Component
  const JobCard = ({ job, onDelete }) => (
    <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300">
      {/* Job Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{job.jobTitle}</h3>
          <p className="text-lg text-blue-600 font-semibold">{job.companyName}</p>
          <div className="flex items-center text-gray-600 mt-2">
            <span className="mr-4">📍 {job.location}</span>
            {job.jobType && <span className="mr-4">💼 {job.jobType}</span>}
            {job.salary && <span>💰 ${job.salary}</span>}
          </div>
        </div>
        <button
          onClick={() => onDelete(job.id)}
          className="text-red-500 hover:text-red-700 text-xl font-bold ml-4"
          title="Delete job posting"
        >
          ✖️
        </button>
      </div>

      {/* Experience Level */}
      {job.experience && (
        <div className="mb-3">
          <span className="inline-block bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
            🎯 Experience: {job.experience}
          </span>
        </div>
      )}

      {/* Job Description */}
      <div className="mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">Job Description:</h4>
        <p className="text-gray-600 leading-relaxed">{job.description}</p>
      </div>

      {/* Requirements */}
      {job.requirements && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Requirements:</h4>
          <p className="text-gray-600 leading-relaxed">{job.requirements}</p>
        </div>
      )}

      {/* Benefits */}
      {job.benefits && (
        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
          <p className="text-gray-600 leading-relaxed">{job.benefits}</p>
        </div>
      )}

      {/* Footer */}
      <div className="border-t pt-4 mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          📅 Posted: {job.postedDate}
        </div>
        {job.contactEmail && (
          <a
            href={`mailto:${job.contactEmail}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
          >
            📧 Apply Now
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Job Posting Portal</h1>
          <p className="text-lg text-gray-600">Create and manage job postings for your company</p>
        </div>

        {/* Job Posting Form */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">
            Create New Job Posting
          </h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div>
              <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                Job Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="e.g., Senior Frontend Developer"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Company Name */}
            <div>
              <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="e.g., TechCorp Solutions"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="e.g., San Francisco, CA / Remote"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Job Type */}
            <div>
              <label htmlFor="jobType" className="block text-sm font-medium text-gray-700 mb-1">
                Job Type
              </label>
              <select
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

            {/* Salary */}
            <div>
              <label htmlFor="salary" className="block text-sm font-medium text-gray-700 mb-1">
                Salary Range
              </label>
              <input
                type="text"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleInputChange}
                placeholder="e.g., 80,000 - 120,000"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Experience */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                Experience Level
              </label>
              <select
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="">Select Experience Level</option>
                <option value="Entry Level (0-1 years)">Entry Level (0-1 years)</option>
                <option value="Junior (1-3 years)">Junior (1-3 years)</option>
                <option value="Mid-level (3-5 years)">Mid-level (3-5 years)</option>
                <option value="Senior (5-8 years)">Senior (5-8 years)</option>
                <option value="Lead (8+ years)">Lead (8+ years)</option>
              </select>
            </div>

            {/* Contact Email */}
            <div className="md:col-span-2">
              <label htmlFor="contactEmail" className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email
              </label>
              <input
                type="email"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleInputChange}
                placeholder="e.g., careers@company.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>

            {/* Job Description */}
            <div className="md:col-span-2">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Job Description <span className="text-red-500">*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Describe the job role, responsibilities, and what makes it exciting..."
                rows="4"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Requirements */}
            <div className="md:col-span-2">
              <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-1">
                Requirements
              </label>
              <textarea
                id="requirements"
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="List the required skills, qualifications, and experience..."
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Benefits */}
            <div className="md:col-span-2">
              <label htmlFor="benefits" className="block text-sm font-medium text-gray-700 mb-1">
                Benefits & Perks
              </label>
              <textarea
                id="benefits"
                name="benefits"
                value={formData.benefits}
                onChange={handleInputChange}
                placeholder="e.g., Health insurance, 401k, Flexible hours, Remote work, Stock options..."
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-md hover:from-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition duration-200 font-semibold text-lg"
              >
                🚀 Create Job Posting
              </button>
            </div>
          </form>
        </div>

        {/* Job Postings Section */}
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Job Postings ({jobPostings.length})
            </h2>
            {jobPostings.length > 0 && (
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to delete all job postings?')) {
                    setJobPostings([])
                  }
                }}
                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-200"
              >
                🗑️ Clear All
              </button>
            )}
          </div>

          {/* Job Cards Grid */}
          {jobPostings.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No Job Postings Yet</h3>
              <p className="text-gray-500">Create your first job posting using the form above!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {jobPostings.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  onDelete={deleteJobPosting}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
