import {IToggleItemProps} from "@/app/interfaces/IToggleItem";

export interface IToggleMenuProps {
  icon: string;
  main: Main;
  text: string;
  mappings: IToggleItemProps[];
  iconSize: number;
  iconClasses: string;
};
