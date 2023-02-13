class Node {
    constructor(data = null, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree {
    constructor(array) {
        this.root = this.buildTree(array);
    }
}

function removeDuplicatesAndSort(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
}

console.log(removeDuplicatesAndSort([2, 5, 34, 2, 6, 3, 14, 3]))
