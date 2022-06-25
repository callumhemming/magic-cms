import querySetup from "../db";

interface apiResponse{
    success: boolean;
    payload: any[];
  };

  interface ColumnData {
    columnName: string;
    type: string;
  }

export default async function getTablesData(uri:string): Promise<[apiResponse, 200|400]>{

  
    const apiResponse: apiResponse = {
        success: true,
        payload: [],
      };

    const [pool] = await querySetup(uri);

    try {
      const listOfTableNames = (
        await pool.query({
          text: `  
            SELECT 
            table_name
            FROM
            information_schema.tables
            WHERE information_schema.tables.table_schema = 'public'
                    `,
        })
      ).rows;

      apiResponse.payload = await Promise.all(
        listOfTableNames.map(async tableName => {
          return {
            tableName: tableName.table_name,
            columns: await getTableColumnsAndTypes(tableName.table_name),
          };
        })
      );
    } catch (err) {
      apiResponse.success = false
    }

    return [apiResponse, apiResponse.success === true? 200 : 400]
    
    async function getTableColumnsAndTypes(
      tableName: string
    ): Promise<ColumnData[]> {
      const tableDataArray = [];
    
      let tableData = [];
      try {
        tableData = (
          await pool.query(
            `SELECT column_name, data_type 
                FROM INFORMATION_SCHEMA.COLUMNS 
                WHERE table_name = $1`,
            [tableName]
          )
        ).rows;
      } catch (err) {
        apiResponse.success = false;
        console.log(err);
      }
      tableData.forEach(column => {
        const { column_name, data_type } = column;
        tableDataArray.push({
          columnName: column_name,
          type: data_type,
        });
      });
    
    
      return tableDataArray;
    }
  }

