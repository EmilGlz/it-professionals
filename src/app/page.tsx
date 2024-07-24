import DiscountIfUContactNow from "@/components/home/discount/discountIfUContactNow";
import FaqBlock from "@/components/home/faq/faq";
import WeAreAgency from "@/components/home/weAreAgency/weareagency";
import WhatWeOfferYou from "@/components/ui/offerings/whatWeOfferYou";
import Strengths from "@/components/ui/strengths/Strengths";

export default function Home() {
  return (
    <div className='w-[100%]  lg:w-[1312px] m-auto'>
      <WeAreAgency />
      <WhatWeOfferYou />
      <DiscountIfUContactNow />
      <Strengths />
      <FaqBlock />
    </div>
  );
}
