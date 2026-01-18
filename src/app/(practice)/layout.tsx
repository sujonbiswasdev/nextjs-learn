import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const Practicelayout = ({ children,marketingSlot ,salesSlot}: { children: React.ReactNode ,marketingSlot:React.ReactNode,salesSlot:React.ReactNode}) => {
    return (
        <div className='mt-14'>
            <nav className='flex space-x-3 ml-1 space-y-4 gap-4 mt-3'>
                <Button> <Link href={"/development"} className='hover:underline'>
                    Development
                </Link></Button>
                <Button> <Link href={"/marketing"} className='hover:underline'>
                    marketing
                </Link></Button>
                <Button>   <Link href={"/marketing/settings"} className='hover:underline'>
                    setings
                </Link></Button>
                <Button>  <Link href={"/sales"} className='hover:underline'>
                    sales
                </Link></Button>

                <Button>  <Link href={"/testing"} className='hover:underline'>
                    testing
                </Link></Button>
            </nav>
            <div className='flex'>
                {marketingSlot}
                {salesSlot}

            </div>
            {children}
        </div>
    )
}

export default Practicelayout
