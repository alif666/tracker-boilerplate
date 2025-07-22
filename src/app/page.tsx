
import { ReactNode } from "react";
import CustomNavigation from "./components/CustomNavigation";
import AppHeader from "./components/ui/AppHeader";

interface HomeLayoutProps {
  children: ReactNode
}

export default function Home({ children }: HomeLayoutProps) {
  return (<>
    <CustomNavigation />
    {children}
  </>);
}
