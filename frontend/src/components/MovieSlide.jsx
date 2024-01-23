import React, { useEffect, useState } from "react"
import MovieCard from "./MovieCard"
import { useRecoilValue } from "recoil"
import { nowPlaying } from "../movieData"

export default function MovieSlides(){

    const [movieIndex, setMovieIndex] = useState(0);
    const [windowsWidth, setWindowsWidth] = useState(window.innerWidth);
    const cardsPerPage = getCardsPerPage(windowsWidth)

    useEffect(() => {
        function handleResize() {
            setWindowsWidth(window.innerWidth)
        }

        // add listner on mount
        window.addEventListener("resize", handleResize);

        // remove on unmount
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    useEffect(() => {
        // change card per page when window resizes
        setMovieIndex(0);
    }, [windowsWidth]);

    function getCardsPerPage(width){
        if(width < 640){
            return 2;
        }else if(width < 768){
            return 3;
        }else {
            return 5
        }
    }

    const nowPlayingMovies = useRecoilValue(nowPlaying);

    const filteredData = nowPlayingMovies.map(val => ({
        backdrop_path: val.backdrop_path,
        id: val.id,
        original_language: val.original_language,
        title: val.title,
        release_date: val.release_date,
        vote_average: val.vote_average,
        overview: val.overview
    }))

    const visibleMovies = filteredData.slice(movieIndex, movieIndex + cardsPerPage)

    function handleNext() {
        setMovieIndex(prevVal => prevVal + cardsPerPage)
    }

    function handlePrev() {
        setMovieIndex(prevVal => prevVal - cardsPerPage)
    }

    return(
        <>
            <h2 className="text-2xl text-white text-bold m-8">Recomended for You</h2>
            <div className="flex items-center">
            {movieIndex >= 5 && 
            <svg onClick={handlePrev} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20 text-white m-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>}
            {visibleMovies.map(movie => 
            <MovieCard 
                key={movie.id} 
                id={movie.id} 
                poster={movie.backdrop_path} 
                language={movie.original_language}
                title={movie.title}
                releaseDate={movie.release_date}
                rating={movie.vote_average}
                description={movie.overview}
            ></MovieCard>)}
            <svg onClick={handleNext} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-20 h-20 text-white m-auto">
            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>

            </div>
        </>
    )
}