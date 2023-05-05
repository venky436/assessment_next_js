import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Images/logo-udemy.svg'
import styles from './NavBar.module.css'
import CartImg from '../../public/Images/cart.png'
import searchImg from '../../public/Images/searchImg.png'
export default function NavBar() {

  const [inputValue,setInputValue] = React.useState<string>()
  const [isMenuBtnOpen,setIsMenuBtnOpen] = React.useState<boolean>(false)
  let inputHandler = (e:any)=>{
    setInputValue(e.target.value)
    
  }

  let toggleHandler = ()=>{
     setIsMenuBtnOpen(!isMenuBtnOpen)
  }
  let exitHandler = ()=>{
     setIsMenuBtnOpen(false)
  }
  return (
    <div className={styles.mainContainer}>
      <div className={styles.container}>
      <div>
        <Image src={Logo} alt='logo' />
      </div>
      <div className={styles.search}>
        <Image src={searchImg} alt='search' style={{
          cursor : 'not-allowed'
        }}/>
        <input type='text' value={inputValue} onChange={(e)=>inputHandler(e)} className={styles.input} placeholder='search for course'/>
         
      </div>
      <div className={ isMenuBtnOpen ? styles.right_buttons_active : styles.right_buttons}>
        {
          isMenuBtnOpen  ? (<div className={styles.exit} onClick={exitHandler}>
            Exit
         </div>) :null
        }
        

        <button className={styles.btn_1}>Udemy Business</button>
        <button className={styles.btn_2}>Teach on Udemy</button>
        <Image src={CartImg} alt='cart' style={{cursor :'pointer'}}/>
      </div>
      <div className={styles.menu_btn} onClick={toggleHandler}>
         venky
      </div>

      </div>
      
    </div>
  )
}
