import React, { useState, useEffect, useCallback } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';

const SwipeDeck = ({ movies, onLike, onDislike }) => {
  const [index, setIndex] = useState(0);

  const current = movies && movies.length > 0 ? movies[index] : null;

  const handleLike = useCallback(() => {
    if (!current) return;
    if (onLike) onLike(current);
    setIndex((i) => i + 1);
  }, [current, onLike]);

  const handleDislike = useCallback(() => {
    if (!current) return;
    if (onDislike) onDislike(current);
    setIndex((i) => i + 1);
  }, [current, onDislike]);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleLike();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handleDislike();
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [handleLike, handleDislike]);

  if (!movies || movies.length === 0) {
    return (
      <p className="mt-4 text-gray-300">
        No movies available for this selection.
      </p>
    );
  }

  if (!current) {
    return (
      <p className="mt-4 text-gray-300">
        You have gone through all movies in this list.
      </p>
    );
  }

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-2 sm:px-4">
      <div className="relative flex w-full max-w-md sm:max-w-[48rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div className="relative m-0 w-full flex justify-center bg-gray-200 rounded-t-xl py-4">
          {current.primaryImage ? (
            <img
              src={current.primaryImage}
              alt={current.primaryTitle}
              className="max-h-[420px] w-auto max-w-[260px] object-cover rounded-lg shadow-md"
            />
          ) : (
            <div className="h-[260px] w-full flex items-center justify-center">
              <span className="text-sm font-medium text-gray-500">
                Image not available
              </span>
            </div>
          )}
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h6 className="mb-2 text-xs font-semibold uppercase tracking-wide text-pink-500">
            {current.type}
          </h6>
          <h4 className="mb-3 text-2xl font-semibold text-blue-gray-900">
            {current.primaryTitle}
          </h4>

          <div className="mb-3 text-sm text-gray-600 space-y-1">
            {typeof current.averageRating === 'number' && (
              <p>
                <span className="font-semibold">Rating:</span> {current.averageRating}/10
                {current.numVotes ? ` (${current.numVotes.toLocaleString()} votes)` : ''}
              </p>
            )}
            {current.runtimeMinutes && (
              <p>
                <span className="font-semibold">Duration:</span> {current.runtimeMinutes} min
              </p>
            )}
            {current.genres && current.genres.length > 0 && (
              <p>
                <span className="font-semibold">Genres:</span> {current.genres.join(', ')}
              </p>
            )}
            {current.contentRating && (
              <p>
                <span className="font-semibold">Age rating:</span> {current.contentRating}
              </p>
            )}
            {current.startYear && (
              <p>
                <span className="font-semibold">Year:</span> {current.startYear}
              </p>
            )}
            {current.countriesOfOrigin && current.countriesOfOrigin.length > 0 && (
              <p>
                <span className="font-semibold">Origin:</span>{' '}
                {current.countriesOfOrigin.join(', ')}
              </p>
            )}
          </div>

          {current.description && (
            <p className="mb-6 text-sm leading-relaxed text-gray-700">
              {current.description}
            </p>
          )}

          <div className="mt-auto flex items-center justify-between gap-6 py-2">
            <Tooltip title="Don't wanna watch (or press ←)">
              <IconButton
                onClick={handleDislike}
                color="error"
                size="large"
                sx={{
                  borderRadius: '999px',
                  bgcolor: 'rgba(248,113,113,0.06)',
                  '&:hover': { bgcolor: 'rgba(248,113,113,0.16)' },
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>

            <Tooltip title="Wanna watch (or press →)">
              <IconButton
                onClick={handleLike}
                color="success"
                size="large"
                sx={{
                  borderRadius: '999px',
                  bgcolor: 'rgba(16,185,129,0.08)',
                  '&:hover': { bgcolor: 'rgba(16,185,129,0.18)' },
                }}
              >
                <FavoriteIcon fontSize="inherit" />
              </IconButton>
            </Tooltip>
          </div>

          <p className="mt-3 text-xs text-gray-400 text-right">
            Movies ({index + 1} / {movies.length})
          </p>
        </div>
      </div>
    </div>
  );
};

export default SwipeDeck;
