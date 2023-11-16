import * as React from "react";
import {Button} from "flowbite-react";
import {IToggleProps} from "@/app/interfaces/IToggle";

export const MenuToggle = ({toggle, image, text}: IToggleProps) => (
  <Button
    onMouseEnter={toggle}
    onMouseLeave={toggle}
    className={`
      border-none 
      select-none 
      cursor-pointer 
      relative 
      w-full 
      rounded-lg 
      [&>span]:px-2 
      sm:min-w-full 
      sm:h-12
    `}
    color='light'
  >
    <span className={'hidden md:block'}>{text}</span>
    {image}
  </Button>
);
