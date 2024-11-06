

export function CreateMetadata(htmlContent: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html')
  // const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
  // console.log(walker.firstChild())
  // return walker
  const desiredBlocks = []; //var to store nodes which meet the criteria.
  //creates a structure of document trees
  const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);

  let currentBlock = [];
  while (walker.nextNode()) { //run loop until nextNode exists ie till last node.
    const node = walker.currentNode;
    if (node.nodeType === Node.TEXT_NODE) { //all selected nodes will be textnodes ryt? 
      currentBlock.push(node.textContent);
      // console.log(node)
    } else if (node.nodeName === 'P' || node.nodeName.startsWith('H')) {
      if (currentBlock.length >= 0) {
        desiredBlocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
    }
  }

  // Handle the last block if it's not empty
  if (currentBlock.length > 0) {
    desiredBlocks.push(currentBlock.join('\n'));
  }
  // console.log(desiredBlocks)
  return desiredBlocks;
}


import DiffMatchPatch from 'diff-match-patch';

export function getDiff(initialText: string, modifiedText: string) {
  const diffExp = new DiffMatchPatch();
  const difference = diffExp.diff_main(initialText, modifiedText)
  return difference
}
