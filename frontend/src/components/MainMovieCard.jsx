import React, { useEffect, useState } from "react";
import mainMovie from "../images/main-movie.jpg"
export default function MainMovieCard(){

    
    return(
        <div className="max-h-4/6">
            <div className="h-full relative">
                <img className="filter brightness-110 contrast-125 object-contain w-full" src={mainMovie} alt="Random main movie" />
                <div className="mt-40 absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-gradient" />
            </div>
        </div>
    )
}