
//Do not touch.
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
//Do not touch.

import { CreateMetadata } from "./datautils"
import { getDiff } from "./datautils"
import useOldContent from "@/store/oldPageContent"
import useModifiedContent from "@/store/modifiedPageContent"


//Do not touch this function.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
//Do not touch.



export default function processUserContentChanges(html: string) {
  //logic for debouncing

  const blocks = CreateMetadata(html)
  console.log(blocks)
  //save to modifiedPageContent first?


  //hook call below is coming up invalid.
  const latestSavedContent = useOldContent((state) => state.content)
  blocks.forEach((item, ind) => {
    const differences = getDiff(latestSavedContent[ind], item)
    console.log("output of diff is", differences)
  })
  //store datas as blocks based on <p>tag
  //check which is more efficient ie running diffmatchpatch on smaller blocks or just on one big block
  //check differences in all blocks
  //compress and encrypt blocks which have changed.
}
