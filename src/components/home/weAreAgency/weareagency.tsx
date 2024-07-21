import React from 'react'
import styles from "./weareagency.module.css";
import RotatingImage from '../rotatingImage/rotatingImage';

const WeAreAgency = () => {
    return (
        <div className={styles.container}>
            <div className='textContainer'>
                <div className={styles.bigTextBlock}>
                    <h1 className='pl-24'>We Are</h1>
                    <h1 className='pl-4'>IT Professionals</h1>
                    <h1 className='pl-60'>Agency</h1>
                </div>
                <div className={styles.smallText}>Lorem ipsum dolor sit amet consectetur. Sem viverra egestas rutrum pellentesque in massa quam. Felis arcu urna massa est. Volutpat egestas pellentesque pulvinar viverra in. Massa accumsan ac purus nulla in eget nisl.</div>
            </div>
            <RotatingImage />
        </div>
    );
}

export default WeAreAgency