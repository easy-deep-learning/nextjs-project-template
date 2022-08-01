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

  const itemsList = await templateCRUD.find()

  res.status(200)
    .json({ data: itemsList })
}