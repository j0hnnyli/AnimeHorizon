'use client'

import React, { useContext } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet"
import MiniWatchList from './MiniWatchList';
import { watchlistContext } from '@/context/watchlistContext';
import { FaPlus, FaMinus } from 'react-icons/fa6';
import { ParsedAnimeType } from '@/lib/types/ParsedAnimeType';
import { buttonVariants } from './ui/button';


type Props = {
  id: number;
  anime: ParsedAnimeType;
}

const QuickAddButton = ({anime, id} : Props) => {
  const { handleAddWatchlist, watchlist, handleDelete } = useContext(watchlistContext);

  const match = watchlist.find((anime) => anime.id === id)

  const handleAdd = async (anime: ParsedAnimeType) => {
    if(match) {
      return;
    };

    handleAddWatchlist(anime)
  }

  return (
    <Sheet>  
      <SheetTrigger 
        className='absolute bottom-3 right-3 z-40 hover:text-white text-black p-2 flex justify-center items-center rounded-full bg-animehorizon_orange' 
      > 
        {
          match ? 
          (
            <div onClick={() => handleDelete(id)}>
              <FaMinus className='text-md'/>
            </div>
          ): (
            <div onClick={() => handleAdd(anime)}>
              <FaPlus className='text-md'/>
            </div>
          ) 
        }
      </SheetTrigger>
      

      <SheetContent className='bg-black text-white w-80'>
        <MiniWatchList /> 
      </SheetContent>

    </Sheet>
  )
}

export default QuickAddButton
