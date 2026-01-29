import React from 'react'
import Movies from './pages/Movies'
import WatchedMovies from './pages/WatchedMovies'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Person2 from './pages/Person2'
import Login from './pages/Login'


const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/movies' element={<Movies/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/watched-movies' element={<WatchedMovies/>}/>
          <Route path='/person2' element={<Person2/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
