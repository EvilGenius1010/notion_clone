"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (session) {
    // Use accessToken from session.user
    const accessToken = session.user.accessToken;

    console.log("Access Token:", accessToken);

    return (
      <>
        Signed in as {session.user.email} <br />
        Access Token is {accessToken} <br/>
        <button onClick={() => signOut()}>Sign out</button>
      </>
    );
  }

  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  );
}
