'use client'

import { useContext, useEffect, useState } from 'react'
import { watchlistContext } from '@/context/watchlistContext'
import Image from 'next/image'
import { FaTrash } from 'react-icons/fa6'
import Link from 'next/link'

const WatchlistContainer = () => {
  const {watchlist, handleDelete} = useContext(watchlistContext);
  const [mounted, setMounted] = useState(false)


  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <>
      <div className='text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5'>
        {mounted && watchlist.map((anime) => (
          <div key={anime.id} className=' mb-5'>
          <div className='h-[250px] w-full mx-auto relative'>
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
            className='hover:text-animehorizon_orange text-center mx-auto block'
          >
            {anime.title}
          </Link>
        </div>        
        ))}
      </div>
    </>
  )
}

export default WatchlistContainer