"use client"

import { List, BarChart, Compass, Layout } from "lucide-react";
import { SidebarItem } from "./sidebar-item";
import { usePathname } from "next/navigation";

const guestRoutes = [
    {
        icon: Layout,
        label: "Dasboard",
        href: "/"
    },
    {
        icon: Compass,
        label: "Browse",
        href: "/search"
    }
]

export const SidebarRoutes = () => {
    const pathname = usePathname();
  
    const routes =  guestRoutes;
  
    return ( 
        <div className="flex flex-col w-full">
            {routes.map((route) => (
                <SidebarItem
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                 />
            ))}
        </div>
     );
}
 