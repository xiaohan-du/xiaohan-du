import GlobalPageLayout from "@/app/globalPageLayout";
import career from "../data/career.json";

export default function Career() {
  return (
    <GlobalPageLayout
      bgImage={career.bgImage}
      bgSize={career.bgSize}
      bgVerticalPosition={career.bgVerticalPosition}
      title={career.title}
      subTitle={career.subTitle}
      animatedIconData={career.animatedIcon}
      animatedCardsData={career.animatedCards}
    />
  )
};
