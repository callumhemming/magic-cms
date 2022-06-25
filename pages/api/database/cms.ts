import type { NextApiRequest, NextApiResponse } from "next";
import getCMSfile from "../../../lib/models/getCMSfile";
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

  switch (req.method) {
    case "GET":
      const [GETfileApiResponse, GETfileStatus] = await getCMSfile(String(uri));
      return res.status(GETfileStatus).json(GETfileApiResponse);

    case "PUT":
      const [PUTapiResponse, PUTstatus] = await updateCMSfile(
        String(uri),
        req.body
      );
      return res.status(PUTstatus).json(PUTapiResponse);
    default:
  }
}
