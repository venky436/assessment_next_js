import React from 'react'
import styles from './Broadsection.module.css'
import sliderStyles from '../Slider/Slider.module.css'
import leftArrow from '../../../public/Images/leftArrow.png'
import rightArrow from '../../../public/Images/rightArrow.png'
import Image from 'next/image'

export default function Slider({lengthOfArray,cardNode}:BroadSelectionNS.IPropsForSlider) {
    const [index, setIndex] = React.useState<number>(0)

    const [sliderWidth, setSliderWidth] = React.useState<number>(0)
  
    const [countOfClick,setCountOfClick] = React.useState<number>(0)
  
    const [numberOfCardsFixInSlider,setNumberOfCardsFitInSlider] = React.useState<number>(0)
  
    const [allowedClicks,setAllowedClicks] = React.useState<number>(0)
  
    const [subSliderReference,setSubSliderReference] = React.useState<HTMLElement>()
  
    let getSliderReference = ()=>{
      let slider = document.getElementById('slider')
      let width: any = slider?.getBoundingClientRect().width
      setSliderWidth(width)
      let cardsCanFit = width / 310
      let allowClicks = lengthOfArray - cardsCanFit
      setAllowedClicks(allowClicks)
      setNumberOfCardsFitInSlider(cardsCanFit)
    }
  
    subSliderReference!== undefined
    ? (subSliderReference.style.transform = `translateX(${-(310 * countOfClick)}px)`)
    : null;
  
    let rightHandler = () => {
      let clicksCount = countOfClick +1
      let slider:any = document.getElementById('sub_slider')
      if(lengthOfArray <= numberOfCardsFixInSlider || countOfClick > allowedClicks ){
        return 
      }else{
        setCountOfClick(clicksCount)
        slider.style.transform = `translateX(${- countOfClick * 310}px)`
        slider.style.transition = `all 1s`
      }
    }
    let leftHandler = () => {
      let clicksCount = countOfClick -1
      if(countOfClick > 0){
         setCountOfClick(clicksCount)
         if(subSliderReference !== undefined){
           subSliderReference.style.transform = `translateX(${ countOfClick * 310}px)`
           subSliderReference.style.transition = `all 1s`
         }
      }
       
    }
    
  
    function reSize(event: any) {
      getSliderReference()
    }
  
    React.useEffect(() => {
      let slider:any = document.getElementById('sub_slider')
      setSubSliderReference(slider)
     getSliderReference()
      window.addEventListener('resize', reSize)
      return () => {
        window.removeEventListener('resize', reSize)
      }
    }, [])
  return (
    <div className={styles.slider} id='slider'>
    {
      lengthOfArray <= numberOfCardsFixInSlider ? null :<> 
      {
        countOfClick > 0.9 ?  <div className={sliderStyles.leftArrow} onClick={leftHandler}><Image src={leftArrow} alt='left' /></div> : null
      }
      {
        countOfClick >= allowedClicks ? null :<div className={sliderStyles.rightArrow} onClick={rightHandler}><Image src={rightArrow} alt='right' /></div>
      }
     </>
    }
    <div className={styles.sub_slider} id='sub_slider'>
      {cardNode}
    </div>
  </div>
  )
}
