'use client'

import localFont from "next/font/local";

// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

const vindey = localFont({
  src:"../fonts/Wasted-Vindey.ttf",
  weight:"900"
})

export default function ProtectedLayout({ children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const { data: session } = useSession()
  // if (session) {
  //   return children
  // }
  // return redirect('/api/auth/signin')
  //uncomment when prod ready to protect below routes
  return (<div className={`${vindey.className} text-2xl`} >{children}</div>) //delete this when prod ready
}
