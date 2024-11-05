import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { CreateMetadata } from "./datautils"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export function processUserContentChanges(html: string) {
  //logic for debouncing

  const blocks = CreateMetadata(html)

  //store datas as blocks based on <p>tag
  //check which is more efficient ie running diffmatchpatch on smaller blocks or just on one big block
  //check differences in all blocks
  //compress and encrypt blocks which have changed.
}
