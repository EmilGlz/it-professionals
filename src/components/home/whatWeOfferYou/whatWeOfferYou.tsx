import React from 'react'
import OfferingBox from './offeringBox/offeringBox'
import styles from "./whatWeOfferYou.module.css";

export type Offering = {
    icon: string,
    title: string,
    description: string,
}

const offerings: Offering[] = [
    {
        icon: '/offerings/offering1.png',
        title: 'UI/UX Design',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
    {
        icon: '/offerings/offering2.png',
        title: 'Frontend Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
    {
        icon: '/offerings/offering3.png',
        title: 'Backend Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
    {
        icon: '/offerings/offering4.png',
        title: 'Network Support',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
    {
        icon: '/offerings/offering5.png',
        title: 'Cloud Support',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
    {
        icon: '/offerings/offering6.png',
        title: 'IT Help Desk',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
    {
        icon: '/offerings/offering7.png',
        title: 'Mobile Development',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
    {
        icon: '/offerings/offering8.png',
        title: 'Zoho',
        description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, incidunt?'
    },
]

const WhatWeOfferYou = () => {
    return (
        <div className={styles.container}>
            <p className='text-center font-bold text-white text-5xl'>What we offer you</p>
            <div className={styles.boxContainer}>
                {offerings.map((offering, index) => (
                    <OfferingBox key={index} offering={offering} />
                ))}
            </div>
        </div>
    )
}

export default WhatWeOfferYou
