import React from "react";

const Results = ({ result }) => {
  return (
    <div>
      {result.map((result) => (
        <div key={result.id}>{result.original_title}</div>
      ))}
    </div>
  );
};

export default Results;
