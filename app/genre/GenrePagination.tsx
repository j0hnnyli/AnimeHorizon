'use client'

import { usePathname, useSearchParams, useRouter } from 'next/navigation';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

type Props = {
  maxPage : number
}

const GenrePagination = ({ maxPage } : Props) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { replace } = useRouter();

  const currpage = Number(searchParams.get('page'));

  const handlepagination = (operation : 'add' | 'sub' ) => {
    const params = new URLSearchParams(searchParams);

    let newPage = currpage;

    if (operation === 'add') {
      newPage++;
    } else if (operation === 'sub') {
      newPage--;
    }

    params.set('page', newPage.toString());
  
    replace(`${pathname}?${params.toString()}`)
  }


  return (
    <div className='flex justify-between items-center w-full mb-5 '>
      {
        currpage > 1 ? (
          <button
            onClick={() => handlepagination('sub')}
            className='py-2 px-4 border-animehorizon_orange border-2 flex items-center justify-center rounded-lg text-animehorizon_orange hover:text-white'
          >
            <FaArrowLeftLong/>
          </button>
        ) : <div className='py-2 px-6'></div>
      }
      
      <div className='flex items-center justify-center w-full'>
        <span className='text-animehorizon_orange'>{currpage}</span> 
        <span className='mx-3 text-white'>/</span> 
        <span className='text-white'>{maxPage}</span>
      </div>
      
      {
        currpage < maxPage ? (
          <button   
            onClick={() => handlepagination('add')}
            className='py-2 px-4 border-animehorizon_orange border-2 flex items-center justify-center rounded-lg text-animehorizon_orange hover:text-white'
          >
            <FaArrowRightLong/>
          </button>
        ) : <div className='py-2 px-6'></div>
      }
    </div>
  )
}

export default GenrePagination