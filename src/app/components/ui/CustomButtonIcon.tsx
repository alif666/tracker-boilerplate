import React from 'react'
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
interface CustomButtonIconProps {
    HandleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CustomButtonIcon({ HandleOnClick }: CustomButtonIconProps) {
    return (
        <div className="flex flex-wrap gap-2">


            <Button className='bg-transparent px-2 text-gray-100 rounded-sm  shadow-md hover:text-dark'  onClick={HandleOnClick}>
                <HiOutlineArrowRight className="h-4 w-4" />
            </Button>
        </div>
    )
}
