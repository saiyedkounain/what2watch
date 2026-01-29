import React from 'react'
import Navbar from '../components/Navbar'
import drama from '../assets/drama.js'
import action from '../assets/action.js'
import top250 from '../assets/top250.js'
import { useSelection } from '../context/SelectionContext'
import SwipeDeck from '../components/SwipeDeck'
import Footer from '../components/Footer'

const genreMap = {
  Action: action,
  Drama: drama,
  'Top 250': top250,
}

const Person2 = () => {
  const { person1Genre, setPerson2WatchList } = useSelection()

  const movies = person1Genre ? (genreMap[person1Genre] || []) : []

  const handleWatch = (item) => {
    setPerson2WatchList(prev => {
      if (prev.some(m => m.id === item.id)) return prev
      return [...prev, item]
    })
  }

  const handleDontWatch = (item) => {
    setPerson2WatchList(prev => prev.filter(m => m.id !== item.id))
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 pt-6">
        {!person1Genre && (
          <p className="text-white">Person 1 has not selected any genre or movies yet. Please ask Person 1 to pick a genre first.</p>
        )}

        {person1Genre && (
          <>
            <h2 className="text-xl mb-4">
              Person 1 selected: {person1Genre}. Swipe right for "Wanna Watch" and left for "Don't wanna watch".
            </h2>
            <SwipeDeck
              movies={movies}
              onLike={handleWatch}
              onDislike={handleDontWatch}
            />
          </>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Person2
