import { NextRequest } from "next/server";
import { getServerSession } from "next-auth/next"

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname == config.signedinroutes) {
    // const session = getServerSession({ req, secret: process.env.NEXTAUTH_SECRET })


  }
}

const config = {
  signedinroutes: "/protected/:path"
}
