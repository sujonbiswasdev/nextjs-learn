import { blogService } from '@/services/blog.service'
import { BlogPost } from '@/types/Blog.type'
import Link from 'next/link'

const BlogPage = async() => {
   const {data}= await blogService.getBlogPosts()
  const arrayofid= data?.data?.map((blog:BlogPost)=>({id:blog.id})).splice(0,3)
  console.log(arrayofid)
  return (
    <div className='bg-red-500'>
        this is blog pagesdfsdfz
        <Link href={'/blogs/744ead75-9eab-4fb5-b8c8-59001f413844'}>click here</Link>
      
    </div>
  )
}

export default BlogPage
