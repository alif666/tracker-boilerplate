"use client";

import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarItems,
} from "flowbite-react";
import {
  HiChartPie,
  HiUser,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiViewBoards,
  HiArrowSmRight,
} from "react-icons/hi";
import { usePathname } from "next/navigation";
import Landing from "./Landing";

export function CustomSideBar() {
  const pathName = usePathname();

  const navLinks = [
    {
      id: 1,
      url: "/dashboard",
      name: "DASHBOARD",
      icon: HiChartPie,
    },
    {
      id: 2,
      url: "/device",
      name: "DEVICE",
      icon: HiInbox,
    },
    {
      id: 3,
      url: "/setup",
      name: "SETUP",
      icon: HiViewBoards,
    },
    {
      id: 4,
      url: "/report",
      name: "REPORT",
      icon: HiTable,
    },
    {
      id: 5,
      url: "/history",
      name: "HISTORY",
      icon: HiShoppingBag,
    }
  ];
  if(pathName.trimStart().length===0) return <Landing/>
  return (
    <Sidebar aria-label="Main navigation sidebar">
      <SidebarItems>
        <SidebarItemGroup>
          {navLinks.map((nav) => (
            <SidebarItem
              key={nav.id}
              href={nav.url}
              icon={nav.icon}
              active={pathName.startsWith(nav.url)}
            >
              {nav.name}
            </SidebarItem>
          ))}
        </SidebarItemGroup>
      </SidebarItems>
    </Sidebar>
  );
}
