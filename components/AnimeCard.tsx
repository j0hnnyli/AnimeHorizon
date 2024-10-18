import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: number;
  url: string;
  title: string;
};

const AnimeCard = ({ id, url, title }: Props) => {
  return (
    <div className="relative">
      <Link href={`/anime/${id}`} className="absolute w-full h-full"></Link>
      <div className="h-[300px] w-full">
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
