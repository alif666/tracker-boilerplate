import React from 'react'
import { Button } from "flowbite-react";
import { HiOutlineArrowRight } from "react-icons/hi";
interface CustomButtonIconProps {
    HandleOnClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function CustomButtonIcon({ HandleOnClick }: CustomButtonIconProps) {
    return (
        <div className="flex flex-wrap gap-2">


            <Button className='border-0 hover:border-0 hover:text-dark' pill onClick={HandleOnClick}>
                <HiOutlineArrowRight className="h-6 w-6" />
            </Button>
        </div>
    )
}
