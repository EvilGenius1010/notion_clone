import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/db"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


type MutateRemoteDataReqParams = {
  title:string,
  content:string|null,
  userOwner:string
}

type RemoveRemoteDataReqParams = {
  userOwner:string,
}

type CreateRemoteDataReqParams = {
  userOwner:string,
}

type SaveDataRouteBody = {
  dataToUpdate:Readonly<MutateRemoteDataReqParams[]>,
  dataToDelete:Readonly<RemoveRemoteDataReqParams[]>,
  dataToCreate:Readonly<CreateRemoteDataReqParams[]>

}

export async function POST(req: NextRequest) {
  const parsedbody = await req.json() as SaveDataRouteBody;
  // const data = await prisma.pages.createMany({
  //   data: [
  //     { title: parsedbody?.title, content: parsedbody?.content, userOwner: parsedbody?.owner },
  //   ]
  // })
  // return NextResponse.json({ msg: data.data }, { status: 200 })

  // const remotePageDataUpdateQuery = await prisma.pages.create({
  //   data:[
  //     {
  //      PageSlices 
  //     }
  //   ]
  // })

  // const remotePageDeleteQuery = await prisma.

  const [remotePageDataUpdateQuery,remotePageDataDeleteQuery] = await prisma.$transaction([
    prisma.pages.updateMany({
      data:[
        {
          
        }
      ]
    }),
    prisma.pages.create({
      
    })
  ])

}

