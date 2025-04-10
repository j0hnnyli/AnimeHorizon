import React from 'react'
import { getAnimesByGenres } from '@/lib/fetchFns'
import Link from 'next/link'
import CarouselComponent from '../CarouselComponent'

const ActionSection = async () => {
  const { animes} = await getAnimesByGenres('1', 1)

  return (
    <div className='p-3'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Actions</h2>
        <Link href='/genre/1?page=1&name=Action' className='hover:text-white hover:underline'>View All</Link>
      </div>

      <CarouselComponent array={animes}/>
    </div>
  )
}

export default ActionSection