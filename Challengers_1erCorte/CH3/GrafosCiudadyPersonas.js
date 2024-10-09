// Clase para representar un Grafo
class Graph {
    constructor() {
        this.nodes = {}; // Almacenará las personas y ciudades
    }

    // Método para añadir una persona y la ciudad donde vive
    addPerson(personName, age, cityName) {
        if (!this.nodes[cityName]) {
            this.addCity(cityName);
        }

        if (!this.nodes[personName]) {
            this.nodes[personName] = {
                name: personName,
                age: age,
                city: cityName,
            };
        }
    }

    // Método para añadir una ciudad
    addCity(cityName) {
        if (!this.nodes[cityName]) {
            this.nodes[cityName] = {
                name: cityName,
                people: [],
            };
        }
    }

    // Método para imprimir la lista de personas que viven en una ciudad específica
    printPeopleInCity(cityName) {
        if (this.nodes[cityName]) {
            console.log(`Personas que viven en ${cityName}:`);
            const people = Object.values(this.nodes).filter(
                (node) => node.city === cityName
            );
            if (people.length > 0) {
                people.forEach((person) => {
                    console.log(`${person.name}, Edad: ${person.age}`);
                });
            
            }
        }else {
            console.log(`No hay personas registradas en ${cityName}.`);}
    }
}

// Ejemplo de uso:
const graph = new Graph();

// Agregamos algunas ciudades y personas
graph.addPerson('Juan', 25, 'Bogotá');
graph.addPerson('Maria', 30, 'Bogotá');
graph.addPerson('Carlos', 28, 'Cali');
graph.addPerson('Ana', 22, 'Medellín');

// Imprimimos las personas que viven en Bogotá
graph.printPeopleInCity('Bogotá');

// Imprimimos las personas que viven en Cali
graph.printPeopleInCity('Cali');

// Intentamos imprimir una ciudad que no existe
graph.printPeopleInCity('Cartagena');
