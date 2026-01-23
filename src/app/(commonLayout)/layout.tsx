// import { Navbar } from '@/components/layout/Navbar'
import { Toaster } from '@/components/ui/sonner'
import React from 'react'

const CommonLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
      {/* <Navbar/> */}
      {children}
      <Toaster richColors/>
    </div>
  )
}

export default CommonLayout
