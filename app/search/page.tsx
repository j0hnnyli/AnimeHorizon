import React, { Suspense } from 'react'
import { wait } from '@/lib/fetchFns';
import Searchbar from '@/components/Searchbar';
import SearchDisplayContainer from './SearchDisplayContainer';
import SectionLoadingSkeletion from '@/components/SectionLoadingSkeletion';

type Props = {
  searchParams:{
    query: string
  }
}

const SearchPage = async ({searchParams} : Props) => {
  return (
    <div className='w-[90%] mx-auto max-w-[2000px]'>
      <Searchbar defaultSearchValue={searchParams.query}/>

      {searchParams.query && (
        <Suspense fallback={<SectionLoadingSkeletion className='w-full h-96'/>}>
          <SearchDisplayContainer searchQuery={searchParams.query}/>
        </Suspense> 
      )}
    </div>
  )
}

export default SearchPage;