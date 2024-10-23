import {
  parseAnimes,
  parseSingleAnime,
  parseCharacters,
  parseRecommendations,
  parseGenres,
} from "./parsingFns";

const ANIME_BASE_URL = "https://api.jikan.moe/v4";

export async function getPopularsAnimes(page: number) {
  const res = await fetch(`${ANIME_BASE_URL}/top/anime?page=${page}`, {
    cache: 'force-cache'
  });

  if (!res.ok) throw new Error("Fetching Populars Failed");

  const data = await res.json();

  return parseAnimes(data);
}

export async function getAnimesByGenres(genre_id: string, page: number) {
  const res = await fetch(`${ANIME_BASE_URL}/anime?genres=${genre_id}&sfw=true&page=${page}`, {
    cache: 'force-cache'
  });

  if (!res.ok) {
    const errorMessage = await res.text();
    throw new Error(`Fetching Animes By Genres Failed: ${res.status} ${errorMessage}`);
  }

  const data = await res.json();
  return parseAnimes(data);
}

export async function getAnime(id: number) {
  const res = await fetch(`${ANIME_BASE_URL}/anime/${id}`, {
    cache: 'force-cache'
  });

  if (!res.ok) throw new Error(`Fetching Anime: ${id} Failed`);

  const data = await res.json();

  return parseSingleAnime(data.data);
}

export async function getGenres() {
  const res = await fetch(`${ANIME_BASE_URL}/genres/anime?filter=genres`, {
    cache: 'force-cache'
  });

  if (!res.ok) throw new Error("Fetching Genres Failed");

  const data = await res.json();

  return parseGenres(data.data);
}

export async function getCharacters(id: number) {
  const res = await fetch(`${ANIME_BASE_URL}/anime/${id}/characters`, {
    cache: 'force-cache'
  });

  if (!res.ok) throw new Error(`Fetching Characters for Anime:${id} Failed`);

  const data = await res.json();

  return parseCharacters(data.data);
}

export async function getRecommendedAnimes(id: number) {
  const res = await fetch(`${ANIME_BASE_URL}/anime/${id}/recommendations`, {
    cache: 'force-cache'
  });

  if (!res.ok) {
    throw new Error(`Fetching recommendations for anime with ID ${id} failed: ${res.statusText}`);
  }

  const data = await res.json();

  return parseRecommendations(data.data); 
}

export async function getAnimeBySearch(query: string){
  const res = await fetch(`${ANIME_BASE_URL}/anime?q=${query}`, {
    cache: 'force-cache'
  })

  if(!res.ok) throw new Error(`Fetching Anime By: ${query} Failed`)

  const data = await res.json();

  return parseAnimes(data)
}


export async function HomePageData() {
  const populars = await getPopularsAnimes(1);
  const fantasy = await getAnimesByGenres("10", 1);
  const action = await getAnimesByGenres("1", 1);
  const horror = await getAnimesByGenres("14", 1);

  return { 
    popular: populars.animes, 
    fantasy: fantasy.animes, 
    action: action.animes, 
    horror: horror.animes 
  };
};

export async function wait(time: number): Promise<void> {
  return new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, time)
  );
}
