import React from 'react'

const ResultsBar = () => {
  return (
    <div className="mb-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
          <span className="text-slate-500">24 books found</span>
          <button className="font-medium text-indigo-600 hover:underline">✕ Clear filters</button>
        </div>
  )
}

export default ResultsBar
