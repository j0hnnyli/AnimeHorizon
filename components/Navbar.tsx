import Link from 'next/link'
import Logo from './Logo'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";
import NavBarBrowse from './NavBarBrowse';
import { Suspense } from 'react';
import SectionLoadingSkeletion from './SectionLoadingSkeletion';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import MiniWatchList from './MiniWatchList';
import GetGenres from './GetGenres';
import MiniWatchlistLengthUI from './MiniWatchlistLengthUI';

const Navbar = () => {
  return (
    <div 
      className="hidden md:flex items-center justify-between top-0 fixed w-full text-animehorizon_orange z-50 bg-animehorizon_black h-20 px-5"
    >
      <div className='flex items-center'>
        <Logo/>
        <NavBarBrowse>
          <BrowseContainer/>
        </NavBarBrowse>
      </div>

      <div className='w-full flex items-center justify-end'>
        <Link href="/search?query="
          className='h-20 flex justify-center items-center hover:bg-gray-800 px-3'
        >
          <FaMagnifyingGlass className='text-xl'/>
        </Link>

        <Sheet>
          <SheetTrigger className='h-20 flex justify-center items-center hover:bg-gray-800 px-3 relative'>     
            <FaRegBookmark className='text-2xl'/>
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

function BrowseContainer(){
  return (
    <div className='flex bg-gray-800 text-white'>
      <div className='border-r-2 border-gray-400 p-2 text-md w-[110px] text-left'>
        <Link href="/popular?page=1" className='hover:text-animehorizon_orange w-full'>Populars</Link>
      </div>

      <Suspense fallback={ <SectionLoadingSkeletion className='w-[500px] h-[300px] m-2'/> }>
        <GetGenres/>
      </Suspense>
    </div>
  )
}

export default Navbar