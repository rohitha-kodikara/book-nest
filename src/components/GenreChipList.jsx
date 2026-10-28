import React from 'react'
import GenreChip from './GenreChip';

const GenreChipList = () => {
    const genres = ["Sci-fi", "Fantasy", "Mystery", "Biography"];
  return (
    <div className="mb-4 flex flex-wrap items-center gap-2">
          {genres.map((genre) => (
            <GenreChip key={genre} genre={genre} />
          ))}
          <label className="ml-auto flex items-center gap-2 text-sm text-slate-600">
            <input type="checkbox" defaultChecked className="h-4 w-4 accent-indigo-600" />
            Available only
          </label>
        </div>
  )
}

export default GenreChipList
