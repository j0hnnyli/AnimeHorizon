"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import { LuChevronDown } from "react-icons/lu";

type Props = {
  children: ReactNode;
};

const NavBarBrowse = ({ children }: Props) => {
  const [showBrowse, setShowBrowse] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClose = (e: MouseEvent) => {
      const isButtonClicked = buttonRef.current && buttonRef.current.contains(e.target as Node);
      const isDropdownClicked = ref.current && ref.current.contains(e.target as Node);

      if (!isButtonClicked && !isDropdownClicked) {
        setShowBrowse(false);
      }
    };

    window.addEventListener('mousedown' , handleClose)

    return () => window.removeEventListener('mousedown', handleClose)
  }, []);

  return (
    <div className="h-20 relative">
      <div 
        ref={buttonRef}
        className={
          `p-5 h-full w-full ${showBrowse && "bg-gray-800 text-white"} 
          flex items-center justify-center hover:bg-gray-800 cursor-pointer
        `}
        onClick={() => setShowBrowse(!showBrowse)}
      >
        <div>Browse</div>
        <LuChevronDown className="text-md" />
      </div>

      {showBrowse && (
        <div
          ref={ref}
          className="absolute -bottom-46"
          onClick={() => setShowBrowse(false)}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default NavBarBrowse;
