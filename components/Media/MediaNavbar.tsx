import React from 'react'
import { MdMenu } from "react-icons/md";
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

const MediaNavbar = () => {
  return (
    <div className='md:hidden h-14 fixed top-0 w-full z-50 bg-black flex items-center justify-between p-2'>
      <Sheet>
        <SheetTrigger className='flex items-center justify-center text-animehorizon_orange'>
          <MdMenu className='text-2xl'/>
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
          <SheetTrigger className='h-10 flex justify-center items-center px-3'>
            <FaRegBookmark className='text-xl'/>
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