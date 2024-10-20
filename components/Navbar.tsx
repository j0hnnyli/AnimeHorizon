import Link from 'next/link'
import Logo from './Logo'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTv } from "react-icons/fa";
import NavBarBrowse from './NavBarBrowse';
import { getGenres } from '@/lib/fetchFns';
import { Suspense } from 'react';
import SectionLoadingSkeletion from './SectionLoadingSkeletion';

const Navbar = () => {
  return (
    <div 
      className="flex items-center justify-between top-0 fixed w-full text-animehorizon_orange z-50 bg-animehorizon_black h-20 px-5"
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

        <Link href='/mylist'
          className='h-20 flex justify-center items-center hover:bg-gray-800 px-3'
        >
          <FaTv className='text-xl'/>
        </Link>
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
        <Genres/>
      </Suspense>
    </div>
  )
}

async function Genres(){
  const genres = await getGenres();

  return (
    <div className='flex flex-col w-[400px]'>
      <h3 className='text-left p-2 text-animehorizon_orange font-bold'>Genres</h3>
      <div className='grid grid-cols-3 h-auto overflow-auto p-2 text-sm'>
        {genres.map((genre) => (
          <Link 
            key={genre.id}
            href={`/genre/${genre.id}?page=1&name=${genre.name}`}
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