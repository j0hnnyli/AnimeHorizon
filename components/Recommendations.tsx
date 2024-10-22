import React from 'react'
import { getRecommendedAnimes } from '@/lib/fetchFns'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'
import Link from 'next/link'

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

      <Carousel opts={{
        dragFree: true,
      }}>
        <CarouselContent>
          {recommendations.map(({id, title, image}) => (
              <CarouselItem key={id} className='basis-1/2 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 hover:text-animehorizon_orange'>
                <div className="relative">
                  <Link href={`/anime/${id}`} className="absolute w-full h-full z-10"></Link>
                  <div className="h-[250px] relative">
                    <Image
                      src={image}
                      alt={title}
                      width={200}
                      height={300}
                      className="w-full h-full"
                    />
                  </div>
                  <h3 className="text-white text-md">{title}</h3>
                </div> 
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious className="hidden lg:flex text-black"/>
        <CarouselNext className="hidden lg:flex text-black"/>
    </Carousel>
    </div>
  )
}

export default Recommendations