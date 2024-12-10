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


import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";



export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENTID || "",
      clientSecret: process.env.GOOGLE_CLIENTSECRET || "",
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // Store access token and account details in token
        token.accessToken = account.access_token;
        console.log("dasdsad",token)
        // token.email = account?.email; // Make sure the email is stored
        // token.userId = account?.id;
      }
      return token;
    },
    async session({ session, token }) {
      // Pass additional fields from token to session.user
      session.user.accessToken = token.accessToken; // Attach access token
      session.user.email = token.email;            // Ensure email is present
      session.user.userId = token.userId;          // Attach user ID
      return session;
    },
  },
}

export const authHandlers = NextAuth(authOptions);




export { authHandlers as GET, authHandlers as POST };
