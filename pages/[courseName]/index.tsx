import React from 'react'
import { useRouter } from 'next/router'
import CourseCard from '@/Components/Course/CourseCard'
import { broadSelection } from '@/BoardSectionData'
import styles from '../../Components/Course/Course.module.css'
import Link from 'next/link'
interface IProps{
  course : BroadSelectionNS.IBroadData
}
export default function Python({course}:IProps) {
  let route = useRouter() 

  let {courseName} = route.query

  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
        <h1>{courseName} </h1> 
        <hr/>
      {
        course.courses.map((each,index)=>(
          <>
          <Link href={`${course.title}/${each.id}`}>

           <CourseCard courseData={each} key={index}/>
          <hr/>
          </Link>
          </>
         
        ))
      }
      </div>
      
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