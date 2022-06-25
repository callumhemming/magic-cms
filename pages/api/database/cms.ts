import type { NextApiRequest, NextApiResponse } from "next";
import getCMSfile from "../../../lib/models/getCMSfile";

interface apiResponse {
    success: boolean;
    payload: any[];
  }

export default async function Handler(
    req: NextApiRequest,
    res: NextApiResponse<apiResponse>
  ){

    const { uri }: { [uri: string]: string | string[] } = req.query;

    const [GETfileApiResponse, GETfileStatus] = await getCMSfile(
        String(uri)
      );
      return res.status(GETfileStatus).json(GETfileApiResponse);
}