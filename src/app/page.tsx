import DiscountIfUContactNow from "@/components/home/discount/discountIfUContactNow";
import WeAreAgency from "@/components/home/weAreAgency/weareagency";
import GradientCircle from "@/components/ui/gradient/Gradient";
import WhatWeOfferYou from "@/components/ui/offerings/whatWeOfferYou";
import Strengths from "@/components/ui/strengths/Strengths";

export default function Home() {
  return (
    <div className='w-[1312px] m-auto'>
      <div className="mt-[300px] left-[-200px] absolute w-[400px] h-[400px]">
        <GradientCircle />
      </div>
      <div className="mt-[180px] right-[-250px] absolute w-[500px] h-[500px]">
        <GradientCircle />
      </div>
      <WeAreAgency />
      <WhatWeOfferYou />
      <DiscountIfUContactNow />
      <Strengths />
    </div>
  );
}
