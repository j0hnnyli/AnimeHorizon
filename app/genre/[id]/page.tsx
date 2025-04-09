
import { getAnimesByGenres } from "@/lib/fetchFns";
import AnimeCard from "@/components/AnimeCard";
import GenrePagination from "../GenrePagination";

type Props = {
  params: {
    id: number;
  };
  searchParams: {
    page: number;
    name: string;
  };
};

export const revalidate = 0;

const GenrePage = async ({ params, searchParams }: Props) => {
  const { animes, maxPage } = await getAnimesByGenres(
    String(params.id),
    Number(searchParams.page)
  );

  return (
    <>
      <GenrePagination maxPage={maxPage}/>

      <div className="text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5">
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
    </>
  );
};

export default GenrePage;
