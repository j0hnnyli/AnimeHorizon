import React from 'react'
import { getAnimesByGenres } from '@/lib/fetchFns'
import Link from 'next/link'
import CarouselComponent from '../CarouselComponent'

const ActionSection = async () => {
  const actionAnimes = await getAnimesByGenres('1')

  return (
    <div className='mb-10 p-5 w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Actions</h2>
        <Link href='/action'>View All</Link>
      </div>

      <CarouselComponent array={actionAnimes}/>
    </div>
  )
}

export default ActionSection