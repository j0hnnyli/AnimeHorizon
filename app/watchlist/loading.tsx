import SpinnerIcon from '@/components/icons/Spinner'
import React from 'react'

const WatchlistPageLoading = () => {
  return (
    <div className="flex h-[calc(100vh-250px)] w-screen items-center justify-center md:h-full md:w-full">
      <SpinnerIcon />
    </div>
  )
}

export default WatchlistPageLoading