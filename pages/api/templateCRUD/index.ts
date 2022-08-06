// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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

  const data = req.body || {}
  const session = await SessionModel.findOne({ sessionToken }).lean()
  const userId = session?.userId

  switch (req.method) {
    // Create
    case 'POST':
      if (!userId) {
        res.status(401)
          .json({ error: { message: 'you need to authenticate before' } })
        return
      }

      data.authorId = userId
      const newDoc = await TemplateCRUDModel.create(data)

      res.status(200)
        .json({ data: newDoc })
      break

    // Read all
    case 'GET':
      // TODO: Can we use a Stream here?
      // TODO: support limit and skip
      const itemsList = await TemplateCRUDModel.find()
      res.status(200)
        .json({ data: itemsList })
      break
  }
}
