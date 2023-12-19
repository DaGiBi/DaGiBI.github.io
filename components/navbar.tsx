'use client'
import React from "react";
import { navigation } from "@/helpers/constant";
import { usePathname } from 'next/navigation'
import Image from "next/image"
import {
    Navbar, 
    NavbarBrand, 
    NavbarContent, 
    NavbarItem, 
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link, 
    Button
    } from "@nextui-org/react";

export default function NavBar() {
      const path = usePathname();
    return ( 
        <Navbar 
        // onMenuOpenChange={setIsMenuOpen} 
        className="top-4"
        classNames={{
          item: [
            "flex",
            "relative",
            "h-full",
            "items-center",
            "data-[active=true]:after:content-['']",
            "data-[active=true]:after:absolute",
            "data-[active=true]:after:bottom-0",
            "data-[active=true]:after:left-0",
            "data-[active=true]:after:right-0",
            "data-[active=true]:after:h-[2px]",
            "data-[active=true]:after:rounded-[2px]",
            "data-[active=true]:after:bg-primary",
          ],
        }}>
        <NavbarContent>
          {/* <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=""
          /> */}
          <NavbarBrand  >
            <Link href="/#introduction" className="gap-2">
              <Image
                    className="rounded-lg"
                    src={"/profile.jpg"}
                    alt="Picture of the author"
                    width={20}
                    height={20}           
              />
              <p className="font-bold text-white">DGB</p>
            </Link>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-14" justify="center">
          {navigation.map((nav, idx) => (

            <NavbarItem key={idx} isActive={path
            +nav.href === nav.href}>
              <Link color="foreground" href={nav.href} onClick={() => console.log(path)}  >
                {nav.name}
              </Link>
            </NavbarItem>
          )
          )}
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem>
            {/* <Button as={Link} color="primary" href="#" variant="flat">
              Hire Me
            </Button> */}
          </NavbarItem>
        </NavbarContent>
        
       
      </Navbar>
     );
}