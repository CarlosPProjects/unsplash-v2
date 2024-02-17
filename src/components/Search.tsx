"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex gap-2 items-center px-4 py-2 border border-gray-500 rounded-md "
    >
      <SearchIcon className="w-4 h-4 text-secondary" />
      <input
        type="text"
        placeholder="Search hight quality images"
        className="text-md text-secondary font-light outline-none bg-transparent placeholder:text-secondary placeholder:opacity-50 flex-1"
      />
    </form>
  );
};

export default Search;
