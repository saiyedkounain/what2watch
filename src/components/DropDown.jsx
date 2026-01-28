import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';
import genres from '../assets/genres.js';
import drama from '../assets/drama.js';
import action from '../assets/action.js';
import top250 from '../assets/top250.js';


const DropDown = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selected, setSelected] = React.useState("Select");
    const [sgenre, setSgenre] = useState([]);
    const [watchList, setWatchList] = useState([]);

    function handleWatch(item){
        watchList.push(item);
        setWatchList(watchList);
        console.log(watchList);
    }

    const myList = [
        {
            id : 1, name :"saiyedk"
        },
        {
            id : 2, name :"aiyan"
        },
    ]

    const handleSelect = (genre) => {
        setSelected(genre);
        if(selected == 'Action'){
            setSgenre(action);
            console.log(action);
        }
        if(selected == 'Drama'){
            setSgenre(drama);
            console.log(drama)
        }
        if(selected == 'Top 250'){
            setSgenre(top250);
            console.log(top250)
        }
        setIsOpen(false);
    };

    return (
        <>
        
        
        <div className="flex flex-col w-44 text-sm relative">
            <button type="button" onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left px-4 pr-2 py-2 border rounded bg-white text-gray-800 border-gray-300 shadow-sm hover:bg-gray-50 focus:outline-none"
            >
                <span>{selected}</span>
                <svg className={`w-5 h-5 inline float-right transition-transform duration-200 ${isOpen ? "rotate-0" : "-rotate-90"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#6B7280" >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <ul className="w-full bg-white border border-gray-300 rounded shadow-md mt-1 py-2">
                    {genres.map((genre) => (
                        <li key={genre} className="px-4 py-2 hover:bg-indigo-500 hover:text-white cursor-pointer" onClick={() => handleSelect(genre)} >
                            {genre}
                        </li>
                    ))}
                </ul>
            )}
        </div>

        <div>
            <p>Details of each movie in the genre</p>
            <div>
                {
                    sgenre.map((item) => (
                        
                        <div>
                            
                            <div class="flex min-h-screen items-center justify-center">
                            <div class="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                                <div class="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                                <img
                                    src={item.primaryImage}
                                    alt="image"
                                    class="h-full w-full object-cover"
                                />
                                </div>
                                <div class="p-6">
                                <h6 class="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                                    {item.type}
                                </h6>
                                <h4 class="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                    {item.primaryTitle}
                                </h4>
                                <p class="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                                    {item.description}
                                </p>
                                <div class="inline-block" href="#">
                                    <button
                                    class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    type="button"
                                    onClick={()=>{handleWatch(item)}}
                                    >
                                    Wanna Watch
                                    <svg class="w-6 h-6 text-pink-500 dark:text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path d="m12.75 20.66 6.184-7.098c2.677-2.884 2.559-6.506.754-8.705-.898-1.095-2.206-1.816-3.72-1.855-1.293-.034-2.652.43-3.963 1.442-1.315-1.012-2.678-1.476-3.973-1.442-1.515.04-2.825.76-3.724 1.855-1.806 2.201-1.915 5.823.772 8.706l6.183 7.097c.19.216.46.34.743.34a.985.985 0 0 0 .743-.34Z"/>
</svg>

                                    </button>

                                    <button
                                    class="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                    
                                    >
                                    Dont wanna watch
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                        class="h-4 w-4"
                                    >
                                        <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        ></path>
                                    </svg>
                                    </button>
                                </div>
                                </div>
                            </div>

                            <link
                                rel="stylesheet"
                                href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
                            />
                            </div>

                        </div>
                    ))
                }

            </div>
        </div>

        </>
    );
}

export default DropDown