"use client";

import { useState } from "react";
import { FaInfo } from "react-icons/fa6";
import { FaPlay } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { ParsedAnimeType } from "@/lib/types/ParsedAnimeType";
import Image from "next/image";
import Link from "next/link";

type Props = {
  animes: Array<ParsedAnimeType>;
};

const ShowCase = ({ animes }: Props) => {
  const [slide, setSlide] = useState(0);
  const topFiveAnimes: Array<ParsedAnimeType> = animes.slice(0, 6);

  const currAnime = topFiveAnimes[slide];

  const handleLeftClick = () => {
    setSlide((perv) => {
      if (perv === 0) return topFiveAnimes.length - 1;

      return perv - 1;
    });
  };

  const handleRightClick = () => {
    setSlide((perv) => {
      if (perv === topFiveAnimes.length - 1) return 0;

      return perv + 1;
    });
  };

  return (
    <div className="h-[80vh] w-full relative">
      <Image
        src={currAnime.images.large}
        alt="anime image"
        fill
        objectFit="cover"
        className="ease-in-out"
      />

      <div className="absolute bg-black w-full h-full opacity-60"></div>

      <div className="absolute bottom-5 w-full lg:bottom-16 md:w-[50%] pl-6 z-40" >
        <div className="my-5">
          {currAnime.genres.map((genre) => (
            <span
              key={genre}
              className="bg-white text-animehorizon_orange py-1 px-2 mr-3"
            >
              {genre}
            </span>
          ))}
        </div>
        <h2 className="text-animehorizon_orange text-2xl lg:text-3xl font-bold my-5">
          {currAnime.title}
        </h2>
        <p className="text-white text-md hidden md:inline">
          {currAnime.about.slice(0, 150)} . . .
        </p>

        <div className="my-5 flex">
          <Link
            href={`/anime/${animes[slide].id}`}
            className="bg-animehorizon_orange hover:bg-animehorizon_orange_hover text-white py-2 px-4 rounded-lg flex items-center justify-between"
          >
            <span>More Info</span>
            <FaInfo className="ml-3" />
          </Link>

          <Link
            href={currAnime.youtubeUrl}
            target="_blank"
            className="bg-red-500 hover:bg-red-800 text-white py-2 px-4 rounded-lg mx-5 flex items-center justify-between"
          >
            <span>Trailer</span>
            <FaPlay className="ml-3" />
          </Link>
        </div>
      </div>

      <div className="absolute h-full w-full flex items-center justify-between text-animehorizon_orange mb-10 z-30">
        <button className="p-3 hover:text-white" onClick={handleLeftClick}>
          <FaChevronLeft className="text-xl" />
        </button>
        <button className="p-3 hover:text-white" onClick={handleRightClick}>
          <FaChevronRight className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default ShowCase;
