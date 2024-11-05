// import { NextResponse, NextRequest } from "next/server"
//
// export function GET(req: NextRequest, args: any) {
//   return NextResponse.json({
//     message: "Niggas!",
//     params: args.params.authRoutes[0]
//     // how does the args work? ie is there some generic which says first arg passed in this context is gonna be url type?
//
//   })
// }


import NextAuth from "next-auth"
import { getServerSession } from "next-auth/next"
import GoogleProvider from "next-auth/providers/google";
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID || "",
      clientSecret: process.env.GOOGLE_CLIENTSECRET || "",
    })
  ],
  callbacks: {
    // async redirect({ url, baseUrl }) {
    //   // Allows relative callback URLs
    //   if (url.startsWith("/")) return `${baseUrl}${url}`
    //   return baseUrl
    // }
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.accessToken = token?.accessToken
      session.user.id = token?.id

      return session
    }
  }
})

export { handler as GET, handler as POST }
