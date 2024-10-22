import AnimeCard from '@/components/AnimeCard';
import PaginationsComponent from '@/components/PaginationsComponent';
import { getPopularsAnimes } from '@/lib/fetchFns';
import React from 'react'

type Props = {
  page: number;
}

const PopularDisplayContainter = async ({ page } : Props) => {
  const {animes, maxPage} = await getPopularsAnimes(page);


  return (
    <div>
      <PaginationsComponent
        maxPage={Math.floor(maxPage / 10)}
        currpage={page}
        url={`/popular`}
      />

      <div className='text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-5'>
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

export default PopularDisplayContainter