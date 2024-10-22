import AnimeCard from '@/components/AnimeCard';
import PaginationsComponent from '@/components/PaginationsComponent';
import { getAnimesByGenres } from '@/lib/fetchFns';
import React from 'react'

type Props = {
  id: string;
  page: number;
  name: string;
}

const GenreDisplayContainer = async ({id, page, name} : Props) => {
  const { animes, maxPage } = await getAnimesByGenres(
    String(id),
    Number(page)
  );

  return (
    <div>
      <PaginationsComponent
        currpage={page}
        maxPage={maxPage}
        url={`/genre/${id}`}
        extraQueries={`name=${name}`}
      />

      <div className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7  gap-5">
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

export default GenreDisplayContainer