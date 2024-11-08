// "use client";
// import { signIn, signOut } from "next-auth/react"
// import { Button } from "@/components/ui/button";
// export default function Home() {
//   return <div>
//     <Button onClick={() => signIn()}>Signin</Button>
//     <Button onClick={() => signOut()}>Sign out</Button>
//   </div>
// }

'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
// import useCreateNewSharedWorker from "@/hooks/useCreateSharedWebWorker"
import axios from 'axios';
import useOldContent from "@/store/oldPageContent"




export default function Component() {
  // const abc = useCreateNewSharedWorker()
  // console.log(abc)

  const { data: session } = useSession()
  useEffect(() => {

    const fetchData = async () => {
      try {
        console.log(session.accessToken)
        const response = await axios.post('/api/protected/checkandadd',
          { username: "Harshavardhan", email: "dasn@gmail.com" }, {
          headers: {
            Authorization: `Bearer ${session.accessToken}`,
          },
        });

        const data = response.data;
        console.log(data)
        // Use the fetched data
        initSqlWasm()
      } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error, e.g., display an error message to the user
      }
    };
  }, [])
  if (session && session.user) {
    // const checkForUserData = await axios.post('/api/')
    useEffect(() => {
      (async () => {
        const retrieveLatestSave = await axios.post("/api/protected/checkandadd")
        const abc = retrieveLatestSave.data
        useOldContent(state => state.addLatestContent(abc))
      })
    }, [])
    return (
      <>
        {session.accessToken}
        Signed in as {session.user.email || "undefined"} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
        <Button ><Link href="/home"> Go</Link></Button>
      </>
    )

  }
  return (
    <>
      Not signed in <br />
      <Button onClick={() => signIn()}>Sign in</Button>
      <Button ><Link href="/home"> Go</Link></Button>
    </>
  )
}
