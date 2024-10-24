'use client'

import { watchlistContext } from '@/context/watchlistContext'
import { ParsedAnimeType } from '@/lib/types/ParsedAnimeType'
import { useContext, useEffect, useState } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet"
import MiniWatchList from '@/components/MiniWatchList'
import { FaRegBookmark } from "react-icons/fa";

type Props = {
  id: number
  anime: ParsedAnimeType;
}

const AddButton = ({ id, anime } : Props) => {
  const { handleAddWatchlist, watchlist } = useContext(watchlistContext);
  const [match, setMatch] = useState(false);

  useEffect(() => {
    setMatch(watchlist.some((anime) => anime.id === id))
  }, [id, watchlist])

  return (
    <Sheet>
      <SheetTrigger 
        onClick={() => handleAddWatchlist(anime)}
        disabled={match ? true : false}
        className="flex items-center border-2 border-animehorizon_orange text-animehorizon_orange py-1 px-3 hover:text-white hover:bg-animehorizon_orange my-3 cursor-pointer"
      >
        <FaRegBookmark className="mr-1 text-2xl"/>
        {match ? <span>AlREADY IN WATCHLIST</span> : <span>ADD TO WATCHLIST</span>}
      </SheetTrigger>

      <SheetContent className='bg-black text-white w-80'>
        <MiniWatchList /> 
      </SheetContent>
    </Sheet>
  )
}


export default AddButton