import Results from "@/components/Results";
import React from "react";

const page = async ({ params }) => {
  const API_KEY = process.env.API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${params.searchTerm}`
  );
  if (!res) {
    throw new Error("Error fetching data");
  }
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results && results.length === 0 && (
        <h1 className="text-center pt-6">No results found</h1>
      )}
      {results && (
        <div>
          <Results result={results} />
        </div>
      )}
    </div>
  );
};

export default page;
