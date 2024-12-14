function findParentNode(v) {
  // Some logic to find and return the parent node of v
}

function isHighestLevelInSubtree(node, v) {
  if (node === v) {
    return null; // If the current node is the one we're looking for, it's at the highest level
  }
  
  for (let child of node.children) {
    let result = isHighestLevelInSubtree(child, v);
    if (result !== null) {
      return result; // Propagate the result up the call stack
    }
  }
  
  return null; // If the node is not v and none of its children are at the highest level, then it's not at the highest level
}
