//needed?
import prisma from "@/db"

import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const body = await req?.json();
  const getpages = await prisma.pages.findMany({
    where: {
      userOwner: body?.username
    },
    select: {
      title: true,
      PageSlices: {
        select: {
          order: true,
          content: true
        }
      }
    }
  })

  return NextResponse.json({ msg: getpages }, { status: 200 })
}
