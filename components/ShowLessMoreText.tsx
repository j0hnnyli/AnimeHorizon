'use client'
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  text: string;
  className?: string;
};

const ShowLessMoreText = ({ text, className }: Props) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  return (
    <>
      <div
        className={cn(`${!showMore ? 'h-[100px]' : 'h-auto'} overflow-hidden`, className)}
      >
        <p>
          {text}
        </p>
      </div>

      {text.length > 200 && (
        <button 
          onClick={() => setShowMore(!showMore)}
          className="text-animehorizon_orange font-bold"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </>
  );
};

export default ShowLessMoreText;
