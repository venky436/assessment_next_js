import React, { useEffect } from 'react'
import styles from './Broadsection.module.css'
import CorrectImg from '../../public/Images/correctSymbol.png'
import Image from 'next/image'

export default function HoverCard({data}:BroadSelectionNS.IPropsForHoverCard) {

    const [course,setCourse] = React.useState<BroadSelectionNS.ICourse>(data)
    const {heading,cardData} = course

    const [localCartData,setLocalCartData] = React.useState<any>()
    const [isAddedInLocalS,setIsAddedInLocalS] = React.useState<boolean>()

   

    const {keyPoints,text,totalTime} = cardData

    let cartHandler = (id : number)=>{
        let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
        let parse:any = JSON.parse(localData ??'[]')
        localStorage.setItem('cartItems',JSON.stringify([...parse,data]))
        setIsAddedInLocalS(true)
    }

    let removeHandler = (id : number)=>{
        let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
        let parse:any = JSON.parse(localData ?? [])
        console.log({parse})
        let remove = parse?.filter((each:any)=>{
            if(each?.id !== id){
                return each
            }
        })
        localStorage.setItem('cartItems',JSON.stringify(remove))
        setIsAddedInLocalS(false)
    }

    useEffect(()=>{

        let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
        let parse:any = JSON.parse(localData ?? '[]') 
       let check =  parse.some((each:any)=>each?.id == data.id)
        setIsAddedInLocalS(check)
    },[data])

   
    console.log('rendered')
  return (
    <section className={styles.hoverCard}  style={{zIndex : 20}} onClick={()=>{
        
    }}>
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
        {
            isAddedInLocalS ? ( <button className={styles.cart_btn} onClick={()=>removeHandler(data.id)}>
            Remove From cart
        </button>) : ( <button className={styles.cart_btn} onClick={()=>cartHandler(data.id)}>
                Add To Cart
            </button>)
        }
           
        </div>
    </section>
  )
}
