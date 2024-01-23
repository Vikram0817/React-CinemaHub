import React, { useContext, useState } from "react";
import { baseImageUrl } from "../baseImageUrl";

export default function MovieCard({
  id,
  poster,
  language,
  title,
  releaseDate,
  rating,
  description}) {
    
  const baseURL = useContext(baseImageUrl);
  const [isMouseOver, setIsMouseOver] = useState(false);

  function handleMouseOver() {
    setIsMouseOver(true);
  }

  function handleMouseOut() {
    setIsMouseOver(false);
  }

  function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="ml-8 relative"
    >
      <img
        className="max-h-36 max-w-60 w-full h-full transform scale-100 transition-transform duration-300 hover:scale-125"
        src={`${baseURL}${poster}`}
        alt="recomended movie"
      />
  {isMouseOver && (
    <div className="flex flex-col absolute w-full bottom-0 p-3 bg-black bg-opacity-80 text-white rounded-t-md">
      <p className="text-lg font-semibold">{title}</p>
      <div className="flex items-center mt-1">
        <span className="text-sm">Year of Release: {releaseDate.split("-")[0]}</span>
        <span className="ml-2 text-sm">Rating: {round(rating, 1)} ☆</span>
      </div>
    </div>
  )}

    </div>
  );
}
