import React from 'react'
import styles from './Broadsection.module.css'
import CorrectImg from '../../public/Images/correctSymbol.png'
import Image from 'next/image'

export default function HoverCard({data}:BroadSelectionNS.IPropsForHoverCard) {
    const {heading,cardData} = data
    const {keyPoints,text,totalTime} = cardData

    let cartHandler = ()=>{
        console.log('Cart Addded')
    }
  return (
    <section className={styles.hoverCard} >
        <h1 className={styles.hover_heading}>{heading}</h1>
        <span className={styles.time}>{totalTime} total hours</span>

        <div className={styles.keyPoints}>
            {
                keyPoints.map((each,index)=>(
                    <div className={styles.point} key={index}>
                          <Image src={CorrectImg} alt="correct Symbol" style={{display:'block',width : '10px',height:'10px'}}/> 
                           <h3>{each}</h3>
                    </div>
                ))
            }
        </div>
        <div className={styles.button_box}>
            <button className={styles.cart_btn} onClick={cartHandler}>
                Add To Cart
            </button>

        </div>


    </section>
  )
}
