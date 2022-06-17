import Head from "next/head";
import React from 'react'
import CoursesEditPage from "../../components/CoursesEditPage";
import { useRouter } from "next/router";
import { CourseData, QandA } from "../../types";

interface Props extends CourseData {
  qandas: QandA[];
  courseid: number;
  tag: string;
  ataglance: {
    data: string[];
  };
  overview: string[];
  extrainfo: string[];
  examdetails: string;
}

export default function CoursesId({ data }: any): JSX.Element {
  return (
    <>
      <Head>
        <title>Editing Course</title>
      </Head>
      <CoursesEditPage data={data[0]} />
    </>
  );
}

export async function getServerSideProps(context: any) {
  const { id } = context.params;

  const response = await fetch(
    `https://open-study-college-application.herokuapp.com/courses/${id}`
  );
  const data = (await response.json()).payload;

  return {
    props: { data },
  };
}
