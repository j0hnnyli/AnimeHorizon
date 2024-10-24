'use client'

import {useContext, useEffect, useState} from 'react'
import { watchlistContext } from '@/context/watchlistContext'

const MiniWatchlistLengthUI = () => {
  const { watchlist } = useContext(watchlistContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  return (
    <span className='absolute rounded-full text-[12px] mb-1 text-white'>
      {mounted && watchlist.length}
    </span>
  )
}

export default MiniWatchlistLengthUI