import {PushSwitch} from "@/app/components/PushSwitch/PushSwitch";
import {IGlobalPageLayoutProps} from "@/app/interfaces/IGlobalPageLayout";

export default function GlobalPageLayout(
  {
    bgImage,
    bgSize,
    bgVerticalPosition,
    title,
    subTitle,
    content
  }: IGlobalPageLayoutProps): React.ReactNode {
  return (
    <div className={'flex h-160 w-full'}>
      <div className={'flex items-center justify-center w-1/2 mr-16'}>
        <PushSwitch
          bgImage={bgImage}
          bgSize={bgSize}
          bgVerticalPosition={bgVerticalPosition}/>
      </div>
      <div className={'flex flex-col items-start justify-start w-1/2 mt-36'}>
        <div>
          <p className={'text-lg'}>{title}</p>
          <p className={'text-4xl font-bold'}>{subTitle}</p>
        </div>
        <div className={'mt-16'}>
          {content}
        </div>
      </div>
    </div>
  )
};
