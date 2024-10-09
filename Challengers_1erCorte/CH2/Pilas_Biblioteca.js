// Definimos la clase Stack (Pila)
class Stack {
    constructor() {
        this.stack = {};
        this.count = 0;
    }

    // Método para añadir un nuevo libro a la pila
    push(book) {
        this.stack[this.count] = book;
        this.count++;
        return this.stack;
    }

    // Método para devolver y eliminar el último libro agregado a la pila
    pop() {
        if (this.count === 0) return undefined;
        this.count--;
        const lastBook = this.stack[this.count];
        delete this.stack[this.count];
        return lastBook;
    }

    // Método para ver el último libro agregado sin eliminarlo
    peek() {
        if (this.count === 0) return undefined;
        return this.stack[this.count - 1];
    }

    // Método para saber cuántos libros hay en la pila
    size() {
        return this.count;
    }

    // Método para imprimir todos los libros en la pila
    print() {
        if (this.count === 0) {
            console.log("La pila está vacía.");
        } else {
            console.log("Contenido de la pila de libros:");
            for (let i = 0; i < this.count; i++) {
                console.log(this.stack[i]);
            }
        }
    }
}

// Creamos una nueva pila de libros
const bookStack = new Stack();

// Añadimos algunos libros de ejemplo
bookStack.push({ Name: "El Quijote", ISBN: "123-456-789", Author: "Miguel de Cervantes", Editorial: "Penguin" });
bookStack.push({ Name: "Cien Años de Soledad", ISBN: "987-654-321", Author: "Gabriel García Márquez", Editorial: "Sudamericana" });
bookStack.push({ Name: "La Odisea", ISBN: "111-222-333", Author: "Homero", Editorial: "Alianza Editorial" });

// Imprimimos la pila de libros
bookStack.print();

// Vemos el último libro agregado
console.log("Último libro en la pila:", bookStack.peek());

// Eliminamos el último libro de la pila
console.log("Libro eliminado:", bookStack.pop());

// Imprimimos la pila de nuevo después de eliminar un libro
bookStack.print();


