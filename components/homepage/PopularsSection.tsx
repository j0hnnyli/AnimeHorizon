import Link from 'next/link';
import CarouselComponent from '../CarouselComponent';
import { ParsedAnimeType } from '@/lib/types/ParsedAnimeType';

const PopularsSection = async ({animes} : {animes: ParsedAnimeType[]}) => {

  return (
    <div className='p-3 '>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Populars</h2>
        <Link href='/popular?page=1' className='hover:text-white hover:underline'>View All</Link>
      </div>

      <CarouselComponent array={animes}/>
    </div>
  )
}

export default PopularsSection