import { env } from "@/env"

const API_URL = env.API_URL
interface GetBlogParams{
    isFeatured?:boolean;
    search?:string
}
interface ServiceOption{
    cache:RequestCache
    revalidate?:number
}
export const blogService={
    getBlogPosts: async function(params?:GetBlogParams,options?:ServiceOption){
        try {
            const url=new URL(`${API_URL}/posts`)
            if(params){
                Object.entries(params).forEach(([key,value])=>{
                    if(value!==undefined && value!==null && value!==''){
                        url.searchParams.append("key","value")
                    }
                })
            }
            // url.searchParams.append("key","value")
            console.log(url.toString())
            // const res=await fetch(`${API_URL}/posts`,{next:{revalidate:10}});

            const config:RequestInit={}
            if(options?.cache){
                config.cache=options.cache
            }
            if(options?.revalidate){
                config.next={revalidate:options.revalidate}
            }

            // this is an example
            // if(data.sucess){
            //     return
            // }

           const res=await fetch(url.toString(),config);
            const resjon=res.json()
            console.log(resjon)
        } catch (error) {
            console.log(error)
            
        }
    }
}