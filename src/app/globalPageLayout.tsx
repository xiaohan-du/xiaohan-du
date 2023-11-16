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
    <div className={'flex w-full justify-between flex-col'}>
      <div className={'flex items-center justify-center w-full mx-auto my-4'}>
        <PushSwitch
          bgImage={bgImage}
          animatedIconData={animatedIconData}
        />
      </div>
      <div className={'flex flex-col items-start justify-center w-full my-4'}>
        <div>
          <p className={'text-lg lg:text-base text-gray-400 cursor-default'}>{title}</p>
          <p className={'text-3xl xl:text-3xl font-bold mt-4 xl:mt-1 cursor-default'}>{subTitle}</p>
        </div>
        <MotionAnimatedCard content={animatedCardsData.content} />
      </div>
    </div>
  )
};
