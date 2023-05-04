import React from 'react'
import styles from './Category.module.css'
import { categoryData } from '@/GoalsData'
import Image from 'next/image'

interface CategoryData{
    title : string,
    image : any
}
export default function Category() {
    const [data,setData] = React.useState<CategoryData[]>(categoryData)
  return (
    <div className={styles.mainContainer}>
        <div className={styles.container}>
        <h1 className={styles.heading}>Top categories</h1>

        <div className={styles.imageContainer} >
            {
                data.map((each,index)=>(
                    <div key={index} className={styles.imageAndTitle}>
                        <div className={styles.imgBox}>

                        <Image src={each.image} alt="Categories" className={styles.img} />
                        </div>
                        <h2 className={styles.title}>{each.title}</h2>
                    </div>
                ))
            }

        </div>
            
        </div>
    </div>
  )
}
