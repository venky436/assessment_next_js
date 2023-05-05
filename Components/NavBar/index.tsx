import React from 'react'
import Image from 'next/image'
import Logo from '../../public/Images/logo-udemy.svg'
import styles from './NavBar.module.css'
import CartImg from '../../public/Images/cart.png'
import searchImg from '../../public/Images/searchImg.png'
import Link from 'next/link'
import menuImg from '../../public/Images/menuImg.png'
import { useRouter } from 'next/router'
export default function NavBar() {

  const [inputValue,setInputValue] = React.useState<string>('')
  const [isMenuBtnOpen,setIsMenuBtnOpen] = React.useState<boolean>(false)

  const route = useRouter()
  let inputHandler = (e:any)=>{
    setInputValue(e.target.value)
  }
  let submitHandler = (e:any)=>{
    e.preventDefault()
    if(inputValue.toLowerCase().includes('python')){
         route.push('/Python')
    }else if(inputValue.includes('excel')  ){
       route.push('/Excel')
    }else if(inputValue.includes('javaScript') ){
        route.push('/JavaScript')
    }else{
      alert('Course not available')
    }
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
        <Link href={'/'}>
        <Image src={Logo} alt='logo' />
        </Link>
      </div>
      <div className={styles.search}>
        <Image src={searchImg} alt='search' style={{
          cursor : 'not-allowed'
        }}/>
        <form onSubmit={submitHandler} className={styles.input}>

        <input type='text' value={inputValue} onChange={(e)=>inputHandler(e)} className={styles.input} placeholder='search for course'/>
        </form>
         
      </div>
      <div className={ isMenuBtnOpen ? styles.right_buttons_active : styles.right_buttons}>
        {
          isMenuBtnOpen  ? (<div className={styles.exit} onClick={exitHandler}>
            Exit
         </div>) :null
        }
        
        <Link href={'/business'}>
        <button className={styles.btn_1}>Udemy Business</button>
        </Link>
        <Link href={'/teach'}>
        <button className={styles.btn_2}>Teach on Udemy</button>
        </Link>
        <Link href={'/cart'}>
        <Image src={CartImg} alt='cart' style={{cursor :'pointer'}}/>
        </Link>
      </div>
      <div className={styles.menu_btn} onClick={toggleHandler}>
         <Image src={ menuImg} alt="menu"/>
      </div>

      </div>
      
    </div>
  )
}
