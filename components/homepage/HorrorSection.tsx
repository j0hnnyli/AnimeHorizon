import Link from 'next/link'
import React from 'react'
import CarouselComponent from '../CarouselComponent'
import { getAnimesByGenres } from '@/lib/fetchFns'

const HorrorSection = async () => {
  const {animes} = await getAnimesByGenres('14', 1)

  return (
    <div className='p-5 lg:w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Horrors</h2>
        <Link href='/genre/14?page=1&name=Horror'>View All</Link>
      </div>

      <CarouselComponent array={animes}/>
    </div>
  )
}

export default HorrorSection