import GlobalPageLayout from "@/app/globalPageLayout";
import contact from "../data/contact.json";

export default function Contact() {
  return (
    <GlobalPageLayout
      bgImage={contact.bgImage}
      bgSize={contact.bgSize}
      bgVerticalPosition={contact.bgVerticalPosition}
      title={contact.title}
      subTitle={contact.subTitle}
      animatedIconData={contact.animatedIcon}
    />
  )
};
