//Hash Table algoritmo de Agenda Telefonica
//#1 creamos la hashtable
class HashTable {
    constructor(tamaño) {
        this.table = new Array(tamaño);
        this.size = tamaño;
    }

    //#2 Función hash para calcular un índice basado en la clave
    _hash(clave) {
        let hash = 0;
        for (let char of clave) {
            hash += char.charCodeAt(0);
        }
        return hash % this.tamaño;
    }

    //#3 Agregar o actualizar un contacto
    añadirContacto(nombre, numero) {
        const index = this._hash(nombre);
        this.table[index] = [nombre, numero]; // <-- para sobrescribir cualquier valor anterior
    }

    //#4 Obtener el numero de telefono de un contacto
    getNumero(nombre) {
        const index = this._hash(nombre);
        return this.table[index] ? this.table[index][1] : "Contacto no encontrado";
    }

    //#5 Eliminar un contacto
    eliminarContacto(nombre) {
        const index = this._hash(nombre);
        if (this.table[index] && this.table[index][0] === nombre) {
            this.table[index] = undefined;
        }
    }

}

const contactos = new HashTable(15);

// Agregar contactos
contactos.añadirContacto("Alice", "3102905775");
contactos.añadirContacto("Bob", "3122915775");

// Buscar contactos
console.log(contactos.getNumero("Alice"));

// Modificar el número de un contacto
contactos.añadirContacto("Alice", "3008795475");
console.log(contactos.getNumero("Alice"));

// Eliminar un contacto
contactos.eliminarContacto("Bob");
console.log(contactos.getNumero("Bob"));