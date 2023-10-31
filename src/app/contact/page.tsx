import GlobalPageLayout from "@/app/globalPageLayout";
import contact from "../../../public/texts/contact.json";

export default function Contact() {
  return (
    <GlobalPageLayout
      bgImage={contact.bgImage}
      bgSize={contact.bgSize}
      bgVerticalPosition={contact.bgVerticalPosition}
      title={contact.title}
      subTitle={contact.subTitle}
      content={contact.content}
    />
  )
};
