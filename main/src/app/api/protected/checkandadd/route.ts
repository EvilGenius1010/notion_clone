import { NextRequest, NextResponse } from "next/server";
import prisma from "@/db"
import { getServerSession } from "next-auth";

//@ts-ignore
export async function POST(req,) {
  try {
    const session = await getServerSession(req)
    const body = await req?.json();
    //if something returned from this, it means another pair exists with given username or email.
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          {
            username: body.username,
            email: {
              not: body.email,
            },
          },
          {
            email: body.email,
            username: {
              not: body.username,
            },
          },
        ],
      },
    });
    console.log(existingUser)
    if (existingUser != null) {//add logic to check which of uname or email is used.
      return NextResponse.json({ msg: "Username or email already exists." })
    }
    else {
      //guaranteed here that no duplicate exists.
      const data = await prisma.pages.findMany({
        where: {
          userOwner: body.username
        }
      })

      if (data == null) { //no user data exists.
        // create user data in db
        const data = await prisma.user.create({
          data: {
            username: body?.username, email: body?.email
          }
        })
        //create template pages
        const createPages = await prisma.pages.create({
          data: {
            title: "Hello World!",
            userOwner: data.username,
            content: "Welcome to your first page. Start here."
          }
        })

        console.log(createPages)
        //return those pages

        const fetchPages = await prisma.pages.findMany({
          where: {
            userOwner: body?.username
          }
        })
        console.log(fetchPages)
        return NextResponse.json({ fetchPages })


      }
      else {
        if (session) {
          return NextResponse.json({ data })
        }
        else {
          return NextResponse.json({ msg: "Invalid auth code." })
        }
      }
    }

    // if (session) {
    //
    //
    //
    //
    //   const body = await req?.json();
    //   const checkUserExistence = await prisma.user.findUnique({
    //     where: {
    //       email: body.email,
    //     }
    //   })
    //   console.log(checkUserExistence)
    //   if (checkUserExistence == null) { //when user does not exist in db.
    //     //create user data in db
    //     const data = await prisma.user.create({
    //       data: {
    //         username: body?.username, email: body?.email
    //       }
    //     })
    //     //create template pages
    //     const createPages = await prisma.pages.create({
    //       data: {
    //         title: "Hello World!",
    //         userOwner: data.username,
    //         content: "Welcome to your first page. Start here."
    //       }
    //     })
    //
    //     console.log(createPages)
    //     //return those pages
    //
    //     const fetchPages = await prisma.pages.findMany({
    //       where: {
    //         userOwner: body?.email
    //       }
    //     })
    //     return NextResponse.json({ fetchPages })
    //
    //   }
    //   else if (checkUserExistence.username == body.username) { //if user exists,then check if username is unique.
    //     const data = await prisma.pages.findMany({
    //       where: {
    //         userOwner: body.email
    //       }
    //     })
    //     return NextResponse.json({ data })
    //   }
    //   else {
    //
    //     return NextResponse.json({ error: "Username or email already exists." })
    //
    //   }
    // }
    // else {
    //   return NextResponse.json({ msg: "Yu must be signed in!" })
    // }
    //
  } catch (err) {
    console.log(err)
  }
}
