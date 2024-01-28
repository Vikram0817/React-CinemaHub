import React, { useEffect, useState } from "react";

export default function TopBar(){
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
            const scrollDown  =window.scrollY;
            setScrolled(() => {
                return scrollDown > 1 ? true : false
            })
        }

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    })

    return(
        <div className={`flex justify-between text-yellow-400 z-10 w-full transition-all duration-300 
        ${scrolled ? 'bg-black fixed' : 'bg-transparent absolute'}`}>
            {/* heading/Logo */}
            <h1 className="text-3xl font-bold p-2 ml-4 drop-shadow-md">CinemaHub</h1>   
            <div className="flex items-center p-2">
            <form className="flex items-center">   
                <div className="relative w-full">
                    {/* search-bar */}
                    <input type="text" className="bg-transparent border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Search Movies, Series, Tv Shows..." required />
                </div>
                <button className="inline-flex items-center py-2.5 px-3 ms-2 text-sm font-medium text-white hover:text-gray-600 focus:ring-4 focus:outline-none focus:ring-gray-100">
                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </button>
            </form>
            {/* bell icon */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-2 hover:text-gray-600 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </svg>
            {/* user logo */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mr-4 hover:text-gray-600 text-white">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

            </div>
        </div>
    )
}