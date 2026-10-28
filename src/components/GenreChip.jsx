import React from 'react'

const GenreChip = ({ genre }) => {
  return (
     <button key={genre} className="rounded-full border border-slate-300 px-4 py-1 text-sm text-slate-600 hover:bg-slate-100">
              {genre}
            </button>
  )
}

export default GenreChip
