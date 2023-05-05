import React from 'react'
import styles from './Course.module.css'
import Image from 'next/image'
interface IProps{
    courseData : BroadSelectionNS.ICourse;
    removeBtn? : boolean;
    cartRemoveHandler ?: (id : number)=>void
}
export default function CourseCard({courseData,removeBtn,cartRemoveHandler}:IProps) {


  return (
    <div className={styles.card_container}>
        <div className={styles.image}>
          <Image src={courseData.image} alt='coureImg' style={{
            display:'flex',
            height:'100%',
            width : '200px',
            objectFit : 'cover'
          }}/>
        </div>
        <div className={styles.content}> 
           <h1 className={styles.course_heading}>{courseData.heading}</h1>
           <span>Rating : {courseData.rating}</span>
           <span>$ {courseData.price}</span>
           {
            removeBtn ? (<button className={styles.remove_btn} onClick={()=>cartRemoveHandler?.(courseData.id)}>
            Remove From cart
        </button>) : null
           }
           
        </div>
    </div>
  )
}
