import { create } from "zustand";

//logic which states that if focus removed, then remove data inside this.

type shortcutUtils ={
    whichShortcut:string,
    modifyShortcutSpecifier:(changes:string)=>void,
    menuVisibility:boolean,
    toggleShortcutMenuVisibility:(isVisible:boolean)=>void,
}


export const useShortcutSpecifier = create<shortcutUtils>((set)=>({
whichShortcut:"",
modifyShortcutSpecifier:(changes=>{
    set(()=>({
        whichShortcut:changes
    }))
}),
menuVisibility:false,
toggleShortcutMenuVisibility:((isVisible)=>{
    set(()=>({
        // menuVisibility:!useShortcutSpecifier.getState().menuVisibility
        menuVisibility:isVisible
    }))
})
}))