

export function CreateMetadata(htmlContent: string) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html')
  // const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_ELEMENT);
  // console.log(walker.firstChild())
  // return walker
  console.log(doc)
  const blocks = [];
  const walker = document.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);

  let currentBlock = [];
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (node.nodeType === Node.TEXT_NODE) {
      currentBlock.push(node.textContent);
    } else if (node.nodeName === 'P' || node.nodeName.startsWith('H')) {
      if (currentBlock.length > 0) {
        blocks.push(currentBlock.join('\n'));
        currentBlock = [];
      }
    }
  }

  // Handle the last block if it's not empty
  if (currentBlock.length > 0) {
    blocks.push(currentBlock.join('\n'));
  }
  console.log(blocks)
  return blocks;
}


import DiffMatchPatch from 'diff-match-patch';

export function getDiff(initialText: string, modifiedText: string) {
  const diffExp = new DiffMatchPatch();
  const difference = diffExp.diff_main(initialText, modifiedText)
  return difference
}
