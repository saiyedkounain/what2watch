import React from 'react'
import Navbar from '../components/Navbar'
import DropDown from '../components/DropDown'
import Footer from '../components/Footer'

const Movies = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 pt-6">
        <DropDown />
      </main>
      <Footer />
    </div>
  )
}

export default Movies
