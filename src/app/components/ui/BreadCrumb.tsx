"use client";
import React from 'react'
import Link from 'next/link';
import { usePathname } from 'next/navigation';


export default function BreadCrumb() {
    const pathname = usePathname();
    return (
        <div>{pathname}</div>
    )
}
