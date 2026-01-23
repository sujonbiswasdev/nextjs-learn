'use client'
import { getBlogs } from "@/actions/blog.action";
import { blogService } from "@/services/blog.service";
import { useEffect, useState } from "react"

export const dynamic = 'force-dynamic' 
export const AboutPage = () => {
  const [data, setData] = useState<any>(undefined);

  useEffect(()=>{
    (
      async ()=>{
        const {data}= await getBlogs();
        setData(data)
      }
    )()

  },[])
  console.log(data)

  return (
    <div>
        {
          data?.data?.map((post:any)=>{
            return <div>
                {post.title}
            </div>
          })
        }
    </div>
  )
}
export default AboutPage
