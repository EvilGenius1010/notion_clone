//store latest saved change.

import { create } from "zustand";
import { ContentStruct } from "@/types/zustandtypes";



type OldContentType = {
  content: ContentStruct[],
  addLatestContent: (changes: ContentStruct[]) => void
}


const useOldContent = create<OldContentType>((set) => ({
  content: [],
  addLatestContent: (changes) => {
    set((state) => ({

      // content: state.content.length === 0 ? [...changes] : ["adwe"]
      content: changes

    }));
  },
}));
export default useOldContent
