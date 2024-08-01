import React from 'react'
// import styles from "./weareagency.module.css";
import RotatingImage from '../rotatingImage/rotatingImage';

const WeAreAgency = () => {
    return (
        <div className='relative w-[100%] h-[100vh]'>
            <div className='absolute w-[100%] h-[700px] px-[12%] flex flex-col items-center justify-center'>
                <div className='absolute text-[80px] font-bold text-right z-10 translate-x-[-50%]'>
                    <h1 className='text-[20px] lg:text-[72px] w-[400px] text-right whitespace-pre'>
                        {`We Are
IT PROFESSIONALS
AGENCY`}
                    </h1>
                </div>
                <div className='text-[12px] lg:text-[20px] font-normal w-[50%] text-center z-20 translate-x-[50%] translate-y-[120%] '>Lorem ipsum dolor sit amet consectetur. Sem viverra egestas rutrum pellentesque in massa quam. Felis arcu urna massa est. Volutpat egestas pellentesque pulvinar viverra in. Massa accumsan ac purus nulla in eget nisl.</div>
            </div>
            <RotatingImage />
        </div>
    );
}

export default WeAreAgency