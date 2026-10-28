import React from 'react'

const Book = () => {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 transition hover:shadow-md">
            <div className="flex h-28 items-center justify-center bg-indigo-50 text-4xl">📘</div>
            <div className="p-4">
              <h3 className="font-semibold text-slate-800">Dune</h3>
              <p className="mb-3 text-sm text-slate-500">Frank Herbert</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-amber-500">★ 4.8</span>
                <span className="rounded-md bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700">Available</span>
              </div>
            </div>
          </div>
  )
}

export default Book
