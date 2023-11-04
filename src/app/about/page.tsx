import GlobalPageLayout from "@/app/globalPageLayout";
import about from '../data/about.json';

export default function About() {
  return (
    <GlobalPageLayout
      bgImage={about.bgImage}
      bgSize={about.bgSize}
      bgVerticalPosition={about.bgVerticalPosition}
      title={about.title}
      subTitle={about.subTitle}
      content={about.content}
      animatedIconData={about.animatedIcon}
    />
  )
};
