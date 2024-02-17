"use client"

import { SearchIcon } from "lucide-react"

const Search = () => {

    const handleSubmit = () => {

    }

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2 items-center px-4 py-2 border border-gray-500 rounded-md ">
        <SearchIcon className="w-4 h-4 text-secondary" />
        <input type="text" placeholder="Busca imágenes de alta resolución" className="text-md text-secondary font-light outline-none bg-transparent placeholder:text-secondary opacity-60 flex-1" />
    </form>
  )
}

export default Search