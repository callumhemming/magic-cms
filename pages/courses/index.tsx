import type { NextPage } from "next";
import Head from "next/head";
import {CourseData} from "../../types"
import CourseRouter from "../../components/CoursesRouter"


interface Props {
    courses:CourseData[]
}

export default function Courses({courses} : Props) {
    console.log(courses)
  return (
    <>
      <Head>
        <title>Courses</title>
      </Head>

      <CourseRouter
      courses={courses}
      />
      


      
    </>
  );
}

export async function getServerSideProps() {

   
    
    const response = await fetch(`https://open-study-college-application.herokuapp.com/courses`,
   {
     headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
     
  } 
    )
    const courses = (await response.json()).payload

    return {
      props: {courses} // will be passed to the page component as props
    }
  }