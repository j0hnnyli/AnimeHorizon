import { getPopularsAnimes } from '@/lib/fetchFns'
import React from 'react'
import { ParsedAnimeType } from '@/lib/types/ParsedAnimeType';
import Image from 'next/image';
import AnimeCard from '../AnimeCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Link from 'next/link';

const PopularsSection = async () => {
  const populars : ParsedAnimeType[] = await getPopularsAnimes();

  return (
    <div className='my-10 p-5 w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between my-2'>
        <h2 className='text-3xl font-bold'>Populars</h2>
        <Link href='/popular'>View All</Link>
      </div>

      <Carousel>
        <CarouselContent className='flex'>
          {populars.map((anime) => (
              <CarouselItem key={anime.id} className='basis-1/5'>
                <AnimeCard 
                  key={anime.id}
                  id={anime.id} 
                  title={anime.title}
                  url={anime.images.small}
                />
              </CarouselItem>
            ))
          }
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </div>
  )
}

export default PopularsSection