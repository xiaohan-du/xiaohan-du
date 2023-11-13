type CardData = {
  classNames: string;
  styleNames?: string;
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
  },
  isShowLinks: boolean;
  btn?: ButtonData[]
}
