"use client"

import React from 'react'
import { Rating } from 'react-simple-star-rating'

type Props = {
  rating: number;
}

const AnimeRatingStars = ({ rating } : Props) => {
  return (
    <div className='flex items-center' > 
      <Rating 
        readonly={true}
        initialValue={Math.floor(rating / 2)}
        iconsCount={5}
      />
      <h3 className='text-animehorizon_orange font-bold ml-3'>{Math.floor(rating / 2)} / 5</h3>
    </div>
  )
}

export default AnimeRatingStars