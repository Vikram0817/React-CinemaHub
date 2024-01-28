import React from "react"
import TopBar from "./components/TopBar";
import MainMovieCard from "./components/MainMovieCard";
import Footer from "./components/Footer";
import { RecoilRoot } from "recoil";
import MoviesSlides from "./components/MoviesSlides";

function App() {
  return (
    <div className="h-full bg-black">
      <TopBar></TopBar>
      <RecoilRoot> 
        <MainMovieCard></MainMovieCard> 
        <MoviesSlides></MoviesSlides>
      </RecoilRoot>
      <Footer></Footer>
    </div>
  )
}

export default App;
