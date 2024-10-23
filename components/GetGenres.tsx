import { getGenres } from '@/lib/fetchFns';
import Link from 'next/link';
import React from 'react'

const GetGenres = async () => {
  const genres = await getGenres();

  return (
    <div className='flex flex-col w-[400px]'>
      <h3 className='text-left p-2 text-animehorizon_orange font-bold'>Genres</h3>
      <div className='grid grid-cols-3 h-auto overflow-auto p-2 text-sm'>
        {genres.map((genre) => (
          <Link 
            key={genre.id}
            href={`/genre/${genre.id}?page=1&name=${genre.name}`}
            className='m-2 w-full text-left hover:text-animehorizon_orange'
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default GetGenres