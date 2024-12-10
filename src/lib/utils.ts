
//Do not touch.
import { ContentStruct } from "@/types/zustandtypes"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
//Do not touch.

// import { getDiff } from "./datautils"
// import useOldContent from "@/store/oldPageContent"
// import { CreateMetadata } from "./datautils"
// import useModifiedContent from "@/store/modifiedPageContent"
// import uniqid from 'uniqid';
import { blockMetadata } from "@/types/zustandtypes"

//Do not touch this function.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
//Do not touch.



// export default function ProcessUserContentChanges(html: string) {
//   //logic for debouncing


 
//   // blocks.forEach((item, ind) => {
//   //   const differences = getDiff(latestSavedContent[ind], item)
//   //   console.log("output of diff is", differences)
//   // })
//   //store datas as blocks based on <p>tag
//   //check which is more efficient ie running diffmatchpatch on smaller blocks or just on one big block
//   //check differences in all blocks
//   //compress and encrypt blocks which have changed.
// }

//ContentStruct here as process changes only for single page at a time.
export function compareChanges(latestChanges:ContentStruct,oldChanges:ContentStruct): {
  added: blockMetadata[];
  removed: blockMetadata[];
  modified: blockMetadata[];
} {
  // Create a map for quick lookup by uid for both sets of PageSlices
  console.log(latestChanges,oldChanges)
  const oldMap = new Map<string, blockMetadata>(
    oldChanges.PageSlices.map((block) => [block.uid, block])
  );
  const latestMap = new Map<string, blockMetadata>(
    latestChanges.PageSlices.map((block) => [block.uid, block])
  );

  const added: blockMetadata[] = [];
  const removed: blockMetadata[] = [];
  const modified: blockMetadata[] = [];

  // Find added and modified blocks
  for (const latestBlock of latestChanges.PageSlices) {
    const oldBlock = oldMap.get(latestBlock.uid);
    if (!oldBlock) {
      // Block is new
      added.push(latestBlock);
    } else if (oldBlock.content !== latestBlock.content) {
      // Block exists but content has changed
      modified.push(latestBlock);
    }
  }

  // Find removed blocks
  for (const oldBlock of oldChanges.PageSlices) {
    if (!latestMap.has(oldBlock.uid)) {
      removed.push(oldBlock);
    }
  }

  return { added, removed, modified };
}