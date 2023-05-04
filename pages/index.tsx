import Image from 'next/image'
import NavBar from '@/Components/NavBar'
import Slider from '@/Components/Slider'
import BroadSelection from '@/Components/BroadSelection'
import Learners from '@/Components/Learners'
import Head from 'next/head'
import 'rc-tooltip/assets/bootstrap_white.css'
import Viewing from '@/Components/Viewing'
import Category from '@/Components/Category'
import Business from '@/Components/Business'

export default function Home() {
  return (
    <>
      <Slider/>
      <BroadSelection/>
      <Learners/>
      <Viewing/>
      <Category/>
      <Business/>
    </>
  )
}
