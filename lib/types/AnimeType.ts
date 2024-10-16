type ImageObject = {
  jpg: Record<string, unknown>;
  webp: Record<string, unknown>; 
};

type Trailer = {
  youtube_id: string;
  url: string;
  embed_url: string;
  images: Record<string, unknown>; 
};

type Aired = {
  from: string; 
  to: string; 
  prop: Record<string, unknown>; 
  string: string;
};

type Broadcast = {
  day: string;
  time: string;
  timezone: string;
  string: string;
};

type Genres = {
  mal_id : number
  name : string
  type : string  
  url : string
}

export type Anime = {
  mal_id: number;
  url: string;
  images: ImageObject;
  trailer: Trailer;
  approved: boolean;
  titles: Array<Record<string, unknown>>;
  title: string;
  title_english: string;
  title_japanese: string;
  title_synonyms: string[];
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  aired: Aired;
  duration: string;
  rating: string;
  score: number;
  scored_by: number;
  rank: number;
  popularity: number;
  members: number;
  favorites: number;
  synopsis: string;
  background: string;
  season: string;
  year: number;
  broadcast: Broadcast;
  producers: Array<Record<string, unknown>>; 
  licensors: Array<Record<string, unknown>>; 
  studios: Array<Record<string, unknown>>; 
  genres: Array<Genres>; 
  explicit_genres: Array<Record<string, unknown>>; 
  themes: Array<Record<string, unknown>>; 
  demographics: Array<Record<string, unknown>>; 
};
