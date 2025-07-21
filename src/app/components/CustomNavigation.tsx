"use client";
import React, { useState } from 'react'
import { CustomSideBar } from './ui/CustomSideBar'
import CustomButtonIcon from './ui/CustomButtonIcon';

export default function CustomNavigation() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    function handleOnClickEvent() {
        setIsDisplayed(!isDisplayed);
    }
    return (
        <div className='flex flex-row'>

            {isDisplayed ? (
                <div className='h-screen'>
                    <CustomSideBar />
                </div>) : (<></>)}
            <CustomButtonIcon HandleOnClick={handleOnClickEvent} />
        </div>)
}
