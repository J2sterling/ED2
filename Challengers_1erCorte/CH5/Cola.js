// Definimos la clase Cola
class Cola {
    constructor() {
        this.cola = [];
    }

    // Método para agregar una persona a la cola
    encolar(persona) {
        this.cola.push(persona);
    }

    // Método para remover a la primera persona de la cola
    desencolar() {
        if (this.cola.length === 0) {
            return "La cola está vacía.";
        }
        return this.cola.shift(); // Elimina y retorna la primera persona
    }

    // Método para ver la primera persona en la cola sin removerla
    primero() {
        if (this.cola.length === 0) {
            return "La cola está vacía.";
        }
        return this.cola[0]; // Retorna la primera persona sin eliminarla
    }

    // Método para obtener el tamaño de la cola
    tamaño() {
        return this.cola.length;
    }

    // Método para imprimir el contenido de la cola
    imprimir() {
        if (this.cola.length === 0) {
            console.log("La cola está vacía.");
        } else {
            console.log("Personas en la cola:");
            this.cola.forEach((persona, indice) => {
                console.log(`${indice + 1}. ${persona.nombre}, Llegada: ${persona.horaLlegada}`);
            });
        }
    }
}

// Crear una nueva cola
const colaATM = new Cola();

// Añadir algunas personas con nombre y hora de llegada
colaATM.encolar({ nombre: "Juan", horaLlegada: "10:00 AM" });
colaATM.encolar({ nombre: "María", horaLlegada: "10:05 AM" });
colaATM.encolar({ nombre: "Carlos", horaLlegada: "10:10 AM" });
colaATM.encolar({ nombre: "Ana", horaLlegada: "10:15 AM" });

// Imprimir la cola completa
colaATM.imprimir();

// Ver quién es la primera persona en la cola
console.log("\nPrimera persona en la cola:", colaATM.primero());

// Remover a la primera persona que fue atendida
console.log("\nPersona atendida:", colaATM.desencolar());

// Imprimir la cola después de atender a la primera persona
colaATM.imprimir();
