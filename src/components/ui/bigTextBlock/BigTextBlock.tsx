import React from 'react'

export interface BigTextBlockHeroProps {
    title: string,
    description: string
}

const BigTextBlock = ({ prop }: { prop: BigTextBlockHeroProps }) => {
    return (
        <div className='h-[50vi] m-auto w-[60%]'>
            <h1 className='text-center text-[60px] font-semibold mb-[24px]'>{prop.title}</h1>
            <p className='text-center  text-[20px] font-medium'>{prop.description}</p>
        </div>
    )
}

export default BigTextBlock