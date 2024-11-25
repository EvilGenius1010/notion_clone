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



import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import useOldContent from "@/store/oldPageContent";
import { computePolynomialHash } from "@/lib/encryptionutil";

type tiptapProps={
  onUpdate:()=>void
}

const TiptapEditor = (props:tiptapProps) => {
  const [timeoutExists, setTimeoutExists] = useState(null)
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello World! 🌎️</p>',
    onUpdate: ({ editor }) => {
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
        handleContentChanges(html)

        setTimeoutExists(null);
      }, 2000))

    },
    immediatelyRender: false
  });

  const savelatestSavedContent = useModifiedContent((state) => state.setModifiedContent)
  const readLatestSave = useModifiedContent(state=>state.modifiedContent)
  const readOldContent = useOldContent(state=>state.content)
  const saveOldContent = useOldContent((state)=>state.addLatestContent)


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
    console.log(readLatestSave)




    
    // const differenceVar = getDiff(readOldContent,readLatestSave)
    // const differenceVar = 
  }

  return (<EditorContent editor={editor} />);
};

export default TiptapEditor;
