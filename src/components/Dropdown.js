import React, { useState } from 'react'

export default function Dropdown() {
    const [active, setActive] = useState(false);
    return (
        <div className="relative inline-block text-left">
            <div>
                <button
                    onClick={() => setActive(!active)}
                    type="button" className="inline-flex  justify-between w-auto rounded-md border shadow-sm px-4 py-2 bg-gray-700 text-sm font-medium text-white  focus:outline-none border-gray-700 hover:bg-gray-800" id="menu-button" aria-expanded="true" aria-haspopup="true">
                    Select Top Anime
                    <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                </button>
            </div>

            <div className={`origin-top-right ${active ? 'absolute' : 'hidden'} left-0 mt-2 w-64 rounded-md shadow-lg bg-gray-700 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
                <div className="py-1" role="none">
                    <a href="#" className="text-white block px-4 py-2 text-sm " role="menuitem" tabindex="-1" id="menu-item-0">Top Upcomming</a>
                    <a href="#" className="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-2" id="menu-item-0">Top TVs</a>
                    <a href="#" className="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-3" id="menu-item-0">Top Movies</a>
                    <a href="#" className="text-white block px-4 py-2 text-sm" role="menuitem" tabindex="-4" id="menu-item-0">Top Airing</a>
                </div>
            </div>
        </div>
    )
}
