import React from 'react'
import { getRecommendedAnimes } from '@/lib/fetchFns'
import AnimeCard from './AnimeCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

type Props = {
  id: number;
}

const Recommendations = async ({ id } : Props) => {
  const recommendations = await getRecommendedAnimes(id)

  return (
    <div className='w-[90%] mx-auto my-10'>
      <h2 className='text-2xl'>
        <span className='text-animehorizon_orange font-bold'>Recommendations :</span>
        <span className='ml-2'>{recommendations.length}</span>
      </h2>

      <Carousel>
        <CarouselContent>
          {recommendations.map(({id, title, image}) => (
              <CarouselItem key={id} className='basis-1/5'>
                <AnimeCard 
                  key={id}
                  id={id} 
                  title={title}
                  url={image}
                />
              </CarouselItem>
            ))
          }
        </CarouselContent>
      <CarouselPrevious className='text-animehorizon_orange'/>
      <CarouselNext className='text-animehorizon_orange'/>
    </Carousel>
    </div>
  )
}

export default Recommendations