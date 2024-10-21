'use client'

import { ParsedAnimeType } from "@/lib/types/ParsedAnimeType"
import { createContext, ReactNode, useEffect, useState } from "react"
import { getAnime } from '@/lib/fetchFns'

type WatchlistContextType = {
  handleAddWatchlist: (id: number) => void;
  handleDelete: (id: number) => void;
  watchlist: ParsedAnimeType[]
}

const initalWatchlist : ParsedAnimeType[] = []

const watchlistContext = createContext<WatchlistContextType>({
  watchlist: initalWatchlist,
  handleAddWatchlist: (id: number) => {},
  handleDelete: (id: number) => {},
})


function WatchlistProvider({children} : { children: ReactNode}){
  const [watchlist, setWatchlist] = useState<ParsedAnimeType[]>(() => {
    if (typeof window !== 'undefined') {
      const storedWatchlist = localStorage.getItem("ahlist");
      return storedWatchlist ? JSON.parse(storedWatchlist) : [];
    }
    return [];
  });

  const handleAddWatchlist = async (id: number) => {
    const anime = await getAnime(id)

    setWatchlist([anime, ...watchlist])
  }

  const handleDelete = (id: number) => {
    const filitered = watchlist.filter((anime) => anime.id !== id);

    setWatchlist(filitered)
  }

  useEffect(() => {
    window.localStorage.setItem('ahlist', JSON.stringify(watchlist))
  }, [watchlist])

  const providerValues = {
    handleAddWatchlist, handleDelete, watchlist
  }

  return (
    <watchlistContext.Provider value={providerValues}>
      {children}
    </watchlistContext.Provider>
  )
}

export {watchlistContext, WatchlistProvider}