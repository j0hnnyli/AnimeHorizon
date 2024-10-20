import Link from 'next/link';
import React from 'react'
import Logo from './Logo';
import ScrollTopButton from './ScrollTopButton';

const Footer = () => {
  return (
    <footer className="bg-animehorizon_black text-white py-10 mt-16 border-t-2 border-white relative">
      <ScrollTopButton />
      <div className="flex justify-between px-5 max-w-[2000px] mx-auto">
        <Logo />
        <div className='w-full'>
          <h2 className="text-lg font-bold mb-4 text-animehorizon_orange">About Us</h2>
          <p className="text-sm">
            We are dedicated to bringing you the latest and greatest in anime. 
            Explore genres, watch trailers, and find your next favorite series!
          </p>
        </div>

        <div className='w-full flex flex-col items-center'>
          <h2 className="text-lg font-bold mb-4 text-animehorizon_orange">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-animehorizon_orange">Home</Link></li>
            <li><Link href="/popular?page=1" className="hover:text-animehorizon_orange">Populars</Link></li>
          </ul>
        </div>

        <div className='w-full flex flex-col items-center'>
          <h2 className="text-lg font-bold mb-4 text-animehorizon_orange">Follow Us</h2>
          <div className="">
            <p className="hover:text-animehorizon_orange text-left cursor-pointer">Facebook</p>
            <p className="hover:text-animehorizon_orange text-left cursor-pointer">Twitter</p>
            <p className="hover:text-animehorizon_orange text-left cursor-pointer">Instagram</p>
            <p className="hover:text-animehorizon_orange text-left cursor-pointer">YouTube</p>
          </div>
        </div>

      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Anime Horizon. All Rights Reserved by Johnny Li.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
