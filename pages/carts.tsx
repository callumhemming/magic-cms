import { Cart } from "../types";
import CartsRouter from "../components/CartsRouter";
import Head from "next/head";
import React from 'react'

interface Props {
  data: Cart[];
}

export default function CartsPage({ data }: Props): JSX.Element {
  console.log(data);

  return (
    <>
      <Head>
        <title>Carts</title>
      </Head>
      <CartsRouter carts={data} />
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(
    "https://open-study-college-application.herokuapp.com/carts"
  );
  const data: Cart[] = (await response.json()).payload;

  return { props: { data } };
}
