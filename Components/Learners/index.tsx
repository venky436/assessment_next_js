import React from 'react'
import styles from './Learners.module.css'
import Slider from '../BroadSelection/Slider'
import { goalsData } from '@/GoalsData'
import LearnCard from './LearnCard'
export default function Learners() {

  const [goals,setGoals] = React.useState<LearnersNS.GoalsData[]>(goalsData)

  let node = <>
  {
    goals.map((each,index)=>(
      <LearnCard widthOfCard ={400} cardDetails = {each}/>
    ))
  }
  </>
  
  

  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            <h1 className={styles.heading}>How learners like you are achieving their goals</h1>
        </div>
        <div className={styles.learn_slider}>

          <Slider lengthOfArray={goals.length} cardNode={node} idForSlider='learn_slider'  idForSubSlider='learn_sub_slider' widthOfEachCard={400} />
        </div>
    </div>
  ) 
}
