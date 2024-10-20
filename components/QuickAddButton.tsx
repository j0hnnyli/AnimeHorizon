'use client'

import { TooltipTrigger } from '@radix-ui/react-tooltip';
import React, { ReactNode } from 'react'
import { FaPlus } from "react-icons/fa";

type Props = {
  className?: string;
  children: ReactNode
}

const QuickAddButton = ({className, children} : Props) => {
  return (
    <button className={className}>
      <TooltipTrigger  asChild>
        {children}
      </TooltipTrigger>
    </button>
  )
}

export default QuickAddButton