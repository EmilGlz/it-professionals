import React from 'react'
import styles from "./weareagency.module.css";
import RotatingImage from '../rotatingImage/rotatingImage';

const WeAreAgency = () => {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.bigTextBlock}>
                    <h1 className='pr-24 text-7xl'>We Are</h1>
                    <h1 className='pr-8 text-7xl'>IT Professionals</h1>
                    <h1 className='pr-32 text-7xl'>Agency</h1>
                </div>
                <div className={styles.smallText}>Lorem ipsum dolor sit amet consectetur. Sem viverra egestas rutrum pellentesque in massa quam. Felis arcu urna massa est. Volutpat egestas pellentesque pulvinar viverra in. Massa accumsan ac purus nulla in eget nisl.</div>
            </div>
            <RotatingImage />
        </div>
    );
}

export default WeAreAgency