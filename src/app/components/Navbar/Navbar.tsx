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
    <div className="w-full sticky top-0 z-20">
      <Navbar fluid rounded className={'[&>div]:flex-nowrap'}>
        <Navbar.Brand as={Link} href={brand.defaultHref}>
          <Image src={brand.logo} className={`lg:h-20 lg:w-20 ${brand.classNames}`} alt={brand.alt} width={brand.width} height={brand.width}/>
          <span className="self-center text-xl lg:text-2xl font-semibold whitespace-nowrap dark:text-white pb-1">{brand.name}</span>
        </Navbar.Brand>
        <Navbar.Toggle/>
        <div className={`absolute top-20 md:relative md:top-0 md:right-0 right-2 z-30 bg-slate-50 md:bg-transparent shadow-lg md:shadow-none`}>
          <Navbar.Collapse className={'[&>ul]:mt-0 [&_li]:!mx-2 lg:mx-4'}>
            {
              links.contents.map((item, index) => {
                return (
                  <Navbar.Link
                    key={index}
                    as={Link}
                    href={item.href}
                    className={`text-end lg:text-lg ${pathname === item.href ? links.checked : links.default}`}>
                    {item.title}
                  </Navbar.Link>
                )
              })
            }
          </Navbar.Collapse>
        </div>
      </Navbar>
      <WidgetBar {...widgetBarData} />
    </div>
  )
};
