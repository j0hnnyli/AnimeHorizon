import { getPopularsAnimes } from '@/lib/fetchFns';
import AnimeCard from '@/components/AnimeCard';
import { FaExclamationCircle } from 'react-icons/fa';


type Props = {
  searchParams: {
    page: number; 
  };
}

const PopularPage = async ({searchParams} : Props) => {
  if(searchParams.page > 100) return <OverPagination />;

  const { animes } = await getPopularsAnimes(searchParams.page);

  return (
    <div className='text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
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
  )
}

export default PopularPage


function OverPagination() {
  return (
    <div className="flex flex-col items-center justify-center text-red-500">
      <FaExclamationCircle className="text-5xl" />
      <p className='text-center text-xl'>You have exceeded the maximum page limit!</p>
    </div>
  )
}