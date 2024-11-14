

'use client'
import { useSession, signIn, signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect } from "react"
// import useCreateNewSharedWorker from "@/hooks/useCreateSharedWebWorker"
import axios from 'axios';
import useOldContent from "@/store/oldPageContent"

import { Card } from "@/components/ui/card"
import { Search, Laptop, Users } from "lucide-react"


// export default function Component() {
//   // const abc = useCreateNewSharedWorker()
//   // console.log(abc)
//
//   const { data: session } = useSession()
//   useEffect(() => {
//
//     const fetchData = async () => {
//       try {
//         console.log(session.accessToken)
//         const response = await axios.post('/api/protected/checkandadd',
//           { username: "Harshavardhan", email: "dasn@gmail.com" }, {
//           headers: {
//             Authorization: `Bearer ${session.accessToken}`,
//           },
//         });
//
//         const data = response.data;
//         console.log(data)
//         // Use the fetched data
//         initSqlWasm()
//       } catch (error) {
//         console.error('Error fetching data:', error);
//         // Handle the error, e.g., display an error message to the user
//       }
//     };
//   }, [])
//   if (session && session.user) {
//     // const checkForUserData = await axios.post('/api/')
//     useEffect(() => {
//       (async () => {
//         const retrieveLatestSave = await axios.post("/api/protected/checkandadd")
//         const abc = retrieveLatestSave.data
//         useOldContent(state => state.addLatestContent(abc))
//       })
//     }, [])
//     return (
//       <>
//         {session.accessToken}
//         Signed in as {session.user.email || "undefined"} <br />
//         <Button onClick={() => signOut()}>Sign out</Button>
//         <Button ><Link href="/home"> Go</Link></Button>
//       </>
//     )
//
//   }
//   return (
//     <>
//       Not signed in <br />
//       <Button onClick={() => signIn()}>Sign in</Button>
//       <Button ><Link href="/home"> Go</Link></Button>
//     </>
//   )
// }

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#bce7fd] to-white">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b border-blue-100">
        <Link className="flex items-center justify-center" href="#">
          <div className="h-8 w-8 bg-[#00689e] rounded-sm flex items-center justify-center rotate-12">
            <span className="text-white font-serif text-lg">墨</span>
          </div>
          <span className="ml-2 text-lg font-medium tracking-wide text-[#00264d]">Sumire</span>
        </Link>
        <nav className="ml-auto flex gap-6">
          <Link className="text-sm tracking-wide text-[#00264d] hover:text-[#00689e] transition-colors" href="#">
            Collaborate
          </Link>
          <Link className="text-sm tracking-wide text-[#00264d] hover:text-[#00689e] transition-colors" href="/login" >
            Login
          </Link>
        </nav>
      </header>     <main className="flex-1">
        <section className="w-full min-h-[80vh] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-11-12%20at%207.54.53%20PM-moNtBPTJV1wRzCSUSFvJmSir1A8CfY.png')] bg-cover bg-center opacity-30" />
          <div className="container px-4 md:px-6 relative">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-8">
              <div className="space-y-6">
                <div className="h-12 w-12 bg-[#00689e] rounded-sm mx-auto rotate-12">
                  <span className="text-white font-serif text-2xl leading-loose">藝</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-serif tracking-tight text-[#00264d]">
                  Where thoughts flow
                  <br />
                  like ink on paper
                </h1>
                <p className="max-w-[600px] text-[#004777] md:text-xl mx-auto leading-relaxed">
                  A note-taking experience inspired by the art of Sumi-e, bringing the grace and fluidity of Japanese
                  calligraphy to your digital canvas.
                </p>
              </div>
              <Button className="bg-[#00689e] hover:bg-[#004777] text-white rounded-none px-8 py-6 text-lg">
                Begin Your Journey
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 relative">
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <Search className="h-8 w-8 mb-4 text-[#00689e]" />
                <h3 className="text-xl font-serif mb-2 text-black">Powerful Search</h3>
                <p className="text-[#004777]">
                  Quickly find specific information within your notes using advanced search capabilities.
                </p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <Laptop className="h-8 w-8 mb-4 text-[#00689e]" />
                <h3 className="text-xl font-serif mb-2 text-black">Cross-Platform Compatibility</h3>
                <p className="text-[#004777]">
                  Access your notes from any device, anytime, anywhere.
                </p>
              </Card>
              <Card className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <Users className="h-8 w-8 mb-4 text-[#00689e]" />
                <h3 className="text-xl font-serif mb-2 text-black">Real-time Collaboration</h3>
                <p className="text-[#004777]">
                  Work seamlessly with your team, editing documents simultaneously.
                </p>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full py-6 border-t border-blue-100 bg-white/80">
        <div className="container px-4 md:px-6">
          <div className="flex justify-center gap-4 text-sm">
            <Link className="text-[#004777] hover:text-[#00689e] transition-colors" href="#">
              About Us
            </Link>
            <Link className="text-[#004777] hover:text-[#00689e] transition-colors" href="#">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
