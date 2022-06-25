import querySetup from "../db";
interface apiResponse{
    success: boolean;
    payload: any[];
  };


  export default async function createCMSTable(uri:string):Promise<[apiResponse, 200 | 400]>{

    const apiResponse:apiResponse = {
        success:true,
        payload:[]
    }

    const [pool] = await querySetup(uri)


    try{
        apiResponse.payload = (await pool.query(`
            CREATE TABLE IF NOT EXISTS cms_data (
                unique_id SERIAL PRIMARY KEY,
                cms_save_file JSON
            )    
        `)).rows

    }catch(err){
        console.log(err)
        apiResponse.success = false
    }

    try{
        await pool.query(`
        INSERT INTO cms_data (cms_save_file) VALUES ($1)
        `,[JSON.stringify({Empty:"No info here"})])
    }catch(err){
        apiResponse.success = false
        console.log(err)
    }


    return [apiResponse, apiResponse.success === true? 200 : 400]

  }