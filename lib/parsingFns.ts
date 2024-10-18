import { Anime } from "./types/AnimeType";
import { Character } from "./types/CharacterType";
import { Recommendation } from "./types/RecommendationType";

export function parseAnimes(animes : Array<Anime>){
  const parsed = animes.map((anime) => (
    {
      id: anime.mal_id || 0,
      title: anime.title_english || "",
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

  return parsed;
}

export function parseSingleAnime(anime: Anime){
  return {
    id: anime.mal_id || 0,
    title: anime.title_english || "",
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

export function parseCharacters(characters : Character[]){
  const parsed = characters.map((character) => (
    {
      id: character.character.mal_id,
      name: character.character.name ,
      role: character.role || "",
      image: character.character.images.jpg.image_url || "",
    }
  ))

  return parsed;
}

export function parseRecommendations(recommendations: Recommendation[]){
  const parsed = recommendations.map((recommend) => (
    {
      id: recommend.entry.mal_id,
      title: recommend.entry.title || "",
      image : recommend.entry.images.jpg.image_url || ""
    }
  ))

  return parsed;
}