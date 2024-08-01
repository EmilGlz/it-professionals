import Image from 'next/image'
import React from 'react'

export interface StrengthItem {
    title: string,
    description: string,
    icon: string,
}

const strengthDatas: StrengthItem[] =
    [
        {
            title: 'Experienced Team',
            description: 'Our expert team, with years of experience and expertise, is proficient and professional in solving complex IT issues.',
            icon: '/strengths/strength1.png',
        },
        {

            title: 'Experienced Team',
            description: 'We respond quickly to our clients\' needs, providing effective solutions and ensuring business continuity.',
            icon: '/strengths/strength2.png',
        },
        {

            title: 'Personalized Service',
            description: 'We understand the needs of each client and offer tailored solutions. We value your business and grow with you.',
            icon: '/strengths/strength3.png',
        },
        {

            title: 'Security and Privacy',
            description: 'The security of your data is our priority. We protect your data using top-level security protocols.',
            icon: '/strengths/strength4.png',
        },
        {

            title: 'Customer Satisfaction',
            description: 'We prioritize customer satisfaction above all and continuously work to provide you with the best service.',
            icon: '/strengths/strength5.png',
        },
    ]
const Strengths = () => {
    return (
        <div className='relative w-[100%]'>
            <h1 className='text-[40px] font-semibold'>What is our strength?</h1>
            {strengthDatas.map((val, index) => (
                <div key={index} className='w-[100%] lg:w-[50%] flex relative mt-[36px]'>
                    <Image alt='icon' src={val.icon} width={40} height={40} className='absolute'/>
                    <h2 className='left-[64px] absolute h-10 text-[20px] lg:text-[32px] font-medium'>{val.title}</h2>
                    <p className='ml-[64px] mt-[60px] font-medium text-[12px] lg:text-[20px]'>{val.description}</p>
                </div>
            ))}
            <div className='absolute h-[100%] lg:w-[50%] w-[30%] hidden lg:block right-0 top-0'>
                <Image alt='' src='/logo-big.png' fill objectFit="contain"/>
            </div>
        </div>
    )
}

export default Strengths
