import prisma from "@/db"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req?.json();
  const getpages = await prisma.pages.findMany({
    where: {
      userOwner: "abc"
    },
    select: {
      pageid: false,
      title: true,
      content: true,
      userOwner: false
    }
  })

  return NextResponse.json({ msg: getpages }, { status: 200 })
}
