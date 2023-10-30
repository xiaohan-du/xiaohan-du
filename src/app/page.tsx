import Image from "next/image";
export default function Home() {
  return (
    <div className={'flex h-160'}>
      <div className={'flex items-center justify-center w-1/2 mr-16'}>
        <Image src="/images/hello.png" className="mr-3 rounded-full border border-[10px]" alt="Portrait" width={400} height={400}/>
      </div>
      <div className={'flex flex-col items-start justify-center w-1/2'}>
        <div>
          <p className={'text-lg'}>Software Engineer</p>
          <p className={'text-4xl font-bold'}>Xiaohan Du</p>
        </div>
        <div className={'mt-16'}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  )
};
