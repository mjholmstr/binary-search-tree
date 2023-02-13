// Function to print BST to terminal
const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
         prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
        prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
}


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

    displayTree(root) {
        prettyPrint(this.root);
    }

    removeDuplicatesAndSort(arr) {
    return [...new Set(arr)].sort((a, b) => a - b);
    }


    buildTree(arr) {
        let filteredArray = this.removeDuplicatesAndSort(arr);
        if (filteredArray.length === 0) return null;
        const midpoint = parseInt(filteredArray.length / 2);
        const root = new Node(
            filteredArray[midpoint],
            this.buildTree(filteredArray.slice(0, midpoint)),
            this.buildTree(filteredArray.slice(midpoint + 1))
        );
        return root;
    }

    insert(value, root = this.root) {
        if (root === null) return new Node(value);
        if (root.data < value) {
            root.right = this.insert(value, root.right);
        } else {
            root.left = this.insert(value, root.left);
        }
        return root;
    }

    
}

let testInputArray = [1, 2, 9, 3, 4, 2, 5, 6, 7];
balancedBST = new Tree (testInputArray);
balancedBST.insert(4);
balancedBST.displayTree();

