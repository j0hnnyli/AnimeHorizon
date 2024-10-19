import AnimeCard from "@/components/AnimeCard";
import PaginationsComponent from "@/components/PaginationsComponent";
import SectionLoadingSkeletion from "@/components/SectionLoadingSkeletion";
import { getAnimesByGenres, getGenres, wait } from "@/lib/fetchFns"
import { useRouter } from "next/navigation";
import { Suspense } from "react";

type Props = {
  params : {
    id : number
  },
  searchParams: {
    page : number
  }
}

const GenrePage = async ({params, searchParams} : Props) => {
  const { animes, maxPage }  = await getAnimesByGenres(String(params.id), searchParams.page);

  return (
    <div className="w-[90%] mx-auto mt-20 max-w-[2000px]">

      <Suspense fallback={<SectionLoadingSkeletion className="h-16 w-full"/>}>
        <GenreTitle id={params.id}/>
      </Suspense>

      <PaginationsComponent currpage={searchParams.page} maxPage={maxPage} genreId={params.id}/>

      <div className='text-white grid grid-cols-5 gap-5'>
        {animes.map((anime) => (
          <AnimeCard
            key={anime.id}
            id={anime.id}
            url={anime.images.small}
            title={anime.title}
          />
        ))}
      </div>
    </div>
  )
}


async function GenreTitle({ id } : {id: number}){
  const genres = await getGenres();
  const match = genres.find((genre) => genre.id === Number(id));

  if(!match) return null;

  return (
    <h2 className="text-animehorizon_orange text-5xl mb-10">{match.name}</h2>
  )
}
export default GenrePage