import React from 'react'
import CarouselComponent from '../CarouselComponent'
import Link from 'next/link'
import { getAnimesByGenres, wait } from '@/lib/fetchFns'

const FantasySection = async () => {
  const fantasyAnimes = await getAnimesByGenres('10')

  return (
    <div className='mb-10 p-5 w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Fantasies</h2>
        <Link href='/fantasy'>View All</Link>
      </div>

      <CarouselComponent array={fantasyAnimes}/>
   </div>
  )
}

export default FantasySection