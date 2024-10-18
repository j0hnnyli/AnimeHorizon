import React from 'react'

type Props = {
  params : {
    id : number
  }
}

const GenrePage = ({params} : Props) => {
  return (
    <div className='text-white'>Genre : {params.id}</div>
  )
}

export default GenrePage