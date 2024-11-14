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

    
}