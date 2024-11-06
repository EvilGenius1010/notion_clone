//used for storing state of modified content of a page. 

//
// import { create } from "zustand"
// interface StoreState {
//   content: string;
//   inc: () => void;
// }
// export default function useModifiedContent() {
//   create<StoreState>()((set) => ({
//     content: "",
//     inc: (textToAdd: string) => set(state => ({ content: state.content + textToAdd }))
//   }));
//
// }
// //
// // const modifiedContent = create((set) => {
// //   content: "", //name of var and its content
// //     inc: (textToAdd) => set((state) => ({ content: state.content + textToAdd }))
// //
// // })
// //

import { create } from "zustand";

// We can use interface here as well
type StateType = {
  modifiedContent: string;     // the variable that we'll change using increment and decrement functions
  setModContent: (someText: string) => void;
  // both increment and decrement are anonymous functions that have void return type.
}

const useModifiedContent = create<StateType>((set) => ({
  // state variables
  modifiedContent: "",
  setModContent: (someText) =>
    set((state: StateType) => ({
      modifiedContent: state.modifiedContent + someText
    })),

}))
export default useModifiedContent;
