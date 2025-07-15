import { DeviceTabletIcon, TvIcon } from '@heroicons/react/16/solid'
import { BeakerIcon } from '@heroicons/react/24/solid'
import React from 'react'


const navLinks = [
    {
        name:"dashboard",
        icon: <TvIcon className='h-5 w-5' text-white/>,    
    }
    {
        name:"device",
        icon: <DeviceTabletIcon className='h-5 w-5' text-white/>,
        href: "/device",
    },
    {
        name:"manage",
        icon: <BeakerIcon className='h-5 w-5' text-white/>,
        href: "/manage",
    
    }
]


export default function SideNavigation() {



    return (
    <div>SideNavigation</div>
    
)
}
