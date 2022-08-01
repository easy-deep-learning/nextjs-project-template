// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse,
} from 'next'

import {
  UserModel,
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

  const users = await UserModel.find()

  res.status(200)
    .json({ data: users })
}
