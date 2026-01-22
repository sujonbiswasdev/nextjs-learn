

import { env } from '@/env';
import { blogService } from '@/services/blog.service';
// import { cookies } from 'next/headers';

// const AUTH_URL=process.env.NEXT_PUBLIC_AUTH_URL

// const AUTH_URL1=env.API_URL
// console.log(AUTH_URL1)

const HomePage =async() => {
  const data=blogService.getBlogPosts({
    isFeatured:true
  },{cache:"no-store"})
  console.log(data,"data is featching right now is ok")
//   const cookiese = await cookies()
  
//   const res= await fetch(`${AUTH_URL}/get-session`,{
//     headers:{
//       Cookie:cookiese.toString()
//     },
//     cache:"no-store"
//   })
//  const seesion=await res.json()
//  console.log(seesion,"data fetiching date")
  
  return (
    <div>
      this is home HomePage
    </div>
  )
}

export default HomePage
