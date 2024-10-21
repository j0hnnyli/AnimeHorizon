import React from 'react'
import { getPopularsAnimes } from '@/lib/fetchFns'
import AnimeCard from '@/components/AnimeCard';
import PaginationsComponent from '@/components/PaginationsComponent';

type Props = {
  searchParams: {
    page: number; 
  };
}

const PopularPage = async ({searchParams} : Props) => {
  const {animes, maxPage} = await getPopularsAnimes(searchParams.page);

  return (
    <div className='max-w-[2000px] w-[90%] mx-auto'>
      <h2 className='text-animehorizon_orange text-5xl mb-10'>Most Popular Animes</h2> 

      <PaginationsComponent
        maxPage={maxPage}
        currpage={searchParams.page}
        url={`/popular`}
      />

      <div className='text-white grid grid-cols-6 gap-5'>
        {animes.map((anime) => (
          <AnimeCard
            anime={anime}
            key={anime.id}
            id={anime.id}
            url={anime.images.large}
            title={anime.title}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularPage