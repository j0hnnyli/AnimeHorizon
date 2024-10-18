import { parseAnimes, parseSingleAnime, parseCharacters, parseRecommendations } from "./parsingFns";

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

export async function getAnime(id : number){
  const res = await fetch(`${ANIME_BASE_URL}/anime/${id}`)

  if(!res.ok) throw new Error(`Fetching Anime: ${id} Failed`);

  const data = await res.json();

  return parseSingleAnime(data.data)
}


export async function getGenres(){
  const res = await fetch(`${ANIME_BASE_URL}/genres/anime`);

  if(!res.ok) throw new Error('Fetching Genres Failed')

  const data = await res.json();

  return data;
}

export async function getCharacters(id: number){
  const res = await fetch(`${ANIME_BASE_URL}/anime/${id}/characters`);

  if(!res.ok) throw new Error(`Fetching Characters for Anime:${id} Failed`);

  const data = await res.json()
  
  return parseCharacters(data.data)
}

export async function getRecommendedAnimes(id: number){
  const res = await fetch(`${ANIME_BASE_URL}/anime/${id}/recommendations`);

  if(!res.ok) throw new Error(`Fetching Recommendations for Anime: ${id} Failed`)

  const data = await res.json();

  return parseRecommendations(data.data)
}

export async  function wait(time : number) : Promise<void> {
  return new Promise((resolve, reject) => setTimeout(() => {resolve()}, time))
}