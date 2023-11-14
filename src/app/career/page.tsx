import GlobalPageLayout from "@/app/globalPageLayout";
import career from "../data/career.json";

export default function Career() {
  return (
    <GlobalPageLayout
      bgImage={career.bgImage}
      title={career.title}
      subTitle={career.subTitle}
      animatedIconData={career.animatedIcon}
      animatedCardsData={career.animatedCards}
    />
  )
};
