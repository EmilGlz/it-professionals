import DiscountIfUContactNow from "@/components/home/discount/discountIfUContactNow";
import WeAreAgency from "@/components/home/weAreAgency/weareagency";
import WhatWeOfferYou from "@/components/home/whatWeOfferYou/whatWeOfferYou";

export default function Home() {
  return (
    <div>
      <WeAreAgency />
      <WhatWeOfferYou />
      <DiscountIfUContactNow />
    </div>
  );
}
