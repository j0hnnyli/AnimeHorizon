import Searchbar from "@/components/Searchbar";
import { getAnimeBySearch } from "@/lib/fetchFns";
import AnimeCard from "@/components/AnimeCard";

type Props = {
  searchParams: {
    query: string;
  };
};

const SearchPage = async ({ searchParams }: Props) => {
  const { animes } = await getAnimeBySearch(searchParams.query)

  return (
    <div className="max_width p-3">
      <Searchbar defaultSearchValue={searchParams.query} />

      <div>
        {searchParams.query && (
          <>
            <h2 className='text-3xl text-animehorizon_orange font-bold mb-5'>Top Results</h2>
            <div className='text-white grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
              {searchParams.query && animes.map((anime) => (
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
        )}
      </div>
    </div>
  );
};

export default SearchPage;
