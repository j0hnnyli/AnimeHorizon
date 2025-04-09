'use client'

import React, { ReactNode } from 'react'
import PopularPagination from './PopularPagination'

const Layout = ({children} : {children : ReactNode}) => {


  return (
    <div className='max_width p-3'>
      <h2 className='text-animehorizon_orange text-5xl mb-10'>Most Popular Animes</h2> 
      <PopularPagination/>

      <div>
        {children}
      </div>
  </div>
  )
}

export default Layout