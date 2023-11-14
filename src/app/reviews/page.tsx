import GlobalPageLayout from "@/app/globalPageLayout";
import reviews from "../data/reviews.json";

export default function Reviews() {
  return (
    <GlobalPageLayout
      bgImage={reviews.bgImage}
      title={reviews.title}
      subTitle={reviews.subTitle}
      animatedIconData={reviews.animatedIcon}
      animatedCardsData={reviews.animatedCards}
    />
  )
};
