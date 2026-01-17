import Link from 'next/link'
import React from 'react'

const ErrorPage= () => {
  return (
    <div className='h-screen mx-auto px-4 max-w-full mt-7 space-y-3'>
      404 error page
     <div className='flex flex-col mx-auto max-h-screen max-w-full mt-10'>
        <div>
             <Link href={"/"} className='bg-gray-800 text-white px-6 py-2 rounded-2xl mt-4'>Home</Link>
        </div>
     </div>
    </div>
  )
}

export default ErrorPage
