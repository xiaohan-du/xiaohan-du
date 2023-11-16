import {IToggleItemProps} from "@/app/interfaces/IToggleItem";
import {INavigationProps} from "@/app/interfaces/INavigation";

export interface IToggleMenuProps extends INavigationProps{
  icon: string;
  main: Main;
  text: string;
  mappings: IToggleItemProps[];
  iconSize: number;
  iconClasses: string;
};
