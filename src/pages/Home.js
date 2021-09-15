import React from 'react'
import { Dropdown, Layout, Slider } from '../components'

export default function Home() {
    return (
        <Layout>
            <Slider />
            <div className="px-32 md:px-5 py-10">
                <div className="flex justify-between items-center">
                    <h1 className="text-white font-semibold text-3xl">Top Anime Movies</h1>
                    <Dropdown />
                </div>
            </div>
        </Layout>
    )
}
