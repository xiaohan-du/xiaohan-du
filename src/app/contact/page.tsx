import GlobalPageLayout from "@/app/globalPageLayout";
import contact from "../data/contact.json";

export default function Contact() {
  return (
    <GlobalPageLayout
      bgImage={contact.bgImage}
      title={contact.title}
      subTitle={contact.subTitle}
      animatedIconData={contact.animatedIcon}
      animatedCardsData={contact.animatedCards}
    />
  )
};
