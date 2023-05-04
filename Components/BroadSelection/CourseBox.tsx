import React from 'react'
import styles from './Broadsection.module.css'
import Card from './Card'

import Image from 'next/image'
import Slider from './Slider'



export default function CourseBox({ object }: BroadSelectionNS.IPropsForCourseBox) {
  let sendCardNode =
  <>
      {
          object?.courses.map((each, index) => (
           
              <Card cardDetails={each} key={index} widthOfCard={300}  
              />
            
          ))
      }
      
  </>

  return (
    <div className={styles.courseBox_container}>
      <h1 className={styles.c_heading}>
        {object.heading}
      </h1>
      <p className={styles.c_text}>{object.textContent}</p>

      <button className={styles.button}>
        {object.buttonText}
      </button>

      <Slider cardNode={sendCardNode} lengthOfArray={object.courses.length} title={object.title} idForSlider='broad_slider' idForSubSlider='broad_sub_slider' widthOfEachCard = {300}/>

    </div>
  )
}
