"use client"

import { Button } from "@/components/ui/button"
import { useEffect } from "react"

export const Abouterror = ({error,reset}: {
  error: Error & { digest?: string }
  reset: () => void
}) => {
    useEffect(()=>{
        console.error(error)
    })
  return (
    <div>
      something went wrong
      <Button onClick={()=>reset()}>Retry</Button>
    </div>
  )
}
export default Abouterror
