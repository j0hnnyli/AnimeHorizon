import { getPopularsAnimes} from '@/lib/fetchFns';
import React from 'react'
import ShowCaseContent from '@/components/homepage/ShowCaseContent'

const ShowCase = async () => {
  const { animes: popularAnimes } = await getPopularsAnimes(1);

  return (
    <>
      <ShowCaseContent animes={popularAnimes}/>
    </>
  )
}

export default ShowCase