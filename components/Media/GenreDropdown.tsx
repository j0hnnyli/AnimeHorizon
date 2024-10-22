'use client'
import { ReactNode, useState } from 'react'
import { FaChevronDown } from 'react-icons/fa6'

type Props = {
  children: ReactNode
}

const GenreDropdown = ({children} : Props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button 
        onClick={() => setShow(!show)}
        className='text-left flex items-center justify-between'
      >
        <span>Genres</span>
        <span><FaChevronDown className={`${show && 'rotate-180 duration-300'}`}/></span>
      </button>

      {show && (
        <>
          {children}
        </>
      )}
    </>
  )
}

export default GenreDropdown