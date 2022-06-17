import type { NextPage } from "next";
import Head from "next/head";
import Style from "../styles/Home.module.css";
import CallToActionRouter from "../components/CallToActionRouter"

interface Props {}

export default function Home() {
  return (
    <>
      <Head>
        <title>CMS Dashboard</title>
      </Head>

      <CallToActionRouter/>
    </>
  );
}
