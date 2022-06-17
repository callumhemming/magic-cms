import Style from "./Banner.module.css"
import {Button} from "@nextui-org/react"
import Link from "next/link"
import React from 'react'

interface Props{
    children:JSX.Element
}

export default function Banner({children}:Props):JSX.Element{

    return(<>
    <div className={Style.container}>
        <h1>Open Study College CMS</h1>
    </div>
    <div className={Style.navContainer}>
        <Link href="/"><Button size={"sm"} color={"gradient"} >Home</Button></Link>
        <Link href="/courses"><Button size={"sm"} color={"gradient"} >Courses</Button></Link>
        <Link href="/users"><Button size={"sm"} color={"gradient"} >Users</Button></Link>
        <Link href="/carts"><Button size={"sm"} color={"gradient"} >Carts</Button></Link>
    </div>
    {children}
    </>)
}