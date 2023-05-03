import React from 'react'
import styles from './Broadsection.module.css'
export default function CourseBox({object}:BroadSelectionNS.IPropsForCourseBox) {
  return (
    <div className={styles.courseBox_container}>
        <h1 className={styles.c_heading}>
            {object.heading}
        </h1>
        <p className={styles.c_text}>{object.textContent}</p>

        <button className={styles.button}>
            {object.buttonText}
        </button>

        <div className={styles.slider}>
            Slider
        </div>

    </div>
  )
}
