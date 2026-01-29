import React from 'react'
import Movies from './pages/Movies'
import WatchedMovies from './pages/WatchedMovies'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Person2 from './pages/Person2'
import Login from './pages/Login'
import { SelectionProvider } from './context/SelectionContext'

const App = () => {
  return (
    <SelectionProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/movies' element={<Movies />} />
          <Route path='/login' element={<Login />} />
          <Route path='/result' element={<WatchedMovies />} />
          <Route path='/person2' element={<Person2 />} />
        </Routes>
      </BrowserRouter>
    </SelectionProvider>
  )
}

export default App
