//store latest saved change.

import { create } from "zustand";

type OldContentType = {
  content: string,
  addLatestContent: (changes: string) => void
}


const useOldContent = create<OldContentType>((set) => ({
  content: "",
  addLatestContent: (changes => set((state: OldContentType) => ({ content: state.content + changes })
  ))

}))

export default useOldContent
