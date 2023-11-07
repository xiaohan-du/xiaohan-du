import GlobalPageLayout from "@/app/globalPageLayout";
import home from './data/home.json';

export default function Home() {
  return (
    <GlobalPageLayout
      bgImage={home.bgImage}
      bgSize={home.bgSize}
      bgVerticalPosition={home.bgVerticalPosition}
      title={home.title}
      subTitle={home.subTitle}
      animatedIconData={home.animatedIcon}
    />
  )
};
