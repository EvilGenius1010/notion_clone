import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
  console.log("Middleware execution started");

  const protectedPath = "/api/protected/fetchdata";

  if (req.nextUrl.pathname === protectedPath) {
    console.log("Accessing protected route");

    const authorizationHeader = req.headers.get("authorization");
    console.log("Authorization Header:", authorizationHeader);

    const token = await getToken({ req });
    if (!token) {
      console.log("Unauthorized access. Token missing or invalid.");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    console.log("Authenticated user:", token);
    return NextResponse.next();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/protected/:path*"],
};
