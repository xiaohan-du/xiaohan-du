import * as React from "react";
import {Button} from "flowbite-react";
import {IToggleProps} from "@/app/interfaces/IToggle";

export const MenuToggle = ({ toggle, image, text }: IToggleProps) => (
  <Button
    onMouseEnter={toggle}
    onMouseLeave={toggle}
    className={'border-none select-none cursor-pointer relative w-full h-16 rounded-lg'}
    color='light'
  >
    {text}
    {image}
  </Button>
);
