import Head from 'next/head'
import Image from 'next/image'
import NavBar from './Components/NavBar'
import Slider from './Components/Slider'
import BroadSelection from './Components/BroadSelection'



export default function Home() {
  return (
    <>
      {/* <NavBar/> */}
      <Slider/>
      <BroadSelection/>
    </>
  )
}
