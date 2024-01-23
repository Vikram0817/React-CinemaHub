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

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className="m-8 relative"
    >
      <img
        className="max-h-36 max-w-60 w-full h-full transform scale-100 transition-transform duration-300 hover:scale-125"
        src={`${baseURL}${poster}`}
        alt="recomended movie"
      />
      {isMouseOver && (
        <div className="flex flex-col absolute bottom-0 p-3 bg-black text-white">
          <p className="">{title}</p>
          <p className="">{releaseDate}</p>
          <p>{rating}</p>
        </div>
      )}
    </div>
  );
}
