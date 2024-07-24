import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative w-[1312px]'>
            <div className='w-[50%] relative'>
                <h1 className='font-semibold w-[100%] text-[60px] text-center'>
                Contact Us, Let's Solve Your Problems!
                </h1>
                <p className='text-center w-[100%]'>We are here to quickly and effectively solve your IT needs. Get in touch with our expert team now.</p>
            </div>
            <div className='w-[300px] h-[300px] absolute right-[64px] top-0'>
                <Image fill alt='' src='/contact-hero-background.png' />
            </div>
        </div>
    )
}

export default Hero