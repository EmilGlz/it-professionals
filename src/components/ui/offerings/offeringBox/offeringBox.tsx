import Image from 'next/image'
import React from 'react'
import { Offering } from '../whatWeOfferYou'

const OfferingBox = ({ offering }: { offering: Offering }) => {
  return (
    <div className='xl:w-[310px] w-[100%] h-[343px] border-[1px] border-[#3E3D3D] rounded-[40px] bg-[#1E1E1E] transform transition-transform duration-300 hover:scale-105'>
      <div className='w-[48px] h-[48px] relative top-[24px] left-[24px]'>
        <Image fill alt='offering icon' src={offering.icon} />
      </div>
      <h1 className='relative mt-[55px] w-[100%] text-center font-semibold text-[24px]'>{offering.title}</h1>
      <p className='text-center m-[44px]'>{offering.description}</p>
    </div>
  )
}

export default OfferingBox
