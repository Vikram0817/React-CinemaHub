import React, { useContext } from "react";
import { baseImageUrl } from "../baseImageUrl";

export default function MainMovieCard(){

    const baseURL = useContext(baseImageUrl)
    
    return(
        <div className="h-4/6">
            <div style={{ backgroundColor: '#F3D034' }} className="border-2 border-black h-full bg-black relative overflow-hidden">
                <img className="w-full h-full object-contain max-h-96" src={`${baseURL}/A7EByudX0eOzlkQ2FIbogzyazm2.jpg`} alt="Random main movie" />
                <div className=" mt-40 absolute inset-0 bg-gradient-to-b from-transparent to-black mix-blend-gradient" />
            </div>
        </div>
    )
}