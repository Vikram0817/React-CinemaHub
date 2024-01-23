import React, { useContext } from "react"
import TopBar from "./components/TopBar";
import { baseImageUrl } from "./baseImageUrl";
import MainMovieCard from "./components/MainMovieCard";
import Footer from "./components/Footer";
import { RecoilRoot } from "recoil";
import MoviesSlides from "./components/MoviesSlides";

function App() {
  return (
    <div className="h-full bg-black">
      <TopBar></TopBar>
      <baseImageUrl.Provider value={"https://image.tmdb.org/t/p/w500"}>
        <MainMovieCard></MainMovieCard>
        <RecoilRoot>  
          <MoviesSlides></MoviesSlides>
        </RecoilRoot>
      </baseImageUrl.Provider>
      <Footer></Footer>
    </div>
  )
}

export default App;
