import React from 'react'

const SearchSortBar = () => {
  return (
    <div className="mb-4 flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            placeholder="Search by title or author"
            className="flex-1 rounded-lg border border-slate-300 px-4 py-2 text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
          <select className="rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm outline-none focus:border-indigo-500">
            <option>Top rated</option>
            <option>Newest</option>
            <option>Title A to Z</option>
          </select>
        </div>
  )
}

export default SearchSortBar
