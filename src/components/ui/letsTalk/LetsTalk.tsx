'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface LetsTalkConfig {
    text: string,
    buttonColor: string,
}
const LetsTalk = ({ config }: { config: LetsTalkConfig }) => {
    return (
        <Link href={'/contact'} className={`flex items-center space-x-2 p-4 rounded-2xl  transform transition-transform duration-300 hover:scale-105 ${config.buttonColor}`} style={{ backgroundColor: config.buttonColor }}>
            <span className='text-[16px] font-bold'>{config.text}</span>
            <Image alt="" src="/lets-talk.png" width={20} height={20} />
        </Link>
    )
}

export default LetsTalk
