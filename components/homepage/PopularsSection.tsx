import { getPopularsAnimes, wait } from '@/lib/fetchFns'
import { ParsedAnimeType } from '@/lib/types/ParsedAnimeType';
import Link from 'next/link';
import CarouselComponent from '../CarouselComponent';

const PopularsSection = async () => {
  // await wait(5000)
  const populars : ParsedAnimeType[] = await getPopularsAnimes(1);

  return (
    <div className='my-10 p-5 w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Populars</h2>
        <Link href='/popular'>View All</Link>
      </div>

      <CarouselComponent array={populars}/>
    </div>
  )
}

export default PopularsSection