'use client';
import Link from "next/link";
import Image from "next/image";
import {Navbar} from "flowbite-react";
import {ReactNode} from "react";
import {WidgetBar} from "@/app/components/WidgetBar/WidgetBar";
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";

export const DefaultNavbar = (
  widgetBarData: {
    weatherData: IToggleMenuProps;
    cryptoData: IToggleMenuProps;
    stockData: IToggleMenuProps;
    currencyData: IToggleMenuProps;
    metalData: IToggleMenuProps;
  }
): ReactNode => {
  return (
    <div className="w-full">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href="/">
          <Image src="/images/logo.png" className="h-12 w-12 mr-3" alt="Flowbite Logo" width={100} height={100}/>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pb-1">Xiaohan Du</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          <Navbar.Link as={Link} href="/">Home</Navbar.Link>
          <Navbar.Link as={Link} href="/about">About Me</Navbar.Link>
          <Navbar.Link as={Link} href="/career">Career</Navbar.Link>
          <Navbar.Link as={Link} href="/demos">Demos</Navbar.Link>
          <Navbar.Link as={Link} href="/services">Services</Navbar.Link>
          <Navbar.Link as={Link} href="/contact">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <WidgetBar {...widgetBarData} />
    </div>
  )
};
