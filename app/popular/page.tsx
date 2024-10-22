import React, { Suspense } from 'react'
import SpinnerIcon from '@/components/icons/Spinner';
import PopularDisplayContainter from '../../components/displayContainers/PopularDisplayContainter';

type Props = {
  searchParams: {
    page: number; 
  };
}

const PopularPage = ({searchParams} : Props) => {

  return (
    <div className='max-w-[2000px] w-[90%] mx-auto'>
      <h2 className='text-animehorizon_orange text-5xl mb-10'>Most Popular Animes</h2> 

      <Suspense fallback={
          <div className="flex h-[calc(100vh-250px)] w-screen items-center justify-center md:h-full md:w-full">
            <SpinnerIcon />
          </div>
        }
      >
        <PopularDisplayContainter
          page={searchParams.page}
        />
      </Suspense>
    </div>
  )
}

export default PopularPage