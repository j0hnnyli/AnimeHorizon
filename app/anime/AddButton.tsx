'use client'

import { watchlistContext } from '@/context/watchlistContext'
import { ParsedAnimeType } from '@/lib/types/ParsedAnimeType'
import { useContext } from 'react'
import { FaRibbon } from 'react-icons/fa6'
import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet"
import MiniWatchList from '@/components/MiniWatchList'

type Props = {
  id: number
  anime: ParsedAnimeType;
}

const AddButton = ({ id, anime } : Props) => {
  const { handleAddWatchlist, watchlist } = useContext(watchlistContext)

  const match = watchlist.find((anime) => anime.id === id)

  return (
    <Sheet>
      <SheetTrigger 
        onClick={() => handleAddWatchlist(anime)}
        disabled={match ? true : false}
        className="flex items-center border-2 border-animehorizon_orange text-animehorizon_orange py-1 px-3 hover:text-white hover:bg-animehorizon_orange my-3"
      >
        <FaRibbon className="mr-3"/>
        <span>{match ? 'AlREADY IN WATCHLIST' : 'ADD TO WATCHLIST' }</span>
      </SheetTrigger>

      <SheetContent className='bg-black text-white w-80'>
        <MiniWatchList /> 
      </SheetContent>
    </Sheet>
  )
}


export default AddButton