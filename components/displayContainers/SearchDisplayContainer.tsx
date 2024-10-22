import AnimeCard from '@/components/AnimeCard';
import { getAnimeBySearch } from '@/lib/fetchFns'
import React from 'react'

type Props = {
  searchQuery : string;
}

const SearchDisplayContainer = async ({searchQuery} : Props) => {
  const { animes } = await getAnimeBySearch(searchQuery)


  return (
    <div>
      <h2 className='text-3xl text-animehorizon_orange font-bold mb-5'>Top Results</h2>
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

export default SearchDisplayContainer