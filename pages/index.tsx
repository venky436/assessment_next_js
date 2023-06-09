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
import { broadSelection } from '@/BoardSectionData'
import { categoryData } from '@/GoalsData'
import { viewData } from '@/BoardSectionData'

interface CategoryData{
  title : string,
  image : any
}
interface HomePageProps{
  CourseData : BroadSelectionNS.IBroadData[],
  categoryData : CategoryData[],
  viewData : BroadSelectionNS.IBroadData[]
}

export default function Home({CourseData,categoryData,viewData}:HomePageProps) {
  return (
    <>
      <Slider/>
      <BroadSelection data={CourseData} />
      <Learners/>
      <Viewing dataFromParent={viewData}/>
      <Category categoryData={categoryData}/>
      <Business/>
    </>
  )
}



// If is there any data fetching from server that should happen in this fuction 
//  Rightnow i have prepared data locally so i'm passing data from parent to childs

//  There is one more fuction called  * getStaticProps() * this is for SSG website

//  getStaticPaths() for SSG dynamic route

export async function getServerSideProps(context:any) {
  return {
    props: {
      CourseData : broadSelection,
      categoryData : categoryData,
      viewData : viewData
    }, 
  };
}