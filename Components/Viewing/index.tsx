import React from 'react'
import styles from './Viewing.module.css'
import Slider from '../BroadSelection/Slider'
import Card from '../BroadSelection/Card'
import Link from 'next/link'

interface IProps{
    dataFromParent : BroadSelectionNS.IBroadData[]
}
export default function Viewing({dataFromParent}:IProps) {
    const [data,setData] = React.useState<BroadSelectionNS.IBroadData[]>(dataFromParent)
    
    let collectAllCourse = data?.flatMap((each)=>each.courses)
    let sendCardNode =
    <>
        {
           collectAllCourse.map((each, index) => (
                <>
                 <Card cardDetails={each} key={index} widthOfCard={300}   linkNotNeed={true}
                />
                </>
            ))
        }
    </>
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
             <h1 className={styles.heading}>Students are viewing</h1>
        </div>
        <div className={styles.viewSlider}>
            <Slider lengthOfArray={collectAllCourse.length} cardNode={sendCardNode} idForSlider={'view_Slider'} idForSubSlider={'view_sub_slider'} widthOfEachCard={310}/>
        </div>
    </div>
  )
}
