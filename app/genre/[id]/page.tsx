import AnimeCard from "@/components/AnimeCard";
import PaginationsComponent from "@/components/PaginationsComponent";
import { getAnimesByGenres} from "@/lib/fetchFns";

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    page: number;
    name: string;
  };
};

const GenrePage = async ({ params, searchParams }: Props) => {
  const { animes, maxPage } = await getAnimesByGenres(
    String(params.id),
    Number(searchParams.page)
  );

  return (
    <div className="w-[90%] mx-auto max-w-[2000px]">
      <h2 className="text-animehorizon_orange text-5xl my-10">
        {searchParams.name}
      </h2>

      <PaginationsComponent
        currpage={searchParams.page}
        maxPage={maxPage}
        url={`/genre/${params.id}`}
        extraQueries={`name=${searchParams.name}`}
      />

      <div className="text-white grid grid-cols-6 gap-5">
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
  );
};

export default GenrePage;
