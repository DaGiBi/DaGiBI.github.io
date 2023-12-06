'use client'
import React from "react";

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

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
    const menuItems = [
      "Home",
      "About Me",
      "My Works",
      "Blog",
    ];
  
    return (
      <Navbar onMenuOpenChange={setIsMenuOpen} className="!w-full">
        <NavbarContent>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className=""
          />
          <NavbarBrand>
            {/* <AcmeLogo /> */}
            <p className="font-bold text-inherit">DGB</p>
          </NavbarBrand>
        </NavbarContent>
  
        {/* <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#">
              Features
            </Link>
          </NavbarItem>
          <NavbarItem isActive>
            <Link href="#" aria-current="page">
              Customers
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} color="primary" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent> */}
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
  