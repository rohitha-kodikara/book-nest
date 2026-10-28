import React from 'react'

const Pagination = () => {
  return (
     <div className="flex items-center justify-center gap-2 text-sm">
          <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-100">← Prev</button>
          <button className="h-9 w-9 rounded-lg bg-indigo-600 font-medium text-white">1</button>
          <button className="h-9 w-9 rounded-lg text-slate-600 hover:bg-slate-100">2</button>
          <button className="h-9 w-9 rounded-lg text-slate-600 hover:bg-slate-100">3</button>
          <button className="rounded-lg border border-slate-300 px-3 py-1.5 text-slate-600 hover:bg-slate-100">Next →</button>
        </div>
  )
}

export default Pagination
