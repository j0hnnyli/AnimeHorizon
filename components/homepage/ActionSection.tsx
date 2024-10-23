import React from 'react'
import Link from 'next/link'
import CarouselComponent from '../CarouselComponent'
import { ParsedAnimeType } from '@/lib/types/ParsedAnimeType'

type Props = {
  actionAnimes: ParsedAnimeType[];
}

const ActionSection = ({actionAnimes} : Props) => {

  return (
    <div className='p-5 lg:w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Actions</h2>
        <Link href='/genre/1?page=1&name=Action'>View All</Link>
      </div>

      <CarouselComponent array={actionAnimes}/>
    </div>
  )
}

export default ActionSection