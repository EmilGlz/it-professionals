import Image from 'next/image'
import React from 'react'

export interface LetsTalkConfig {
    text: string,
    buttonColor: string,
}

const LetsTalk = ({ config }: { config: LetsTalkConfig }) => {
    return (
        <div className={`flex items-center space-x-2 p-4 rounded-2xl ${config.buttonColor}`} style={{ backgroundColor: config.buttonColor }} >
            <span className='text-[16px] font-bold'>{config.text}</span>
            <Image alt="" src="/lets-talk.png" width={20} height={20}/>
        </div>
    )
}

export default LetsTalk
