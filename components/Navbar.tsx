import Link from 'next/link'
import Logo from './Logo'
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaTv } from "react-icons/fa";
// bg-[url('/girl-7628308_1920.jpg')]
const Navbar = () => {
  return (
    <div 
      className="flex items-center justify-between py-5 px-7 bg-cover top-0 fixed w-full text-animehorizon_orange z-50 "
    >
      <Logo/>

      <div className='w-full text-center text-xl'>
        <Link href="/" className='mx-5 hover:text-animehorizon_orange'>Home</Link>
        <Link href="/" className='mx-5 hover:text-animehorizon_orange'>Browse</Link>
      </div>

      <div className='w-full flex items-center justify-end'>
        <FaMagnifyingGlass className='text-xl mx-3 hover:text-animehorizon_orange'/>
        <FaTv className='text-xl mx-5 hover:text-animehorizon_orange'/>
      </div>
    </div>
  )
}

export default Navbar