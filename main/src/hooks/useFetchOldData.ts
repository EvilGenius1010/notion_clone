import axios from "axios"
//check existence of user.
export default async function useFetchPageContent(email: string, username: string) {
  // const checkUserExistence = await prisma.user.findUnique({
  //   where: {
  //     email: email
  //   }
  // })
  console.log("daslmlml")
  const checkUserExistence = await axios.post("/api/protected/fetchdata", {
    email: email,
    username: username
  })
  console.log(checkUserExistence.data)
  return checkUserExistence.data
}
