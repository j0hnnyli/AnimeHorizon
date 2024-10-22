import React from 'react'
import { SheetClose } from '../ui/sheet'
import { getGenres } from '@/lib/fetchFns'
import Link from 'next/link';

const GetGenresContainer = async () => {
  const genres = await getGenres();


  return (
    <div className='grid grid-cols-1 overflow-y-auto h-[300px]'>
      {genres.map((genre) => (
        <Link
          key={genre.id}  
          href={`/genre/${genre.id}?page=1&name=${genre.name}`}
          className='m-2 w-full text-left hover:text-animehorizon_orange'
        >
          <SheetClose>
            {genre.name}
          </SheetClose>
        </Link>
      ))}
    </div>
  )
}

export default GetGenresContainer