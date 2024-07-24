import Image from 'next/image'
import React from 'react'

const services = [
  'UI/UX Design',
  'Frontend Development',
  'Backend Development',
  'Mobile Development',
  'Network Support',
  'Cloud Support',
  'IT Help Desk',
  'Zoho'
]

const Footer = () => {
  return (
    <div className='h-[556px] mt-[194px] flex relative'>
      <div className='w-[46%]'>
        {/* <h1>IT PROFESSIONALS</h1> */}
        <div className='absolute top-[64px] left-[64px] text-violet-600 font-bold text-[32px] flex gap-[8px]'>
          <span>IT PROFESSIONALS</span>
          <Image width={62} height={72} alt="" src="/logo.png" className='' />
        </div>
      </div>
      <div className='w-[27%]'>
        <h1 className='font-medium text-[28px] mb-[24px]'>Our services</h1>
        {
          services.map((service, index) => (
            <p key={index} className='py-[8px] font-medium text-[20px]'>{service}</p>
          ))
        }
      </div>
      <div className='w-[27%]'>
        <h1 className='font-medium text-[28px] mb-[24px]'>Lets connect</h1>
        <p className='py-[8px] font-medium text-[20px]'>88888888888</p>
        <p className='py-[8px] font-medium text-[20px]'>itprofessionals@gmail.com</p>
        <p className='py-[8px] font-medium text-[20px]'>Linkedin address</p>
      </div>
    </div>
  )
}

export default Footer