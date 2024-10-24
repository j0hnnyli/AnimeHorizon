"use client";

import React, { useContext, useEffect, useState } from "react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import MiniWatchList from "./MiniWatchList";
import { watchlistContext } from "@/context/watchlistContext";
import { FaPlus } from "react-icons/fa6";
import { ParsedAnimeType } from "@/lib/types/ParsedAnimeType";

type Props = {
  id: number;
  anime: ParsedAnimeType;
};

const QuickAddButton = ({ anime, id }: Props) => {
  const [mounted, setMounted] = useState<boolean>(false)
  const { handleAddWatchlist, watchlist } =
    useContext(watchlistContext);

  const match = watchlist.find((anime) => anime.id === id);

  const handleAdd = async (anime: ParsedAnimeType) => {
    if (match) {
      return;
    }

    handleAddWatchlist(anime);
  };

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <Sheet>
        {(!match && mounted) && (
            <SheetTrigger 
              onClick={() => handleAdd(anime)}
              className="absolute bottom-3 right-3 z-40 hover:text-white text-black p-2 flex justify-center items-center rounded-full bg-animehorizon_orange"
            >
              <div>
                <FaPlus className="text-md" />
              </div>
            </SheetTrigger>
        )}

      <SheetContent className="bg-black text-white w-80">
        <MiniWatchList />
      </SheetContent>
    </Sheet>
  );
};

export default QuickAddButton;
