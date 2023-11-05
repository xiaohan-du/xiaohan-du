import {IAnimationVariantsProps} from "@/app/interfaces/IAnimationVariants";

export interface IMotionAnimatedIconProps extends IAnimationVariantsProps{
  imageSrc: string;
  classNames?: string;
  title: string;
  alt: string;
  width: number;
};
