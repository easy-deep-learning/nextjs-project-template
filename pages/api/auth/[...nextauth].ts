import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local')
}
const client = new MongoClient(process.env.MONGODB_URI)
const clientPromise = client.connect()

export default NextAuth({
  // @see https://next-auth.js.org/adapters/mongodb
  adapter: MongoDBAdapter(clientPromise),

  // @see https://next-auth.js.org/configuration/providers/oauth
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),

  ],
  theme: {
    colorScheme: 'light',
  },
  callbacks: {
    async jwt ({ token }) {
      token.userRole = 'admin'
      return token
    },
  },
})
