import GlobalPageLayout from "@/app/globalPageLayout";
import demos from "../data/demos.json";

export default function Demos() {
  return (
    <GlobalPageLayout
      bgImage={demos.bgImage}
      title={demos.title}
      subTitle={demos.subTitle}
      animatedIconData={demos.animatedIcon}
      animatedCardsData={demos.animatedCards}
    />
  )
};
