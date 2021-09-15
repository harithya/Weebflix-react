import React, { useEffect } from 'react'
import { Home } from './pages'

export default function App() {
    useEffect(() => {
        document.body.classList.add("bg-gray-900")
    }, [])

    return (
        <Home />
    )
}
