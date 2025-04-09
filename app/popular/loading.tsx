import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

const Loading = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-5'>
    {new Array(6).fill(0).map((_,i) => {
        return (
          <Skeleton key={i} className='bg-gray-500 h-[250px] md:h-[300px]'/>
        )
      })
    }
  </div>
  )
}

export default Loading