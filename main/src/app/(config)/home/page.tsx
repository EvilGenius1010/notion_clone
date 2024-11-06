"use client";

import TipTapEditor from "@/components/editor/MainEditor"
import { Button } from "@/components/ui/button";
import useModifiedContent from "@/store/modifiedPageContent";
import { useEffect } from "react";
import { generateAESKey } from "@/lib/encryptionutil";
import useStoreA from "@/store/modifiedPageContent";



export default function Home() {
  // const { content, inc } = useModifiedContent()
  // useEffect(() => {
  //   async () => {
  //     console.log("dansk")
  //     const secretKey = await generateAESKey()
  //     console.log(secretKey)
  //   }
  // }, [])

  // const increment = useStoreA((state) => state.increment);
  // const abc = useStoreA(state => state.count)
  return (
    <>
      <TipTapEditor />
    </>
  )
}


