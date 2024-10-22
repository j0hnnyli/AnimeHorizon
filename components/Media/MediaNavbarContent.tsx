import React, { Suspense } from 'react'
import Logo from '../Logo'
import Link from 'next/link'
import GenreDropdown from './GenreDropdown'
import SectionLoadingSkeletion from '../SectionLoadingSkeletion'
import GetGenresContainer from './GetGenresContainer'
import { SheetClose } from '../ui/sheet'

const MediaNavbarContent = () => {
  return (
    <div className='overflow-auto'>
      <Logo className='flex-col'/>

      <div className='flex flex-col w-[90%]'>
        <Link href="/" className='mt-3'>
          <SheetClose>
            Home
          </SheetClose>
        </Link>
        <Link href="/popular?page=1" className='text-white my-3'>
          <SheetClose>
            Popular
          </SheetClose>
        </Link>

        <GenreDropdown>
          <Suspense fallback={<SectionLoadingSkeletion className='w-full h-full'/>}>
            <GetGenresContainer/>
          </Suspense>
        </GenreDropdown>
      </div>

    </div>
  )
}

export default MediaNavbarContent