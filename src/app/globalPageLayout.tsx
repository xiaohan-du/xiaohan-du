import {PushSwitch} from "@/app/components/PushSwitch/PushSwitch";
import {IGlobalPageLayoutProps} from "@/app/interfaces/IGlobalPageLayout";
import {MotionAnimatedCard} from "@/app/components/MotionAnimatedCard/MotionAnimatedCard";

export default function GlobalPageLayout(
  {
    bgImage,
    bgSize,
    bgVerticalPosition,
    title,
    subTitle,
    animatedIconData,
    animatedCardsData
  }: IGlobalPageLayoutProps): React.ReactNode {
  return (
    <div className={'flex h-160 w-full'}>
      <div className={'flex items-center justify-center w-1/2 mr-16'}>
        <PushSwitch
          bgImage={bgImage}
          bgSize={bgSize}
          bgVerticalPosition={bgVerticalPosition}
          animatedIconData={animatedIconData}
        />
      </div>
      <div className={'flex flex-col items-start justify-start w-1/2 my-16'}>
        <div>
          <p className={'text-lg text-gray-400 cursor-default'}>{title}</p>
          <p className={'text-4xl font-bold mt-4 cursor-default'}>{subTitle}</p>
        </div>
        <MotionAnimatedCard content={animatedCardsData.content} />
      </div>
    </div>
  )
};
