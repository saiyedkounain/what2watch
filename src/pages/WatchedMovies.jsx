import React from 'react'
import Navbar from '../components/Navbar'
import { useSelection } from '../context/SelectionContext'
import Footer from '../components/Footer'

const WatchedMovies = () => {
  const { person1WatchList, person2WatchList } = useSelection()

  const commonMovies = person1WatchList.filter(m1 =>
    person2WatchList.some(m2 => m2.id === m1.id),
  )

  return (
    <div className="min-h-screen flex flex-col bg-gray-950 text-white">
      <Navbar />
      <main className="flex-1 mx-auto w-full max-w-5xl px-4 pt-6 text-white">
        <h2 className="text-2xl mb-4">Movies you both want to watch</h2>

        {commonMovies.length === 0 && (
          <p>
            There are no common movies yet. Ask Person 1 and Person 2 to both select some movies first.
          </p>
        )}

        {commonMovies.length > 0 && (
          <ul className="space-y-4">
            {commonMovies.map((movie) => (
              <li key={movie.id} className="flex items-center gap-4 bg-gray-900/70 p-4 rounded-lg">
                {movie.primaryImage ? (
                  <img
                    src={movie.primaryImage}
                    alt={movie.primaryTitle}
                    className="w-16 h-24 object-cover rounded"
                  />
                ) : (
                  <div className="w-16 h-24 flex items-center justify-center rounded bg-gray-800 text-[10px] text-gray-400 text-center px-1">
                    Image not available
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    {movie.primaryTitle}
                  </h3>
                  <div className="mt-1 text-xs text-gray-400 space-y-1">
                    {typeof movie.averageRating === 'number' && (
                      <p>
                        <span className="font-semibold">Rating:</span> {movie.averageRating}/10
                        {movie.numVotes ? ` (${movie.numVotes.toLocaleString()} votes)` : ''}
                      </p>
                    )}
                  </div>
                  {movie.description && (
                    <p className="mt-1 text-sm text-gray-300 line-clamp-3">{movie.description}</p>
                  )}
                </div>
                {movie.trailer && (
                  <a
                    href={movie.trailer}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-4 text-red-500 hover:text-red-400 flex items-center justify-center"
                    aria-label="Watch trailer on YouTube"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8"
                    >
                      <path d="M21.8 8.001a2.75 2.75 0 0 0-1.93-1.947C18.22 5.5 12 5.5 12 5.5s-6.22 0-7.87.554A2.75 2.75 0 0 0 2.2 8.001 28.7 28.7 0 0 0 1.5 12a28.7 28.7 0 0 0 .7 3.999 2.75 2.75 0 0 0 1.93 1.947C5.78 18.5 12 18.5 12 18.5s6.22 0 7.87-.554a2.75 2.75 0 0 0 1.93-1.947A28.7 28.7 0 0 0 22.5 12a28.7 28.7 0 0 0-.7-3.999ZM10 15.25v-6.5L15 12l-5 3.25Z" />
                    </svg>
                  </a>
                )}
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default WatchedMovies
