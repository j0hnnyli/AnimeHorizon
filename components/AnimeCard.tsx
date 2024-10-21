import Image from "next/image";
import Link from "next/link";
import React from "react";
import QuickAddButton from "./QuickAddButton";

type Props = {
  id: number;
  url: string;
  title: string;
};

const AnimeCard = ({ id, url, title }: Props) => {
  return (
    <div className="relative hover:scale-105">
      <Link href={`/anime/${id}`} className="absolute w-full h-full z-10"></Link>
      <div className="h-[250px] relative">
        <QuickAddButton
          id={id}
          className=""
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
