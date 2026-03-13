import React from 'react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold mb-6">Welcome to Landing</h1>
        <p className="text-xl mb-8 opacity-90">You've successfully arrived after the shader animation!</p>
        <div className="space-y-4">
          <p className="text-lg opacity-80">This is your landing page where the main application content will go.</p>
          <button 
            onClick={() => window.location.href = '/'}
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Back to Animation
          </button>
        </div>
      </div>
    </div>
  )
}