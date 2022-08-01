// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse,
} from 'next'

import {
  templateCRUD,
  dbConnect,
} from '../../../database'

/**
 * @todo Fix type
 */
type Data = {
  data: unknown
}


export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await dbConnect()

  switch (req.method) {
    case 'GET':
      const itemsList = await templateCRUD.find()
      res.status(200)
        .json({ data: itemsList })
      break
    case 'POST':
      const data = req.body
      console.log("data: ", data); // eslint-disable-line
      res.status(200)
        .json({ data: data })
      break
    default:
      res.status(501) // Not Implemented
  }
}
