// Importar el módulo fs
const fs = require('fs');

// Importar la función desde calculos.js
const { calcularIVA } = require('./calculos');

console.log("===== ACTIVIDAD 2.5 NODE =====");

// -------------------------------------------------
//  Variables y tipos
// -------------------------------------------------

let nombre = "Alexandra";
let edad = 32;
let estudiante = true;

console.log("\n1. VARIABLES Y TIPOS");
console.log("Nombre:", nombre, "- Tipo:", typeof nombre);
console.log("Edad:", edad, "- Tipo:", typeof edad);
console.log("Estudiante:", estudiante, "- Tipo:", typeof estudiante);

// -------------------------------------------------
//  Condicional
// -------------------------------------------------

console.log("\n2. CONDICIONAL");

if (edad >= 18) {
    console.log(nombre + " es mayor de edad.");
} else {
    console.log(nombre + " es menor de edad.");
}

// -------------------------------------------------
// Ciclos
// -------------------------------------------------

console.log("\n3. CICLOS");

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("Números pares:");

for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero);
    }
}

// -------------------------------------------------
//  Funciones y módulos
// -------------------------------------------------

console.log("\n4. FUNCIONES Y MÓDULOS");

let precio = 10000;
let iva = calcularIVA(precio);

console.log("Precio: $" + precio);
console.log("IVA (19%): $" + iva);

// -------------------------------------------------
// Archivos (fs)
// -------------------------------------------------

console.log("\n5. ARCHIVOS");

let contenido = `
RESULTADOS ACTIVIDAD NODE

Nombre: ${nombre}
Edad: ${edad}
Precio: ${precio}
IVA: ${iva}
`;

fs.writeFileSync("resultados.txt", contenido);

console.log("Archivo resultados.txt creado correctamente.");