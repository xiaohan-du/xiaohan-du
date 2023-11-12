type CardData = {
  classNames: string;
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
