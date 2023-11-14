import GlobalPageLayout from "@/app/globalPageLayout";
import about from '../data/about.json';

export default function About() {
  return (
    <GlobalPageLayout
      bgImage={about.bgImage}
      title={about.title}
      subTitle={about.subTitle}
      animatedIconData={about.animatedIcon}
      animatedCardsData={about.animatedCards}
    />
  )
};
