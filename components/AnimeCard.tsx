import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {
  id: number,
  url: string,
  title: string
}

const AnimeCard = ({id, url, title} : Props) => {
  return (
    <>
      <div className='h-[80%] w-full'>
        <Image
          src={url} 
          alt={title} 
          width={200}
          height={300}
          className='w-full h-full'
        />
      </div>
  
      <h3 className='text-white'>{title}</h3>

    </>
  )
}

export default AnimeCard