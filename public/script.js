// 1. Variable con tu nombre
let nombre = "Lucas";
console.log(nombre);

// 2. Suma de dos números
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

// 3. Variable booleana
let esMayor = true;
console.log(esMayor);

// 4. Cambiar el valor de una variable
let ciudad = "Buenos Aires";
console.log("Antes:", ciudad);
ciudad = "Córdoba";
console.log("Después:", ciudad);

// 5. Tipo de cada variable
console.log(typeof nombre);
console.log(typeof num1);
console.log(typeof esMayor);
console.log(typeof ciudad);

//ejecicio 2

// 1. Número mayor
let a = Number(prompt("Ingresa el primer número"));
let b = Number(prompt("Ingresa el segundo número"));
if (a > b) {
  console.log(a + " es mayor que " + b);
} else if (b > a) {
  console.log(b + " es mayor que " + a);
} else {
  console.log("Ambos números son iguales");
}

// 2. Mayor o menor de edad
let edad = Number(prompt("Ingresa tu edad"));
if (edad >= 18) {
  console.log("Eres mayor de edad");
} else {
  console.log("Eres menor de edad");
}

// 3. Día laboral o fin de semana
let dia = prompt("Ingresa un día de la semana").toLowerCase();
if (dia === "sábado" || dia === "domingo") {
  console.log("Es fin de semana");
} else {
  console.log("Es día laboral");
}

// 4. Calculadora simple
let n1 = Number(prompt("Número 1"));
let n2 = Number(prompt("Número 2"));
let operacion = prompt("Operación (+, -, *, /)");
if (operacion === "+") {
  console.log(n1 + n2);
} else if (operacion === "-") {
  console.log(n1 - n2);
} else if (operacion === "*") {
  console.log(n1 * n2);
} else if (operacion === "/") {
  console.log(n1 / n2);
} else {
  console.log("Operador no válido");
}

//ejercicio 3

// 1. Función saludar
function saludar() {
  console.log("Hola, mundo");
}
saludar();

// 2. Función suma
function suma(a, b) {
  return a + b;
}
console.log(suma(3, 7));

// 3. Saludo personalizado
function saludoPersonalizado(nombre) {
  return `Hola, ${nombre}!`;
}
console.log(saludoPersonalizado("Lucas"));

// 4. Funciones flecha
const saludarFlecha = () => console.log("Hola, mundo");
saludarFlecha();

const sumaFlecha = (a, b) => a + b;
console.log(sumaFlecha(5, 10));

const saludoFlecha = (nombre) => `Hola, ${nombre}!`;
console.log(saludoFlecha("Aylen"));

//ejercicio 4
// 1. Array con 5 frutas
let frutas = ["Manzana", "Banana", "Pera", "Uva", "Mango"];
console.log(frutas);

// 2. Mostrar cada fruta
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

// 3. Suma de un array de números
let numeros = [10, 20, 30, 40, 50];
let sumaTotal = 0;
for (let num of numeros) {
  sumaTotal += num;
}
console.log("Suma total:", sumaTotal);

// 4. Tabla de multiplicar
let numero = Number(prompt("Ingresa un número"));
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// 5. Contar del 1 al 10 con while
let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
}

//ejercicio 5:
// 1. Objeto persona
let persona = {
  nombre: "Lucas",
  edad: 18,
  ciudad: "San Martín de los Andes",
};
console.log(persona);

// 2. Acceder a propiedades
console.log("Nombre:", persona.nombre);
console.log("Edad:", persona.edad);
console.log("Ciudad:", persona.ciudad);

// 3. Array de objetos
let personas = [
  { nombre: "Lucas", edad: 18, ciudad: "San Martín de los Andes" },
  { nombre: "Aylen", edad: 17, ciudad: "Neuquén" },
  { nombre: "Manuel", edad: 19, ciudad: "Bariloche" },
];
for (let p of personas) {
  console.log(p.nombre);
}

// 4. Función con objeto
function presentar(persona) {
  console.log(`Hola, soy ${persona.nombre} y tengo ${persona.edad} años`);
}
presentar(persona);
