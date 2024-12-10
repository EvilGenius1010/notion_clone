import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"




export async function POST(req: NextRequest) {
  const parsedbody = await req.json();
  const data = await prisma.pages.createMany({
    data: [
      { title: parsedbody?.title, content: parsedbody?.content, userOwner: parsedbody?.owner },
    ]
  })
  return NextResponse.json({ msg: data.data }, { status: 200 })
}

