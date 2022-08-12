import type {
  NextApiRequest,
  NextApiResponse,
} from 'next'

import {
  TemplateCRUDModel,
  SessionModel,
  dbConnect,
} from '../../../database'

import { Data } from '../types'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  await dbConnect()

  const sessionToken = req.cookies?.['next-auth.session-token']

  const query = req.query

  const data = req.body || {}
  const session = await SessionModel.findOne({ sessionToken }).lean()
  const userId = session?.userId

  switch (req.method) {
    // Read one
    case 'GET':
      const item = await TemplateCRUDModel.findById(query.id)
      res.status(200)
        .json({ data: item })
      break

    // Update one
    case 'PATCH':
      if (!userId) {
        res.status(401)
          .json({ error: { message: 'you need to authenticate before' } })
        return
      }
      const doc = await TemplateCRUDModel.findOneAndUpdate({_id: data._id}, data).lean()
      res.status(200)
        .json({ data: doc })
      break

    // Delete one
    case 'DELETE':
      if (!userId) {
        res.status(200)
          .json({ error: { message: 'you need to authenticate before' } })
        return
      }
      await TemplateCRUDModel.deleteOne({_id: query.id})
      res.status(204)
      break
    default:
      res.status(501) // Not Implemented
  }
}
