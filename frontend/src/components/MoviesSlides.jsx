import React from "react";
import MovieSlide from "./MovieSlide";
import { RecoilRoot, useRecoilValue } from "recoil";
import movieAtoms from "../movieData";

export default function MoviesSlides(){

    const nowPlayingMovies = useRecoilValue(movieAtoms["now_playing"]);
    const popularMovies = useRecoilValue(movieAtoms["popular"]);
    const topRatedMovies = useRecoilValue(movieAtoms["top_rated"]);
    const upComingMovies = useRecoilValue(movieAtoms["upcoming"]);
    
    return(
        <>
            <MovieSlide data={nowPlayingMovies} lable="Recomended for you"></MovieSlide>
            <MovieSlide data={popularMovies} lable="Popular"></MovieSlide>
            <MovieSlide data={topRatedMovies} lable="Top Rated"></MovieSlide>
            <MovieSlide data={upComingMovies} lable="Up-Coming"></MovieSlide>
        </>
    )
}