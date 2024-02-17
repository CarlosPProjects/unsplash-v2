"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState();

  const handleSubmit = () => {};

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md flex gap-4 items-center px-4 py-3 border border-background-foreground rounded-md bg-background-foreground focus-within:bg-transparent transition-colors duration-300 group"
    >
      <SearchIcon className="w-5 h-5 text-secondary opacity-50 transition-opacity duration-300 group-focus-within:opacity-100 " />
      <input
        type="text"
        placeholder="Search hight quality images"
        className="text-md text-secondary font-light outline-none caret-secondary bg-transparent placeholder:text-secondary placeholder:opacity-50 flex-1"
      />
    </form>
  );
};

export default Search;
