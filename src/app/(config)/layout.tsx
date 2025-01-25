'use client'
// import { useSession } from "next-auth/react";
// import { redirect } from "next/navigation";

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
  return (<div >{children}</div>) //delete this when prod ready
}
