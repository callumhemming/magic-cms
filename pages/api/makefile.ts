import type { NextApiRequest, NextApiResponse } from 'next'
import fs from "fs"

type Data = {
    error: boolean
  }


export default async function handler(req:NextApiRequest, res:NextApiResponse<Data>){

    let error = false

    if(req.method === "POST"){
        fs.writeFile("hello.json", "hello!",(err)=>{if(err){error=true}})

        res.status(200).json({ error })
    }

}