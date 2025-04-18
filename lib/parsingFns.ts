import { Anime, SingleAnime } from "./types/AnimeType";
import { Recommendation } from "./types/RecommendationType";
import { Genre } from "./types/GenreType";

export function parseAnimes(animes : Anime){
  const parsed = animes.data.map((anime) => (
    {
      id: anime.mal_id || 0,
      title: anime.title_english || anime.title,
      images: {
        small : anime?.images?.jpg?.image_url || "",
        large : anime?.images?.jpg?.large_image_url || "",
      },
      about: anime.synopsis || "",
      youtubeUrl: anime.trailer.url || "",
      genres: anime.genres.map((genre) => genre.name),
      rating: anime.score || 0,
    }
  ))

  return { maxPage: animes.pagination.last_visible_page, animes: parsed};
}

export function parseSingleAnime(anime: SingleAnime){
  return {
    id: anime.mal_id || 0,
    title: anime.title_english || anime.title,
    images: {
      small : anime?.images?.jpg?.image_url || "",
      large : anime?.images?.jpg?.large_image_url || "",
    },
    about: anime.synopsis || "",
    youtubeUrl: anime.trailer.url || "",
    genres: anime.genres.map((genre) => genre.name),
    rating: anime.score || 0,
    rated : anime.rating,
    producers : anime.producers.map((producer) => producer.name) || [],
    year: anime.year,
    themes: anime.themes.map((theme) => theme.name),
    licensors: anime.licensors.map((liscensor) => liscensor.name)
  }
}

export function parseRecommendations(recommendations: Recommendation[]){
  const parsed = recommendations.map((recommend) => (
    {
      id: recommend.entry.mal_id,
      title: recommend.entry.title || "",
      image : recommend.entry.images.jpg.large_image_url || ""
    }
  ))

  return parsed;
}

export function parseGenres(genres: Genre[] ){
  const parsed = genres.map((genre) => (
    {
      id: genre.mal_id,
      name : genre.name || "",
    }
  ))

  return parsed;
}
