class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.parent = null;
    this.left = null;
    this.right = null;
  }

  appendChild(node) {

    if (this.left !== null && this.right !== null) {
      return;
    }

    if (this.left) {
      this.right = node;
      node.parent = this;
      return;
    }

    this.left = node;
    node.parent = this;

  }

  removeChild(node) {

    if (this.left === node) {
      this.left = null;
      node.parent = null;
      return;
    }

    if (this.right === node) {
      this.right = null;
      node.parent = null;
      return;
    }

    throw new Error('passed node is not a child of this node');

  }

  remove() {
    if (!this.parent) {
      return;
    }

    let parent = this.parent;
    parent.removeChild(this);

  }

  swapWithParent() {
    if (!this.parent) {
      return;
    }

    let parent = this.parent; //4
    let grand = this.parent.parent;//null
    let sibling;

    if(parent.left === this){
      sibling = parent.right;//null
    }

    if(parent.right === this){
      sibling = parent.left;
    }

    let childR = this.right;//null
    let childL = this.left;//null

    if(grand && grand.left === parent){
      grand.left = this;
    }

    if(grand && grand.right === parent){
      grand.right = this;
    }

    if(sibling === parent.left){
      this.left = sibling;
      this.right = parent;
      this.parent = grand;
    }

    if(sibling === parent.right){
      this.right = sibling;//null
      this.left = parent;//4
      this.parent = grand;//null
    }

    if(sibling){
      sibling.parent = this;
    }

    parent.parent = this;


    parent.left = childL;
    parent.right = childR;

    if(childL){
      childL.parent = parent;
    }

    if(childR){
      childR.parent = parent;
    }




  }
}

module.exports = Node;
