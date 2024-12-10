"use client";

import { useState, useEffect } from "react";
import { CreateMetadata, getDiff } from "@/lib/datautils";
import { BreadcrumbDemo } from "@/components/editor/LongBreadcrumb";


import useModifiedContent from "@/store/modifiedPageContent"
import uniqid from 'uniqid';
import { blockMetadata } from "@/types/zustandtypes"


export function Home() {
  const [pageTitles, setPageTitles] = useState<string | null>(null);
  const [editorContent, setEditorContent] = useState<string>(""); // State for editor content
  
  useEffect(() => {
    if (editorContent) {
      // Call CreateMetadata with the updated content
      CreateMetadata(editorContent);
      console.log(editorContent)
    }
  }, [editorContent]); // Effect depends on editorContent

  return (
    <>
      <BreadcrumbDemo />
    </>
  );
}

//Node extension code.
import { mergeAttributes, Node } from '@tiptap/core'
import { NodeViewWrapper, ReactNodeViewRenderer } from '@tiptap/react'

function NewPage(){
  return(
    <>
    <NodeViewWrapper>
    <a href='https://www.google.com'>
      {/* <svg href="https://img.icons8.com/ios/250/FFFFFF/design.png"></svg> */}
    Testing</a>
    </NodeViewWrapper>
    </>
  )
}

export const newPageNode =  Node.create({
  // configuration …
  name:'NewPageBlock',
  group:'block',
  atom:false,
  parseHTML() {
    return [
      {
        tag: 'NewPageBlock',
      },
    ]
  },

  renderHTML({ HTMLAttributes }) {
    return ['NewPageBlock', mergeAttributes(HTMLAttributes)]
  },


  addNodeView() {
    return ReactNodeViewRenderer(NewPage)
  },
})

//Hotkeys

// import { HotKeys } from "react-hotkeys";

// const keyMap = {
  
// }





import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import useOldContent from "@/store/oldPageContent";
import { computePolynomialHash } from "@/lib/encryptionutil";
import { compareChanges } from "@/lib/utils";
import { useShortcutSpecifier } from "@/store/shortcut";
import ShortcutMenu, { menuItems, MenuItemType } from "./ShortcutMenu";


type tiptapProps={
  onUpdate:()=>void
}

const TiptapEditor = (props:tiptapProps) => {
  const [filteredItems, setFilteredItems] = useState<MenuItemType[]|[]>([]);
  const [timeoutExists, setTimeoutExists] = useState(null)
  const editor = useEditor({
    extensions: [StarterKit,newPageNode],
    content: '<p>Hello World! 🌎️ </p> <NewPageBlock></NewPageBlock><p></p>',
    onUpdate: ({ editor }) => {
      function handleKeyDown(event:KeyboardEvent){
        if(event.key=="/"){
          console.log("The '/' key was pressed!");
        }
      }
      const editorElement = editor.view.dom as HTMLElement;

      // Add the keydown listener only if not already added
      if (!editorElement.dataset.keyListenerAttached) {
        editorElement.addEventListener("keydown", handleKeyDown);
        editorElement.dataset.keyListenerAttached = "true"; // Mark it as attached
      }

      const html = editor.getHTML();
      if (timeoutExists) {
        clearTimeout(timeoutExists);
      }
      //@ts-ignore
      setTimeoutExists(setTimeout(() => {
        // console.log(html)
        //calling in below function breaks rules of hooks.
        // ProcessUserContentChanges(html)
        props.onUpdate()
        // handleContentChanges(html)
        // compareChanges(readOldContent,readLatestSave)

        setTimeoutExists(null);
      }, 2000))

    },
    immediatelyRender: false
  });

  const savelatestSavedContent = useModifiedContent((state) => state.setModifiedContent)
  const readLatestSave = useModifiedContent.getState().modifiedContent;
  const readOldContent = useOldContent.getState().content;
  const saveOldContent = useOldContent((state)=>state.addLatestContent)
  const shortcutOptions = useShortcutSpecifier.getState().whichShortcut
  const modifyShortcutOptions = useShortcutSpecifier((state)=>state.modifyShortcutSpecifier)
  const toggleShortcutMenuVisibility = useShortcutSpecifier(state=>state.toggleShortcutMenuVisibility)
  const ShortcutMenuVisibility = useShortcutSpecifier.getState().menuVisibility

  function handleContentChanges(html:string){

    const blocks = CreateMetadata(html)
    let metadata_final:blockMetadata[]=[];
    const starttime = performance.now()
    blocks.forEach((item)=>{
      metadata_final.push({
        uid:computePolynomialHash(item).toString(),
        content:item
      })
    })
    const timetaken = performance.now()-starttime
    console.log(metadata_final,timetaken)
    //save to modifiedPageContent first?
  
  
  
    
    savelatestSavedContent([{title:"First one",PageSlices:metadata_final}])
    
    //instead of 0th index, acc to url,find the title and use index of that.
    const{added, removed, modified}=compareChanges(readLatestSave,readOldContent)
    console.log(readLatestSave)

    console.log(added,removed,modified)




    
    // const differenceVar = getDiff(readOldContent,readLatestSave)
    // const differenceVar = 
  }

  // useEffect(() => {
  //   if (!editor) return;

  //   // Define the keydown handler
  //   const handleKeyDown = (event: KeyboardEvent) => {
  //     if (event.key === "/") {
  //       console.log("The '/' key was pressed!");
  //       toggleShortcutMenuVisibility()
  //     }
  //   };

  //   // Attach the listener to the editor's DOM element
  //   const editorElement = editor.view.dom as HTMLElement;
  //   editorElement.addEventListener("keydown", handleKeyDown);

  //   // Cleanup function to remove the listener when the component unmounts
  //   return () => {
  //     editorElement.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, [editor]);

  useEffect(()=>{
    if(!ShortcutMenuVisibility)return;

    const handleKeyDown = (event:KeyboardEvent)=>{
      if(event.key==="Escape"){
        toggleShortcutMenuVisibility(false)
      }else if (event.key === "Enter") {
        event.preventDefault();
        toggleShortcutMenuVisibility(false)
      }else if (event.key === " " || event.key === "ArrowDown" || event.key === "ArrowUp") {
        // Optional: Add navigation logic here
      } else if (event.key.length === 1) {
        modifyShortcutOptions(shortcutOptions+event.key)
      }else if(event.key ==="Backspace"){
        // modifyShortcutOptions(shortcutOptions-shortcutOptions[shortcutOptions.length-1])
        modifyShortcutOptions(shortcutOptions.substring(0,shortcutOptions.length-2))
        console.log(shortcutOptions)
      }
    }
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };

  },[ShortcutMenuVisibility])

  useEffect(()=>{
    if(shortcutOptions!=""){
      setFilteredItems(
        menuItems.filter((item) =>
          item.label.toLowerCase().includes(shortcutOptions.toLowerCase())
        )
      );
    }else {
      setFilteredItems(menuItems); // Show all if no query
    }
  },[shortcutOptions])

  const handleSlashKey = () => {
    toggleShortcutMenuVisibility(true);
    modifyShortcutOptions(""); // Reset query each time
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "/") {
        event.preventDefault();
        handleSlashKey(); // Activate menu on slash
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);



  return (<>
     <div className="relative">
  <EditorContent editor={editor} />
  {ShortcutMenuVisibility && (
        <div className="absolute top-12 left-12">
          <ShortcutMenu filteredItems={filteredItems} />
        </div>
      )}
     </div>
  </>
  );
};

export default TiptapEditor;
