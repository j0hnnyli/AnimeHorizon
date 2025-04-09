'use client'

import { useSearchParams } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  children : ReactNode;
}

const Layout = ({ children } : Props) => {
  const searchParams = useSearchParams();
  const name = searchParams.get('name');

  return (
    <div className="max_width p-3">
      <h2 className="text-animehorizon_orange text-5xl mb-10">
        {name}
      </h2>

      <div>
        {children}
      </div>
    </div>
  )
}

export default Layout;