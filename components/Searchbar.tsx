'use client'

import {useState, useEffect} from 'react'
import { useDebounce } from 'use-debounce'
import { useRouter } from 'next/navigation'

type Props = {
  defaultSearchValue: string
}

const Searchbar = ({defaultSearchValue} : Props) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string>("")
  const [query] = useDebounce(searchValue, 500);

  useEffect(() => {
    if (query) {
      router.push(`/search?query=${query.toLowerCase()}`);
    }
  }, [query, router, searchValue])

  return (
    <div className=''>
      <input 
        defaultValue={defaultSearchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text" 
        placeholder='Search ...'
        className='my-10  bg-black text-white w-full p-2 block outline-none text-2xl border-b-2 border-animehorizon_orange'
      />
    </div>
  )
}

export default Searchbar