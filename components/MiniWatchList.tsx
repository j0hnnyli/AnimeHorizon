'use client'

import React, { useContext } from 'react'
import { watchlistContext } from '@/context/watchlistContext'
import Image from 'next/image'
import Link from 'next/link'
import { FaTrash } from "react-icons/fa";
import { SheetClose } from './ui/sheet'

const MiniWatchList = () => {
  const { watchlist, handleDelete } = useContext(watchlistContext)

  return (
    <>
      <h2 className='text-animehorizon_orange font-bold text-3xl'>My WatchList : {watchlist.length}</h2>
      <div className='h-1 bg-white w-20 mx-auto rounded-xl my-5'></div>

      <div className=''>
        {watchlist.map((anime) => (
          <div key={anime.id} className=' mb-5'>
            <div className='h-40 w-[50%] md:w-[60%] mx-auto relative'>
              <Image
                src={anime.images.large}
                alt={anime.title}
                width={300}
                height={200}
                className='h-full w-full'
              />

              <button 
                onClick={() => handleDelete(anime.id)}
                className='absolute bottom-3 right-3 z-20 hover:text-white p-2 flex justify-center items-center rounded-full bg-animehorizon_orange text-red-900'
              >
                <FaTrash className='text-md'/>
              </button>
            </div>

            <Link 
              href={`/anime/${anime.id}`} 
              className='hover:text-animehorizon_orange text-center mx-auto '
            >
              <SheetClose className='w-full'>
                {anime.title}
              </SheetClose>
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}

export default MiniWatchList