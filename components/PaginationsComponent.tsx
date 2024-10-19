import Link from 'next/link';
import React from 'react'
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type Props = {
  maxPage : number;
  currpage: number;
  genreId: number;
}

const PaginationsComponent = ({maxPage, currpage, genreId} : Props) => {
  return (
    <div className='flex justify-between items-center w-full mb-5'>
      {
        currpage > 1 ? (
          <Link
            href={`/genre/${genreId}?page=${Number(currpage) - 1}`} 
            className='py-2 px-4 border-animehorizon_orange border-2 flex items-center justify-center rounded-lg text-animehorizon_orange hover:text-white'
          >
            <FaArrowLeftLong/>
          </Link>
        ) : <div className='py-2 px-4'></div>
      }
      
      <div className='flex items-center justify-center'>
        <span className='text-animehorizon_orange'>{currpage}</span> 
        <span className='mx-3 text-white'>/</span> 
        <span className='text-white'>{maxPage}</span>
      </div>
      
      {
        currpage < maxPage ? (
          <Link   
            href={`/genre/${genreId}?page=${Number(currpage) + 1}`} 
            className='py-2 px-4 border-animehorizon_orange border-2 flex items-center justify-center rounded-lg text-animehorizon_orange hover:text-white'
          >
            <FaArrowRightLong/>
          </Link>
        ) : <div className='py-2 px-4'></div>
      }
    </div>
  )
}

export default PaginationsComponent