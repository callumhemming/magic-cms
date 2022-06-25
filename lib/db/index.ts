import pg from "pg";

export default async function setupQuery(connectionString:string){

  
  const pool = new pg.Pool({
    connectionString,
    ssl: {
      rejectUnauthorized: false
    }
  });

  console.log("Set up pool", "URI: ", connectionString)

  return [pool]

}

