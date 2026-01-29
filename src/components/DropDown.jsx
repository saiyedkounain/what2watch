import React from 'react'
import { useState } from 'react';
import genres from '../assets/genres.js';
import drama from '../assets/drama.js';
import action from '../assets/action.js';
import top250 from '../assets/top250.js';
import { useSelection } from '../context/SelectionContext';
import SwipeDeck from './SwipeDeck';
import { ToggleButtonGroup, ToggleButton, useMediaQuery } from '@mui/material';

const DropDown = () => {
    const [selected, setSelected] = React.useState('');
    const [sgenre, setSgenre] = useState([]);
    const { setPerson1Genre, setPerson1WatchList } = useSelection();
    const isSmall = useMediaQuery('(max-width: 640px)');

    function handleWatch(item){
        setPerson1WatchList(prev => {
            if (prev.some(m => m.id === item.id)) return prev;
            return [...prev, item];
        });
    }

    function handleDontWatch(item){
        setPerson1WatchList(prev => prev.filter(m => m.id !== item.id));
    }

    const handleSelect = (_event, genre) => {
        if (!genre) return;
        setSelected(genre);
        setPerson1Genre(genre);

        if (genre === 'Action'){
            setSgenre(action);
        } else if (genre === 'Drama'){
            setSgenre(drama);
        } else if (genre === 'Top 250'){
            setSgenre(top250);
        } else {
            setSgenre([]);
        }
    };

    return (
        <>
        <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
                <h2 className="text-lg sm:text-xl font-semibold text-white mb-1">Select a genre</h2>
                <p className="text-xs text-gray-300">Tap a pill to start swiping through movies.</p>
            </div>
            <ToggleButtonGroup
                value={selected}
                exclusive
                onChange={handleSelect}
                size={isSmall ? 'small' : 'medium'}
                className="flex flex-wrap gap-2 bg-gray-900/40 rounded-full px-2 py-1"
            >
                {genres.map((genre) => (
                  <ToggleButton
                    key={genre}
                    value={genre}
                    sx={{
                      textTransform: 'none',
                      borderRadius: '999px',
                      px: 2.5,
                      py: 0.5,
                      color: 'rgba(243,244,246,0.9)',
                      '&.Mui-selected': {
                        backgroundColor: 'rgba(129,140,248,0.4)',
                        color: '#fff',
                      },
                    }}
                  >
                    {genre}
                  </ToggleButton>
                ))}
            </ToggleButtonGroup>
        </div>

        <div className="mt-6">
            {sgenre.length > 0 ? (
                <SwipeDeck
                    movies={sgenre}
                    onLike={handleWatch}
                    onDislike={handleDontWatch}
                />
            ) : (
                <p className="mt-4 text-gray-300">
                    Select a genre to start swiping through movies.
                </p>
            )}
        </div>

        </>
    );
}

export default DropDown
