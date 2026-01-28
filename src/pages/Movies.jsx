import React from 'react'
import Navbar from '../components/Navbar'
import DropDown from '../components/DropDown'


const Movies = () => {
  return (
    <div>
        <Navbar/>
        <div className="container flex-1 justify-content">
          Select Genre
          <DropDown/>
        </div>

    </div>
  )
}

export default Movies
