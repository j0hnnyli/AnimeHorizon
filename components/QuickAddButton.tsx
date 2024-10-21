'use client'

import React, { useContext } from 'react'
import {
  Sheet,
  SheetTrigger,
  SheetContent
} from "@/components/ui/sheet"
import MiniWatchList from './MiniWatchList';
import { watchlistContext } from '@/context/watchlistContext';
import { FaPlus } from 'react-icons/fa6';


type Props = {
  className: string;
  id: number;
}

const QuickAddButton = ({ id} : Props) => {
  const { handleAddWatchlist, watchlist } = useContext(watchlistContext);

  const match = watchlist.find((anime) => anime.id === id)

  const handleAdd = async (id: number) => {
    if(match) {
      return;
    };

    handleAddWatchlist(id)
  }

  return (
    <Sheet>  
      <SheetTrigger className='absolute bottom-3 right-3 z-40 hover:text-white text-black p-2 flex justify-center items-center rounded-full bg-animehorizon_orange' onClick={() => handleAdd(id)}>   
        <FaPlus className='text-md'/>
      </SheetTrigger>

      <SheetContent className='bg-black text-white w-80'>
        <MiniWatchList /> 
      </SheetContent>

    </Sheet>
  )
}

export default QuickAddButton
