import React from 'react'
import { FaRegBookmark } from "react-icons/fa";
import WatchlistContainer from './WatchlistContainer';

const WatchlistPage = () => {
  return (
    <div className='max-w-[2000px] w-[90%] mx-auto'>
      <div className='text-animehorizon_orange font-bold text-2xl flex items-center justify-center'>
        <FaRegBookmark className='text-2xl mr-3'/>        
        <h2>MY WATCHLIST</h2>
      </div>

      <div className='h-1 bg-white w-[90%] mx-auto rounded-xl my-5'></div>

      <WatchlistContainer/>
    </div>
  )
}

export default WatchlistPage