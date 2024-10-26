import prisma from "@/db"
import axios from "axios"
//check existence of user.
export default async function checkAndFetchPageContent(email: string) {
  // const checkUserExistence = await prisma.user.findUnique({
  //   where: {
  //     email: email
  //   }
  // })

  const checkUserExistence = await axios.post("/api/checkandadd", {
    email: email
  })

}
