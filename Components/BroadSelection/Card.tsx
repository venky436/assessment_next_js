import React from 'react'
import styles from './Broadsection.module.css'
import Image from 'next/image'
import Tooltip from 'rc-tooltip'
import HoverCard from './HoverCard'
import Link from 'next/link'
export default function Card({cardDetails,widthOfCard}:BroadSelectionNS.IPropsForCard) {


  
  return (
    <Tooltip  overlay={<HoverCard data={cardDetails}/> } trigger={['click','hover']}  overlayClassName={styles.hoverCard_} >

{/* <Link href={`/${cardDetails.name}/${cardDetails.id}`}> */}
<div  className={styles.card} style={{minWidth : `${widthOfCard}px`}} >
        <div className={styles.imageContainer}>
          <Image src={cardDetails.image ?? ''} alt='image' style={{display : 'block',width:'100%',height:'100%'}}/>
        </div>
        <h2 className={styles.card_heading}>
          {cardDetails.heading}
        </h2>
        <span className={styles.author}>{cardDetails.author}</span>
        <div className={styles.rating}>Rating : {cardDetails.rating}</div>
        <div className={styles.price}>
           ${cardDetails.offerPrice}
        </div>
    </div>
{/* </Link> */}
   
    </Tooltip>
    
  )
}
