import React from 'react'
import { useRouter } from 'next/router'
import CourseCard from '@/Components/Course/CourseCard'
import { broadSelection } from '@/BoardSectionData'
import styles from '../../Components/Course/Course.module.css'
interface IProps{
  course : BroadSelectionNS.IBroadData
}
export default function Python({course}:IProps) {
  let route = useRouter() 

  let {courseName} = route.query

  return (
    <div className={styles.mainContainer}>
      {
        course.courses.map((each,index)=>(
          <CourseCard courseData={each} key={index}/>
        ))
      }
    </div>
  )
}


export async function getServerSideProps(context:any) {
  let findCourse = broadSelection.find((each)=>each.title == context.query.courseName )
  return {
    props : {
       course : findCourse
    }
  }
}