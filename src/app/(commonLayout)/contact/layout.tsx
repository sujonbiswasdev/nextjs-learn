import { Navbar } from '@/components/layout/Navbar'
import React from 'react'

const ContactLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <div>
     <Navbar/>
      {children}
    </div>
  )
}

export default ContactLayout
