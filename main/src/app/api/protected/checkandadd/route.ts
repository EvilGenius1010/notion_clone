import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"

export async function POST(req: NextRequest,) {
  const body = await req?.json();

  const checkUserExistence = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })

  if (checkUserExistence == null) {
    const data = await prisma.user.create({
      data: {
        username: body?.username, email: body?.email
      }
    })
    const createPages = await prisma.pages.create({
      data: {
        title: "Hello World!",
        userOwner: body.email,
        content: "Welcome to your first page. Start here."
      }
    })

    const fetchPages = await prisma.pages.findMany({
      where: {
        userOwner: body?.email
      }
    })
    return NextResponse.json({ fetchPages })

  }
  else {
    const data = await prisma.pages.findMany({
      where: {
        userOwner: body.email
      }
    })
    return NextResponse.json({ data })
  }

}
