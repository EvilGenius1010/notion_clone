"use client";

import { useState, useEffect } from "react";
import { CreateMetadata, getDiff } from "@/lib/datautils";
import { BreadcrumbDemo } from "@/components/editor/LongBreadcrumb";

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
import { generateAESKey } from "@/lib/encryptionutil";
import processUserContentChanges from "@/lib/utils";

const TiptapEditor = () => {
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
        processUserContentChanges(html)
        const differenceVar = getDiff("<p>Hello World! 🌎️daad</p>", html)
        setTimeoutExists(null);
      }, 2000))

    },
    immediatelyRender: false
  });

  return (<EditorContent editor={editor} />);
};

export default TiptapEditor;
