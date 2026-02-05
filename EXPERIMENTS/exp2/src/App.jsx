import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLocation, setSelectedLocation] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [filteredJobs, setFilteredJobs] = useState([])

  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "New York, NY",
      type: "Full-time",
      category: "Engineering",
      salary: "$120,000 - $160,000",
      description: "We're looking for a senior frontend developer with React expertise...",
      posted: "2 days ago",
      logo: "https://via.placeholder.com/50x50/3B82F6/ffffff?text=TC"
    },
    {
      id: 2,
      title: "UX/UI Designer",
      company: "Design Studio",
      location: "San Francisco, CA",
      type: "Full-time",
      category: "Design",
      salary: "$90,000 - $130,000",
      description: "Join our creative team to design amazing user experiences...",
      posted: "1 day ago",
      logo: "https://via.placeholder.com/50x50/10B981/ffffff?text=DS"
    },
    {
      id: 3,
      title: "Product Manager",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      category: "Management",
      salary: "$110,000 - $150,000",
      description: "Lead product strategy and development for our growing platform...",
      posted: "3 days ago",
      logo: "https://via.placeholder.com/50x50/8B5CF6/ffffff?text=SX"
    },
    {
      id: 4,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Boston, MA",
      type: "Full-time",
      category: "Engineering",
      salary: "$130,000 - $170,000",
      description: "Analyze complex data sets to drive business insights...",
      posted: "1 week ago",
      logo: "https://via.placeholder.com/50x50/F59E0B/ffffff?text=AP"
    },
    {
      id: 5,
      title: "Marketing Specialist",
      company: "Growth Media",
      location: "Austin, TX",
      type: "Part-time",
      category: "Marketing",
      salary: "$50,000 - $70,000",
      description: "Drive digital marketing campaigns and brand awareness...",
      posted: "5 days ago",
      logo: "https://via.placeholder.com/50x50/EF4444/ffffff?text=GM"
    },
    {
      id: 6,
      title: "DevOps Engineer",
      company: "CloudTech",
      location: "Seattle, WA",
      type: "Full-time",
      category: "Engineering",
      salary: "$125,000 - $165,000",
      description: "Manage cloud infrastructure and deployment pipelines...",
      posted: "4 days ago",
      logo: "https://via.placeholder.com/50x50/06B6D4/ffffff?text=CT"
    }
  ]


  useEffect(() => {
    let filtered = jobs

    if (searchTerm) {
      filtered = filtered.filter(job =>
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    if (selectedLocation) {
      filtered = filtered.filter(job =>
        job.location.toLowerCase().includes(selectedLocation.toLowerCase())
      )
    }

    if (selectedCategory) {
      filtered = filtered.filter(job => job.category === selectedCategory)
    }

    setFilteredJobs(filtered)
  }, [searchTerm, selectedLocation, selectedCategory])

  // Initialize with all jobs
  useEffect(() => {
    setFilteredJobs(jobs)
  }, [])

  const categories = [...new Set(jobs.map(job => job.category))]
  const locations = [...new Set(jobs.map(job => job.location))]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">JobPortal</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Jobs</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Companies</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </nav>
            <div className="flex items-center space-x-4">
              <button className="text-gray-700 hover:text-blue-600 font-medium">Sign In</button>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Post Job
              </button>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button className="text-gray-700">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Find Your Dream Job
          </h2>
          <p className="text-xl sm:text-2xl mb-8 opacity-90">
            Discover thousands of job opportunities with all the information you need
          </p>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:w-1/4">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Filters</h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value=""
                      checked={selectedCategory === ''}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span className="ml-2 text-gray-700">All Categories</span>
                  </label>
                  {categories.map(category => (
                    <label key={category} className="flex items-center">
                      <input
                        type="radio"
                        name="category"
                        value={category}
                        checked={selectedCategory === category}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span className="ml-2 text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Job Type Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Job Type</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">Full-time</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">Part-time</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">Contract</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">Remote</span>
                  </label>
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-3">Salary Range</h4>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">$0 - $50k</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">$50k - $100k</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">$100k - $150k</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="text-blue-600 focus:ring-blue-500" />
                    <span className="ml-2 text-gray-700">$150k+</span>
                  </label>
                </div>
              </div>
            </div>
          </aside>

          {/* Job Listings */}
          <div className="lg:w-3/4">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {filteredJobs.length} Jobs Found
              </h2>
              <p className="text-gray-600">Find your next career opportunity</p>
            </div>

            <div className="space-y-6">
              {filteredJobs.map(job => (
                <div key={job.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow border border-gray-200">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {job.title}
                        </h3>
                        <p className="text-blue-600 font-medium mb-2">{job.company}</p>
                        <div className="flex flex-wrap items-center text-sm text-gray-600 space-x-4 mb-3">
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                            </svg>
                            {job.salary}
                          </span>
                        </div>
                        <p className="text-gray-700 text-sm mb-4 line-clamp-2">
                          {job.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{job.posted}</span>
                          <div className="flex space-x-3">
                            <button className="text-gray-400 hover:text-red-500 transition-colors">
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                              </svg>
                            </button>
                            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                              Apply Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No jobs found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}

            {/* Pagination */}
            {filteredJobs.length > 0 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Previous
                </button>
                <button className="px-3 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md">
                  1
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  2
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  3
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">JobPortal</h3>
              <p className="text-gray-400 text-sm">
                Your gateway to amazing career opportunities. Find your dream job today.
              </p>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white">Career Advice</a></li>
                <li><a href="#" className="hover:text-white">Resume Builder</a></li>
                <li><a href="#" className="hover:text-white">Salary Calculator</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">Post Jobs</a></li>
                <li><a href="#" className="hover:text-white">Browse Resumes</a></li>
                <li><a href="#" className="hover:text-white">Recruiting Solutions</a></li>
                <li><a href="#" className="hover:text-white">Employer Branding</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-gray-300 mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white">About Us</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2026 JobPortal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
