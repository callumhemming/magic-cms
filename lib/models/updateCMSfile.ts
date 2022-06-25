import querySetup from "../db";

interface apiResponse{
    success: boolean;
    payload: any[];
  };


  export default async function updateCMSfile(uri:string, body:any):Promise<[apiResponse, 200 | 400]>{

    const apiResponse:apiResponse = {
        success:true,
        payload:[]
    }

    

    const [pool] = await querySetup(uri)


    try{
        apiResponse.payload = (await pool.query(`
            UPDATE cms_data
            SET cms_save_file = $1
            WHERE unique_id = 1
        `,[body])).rows

    }catch(err){
        console.log(err)
        apiResponse.success = false
    }


    return [apiResponse, apiResponse.success === true? 200 : 400]

  }