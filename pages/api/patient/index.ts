// API route to save patient data
import type { NextApiRequest, NextApiResponse } from "next";
import { Patient } from "./[id]";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Patient>
) {
  if (req.method !== "POST") {
    return res.status(405).end("Method not allowed");
  }

  // Todo: validate submitted form data

  console.log(req.body);

  res.status(204).end();
}
