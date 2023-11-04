import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";
import {IMotionAnimatedIconProps} from "@/app/interfaces/IMotionAnimatedIcon";

export interface IGlobalPageLayoutProps extends IPushSwitchProps{
  title: string;
  subTitle: string;
  content: string;
  animatedIconData: IMotionAnimatedIconProps[];
};
