"use client"
import Tiptap from "@/components/editor/MainEditor"
import { useState } from "react"
import usePageDataFetch from "@/hooks/usePageDataFetch"
import CurrentPath from "@/components/editor/ShortBreadcrumb"
import { BreadcrumbDemo } from "@/components/editor/LongBreadcrumb"
import useCreateNewSharedWorker from "@/hooks/useCreateSharedWebWorker"

export default function Home() {
  const [PageTitles, setPageTitles] = useState<string | null>(null)
  // const retdata = usePageDataFetch("abc")
  useCreateNewSharedWorker()

  return (<>
    {/* {retdata.data.msg.length >= 3 ? <BreadcrumbDemo /> : <CurrentPath />} */}
    <BreadcrumbDemo />
    <Tiptap />
  </>)
}
