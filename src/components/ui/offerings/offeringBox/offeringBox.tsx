import Image from 'next/image'
import React from 'react'
import styles from './offeringBox.module.css'
import { Offering } from '../whatWeOfferYou'

const OfferingBox = ( {offering}:{offering:Offering} ) => {
  return (
    <div className={styles.container}>
      <div className={`w-[48px] h-[48px] ${styles.icon}`}>
      <Image fill alt='offering icon' src={offering.icon} />
      </div>
      <h1 className={styles.title}>{offering.title}</h1>
      <p className={styles.description}>{offering.description}</p>
    </div>
  )
}

export default OfferingBox
