import React from 'react'
import styles from './Broadsection.module.css'
import Card from './Card'

import Image from 'next/image'
import Slider from './Slider'
import Link from 'next/link'



export default function CourseBox({ object }: BroadSelectionNS.IPropsForCourseBox) {

  let {buttonText,courses,heading,textContent,title} = object
  let sendCardNode =
  <>
      {
          courses.map((each, index) => (
              <Card cardDetails={each} key={index} widthOfCard={300}  
              />
            
          ))
      }
  </>

  return (
    <div className={styles.courseBox_container}>
      <h1 className={styles.c_heading}>
        {heading}
      </h1>
      <p className={styles.c_text}>{textContent}</p>
      <Link href={`./${title}`}>
      <button className={styles.button}>
        {buttonText}
      </button>
      </Link>

      <Slider cardNode={sendCardNode} lengthOfArray={courses.length} title={title} idForSlider='broad_slider' idForSubSlider='broad_sub_slider' widthOfEachCard = {300}/>

    </div>
  )
}
