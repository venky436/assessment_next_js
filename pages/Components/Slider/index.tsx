import React from 'react'
import Slide_1 from '../../../public/Images/Slider_1.png'
import Slide_2 from '../../../public/Images/slide_2.jpg'
import Slide_3 from '../../../public/Images/slide_3.jpg'
import styles from './Slider.module.css'
import leftArrow from  '../../../public/Images/leftArrow.png'
import rightArrow from  '../../../public/Images/rightArrow.png'

import Image from 'next/image'

export default function Slider() {
    const slideImages = [Slide_1,Slide_2,Slide_3]

    const [index,setIndex] = React.useState<number>(0)

    let leftHandler = ()=>{
          if(index == 0){
             setIndex(slideImages.length-1)
          }
          setIndex((prv)=>prv-=1)
    }
    let rightHandler = ()=>{
        if(index == slideImages.length-1){
              setIndex(0)
        }
        setIndex((prv)=>prv+=1)

    }
  return (
    <div className={styles.container}>

        <div className={styles.slider}>
            <div className={styles.leftArrow} onClick={leftHandler}><Image src={leftArrow} alt='left'/></div>
            <Image src={slideImages[index]} alt='image' style={{display : 'block',width : '100%',height : '100%',objectFit : 'cover'}}/>
            <div className={styles.rightArrow} onClick={rightHandler}><Image src={rightArrow} alt='left'/></div>

        </div>

    </div>



  )
}
