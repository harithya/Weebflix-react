import React from 'react'
import Logo from '../assets/img/logo.png'

export default function Header() {
    return (
        <div className="py-4 bg-gray-900 container px-32 flex justify-between md:px-5">
            <img
                src={Logo}
                className="h-9 bg-contain md:h-8" alt="logo" />
            <input
                type="text" placeholder="Search anime.."
                className="bg-gray-800 font-normal text-white text-sm w-60 px-5 py-1 rounded-full focus:outline-none focus:ring-2 focus:bg-gray focus:border-gray-900 md:w-48" />
        </div>
    )
}
