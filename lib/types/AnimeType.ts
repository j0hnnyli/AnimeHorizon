type ImageObject = {
  jpg: {
    image_url: string,
    small_image_url: string,
    large_image_url: string,
  };
  webp: {
    image_url: string,
    small_image_url: string,
    large_image_url: string,
  };
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

type Producer = {
  mal_id: number,
  type: string,
  name: string,
  url: string
}

type Theme = {
  mal_id: number,
  type: string,
  name: string,
  url: string
}

type Liscensor = {
  mal_id: number,
  type: string,
  name: string,
  url: string
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
  producers: Array<Producer>; 
  licensors: Array<Liscensor>; 
  studios: Array<Record<string, unknown>>; 
  genres: Array<Genres>; 
  explicit_genres: Array<Record<string, unknown>>; 
  themes: Array<Theme>; 
  demographics: Array<Record<string, unknown>>; 
};
