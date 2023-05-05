import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Cart.module.css'
import CourseCard from '../Course/CourseCard'
export default function Cart() {
    const [cartItems,setCartItems] = useState<BroadSelectionNS.ICourse[]>([])
    useEffect(()=>{
        let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
        let parse:any = JSON.parse(localData ?? '[]')
        setCartItems(parse)
        console.log({parse})
    },[])

    function removeHandler (id : number){
        let localData:any = localStorage.getItem('cartItems') && localStorage.getItem('cartItems');
        let parse:any = JSON.parse(localData ?? '[]')
        let remove = parse.filter((each:any)=>{
            if(each.id !== id){
                return each
            }
        })
        setCartItems(remove)
        localStorage.setItem('cartItems',JSON.stringify(remove))
    }
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
            { cartItems.length > 0 ? 
                cartItems.map((each)=>(
                    <CourseCard courseData={each ?? {} } key={each?.id} removeBtn={true}  cartRemoveHandler ={removeHandler}/>
                )) : (<div className={styles.emptyCart}>Cart is Empty</div>)
            }
        </div>
    </div>
  )
}
