import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = {
    message: string
}

let val = 0;

export default function handler(_req: NextApiRequest, res: NextApiResponse<ResponseData>){
    if (_req.method === "GET"){
        res.status(200).json({message:"HELLO WORLD FROM API " + val})
        val++;
    }
}