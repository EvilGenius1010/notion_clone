"use client";

import TipTapEditor from "@/components/editor/MainEditor"
import { Button } from "@/components/ui/button";
import useModifiedContent from "@/store/modifiedPageContent";
import { useEffect } from "react";
import useOldContent from "@/store/oldPageContent";
import useFetchPageContent from "@/hooks/useFetchOldData";

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

  const latestSave = useOldContent(state => state.addLatestContent)
  const abc = useOldContent(state => state.content)
  useEffect(() => {
    (async () => {
      const getData = await useFetchPageContent("hkop@gmadsil.com", "dajio92")
      // console.log("fsakdnask", getData?.msg[0]?.title)

      if (getData?.msg?.length > 0) {
        const contentStruct = getData.msg.map((item: any) => ({
          title: item.title,
          PageSlices: item.PageSlices.map((slice: any) => ({
            order: slice.order,
            content: slice.content
          }))
        }));

        // latestSave(contentStruct); // Pass array of ContentStruct to latestSave
      }


      // console.log("eqnoqwoeq")
      // console.log("dasskndal", abc)

      // console.log("daksjdbs", abc)
    })()
  }, [])


  return (
    <>
      <TipTapEditor />
    </>
  )
}


