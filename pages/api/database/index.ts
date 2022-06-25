import type { NextApiRequest, NextApiResponse } from "next";
import getTablesData from "../../../lib/models/getTablesData";
import createCMSTable from "../../../lib/models/createCMSTable";
import deleteCMSTable from "../../../lib/models/deleteCMSTable";
import updateCMSfile from "../../../lib/models/updateCMSfile";

interface apiResponse {
  success: boolean;
  payload: any[];
}

export default async function Handler(
  req: NextApiRequest,
  res: NextApiResponse<apiResponse>
) {
  const { uri }: { [uri: string]: string | string[] } = req.query;
  const { body }: any = req.body;
  console.log("Body here:", body)



  switch (req.method) {
    case "GET":
      const [GETapiResponse, GETstatus] = await getTablesData(String(uri));
      return res.status(GETstatus).json(GETapiResponse);

    case "POST":
      const [POSTapiResponse, POSTstatus] = await createCMSTable(String(uri));
      return res.status(POSTstatus).json(POSTapiResponse);

    case "PUT":
        const [PUTapiResponse, PUTstatus] = await updateCMSfile(String(uri), body)
        return res.status(PUTstatus).json(PUTapiResponse)

    case "DELETE":
      const [DELETEapiResponse, DELETEstatus] = await deleteCMSTable(
        String(uri)
      );
      return res.status(DELETEstatus).json(DELETEapiResponse);

    default:
      return res.status(500).json({ success: false, payload: [] });
  }
}
