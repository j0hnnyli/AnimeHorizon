import { Anime } from "./types/AnimeType";

const ANIME_BASE_URL = 'https://api.jikan.moe/v4';

export async function getPopularsAnimes(page: number){
  const res = await fetch(`${ANIME_BASE_URL}/top/anime?page=${page}`);

  if(!res.ok) throw new Error('Fetching Populars Failed')

  const data = await res.json();

  return  parseAnimes(data.data);
}

export async function getAnimesByGenres(genre_id : string){
  const res = await fetch(`${ANIME_BASE_URL}/anime?genres=${genre_id}`);

  if(!res.ok) throw new Error('Fetching Animes By Genres Failed')

  const data = await res.json();

  return parseAnimes(data.data);
}

export async function getGenres(){
  const res = await fetch(`${ANIME_BASE_URL}/genres/anime`);

  if(!res.ok) throw new Error('Fetching Genres Failed')

    const data = await res.json();

    return data;
}

function parseAnimes(animes : Array<Anime>){
  const parsed = animes.map((anime) => (
    {
      id: anime.mal_id || 0,
      title: anime.title_english || "",
      images: {
        small : anime?.images?.jpg?.image_url  as string,
        large : anime?.images?.jpg?.large_image_url as string,
      },
      about: anime.synopsis || "",
      youtubeUrl: anime.trailer.url || "",
      genres: anime.genres.map((genre) => genre.name),
      rating: anime.score || 0,
    }
  ))

  return parsed;
}

export async  function wait(time : number) : Promise<void> {
  return new Promise((resolve, reject) => setTimeout(() => {resolve()}, time))
}