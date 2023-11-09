import {IPushSwitchProps} from "@/app/interfaces/IPushSwitch";
import {IMotionAnimatedIconProps} from "@/app/interfaces/IMotionAnimatedIcon";
import {IMotionAnimatedCard} from "@/app/interfaces/IMotionAnimatedCard";

export interface IGlobalPageLayoutProps extends IPushSwitchProps{
  title: string;
  subTitle: string;
  animatedIconData: IMotionAnimatedIconProps[];
  animatedCardData: IMotionAnimatedCard;
};
