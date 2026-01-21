

import { cookies } from 'next/headers';


const HomePage =async() => {


  const cookiese = await cookies()
  
  const res= await fetch("http://localhost:5000/api/auth/get-session",{
    headers:{
      Cookie:cookiese.toString()
    },
    cache:"no-store"
  })
 const seesion=await res.json()
 console.log(seesion,"data fetiching date")
  
  return (
    <div>
      this is home HomePage
    </div>
  )
}

export default HomePage
