import React from "react"
import MovieCard from "./MovieCard"
import { useRecoilValue } from "recoil"
import { nowPlaying } from "../movieData"

export default function MovieSlides(){

    const nowPlayingMovies = useRecoilValue(nowPlaying);
    console.log(nowPlayingMovies);

    const filteredData = nowPlayingMovies.map(val => ({
        backdrop_path: val.backdrop_path,
        id: val.id,
        original_language: val.original_language,
        title: val.title,
        release_date: val.release_date,
        vote_average: val.vote_average,
        overview: val.overview
    }))

    console.log(filteredData);

    return(
        <div>
            <h2 className="text-2xl text-white text-bold m-8">Recomended for You</h2>
            {filteredData.map(movie => 
            <MovieCard 
                key={movie.id} 
                id={movie.id} 
                poster={movie.backdrop_path} 
                language={movie.original_language}
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                description={movie.overview}></MovieCard>)}
        </div>
    )
}