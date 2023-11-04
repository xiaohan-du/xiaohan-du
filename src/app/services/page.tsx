import GlobalPageLayout from "@/app/globalPageLayout";
import services from "../data/services.json";

export default function Services() {
  return (
    <GlobalPageLayout
      bgImage={services.bgImage}
      bgVerticalPosition={services.bgVerticalPosition}
      bgSize={services.bgSize}
      title={services.title}
      subTitle={services.subTitle}
      content={services.content}
      animatedIconData={services.animatedIcon}
    />
  )
};
