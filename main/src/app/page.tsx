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
// import useCreateNewSharedWorker from "@/hooks/useCreateSharedWebWorker"

export default async function Component() {
  // const abc = useCreateNewSharedWorker()
  // console.log(abc)


  const { data: session } = useSession()
  if (session && session.user) {
    // const checkForUserData = await axios.post('/api/')
    return (
      <>
        Signed in as {session.user.email || "undefined"} <br />
        <Button onClick={() => signOut()}>Sign out</Button>
        <Button ><Link href="/a1"> Go</Link></Button>
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
