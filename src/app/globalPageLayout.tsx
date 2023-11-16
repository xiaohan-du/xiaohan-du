import {PushSwitch} from "@/app/components/PushSwitch/PushSwitch";
import {IGlobalPageLayoutProps} from "@/app/interfaces/IGlobalPageLayout";
import {MotionAnimatedCard} from "@/app/components/MotionAnimatedCard/MotionAnimatedCard";

export default function GlobalPageLayout(
  {
    bgImage,
    title,
    subTitle,
    animatedIconData,
    animatedCardsData
  }: IGlobalPageLayoutProps): React.ReactNode {
  return (
    <div className={'flex w-full justify-between flex-col md:flex-row'}>
      <div className={'flex items-center justify-center mx-auto md:mx-8 my-4 w-4/5 md:w-full'}>
        <PushSwitch
          bgImage={bgImage}
          animatedIconData={animatedIconData}
        />
      </div>
      <div className={'flex flex-col items-start justify-center w-full md:mx-8 my-4 w-4/5'}>
        <div>
          <p className={'text-lg lg:text-xl text-gray-400 cursor-default'}>{title}</p>
          <p className={'text-4xl md:text-2xl lg:text-3xl xl:text-4xl font-bold md:mt-2 xl:mt-4 cursor-default'}>{subTitle}</p>
        </div>
        <MotionAnimatedCard content={animatedCardsData.content} />
      </div>
    </div>
  )
};
