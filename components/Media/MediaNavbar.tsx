import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import MediaNavbarContent from './MediaNavbarContent';
import Link from 'next/link';
import { FaMagnifyingGlass } from "react-icons/fa6";
import MiniWatchList from '../MiniWatchList';
import { FaRegBookmark } from "react-icons/fa";
import MiniWatchlistLengthUI from '../MiniWatchlistLengthUI';

const MediaNavbar = () => {
  return (
    <div className='md:hidden h-14 fixed top-0 w-full z-50 bg-black flex items-center justify-between'>
      <Sheet>
        <SheetTrigger className='flex flex-col items-center justify-center text-animehorizon_orange pl-3'>
          <div className='h-[1px] w-5 bg-animehorizon_orange rounded-full'></div>
          <div className='h-[1px] w-5 bg-animehorizon_orange rounded-full mt-2'></div>
        </SheetTrigger>
        <SheetContent side="left" className='bg-black text-white'>
          <MediaNavbarContent/>
        </SheetContent>
      </Sheet>

      <div className='text-animehorizon_orange flex items-center'>
        <Link href="/search?query="
          className='h-10 flex justify-center items-center px-3'
        >
          <FaMagnifyingGlass className='text-xl'/>
        </Link>

        <Sheet>
          <SheetTrigger className='h-10 flex justify-center items-center px-3 relative'>
            <FaRegBookmark className='text-xl'/>
            <MiniWatchlistLengthUI/>   
          </SheetTrigger>

          <SheetContent className='bg-black text-white w-80'>
            <MiniWatchList/>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}

export default MediaNavbar