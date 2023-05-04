import React from 'react'
import styles from './Viewing.module.css'
import Slider from '../BroadSelection/Slider'
import { broadSelection } from '@/BoardSectionData'
import Card from '../BroadSelection/Card'

export default function Viewing() {
    const [data,setData] = React.useState<BroadSelectionNS.IBroadData[]>(broadSelection)
    let collectAllCourses = data.flatMap((each)=>{
        return each.courses.map((e)=>e)
    })

    let sendCardNode =
    <>
        {
            collectAllCourses.map((each, index) => (
                <Card cardDetails={each} key={index} widthOfCard={300}  
                />
              
            ))
        }
        
    </>
    
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
             <h1 className={styles.heading}>Students are viewing</h1>
        </div>
        <div className={styles.viewSlider}>
            <Slider lengthOfArray={collectAllCourses.length} cardNode={sendCardNode} idForSlider={'view_Slider'} idForSubSlider={'view_sub_slider'} widthOfEachCard={310}/>
        </div>
    </div>
  )
}
