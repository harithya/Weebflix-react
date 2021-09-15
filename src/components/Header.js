import React from 'react'
import Logo from '../assets/img/logo.png'

export default function Header() {
    return (
        <div className="py-4 bg-gray-900 container px-32 flex justify-between  md:px-5">
            <img
                src={Logo}
                className="h-10 bg-contain md:h-8" alt="logo" />
            <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 top-2.5  left-3.5  absolute" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                    type="text" placeholder="Search anime.."
                    className="bg-gray-700 font-normal pl-12 text-white text-sm w-60 px-5 py-2 rounded-full focus:outline-none focus:ring-2 focus:bg-gray focus:border-gray-900 md:w-48" />
            </div>
        </div>
    )
}
