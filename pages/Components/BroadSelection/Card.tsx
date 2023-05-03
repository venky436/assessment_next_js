import React from 'react'
import styles from './Broadsection.module.css'
export default function Card({cardDetails}:BroadSelectionNS.IPropsForCard) {
 let hoverHandler = (details : BroadSelectionNS.ICourse['cardData'])=>{
     console.log({details})
 }
  return (
    <div className={styles.card} onMouseOver={()=>hoverHandler(cardDetails.cardData)}>Card</div>
  )
}
