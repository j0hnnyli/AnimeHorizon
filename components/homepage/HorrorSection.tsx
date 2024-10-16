import Link from 'next/link'
import React from 'react'
import CarouselComponent from '../CarouselComponent'
import { getAnimesByGenres } from '@/lib/fetchFns'

const HorrorSection = async () => {
  const horrorAnimes = await getAnimesByGenres('14')
  return (
    <div className='mb-10 p-5 w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Horrors</h2>
        <Link href='/horrors'>View All</Link>
      </div>

      <CarouselComponent array={horrorAnimes}/>
    </div>
  )
}

export default HorrorSection