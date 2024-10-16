type Images = {
  small : string,
  large : string
}

export type ParsedAnimeType = {
  id: number,
  title: string,
  images: Images,
  about: string,
  youtubeUrl: string,
  genres: Array<string>,
  rating: number,
}
