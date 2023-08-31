"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const navigation = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }
    navigation.push(`/search/${search}`);
  };

  return (
    <form
      className="flex max-w-6xl mx-auto justify-between 
    items-center px-5"
      onSubmit={handleSubmit}
    >
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search keywords..."
        className="w-full h-14 rounded-sm placeholder-gray-500
        outline-none bg-transparent flex-1"
      />
      <button
        disabled={!search}
        className="text-amber-600 disabled:text-gray-400"
        type="submit"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;
