import React from 'react'
import styles from './discountIfUContactNow.module.css'
import LetsTalk, { LetsTalkConfig } from '@/components/ui/letsTalk/LetsTalk'

const letsTalkConfig: LetsTalkConfig = {
    text: 'Talk to us',
    buttonColor: '#000000'
}
const DiscountIfUContactNow = () => {
    return (
        <div className={styles.container}>
            <div className={styles.purpleBox}>
                <h1 className={styles.title}>Contact us now and get a 15% discount</h1>
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur. Cursus sed nunc amet in sociis. In sem quisque iaculis tortor.
                </p>
                <div className='absolute right-[33%] mt-[60px]'>
                    <LetsTalk config={letsTalkConfig} />
                </div>
            </div>
        </div>
    )
}

export default DiscountIfUContactNow
