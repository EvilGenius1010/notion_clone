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
  // callbacks:{
  //
  // }
})

export { handler as GET, handler as POST }
