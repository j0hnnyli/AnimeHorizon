import PaginationsComponent from '@/components/PaginationsComponent';
import { getPopularsAnimes } from '@/lib/fetchFns';
import AnimeCard from '@/components/AnimeCard';

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
        maxPage={Math.floor(maxPage / 10)}
        currpage={searchParams.page}
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
      </div>    </div>
  )
}

export default PopularPage