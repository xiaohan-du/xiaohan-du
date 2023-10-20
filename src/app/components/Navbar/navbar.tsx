'use client';
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "flowbite-react";
import {INavbarProps} from "@/app/interfaces/INavbar";

export const DefaultNavbar = ({weather}: INavbarProps) => {
  return (
    <Navbar fluid rounded className='w-full'>
      <Navbar.Brand as={Link} href="/">
        <Image src="/images/logo.png" className="h-12 w-12 mr-3" alt="Flowbite Logo" width={100} height={100}/>
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pb-1">Xiaohan Du</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link as={Link} href="/">Home</Navbar.Link>
        <Navbar.Link as={Link} href="/about">About Me</Navbar.Link>
        <Navbar.Link as={Link} href="/career">Career</Navbar.Link>
        <Navbar.Link as={Link} href="/demos">Demos</Navbar.Link>
        <Navbar.Link as={Link} href="/services">Services</Navbar.Link>
        <Navbar.Link as={Link} href="/contact">Contact</Navbar.Link>
      </Navbar.Collapse>
      <Image src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}  alt="Weather Icon" width={100}
             height={100}/>
    </Navbar>
  )
}
