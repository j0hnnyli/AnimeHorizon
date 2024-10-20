import Image from "next/image";
import Link from "next/link";
import React from "react";
import QuickAddButton from "./QuickAddButton";
import HoverTip from "./HoverTip";
import { FaPlus } from "react-icons/fa6";

type Props = {
  id: number;
  url: string;
  title: string;
};

const AnimeCard = ({ id, url, title }: Props) => {
  return (
    <div className="relative">
      <Link href={`/anime/${id}`} className="absolute w-full h-full"></Link>
      <div className="h-[250px] w-full relative">
        <HoverTip
          className="absolute bottom-3 right-3 z-30 hover:text-white text-black p-2 flex justify-center items-center rounded-full bg-animehorizon_orange"
          children={<FaPlus className='text-md'/>}
        />
        <Image
          src={url}
          alt={title}
          width={200}
          height={300}
          className="w-full h-full"
        />
      </div>
      <h3 className="text-white text-md">{title}</h3>
    </div>
  );
};

export default AnimeCard;
