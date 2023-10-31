import GlobalPageLayout from "@/app/globalPageLayout";
import services from "../../../public/texts/services.json";

export default function Services() {
  return (
    <GlobalPageLayout
      bgImage={services.bgImage}
      bgVerticalPosition={services.bgVerticalPosition}
      bgSize={services.bgSize}
      title={services.title}
      subTitle={services.subTitle}
      content={services.content}
    />
  )
};
