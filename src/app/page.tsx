import DiscountIfUContactNow from "@/components/home/discount/discountIfUContactNow";
import WeAreAgency from "@/components/home/weAreAgency/weareagency";
import WhatWeOfferYou from "@/components/home/whatWeOfferYou/whatWeOfferYou";
import GradientCircle from "@/components/ui/gradient/Gradient";

export default function Home() {
  return (
    <div>
      <div className="mt-[300px] -ml-[200px] absolute w-[400px] h-[400px]">
        <GradientCircle />
      </div>
      <WeAreAgency />
      <WhatWeOfferYou />
      <DiscountIfUContactNow />
    </div>
  );
}
