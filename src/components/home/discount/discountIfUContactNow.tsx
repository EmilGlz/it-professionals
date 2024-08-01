import React from 'react'
import styles from './discountIfUContactNow.module.css'
import LetsTalk, { LetsTalkConfig } from '@/components/ui/letsTalk/LetsTalk'

const letsTalkConfig: LetsTalkConfig = {
    text: 'Talk to us',
    buttonColor: '#000000'
}
const DiscountIfUContactNow = () => {
    return (
        <div className='h-[50vh]'>
            <div className="relative bg-purple-600 h-[312px] rounded-3xl mx-auto">
                <h1 className="relative left-[10%] top-20 text-[28px] lg:text-[48px] font-semibold w-2/5">Contact us now and get a 15% discount</h1>
                <p className='absolute text-[12px] lg:text=[16px] font-normal w-[33%] right-[10%] top-20'>Lorem ipsum dolor sit amet consectetur. Cursus sed nunc amet in sociis. In sem quisque iaculis tortor.
                </p>
                <div className='absolute left-[50%] mt-[60px]'>
                    <LetsTalk config={letsTalkConfig} />
                </div>
            </div>
        </div>
    )
}

export default DiscountIfUContactNow
