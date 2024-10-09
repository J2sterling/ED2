class Person {
    constructor(name, birthdate) {
        this.name = name;
        this.birthdate = birthdate;
        this.children = []; // Lista de hijos
    }

    // Método para añadir un hijo a una persona
    addChild(child) {
        this.children.push(child);
    }
}
class FamilyTree {
    constructor(root) {
        this.root = root;
    }

    // Imprimir en preorden: primero el padre, luego los hijos
    printPreOrder(node = this.root) {
        if (!node) return;
        console.log(`${node.name} (${node.birthdate})`);
        for (let child of node.children) {
            this.printPreOrder(child);
        }
    }

    // Imprimir en postorden: primero los hijos, luego el padre
    printPostOrder(node = this.root) {
        if (!node) return;
        for (let child of node.children) {
            this.printPostOrder(child);
        }
        console.log(`${node.name} (${node.birthdate})`);
    }

    // Imprimir en inorden: aquí lo implementamos con el primer hijo antes del padre
    printInOrder(node = this.root) {
        if (!node) return;
        if (node.children.length > 0) {
            this.printInOrder(node.children[0]); // Imprime al primer hijo (si existe)
        }
        console.log(`${node.name} (${node.birthdate})`); // Imprime al padre
        for (let i = 1; i < node.children.length; i++) {
            this.printInOrder(node.children[i]); // Imprime los otros hijos
        }
    }
}
// Crear las personas (nodos del árbol)
const grandparent = new Person("Juan Pérez", "01/01/1940");
const parent1 = new Person("Carlos Pérez", "12/05/1965");
const parent2 = new Person("Ana Pérez", "23/08/1970");
const child1 = new Person("Pedro Pérez", "15/02/1995");
const child2 = new Person("Lucía Pérez", "10/10/1998");

// Añadir hijos a las personas
grandparent.addChild(parent1);
grandparent.addChild(parent2);
parent1.addChild(child1);
parent2.addChild(child2);

// Crear el árbol familiar
const familyTree = new FamilyTree(grandparent);

// Imprimir en PreOrden
console.log("Árbol genealógico en PreOrden:");
familyTree.printPreOrder();

// Imprimir en PostOrden
console.log("\nÁrbol genealógico en PostOrden:");
familyTree.printPostOrder();

// Imprimir en InOrden
console.log("\nÁrbol genealógico en InOrden:");
familyTree.printInOrder();


