import React from 'react'
import CarouselComponent from '../CarouselComponent'
import Link from 'next/link'
import { getAnimesByGenres } from '@/lib/fetchFns'

const FantasySection = async () => {
  const {animes} = await getAnimesByGenres('10', 1)

  return (
    <div className='p-5 lg:w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Fantasies</h2>
        <Link href='/genre/10?page=1'>View All</Link>
      </div>

      <CarouselComponent array={animes}/>
   </div>
  )
}

export default FantasySection