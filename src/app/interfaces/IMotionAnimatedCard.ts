export interface IMotionAnimatedCard {
  title: string;
  contents: {
    iconWidth: number;
    title: string;
    text: string[];
  };
  icon: {
    imageSrc: string;
    alt: string;
    width: number;
  }
};
