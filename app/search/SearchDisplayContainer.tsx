import AnimeCard from '@/components/AnimeCard';
import { getAnimeBySearch } from '@/lib/fetchFns'
import React from 'react'

type Props = {
  searchQuery : string;
}

const SearchDisplayContainer = async ({searchQuery} : Props) => {
  if(!searchQuery) return null;
  const { animes } = await getAnimeBySearch(searchQuery)

  return (
    <>
      <h2 className='text-3xl text-animehorizon_orange font-bold mb-5'>Top Results</h2>
      <div className='text-white grid grid-cols-6 gap-5'>
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            url={anime.images.large}
            title={anime.title}
          />
        
        ))}
      </div>
    </>
    
  )
}

export default SearchDisplayContainer