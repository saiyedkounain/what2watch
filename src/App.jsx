import React from 'react'
import Movies from './pages/Movies'
import WatchedMovies from './pages/WatchedMovies'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Movies/>}/>
          <Route path='/watched-movies' element={<WatchedMovies/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
