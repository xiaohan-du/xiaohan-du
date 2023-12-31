import GlobalPageLayout from "@/app/globalPageLayout";
import home from './data/home.json';

export default function Home() {
  return (
    <GlobalPageLayout
      bgImage={home.bgImage}
      title={home.title}
      subTitle={home.subTitle}
      animatedIconData={home.animatedIcon}
      animatedCardsData={home.animatedCards}
    />
  )
};
