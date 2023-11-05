'use client';
import Link from "next/link";
import Image from "next/image";
import {Navbar} from "flowbite-react";
import {ReactNode} from "react";
import {WidgetBar} from "@/app/components/WidgetBar/WidgetBar";
import {IToggleMenuProps} from "@/app/interfaces/IToggleMenu";
import {usePathname} from "next/navigation";
import navbarData from "../../data/navbar.json";

export const DefaultNavbar = (
  widgetBarData: {
    weatherData: IToggleMenuProps;
    cryptoData: IToggleMenuProps;
    stockData: IToggleMenuProps;
    currencyData: IToggleMenuProps;
    metalData: IToggleMenuProps;
  }
): ReactNode => {
  const pathname = usePathname();
  const brand = navbarData.brand;
  const links = navbarData.links;
  return (
    <div className="w-full">
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} href={brand.defaultHref}>
          <Image src={brand.logo} className={brand.classNames} alt={brand.alt} width={brand.width} height={brand.width}/>
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white pb-1">{brand.name}</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse>
          {
            links.contents.map((item, index) => {
              return (
                <Navbar.Link
                  key={index}
                  as={Link}
                  href={item.href}
                  className={pathname === item.href ? links.checked : links.default}>
                  {item.title}
                </Navbar.Link>
              )
            })
          }
        </Navbar.Collapse>
      </Navbar>
      <WidgetBar {...widgetBarData} />
    </div>
  )
};
