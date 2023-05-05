import React from 'react'
import styles from './Broadsection.module.css'
import sliderStyles from '../Slider/Slider.module.css'
import leftArrow from '../../public/Images/leftArrow.png'
import rightArrow from '../../public/Images/rightArrow.png'
import Image from 'next/image'


export default function Slider({lengthOfArray,cardNode,title,idForSlider,idForSubSlider,widthOfEachCard}:BroadSelectionNS.IPropsForSlider) {
    const [index, setIndex] = React.useState<number>(0)

    const [sliderWidth, setSliderWidth] = React.useState<number>(0)
  
    const [countOfClick,setCountOfClick] = React.useState<number>(0)
  
    const [numberOfCardsFixInSlider,setNumberOfCardsFitInSlider] = React.useState<number>(0)
  
    const [allowedClicks,setAllowedClicks] = React.useState<number>(0)
  
    const [subSliderReference,setSubSliderReference] = React.useState<HTMLElement>()
  
    let getSliderReference = ()=>{
      let slider = document.getElementById(idForSlider)
      let width: any = slider?.getBoundingClientRect().width
      setSliderWidth(width)
      let cardsCanFit = width / widthOfEachCard
      let allowClicks = lengthOfArray - cardsCanFit
      setAllowedClicks(allowClicks)
      setNumberOfCardsFitInSlider(cardsCanFit)
    }

    subSliderReference!== undefined
    ? (subSliderReference.style.transform = `translateX(${-(widthOfEachCard  * countOfClick)}px)`)
    : null;
  
    let rightHandler = () => {
      let clicksCount = countOfClick +1
      let slider:any = document.getElementById(idForSubSlider)
      if(lengthOfArray <= numberOfCardsFixInSlider || countOfClick > allowedClicks ){
        return 
      }else{
        setCountOfClick(clicksCount)

        slider.style.transform = `translateX(${- countOfClick * widthOfEachCard }px)`
        slider.style.transition = `all 1s`
      }
    }
    let leftHandler = () => {
      let clicksCount = countOfClick -1
      if(countOfClick > 0){
         setCountOfClick(clicksCount)
         if(subSliderReference !== undefined){
           subSliderReference.style.transform = `translateX(${ countOfClick * widthOfEachCard }px)`
           subSliderReference.style.transition = `all 1s`
         }
      }

    }
    
    function reSize(event: any) {
      getSliderReference()
    }

    React.useEffect(()=>{
      setCountOfClick(0)
    },[title])
  
    React.useEffect(() => {
      let slider:any = document.getElementById(idForSubSlider)
      setSubSliderReference(slider)
     getSliderReference()
      window.addEventListener('resize', reSize)
      return () => {
        window.removeEventListener('resize', reSize)

      }
    }, [])
  return (
    <div className={styles.slider} id={idForSlider}>
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
    <div className={styles.sub_slider} id={idForSubSlider}>
        {cardNode}
    </div>
  </div>
  )
}
