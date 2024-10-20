'use client'
import { GoChevronUp } from "react-icons/go";

const ScrollTopButton = () => {

  function handleScrollTop(){
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <div className="absolute -top-6 flex justify-center items-center w-full">
      <button
        onClick={handleScrollTop}
        className='p-3 rounded-full bg-black border-2 border-white hover:bg-animehorizon_orange hover:text-white text-animehorizon_orange'
      >
        <GoChevronUp/>
      </button>
    </div>
  )
}

export default ScrollTopButton