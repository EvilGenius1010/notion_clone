//used for storing state of modified content of a page. 


import { create } from "zustand"
interface StoreState {
  content: string;
  inc: () => void;
}
export default function useModifiedContent() {
  create<StoreState>()((set) => ({
    content: "",
    inc: (textToAdd: string) => set(state => ({ content: state.content + textToAdd }))
  }));

}
//
// const modifiedContent = create((set) => {
//   content: "", //name of var and its content
//     inc: (textToAdd) => set((state) => ({ content: state.content + textToAdd }))
//
// })
//


