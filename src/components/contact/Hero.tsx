import Image from 'next/image'
import React from 'react'

const contactBlock = (title: string, value: string) => {
    return (
        <div className='p-[28px] border-[1px] rounded-[40px] border-[#3E3D3D] w-[100%] h-[100%] absolute'>
            <h1 className='font-semibold text-[24px]'>{title}</h1>
            <p className='font-semibold text-[32px]'> {value}</p>
            <Image className='absolute top-[20px] right-[28px]' width={92} height={92} alt='' src='/contact-icon.png' />
        </div>
    )
}

const Hero = () => {
    return (
        <div className='relative h-[600px] w-[1312px] m-auto'>
            <div className='w-[50%] ml-[100px]'>
                <h1 className='font-semibold w-[100%] text-[60px] text-center'>
                    Contact Us, Let &apos s Solve Your Problems!
                </h1>
                <p className='text-center w-[100%]'>We are here to quickly and effectively solve your IT needs. Get in touch with our expert team now.</p>
            </div>
            <div className='w-[300px] h-[300px] absolute right-[64px] top-0'>
                <Image fill alt='' src='/contact-hero-background.png' />
            </div>
            <div className='flex mx-auto gap-[24px] h-44 my-[200px]'>
                <div className='relative w-[644px] h-[144px]'>
                    {contactBlock('Call Us Now', '88888888888888')}
                </div>
                <div className='relative w-[644px] h-[144px]'>
                    {contactBlock('Contact Us via Email', 'heheheh@gmail.com')}
                </div>
            </div>
        </div>
    )
}

export default Hero