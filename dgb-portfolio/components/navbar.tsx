'use client'
import React from "react";

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
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems = [
        "Home",
        "About Me",
        "My Works",
        "Blog",
      ];
    return ( 
        <Navbar 
        // onMenuOpenChange={setIsMenuOpen} 
        className="top-4">
        <NavbarContent>
          {/* <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=""
          /> */}
          <NavbarBrand className="gap-2">
            {/* <AcmeLogo /> */}
            <Image
                            className="rounded-lg"
                            src={"/profile.jpg"}
                            alt="Picture of the author"
                            width={20}
                            height={20}
                        />
            <p className="font-bold text-inherit">DGB</p>
          </NavbarBrand>
        </NavbarContent>
  
        <NavbarContent className="hidden sm:flex gap-14" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              About Me
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              My Experience
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              My Works
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Hire Me
            </Button>
          </NavbarItem>
        </NavbarContent>
        <NavbarMenu className="mx-4 !w-auto ">
          {menuItems.map((item, index) => (
            <NavbarMenuItem className="py-2" key={`${item}-${index}`}>
              <Link
                color={
                  index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                }
                className=""
                href="#"
                size="lg"
              >
                {item}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
     );
}