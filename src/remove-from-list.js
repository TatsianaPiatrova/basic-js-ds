//const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let node = l;
  let nextNode = l.next;
  let prevNode = null;
  while(node!=null){
    if (node.value === k){
      if (prevNode === null){
        l = nextNode;
        node = nextNode;
        nextNode = nextNode.next;
      }
      else{
        prevNode.next = node.next;
        node = nextNode
        if (nextNode!=null)
          nextNode = node.next;
      }      
    }  else{
            prevNode = node;
            node = nextNode;
            if (nextNode!=null)
          nextNode = node.next;
    }  
  }
  return l;
}

module.exports = {
  removeKFromList
};
