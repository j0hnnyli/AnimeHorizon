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
      <div className='flex items-center justify-center flex-col'>
        <h2 className='text-animehorizon_orange font-bold text-3xl'>My WatchList : {watchlist.length}</h2>
        <Link href='/watchlist' className='text-animehorizon_orange hover:text-white hover:underline'>
          <SheetClose>
            View All
          </SheetClose>
        </Link>
        <div className='h-1 bg-white w-44 mx-auto rounded-xl my-5'></div>
      </div>

      <div className='h-[75vh] md:h-[90vh] overflow-y-auto pb-20'>
        {watchlist.map((anime) => (
          <div key={anime.id} className=' mb-5'>
            <div className='h-[250px] w-[80%] mx-auto relative'>
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