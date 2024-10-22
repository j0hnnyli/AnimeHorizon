import React, { ReactNode } from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip"
import QuickAddButton from './QuickAddButton';

type Props = {
  className?: string;
  children: ReactNode
}

const HoverTip = ({className, children} : Props) => {
  return (
    <TooltipProvider delayDuration={50}>
      <Tooltip>
        <QuickAddButton children={children} className={className}/>
        <TooltipContent>
          <p>Add to Watchlist</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default HoverTip
