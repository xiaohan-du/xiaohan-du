import GlobalPageLayout from "@/app/globalPageLayout";
import reviews from "../data/reviews.json";

export default function Reviews() {
  return (
    <GlobalPageLayout
      bgImage={reviews.bgImage}
      bgSize={reviews.bgSize}
      bgHorizontalPosition={reviews.bgHorizontalPosition}
      bgVerticalPosition={reviews.bgVerticalPosition}
      title={reviews.title}
      subTitle={reviews.subTitle}
      animatedIconData={reviews.animatedIcon}
      animatedCardsData={reviews.animatedCards}
    />
  )
};
