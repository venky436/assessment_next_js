import React from 'react'
import styles from '../../Components/Course/Course.module.css'
import { useRouter } from 'next/router'
import { broadSelection } from '@/BoardSectionData'
import Image from 'next/image'
import BrStyles from '../../Components/BroadSelection/Broadsection.module.css'


interface IProps{
    course : BroadSelectionNS.ICourse
}
export default function CourseDetails({course}:IProps) {
    let route = useRouter()
   let  {courseId} = route.query


   const [isAddedInLocalS,setIsAddedInLocalS] = React.useState<boolean>()

   let cartHandler = (id : number)=>{
       let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
       let parse:any = JSON.parse(localData ??'[]')
       localStorage.setItem('cartItems',JSON.stringify([...parse,course]))
       setIsAddedInLocalS(true)
   }

   let removeHandler = (id : number)=>{
       let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
       let parse:any = JSON.parse(localData ?? [])
       console.log({parse})
       let remove = parse?.filter((each:any)=>{
           if(each?.id !== id){
               return each
           }
       })
       localStorage.setItem('cartItems',JSON.stringify(remove))
       setIsAddedInLocalS(false)
   }

   React.useEffect(()=>{

       let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
       let parse:any = JSON.parse(localData ?? '[]') 
      let check =  parse.some((each:any)=>each?.id == course.id)
       setIsAddedInLocalS(check)
   },[course])
  return (
    <div className={styles.detail_container}>
      
      <div className={styles.d_sub_container}>
     
        <div className={styles.left}>
           <h1 className={styles.heading}>{course.heading}</h1>
           <p className={styles.text}>{course.cardData.keyPoints[0] + course.cardData.keyPoints[0]}</p>
           <div className={styles.min_stuff}>

           <span >Rating : {course.rating}</span>
           <span>Created By : {course.author}</span>
           <span>Reviewd By : {course.reviewsCount} peoples</span>
           </div>
           <div className={BrStyles.button_box}> 
        {
            isAddedInLocalS ? ( <button className={BrStyles.cart_btn} onClick={()=>removeHandler(course.id)}>
            Remove From cart
        </button>) : ( <button className={BrStyles.cart_btn} onClick={()=>cartHandler(course.id)}>
                Add To Cart
            </button>)
        }
           
        </div>
        </div>
        <div className={styles.right}>
           <Image src={course.image} alt='images' style={{
            display : 'flex',
            width : '80%',
            height : '100%'
           }}/>
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context:any) {
  let collectAllCourse  = broadSelection.flatMap((each)=>each.courses)
  let findCourse = collectAllCourse.find((each)=>each.id == Number(context.query.courseId))
  return {
    props : {
       course : findCourse
    }
  }
}