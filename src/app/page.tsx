
"use client";
import { ReactNode } from "react";
import CustomNavigation from "./components/CustomNavigation";
import AppHeader from "./components/ui/AppHeader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import BreadCrumb from "./components/ui/BreadCrumb";
import CustomCarousal from "./components/ui/CustomCarousal";



export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-row   max-w-80 font-[family-name:var(--font-geist-sans)]">
      
        <CustomCarousal/>
              
      
    </main>
  );
}
