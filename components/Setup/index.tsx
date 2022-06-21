import {Card, Text, Input} from "@nextui-org/react"
import React, {useState, useEffect} from "react"

interface Props{}

export default function Setup({}:Props):JSX.Element{

    const [apiEnvFound, setApiEnvFound] = useState(false)
    const [databaseTableFound, setDatabaseTableFound] = useState(false)
    const [loading, setLoading] = useState(false)
    const [CMSData, setCMSData] = useState([])

    useEffect(()=>{
        if(process.env.NEXT_PUBLIC_CMS_API_URL){
            setApiEnvFound(()=>true)
            console.log("Env found")
        }else{console.log("Not found")}

        (async () => {
            setLoading(()=>true)
            try{
                const response = await fetch("/getcmsdata")
                const data = (await response.json()).payload
                setCMSData(()=>data)
            }catch(err){
                setDatabaseTableFound(()=>false)
            }
            setLoading(()=>false)
        }
        
        )()

    },[])

    return(
        <>
        <Card>
            <Card.Header><Text>Set up!</Text></Card.Header>


            {!apiEnvFound && (
                <>
                <Card.Header><Text>API enviroment variable not found: Please input below</Text></Card.Header>
                <Card.Body><Input></Input></Card.Body>
                </>
            )}

            {!databaseTableFound && (
                <>
                <Card.Header><Text>CMS table not found, please set up now:</Text></Card.Header>
                <Card.Body><Input></Input></Card.Body>
                </>
            )}
            

        </Card>
        </>
    )
}