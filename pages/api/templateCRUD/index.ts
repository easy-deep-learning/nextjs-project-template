// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {
  NextApiRequest,
  NextApiResponse,
} from 'next'

import {
  templateCRUD,
  SessionModel,
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

  const sessionToken = req.cookies?.['next-auth.session-token']

  console.log("sessionToken: ", sessionToken); // eslint-disable-line

  switch (req.method) {
    case 'GET':
      const itemsList = await templateCRUD.find()
      res.status(200)
        .json({ data: itemsList })
      break
    case 'POST':
      const data = req.body
      const session = await SessionModel.findOne({ sessionToken }).lean()

      if (!data.created_at) {
        data.created_at = Date.now()
      }

      if (!data.authorId) {
        data.authorId = session.userId
      }

      data.updated_at = Date.now()

      const options = {
        // Return the document after updates are applied
        new: true,
        // Create a document if one isn't found.
        upsert: true,
      }
      const doc = await templateCRUD.findOneAndUpdate({}, data, options).lean()
      res.status(200)
        .json({ data: doc })
      break
    default:
      res.status(501) // Not Implemented
  }
}
