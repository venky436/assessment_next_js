import React, { useState } from 'react'
import styles from './Broadsection.module.css'
import { broadSelection } from '@/pages/BoardSectionData'
import CourseBox from './CourseBox'
import Card from './Card'

export default function BroadSelection() {
    const [broadData, setBroadData] = React.useState(broadSelection)
    const [activeIndex, setActiveIndex] = React.useState<number>(0)

    let courseHandler = (index: number) => {
        setActiveIndex(index)
    }

   

    return (
        <div className={styles.container}>
            <div className={styles.sub_container}>
                <h1 className={styles.heading}>A broad selection of courses</h1>
                <p className={styles.text}>Choose from 213,000 online video courses with new additions published every month
                </p>
            </div>
            <div className={styles.courses}>
                {
                    broadData.map((each, index) => (
                        <h3 key={index} className={styles.title} onClick={() => courseHandler(index)} style={index == activeIndex ? { color: 'black' } : { color: 'rgba(0, 0, 0,0.4)' }}>
                            {
                                each.title
                            }
                        </h3>
                    ))
                }
            </div>
            <div className={styles.course_box}>
                <CourseBox object={broadData[activeIndex]}  />
            </div>
        </div>
    )
}
