import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs"

export default function(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(404).send("")
  const { img } = req.query
  if (!img) return res.status(400).send("")
  try {
    const file = fs.readFileSync(`images/${img}`)
    return res.status(200).send(file)
  } catch (err) {
    console.log("ERR", err)
    return res.status(500).send("Some error happened")
  }
}
