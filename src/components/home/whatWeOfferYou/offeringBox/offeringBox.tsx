import Image from 'next/image'
import React from 'react'
import styles from './offeringBox.module.css'

interface Offering {
  icon: string;
  title: string;
  description: string;
}

interface OfferingItemProps {
  offering: Offering;
}

const OfferingBox: React.FC<OfferingItemProps> = ({ offering }) => {
  return (
    <div className={styles.container}>
      <Image className={styles.icon} width={48} height={48} alt='offering icon' src={offering.icon} />
      <h1 className={styles.title}>{offering.title}</h1>
      <p className={styles.description}>{offering.description}</p>
    </div>
  )
}

export default OfferingBox
