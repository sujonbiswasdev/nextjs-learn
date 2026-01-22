import BlogCard from '@/components/modules/homepage/BlogCard';
import { blogService } from '@/services/blog.service';
// import { cookies } from 'next/headers';

// const AUTH_URL=process.env.NEXT_PUBLIC_AUTH_URL

// const AUTH_URL1=env.API_URL
// console.log(AUTH_URL1)
export const dynamic = 'force-dynamic' 
const HomePage =async() => {
  // const data=blogService.getBlogPosts({
  //   isFeatured:true
  // },{cache:"no-store"})
  // console.log(data,"data is featching right now is ok")
//   const cookiese = await cookies()
  
//   const res= await fetch(`${AUTH_URL}/get-session`,{
//     headers:{
//       Cookie:cookiese.toString()
//     },
//     cache:"no-store"
//   })
//  const seesion=await res.json()
//  console.log(seesion,"data fetiching date")

const {data} = await blogService.getBlogPosts({
  isFeatured:false
},{revalidate:200});
  
  return (
    <div className='grid grid-cols-3 max-w-7xl mx-auto px-4 gap-6'>
      {
        data.data.map((post:any)=>{
          return <div key={post.id} className='text-white'>
            <BlogCard post={post}/>
          </div>
        })
      }
    </div>
  )
}

export default HomePage
