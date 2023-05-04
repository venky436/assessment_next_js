import React from 'react'
import businessImg from '../../public/Images/business.svg'
import Image from 'next/image'
import styles from './Business.module.css'
import leftImg from '../../public/Images/busines_left_img.jpg'
import rightImg from '../../public/Images/businessRightImg.jpg'
export default function Business() {

    let text = [
        `Upskill your team with Udemy Business`,
        `Unlimited access to 19,000+ top Udemy courses, anytime, anywhere`,
        `International course collection in 14 languages`
    ]

    return (
        <div className={styles.mainContainer}>

            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <Image src={businessImg} alt='buniessLogo' style={{ display: 'block', width: '150px', height: '30px' }} />
                    <h1 className={styles.left_heading}>Upskill your team with Udemy Business</h1>
                    {
                        text.map((each, index) => (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'

                            }} key={index}>
                                <span style={{
                                    display: 'block',
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '100%',
                                    background: 'black'
                                }}></span>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}> {each}</h3>
                            </div>
                        ))
                    }
                    <div className={styles.left_buttons}>
                        <button className={styles.left_btn_1}>Get Udemy Business</button>
                        <button className={styles.left_btn_2}>Learn more</button>
                    </div>

                </div>
                <div className={styles.rightSection}>
                    <Image src={leftImg} alt="business" style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'

                    }} />
                </div>

            </div>

            <div className={styles.container}>
                <div className={styles.leftSection}>
                    <Image src={rightImg} alt="business" style={{
                        display: 'block',
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain'

                    }} />


                </div>
                <div className={styles.rightSection}>
                   
                    <h1 className={styles.left_heading}>Become an instructor</h1>
                    {
                        text.map((each, index) => (
                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }} key={index}>
                                <span style={{
                                    display: 'block',
                                    width: '7px',
                                    height: '7px',
                                    borderRadius: '100%',
                                    background: 'black'
                                }}></span>
                                <h3 style={{
                                    fontSize: '16px',
                                    fontWeight: '500'
                                }}> {each}</h3>
                            </div>
                        ))
                    }
                    <div className={styles.left_buttons}>
                        <button className={styles.left_btn_1}>Start teaching today</button>
                       
                    </div>
                    
                   

                </div>

            </div>
        </div>
    )
}
