//const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this.rootBST = null;
  }

  root() {
    return this.rootBST;
  }

  add(data) {
    function doAdd(node, value){
      if(!node)
      return new Node(value);
      if (value<node.data){
        node.left = doAdd(node.left, value)
      } else if(value>node.data){
        node.right = doAdd(node.right, value)
      }
      return node;
    }
    this.rootBST = doAdd(this.rootBST, data)
  }

  has(data) {
    let value = this.rootBST;
    while(value){
      if(value.data === data) return true;
      if (value.data < data)
        value = value.right;
      else value = value.left;
    }
    return false;
  }

  find(data) {
    let value = this.rootBST;
    while(value){
      if(value.data === data) return value;
      if (value.data < data)
        value = value.right;
      else value = value.left;
    }
    return null;
  }

  remove(data) {   
    if (!this.rootBST) return null;
    function deleteValue(node, value){
      if (node.data === value){
        if(node.left === null && node.right === null)
          return null;
        if (node.left === null)
          return node.right
        if (node.right === null)
          return node.left
        let min = node.right;
        while(min.left){
          min = min.left;
        }
        node.data = min.data;
        node.right = deleteValue(node.right, min.data);
        return node;
      }
      if(value>node.data){
        node.right = deleteValue(node.right, value);
        return node;
      }
      if(value<node.data){
        node.left = deleteValue(node.left, value);
        return node;
      }
    }
    this.rootBST = deleteValue(this.rootBST, data);
  }

  min() {
    let min = this.rootBST;
    if(!this.rootBST){
      return null;
    }
    while(min.left)
      min = min.left;
    return min.data
  }

  max() {
    let max = this.rootBST;
    if(!this.rootBST){
      return null;
    }
    while(max.right)
      max = max.right;
    return max.data
  }
}

module.exports = {
  BinarySearchTree
};