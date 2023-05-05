import React from 'react'
import styles from './Course.module.css'

interface IProps{
    courseData : BroadSelectionNS.ICourse
}
export default function CourseCard({courseData}:IProps) {
  return (
    <div className={styles.card_container}>
       
    </div>
  )
}
