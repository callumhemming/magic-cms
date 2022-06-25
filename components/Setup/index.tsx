import {Card, Text, Input, Button} from "@nextui-org/react"
import { table } from "console"
import React, {useState, useEffect} from "react"

interface Props{}


function Column({column}):JSX.Element{

    return(
        <Card>
            <p>
                Column Name : {column.columnName}
                </p>
                <p>
            Column Type : {column.type}

                </p>
        </Card>
    )
}

function Table({tableData}): JSX.Element{

    return(
        <Card>
            <Card.Header><Text>{tableData.tableName}</Text></Card.Header>
            <div>
                {tableData.columns && tableData.columns.map((column)=>{
                    return(
                        <Column column={column}/>
                    )
                })}
            </div>
        </Card>
    )
}

export default function Setup({}:Props):JSX.Element{

    const [apiEnvFound, setApiEnvFound] = useState(false)
    const [databaseTableFound, setDatabaseTableFound] = useState(false)
    const [loading, setLoading] = useState(false)
    const [CMSData, setCMSData] = useState([])
    const [uriInput, setUriInput] = useState("")

    const[tables, setTables] = useState([])

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

            {loading&& <h1>Loading</h1>}

            <Input
            type="password"
            clearable
            placeholder="URI"
            onChange={(e)=>setUriInput(e.target.value)}
            />
            <Button
            onPress={async ()=>{
                if(uriInput === ""){return}
                try{
                    const res = await fetch(`/api/database?uri=${uriInput}`)
                    const data = (await res.json()).payload
                    setTables(()=>data)

                }catch(err){
                    return
                }
                
            }}
            >Look up database data</Button>

            {tables&&tables.map((table)=>{
                return(
                    <Table tableData={table}/>
                )
            })}
{/* 
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
            )} */}

            


            

        </Card>
        </>
    )
}