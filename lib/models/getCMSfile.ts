import querySetup from "../db";
interface apiResponse{
    success: boolean;
    payload: any[];
  };


  export default async function getCMSfile(uri:string):Promise<[apiResponse, 200 | 400]>{

    const apiResponse:apiResponse = {
        success:true,
        payload:[]
    }

    const [pool] = await querySetup(uri)


    try{
        apiResponse.payload = (await pool.query(`
            SELECT * FROM cms_data
            WHERE unique_id = '1'
        `)).rows

    }catch(err){
        console.log(err)
        apiResponse.success = false
    }


    return [apiResponse, apiResponse.success === true? 200 : 400]

  }