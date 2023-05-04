import React from 'react'
import styles from './Learners.module.css'

import Image from 'next/image'
import VideoImg from '../../public/Images/play.png'
export default function LearnCard({ widthOfCard, cardDetails }: LearnersNS.IPropsForLearCard) {
    return (
        <div className={styles.learnCard} style={{
            minWidth: `${widthOfCard}px`
        }}>
            <p className={styles.card_text}>{cardDetails.content}</p>

            <div className={styles.profile}>
                <h3 className={styles.pro}>{cardDetails.profileName}</h3>
                <h3 className={styles.name}>{cardDetails.name}</h3>
            </div>

            <div className={styles.videoBox}>  
                <Image src={VideoImg} alt="video" style={{ display: 'block', width: '20px', height: '20px' }} />
                <h3 className={styles.videoText}>{cardDetails.videoText}</h3>
                
            </div>





        </div>
    )
}
