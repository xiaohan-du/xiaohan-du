import GlobalPageLayout from "@/app/globalPageLayout";
import demos from "../../../public/texts/demos.json";

export default function Demos() {
  return (
    <GlobalPageLayout
      bgImage={demos.bgImage}
      bgSize={demos.bgSize}
      bgVerticalPosition={demos.bgVerticalPosition}
      title={demos.title}
      subTitle={demos.subTitle}
      content={demos.content}
    />
  )
};
