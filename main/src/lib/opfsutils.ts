export function readFromOPFS(){

}

export async function createOPFSFiles(fileName:string,fileContent:string){
    const opfsroot = await navigator.storage.getDirectory()
    const fileHandle = await opfsroot.getFileHandle(fileName, {
        create: true,
      });
    const syncAccessHandle = await fileHandle.createSyncAccessHandle();
    const size = syncAccessHandle.getSize()
    syncAccessHandle.write(fileContent,{at:size})
}