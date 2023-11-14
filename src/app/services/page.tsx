import GlobalPageLayout from "@/app/globalPageLayout";
import services from "../data/services.json";

export default function Services() {
  return (
    <GlobalPageLayout
      bgImage={services.bgImage}
      title={services.title}
      subTitle={services.subTitle}
      animatedIconData={services.animatedIcon}
      animatedCardsData={services.animatedCards}
    />
  )
};
