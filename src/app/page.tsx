

'use client'

// import { useSession, signIn, signOut } from "next-auth/react"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { useEffect } from "react"
// // import useCreateNewSharedWorker from "@/hooks/useCreateSharedWebWorker"
// import axios from 'axios';
// import useOldContent from "@/store/oldPageContent"

// import { Card } from "@/components/ui/card"
// import { Search, Laptop, Users } from "lucide-react"
// import { cn } from "@/lib/utils";
// import { FocusCards } from "@/components/ui/focus-cards"


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

/*
const cardComponents=[
  {title:"Lets see",src:"https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",content:`dslkdnfsldkklsdnfad
    ADASDASD
    da
    
    a`,GIFsrc:"/Users/harshavardhankolhatkar04/Desktop/Projects/Cohort/0-1/notion_clone/main/public/house.gif"},
  {title:"Man",src:"https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",content:"sad;'ss';dla';sdl;'as",GIFsrc:"/@/../public/house.gif"},
  
]

export function Component() {
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
          <Link className="text-sm tracking-wide text-[#00264d] hover:text-[#00689e] transition-colors" href="/home" >
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
                <div className="text-4xl md:text-6xl font-serif tracking-tight text-[#00264d]">
                  Where thoughts flow
                  <br />
                  like ink on paper
                </div>
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
              <FocusCards cards={cardComponents}/>
        <section className="w-full py-12 md:py-24 relative">
          <div className="container px-4 md:px-6 relative">
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card1 />
              <Card2 />
              <Card3 />
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
    </div >
  )
}


export function Card1() {
  return (
    <>
      <div className="max-w-xs w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-white/80 bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
        >
          <div className="text  z-50">
            <Search className="text-[#00689e]"></Search>
            <div className="font-bold text-xl md:text-3xl text-black relative">
              Powerful Search
            </div>
            <p className="font-normal text-base text-[#004777] relative my-4">
              Quickly find specific information within your notes using advanced search capabilities.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export function Card2() {
  return (
    <>
      <div className="max-w-xs w-full">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
        >
          <div className="text  z-50">
            <Laptop></Laptop>
            <div className="font-bold text-xl md:text-3xl text-gray-50 relative">
              Cross-Platform Compatibility
            </div>
            <p className="font-normal text-base text-gray-50 relative my-4">
              Access your notes from any device, anytime, anywhere.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export function Card3() {
  return (
    <>
      <div className="max-w-xs w-full rounded-xl">
        <div
          className={cn(
            "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4 border border-transparent dark:border-neutral-800",
            "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
            // Preload hover image by setting it in a pseudo-element
            "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
            "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
            "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
            "transition-all duration-500"
          )}
        >
          <div className="text  z-50">
            <Users></Users>
            <div className="font-bold text-xl md:text-3xl text-gray-50 relative">
              Real-time Collaboration
            </div>
            <p className="font-normal text-base text-gray-50 relative my-4">
              Work seamlessly with your team, editing documents simultaneously.
            </p>
          </div>
        </div>
      </div>

    </>
  )
}
*/




// export default function FinalComponent(){
//   return(
//     <>
//  <div className="flex flex-col min-h-screen bg-gradient-to-b from-[#bce7fd] to-white">
//   <div className="flex flex-row">
// <div>
//   {/* <div className="text-6xl my-8 w-auto ">Superfast Collaboration<br/> Reimagined.</div> */}
//   <TypingEffect />
//   <div className="text-3xl">Brainstorm ideas with your team <br/>for free.</div>
// </div>

//   </div>

//   {/* <HoveredCards cardContent={{heading:"das",content:"dasd"}}/> */}
//   </div>   
//     </>
    
//   )
// }

// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"


// function TypingEffect(){
// const words = [
//   {text:"Superfast"},
//   {text:"Collaboration"},
//   {text:"Reimagined."},
// ]
// return(<>
// <TypewriterEffectSmooth words={words} className=""/>
// </>)
// }

// type cardText ={
//   heading:string,
//   content:string,
//   customStyles:string
// }

// function HoveredCards({cardContent}:{cardContent:cardText}){

//   return(
//     <>
//     <div className={`${cardContent.customStyles}`}>
      
//     dasdas
//     </div>
//     </>
//   )

// }
import Image from "next/image"
import Link from "next/link"
export default function FinalComponent(){
  return (

<>
<div className="flex flex-col pt-4">
    <nav className="flex flex-row justify-between">
      <div className="flex flex-row sm:ml-16 ml-0 ">
    <Image src={"/dark_logo.png"} alt="Journal" width={59} height={59} sizes="(max-width:768px) 30px 30px"/>
    <span className="py-4 text-2xl">caderno</span>
      </div>
    <div className="flex flex-row sm:mr-16 sm:space-x-5 space-x-4 pt-4">
      <Link href="/fc">
    <button>Get Started</button>
      </Link>
      <Link href="/fc">
    <button>Sign In</button>
      </Link>
    </div>
    </nav>
    <Image src={"/Elip2.png"} alt="animation 1" height={766} width={766}/>
    <Image src={"/Elip1.png"} alt="animation 2" height={766} width={318}/>
    <div className="flex max-w-fit ml-auto mr-auto pt-16 text-6xl pb-2">
      Superfast Collaboration
    </div>
    <div className="flex max-w-fit ml-auto mr-auto text-6xl pt-2">
Reimagined.
    </div>
    <div className="flex max-w-fit ml-auto mr-auto text-3xl mt-4">Brainstorm ideas with your</div>
    <div className="flex max-w-fit ml-auto mr-auto text-3xl mt-4">team for free, instantly.</div>


<div className="flex max-w-fit ml-auto mr-auto pt-16">
<Image src={"/MacPro.png"} alt="Macbook Pro" width={800} height={529} sizes="(max-width:768px) 300px 176px,800px 470px"  />
</div>

<div className="flex flex-row justify-around">
  <div className="text-4xl flex flex-col mt-32">
  <div className="">Collaborate effortlessly,</div>
  <div className="flex max-w-fit mr-auto ml-auto">anywhere.</div>
  </div>
  <Image src={"/Rect1.png"} alt={"video1"} width={500} height={318}/>

</div>

<div className="flex flex-row justify-around">
  <Image src={"/Rect2.png"} alt={"video1"} width={500} height={318}/>
  <div className="text-4xl flex flex-col mt-32">
  <div className="">Internet is no</div>
  <div className="flex max-w-fit mr-auto ml-auto">problem.</div>
  </div>

</div>

</div>

</>


  )

}