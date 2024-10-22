import { getPopularsAnimes } from '@/lib/fetchFns'
import Link from 'next/link';
import CarouselComponent from '../CarouselComponent';

const PopularsSection = async () => {
  const { animes } = await getPopularsAnimes(1);

  return (
    <div className='p-5 lg:w-[90%] mx-auto'>
      <div className='text-animehorizon_orange flex items-center justify-between mb-2'>
        <h2 className='text-3xl font-bold'>Populars</h2>
        <Link href='/popular?page=1'>View All</Link>
      </div>

      <CarouselComponent array={animes}/>
    </div>
  )
}

export default PopularsSection