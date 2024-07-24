import React from 'react'
// import styles from "./weareagency.module.css";
import RotatingImage from '../rotatingImage/rotatingImage';

const WeAreAgency = () => {
    return (
        <div className='relative w-[100%] h-[100vh]'>
            <div className='absolute w-[100%] h-[700px] px-[12%] flex flex-col items-center justify-center'>
                <div className='absolute text-[80px] font-bold text-right z-10 translate-x-[-50%]'>
                    <h1 className='pr-24 text-7xl'>We Are</h1>
                    <h1 className='pr-8 text-7xl'>IT Professionals</h1>
                    <h1 className='pr-32 text-7xl'>Agency</h1>
                </div>
                <div className='abolute text-[16px] font-normal w-[400px] text-center z-20 translate-x-[50%]'>Lorem ipsum dolor sit amet consectetur. Sem viverra egestas rutrum pellentesque in massa quam. Felis arcu urna massa est. Volutpat egestas pellentesque pulvinar viverra in. Massa accumsan ac purus nulla in eget nisl.</div>
            </div>
            <RotatingImage />
        </div>
    );
}

export default WeAreAgency