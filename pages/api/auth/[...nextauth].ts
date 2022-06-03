import NextAuth from 'next-auth'
import GithubProvider from 'next-auth/providers/github'

// For more information on each option (and a full list of options) go to
// https://next-auth.js.org/configuration/options
export default NextAuth({
  // https://next-auth.js.org/configuration/providers/oauth
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
