import Link from 'next/link'
import Logo from './Logo'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTv } from "react-icons/fa";
import NavBarBrowse from './NavBarBrowse';
import { getGenres, wait } from '@/lib/fetchFns';
import { Suspense } from 'react';
import SectionLoadingSkeletion from './SectionLoadingSkeletion';

const Navbar = () => {
  return (
    <div 
      className="flex items-center justify-between top-0 fixed w-full text-animehorizon_orange z-50 bg-animehorizon_black bg-opacity-55 h-20 px-5"
    >
      <Logo/>

      <div className='w-full text-center text-xl flex justify-center items-center'>
        <NavBarBrowse>
          <BrowseContainer/>
        </NavBarBrowse>
      </div>

      <div className='w-full flex items-center justify-end'>
        <FaMagnifyingGlass className='text-xl mx-3 hover:text-white'/>
        <FaTv className='text-xl mx-5 hover:text-white'/>
      </div>
    </div>
  )
}

function BrowseContainer(){
  return (
    <div className='flex bg-gray-800 text-white'>
      <div className='border-r-2 border-gray-400 p-2 text-md w-[125px] text-left'>
        <Link href="/popular" className='hover:text-animehorizon_orange w-full'>Populars</Link>
      </div>

      <Suspense fallback={ <SectionLoadingSkeletion className='w-[500px] h-[300px] m-2'/> }>
        <Genres/>
      </Suspense>
    </div>
  )
}

async function Genres(){
  const genres = await getGenres();

  return (
    <div className='flex flex-col w-[400px]'>
      <h3 className='text-left p-2'>Genres</h3>
      <div className='grid grid-cols-3 h-auto overflow-auto p-2 text-sm'>
        {genres.map((genre) => (
          <Link 
            key={genre.id}
            href={`/genre/${genre.id}`}
            className='m-2 w-full text-left hover:text-animehorizon_orange'
          >
            {genre.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar