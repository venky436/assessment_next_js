import React from 'react'
import styles from './Broadsection.module.css'
import Image from 'next/image'
import Tooltip from 'rc-tooltip'
import HoverCard from './HoverCard'
export default function Card({cardDetails,widthOfCard}:BroadSelectionNS.IPropsForCard) {

 let hoverHandler = (details : BroadSelectionNS.ICourse['cardData'])=>{
     console.log({details})
 }
  
  return (
    <Tooltip overlay={<HoverCard data={cardDetails}/> } trigger={['click','hover']}>
    <div  className={styles.card} style={{minWidth : `${widthOfCard}px`}} onMouseOver={()=>hoverHandler(cardDetails.cardData)}>
        <div className={styles.imageContainer}>
          <Image src={cardDetails.image ?? ''} alt='image' style={{display : 'block',width:'100%',height:'100%'}}/>
        </div>
        <h2 className={styles.card_heading}>
          {cardDetails.heading}
        </h2>
        <span className={styles.author}>{cardDetails.author}</span>
        <div className={styles.rating}>0</div>
        <div className={styles.price}>
           ${cardDetails.offerPrice}
        </div>

    </div>
    </Tooltip>
    
  )
}
