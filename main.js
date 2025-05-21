//Ejercicio 1 Ejercicio 1.1: Arrow functions Nivel 1

//Conversión de funciones: Tienes una función add que acepta dos parámetros y devuelve su suma. Conviértela en una función de flecha. Por ejemplo:function .
console.log("Ejercicio 1.1  Arrow functions Nivel 1");
/*console.log("funcion add");
function add(a, b) {
    return a + b;
    }
console.log(add(10,5));*/

// Funcion de flecha
const add = (a, b) => a + b;
console.log(add(10, 5));

//Ejercicio 2
//Función de flecha sin parámetros: Crea una función de flecha ll nmj76amada randomNumber que no necesite parámetros y que devuelva un número aleatorio entre 0 y 100.
console.log("Ejercicio 2")

const randomNumber = () => Math.round(Math.random() * 100);
console.log(randomNumber());

//Ejercicio 3
//Uso de 'this' en las funciones de flecha: Crea una clase person que tenga una propiedad name y una función greet que utilice una función de flecha. La función debe imprimir un saludo que incluya el nombre de la persona. Por ejemplo: console.log(Hola, ${this.name});.

console.log("Ejercicio 3")
class person {
    constructor(name) {
        this.name = name;
    }
    greet = () => console.log(`Hola, ${this.name}`);
}
const personI = new person("anne");
personI.greet();

//Ejercicio 4
//Función de flecha dentro de un loop: Crea una función llamada printNumbers que acepte un array de números y utilice un loop for para imprimir cada número en la consola utilizando una función de flecha.

console.log("Ejercicio 4")

function printNumbers(numbers) {
    for (let i = 0; i < numbers.length; i++) {
      const print = (number) => console.log(number);
      print(numbers[i]);
    }
  }
  
  const arrayNumbers = [3, 4, 7, 8, 11, 12, 15, 16, 19, 20];
  printNumbers(arrayNumbers);

//Ejercicio 5
//Función de flecha con 'setTimeout': Crea una función de flecha que imprima un mensaje en la consola después de esperar 3 segundos.

console.log("Ejercicio 5")
  const retraso = () => {
    setTimeout(() => {
      console.log("¡ya paso 3 segundos!");
    }, 3000); // 3000 milisegundos = 3 segundos
  };
  
  retraso();
  console.log("desde aqui empieza el conteo de los 3 segundos -se llama a retraso()-.");

  console.log("--------------------------------------------------------------------------------------------------------------------")
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------


  //Ejercicio 1.2: Operador ternario

//Nivel 1

//Ejercicio 1
//Operador ternario básico: Escribe una función puedeConducir que acepte la edad como parámetro y utilice el operador ternario para determinar si el usuario puede conducir. Si la edad es 18 o más, debe devolver 'Puedes conducir'. Si no, debe devolver 'No puedes conducir'.
console.log("1.2---Ejercicio 1")
const autorizacion = (edad) => 
    edad >= 18 ? "Puedes Conducir" : "NO Puedes Conducir"

console.log(autorizacion(25));
console.log(autorizacion(15));
console.log(autorizacion(8));



//Ejercicio 2
//Uso con operadores de comparación: Escribe una expresión que utilice el operador ternario para determinar cuál de los dos números dados (num1 y num2) es mayor. Si num1 es mayor, devuelve 'num1 es mayor'. Si no, devuelve 'num2 es mayor'.
console.log("1.2---Ejercicio 2")

const numeroMayor = (num1, num2) => {
    return num1 === num2
    ? "los dos numeros son iguales"
    : num1 > num2
    ? "el primer numero es mayor ": "el segundo numero es mayo"
}
console.log(numeroMayor(4,2));
console.log(numeroMayor(4,4));

//Nivel 2

//Ejercicio 3
//Uso enlazado de operadores ternarios: Escribe una expresión que utilice enlaces de operadores ternarios para determinar si un número es positivo, negativo o cero.
console.log("1.2---ejercicio 3")

const tipoNumero = (num) => {
    return num === 0 
    ? "el numero es 0"
    : num > 0
    ? "el numero es positivo":"el numero es negativo"
}
console.log(tipoNumero(8))
console.log(tipoNumero(-8))
console.log(tipoNumero(0))
console.log(tipoNumero(7))

//Operador ternario con funciones: Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.
console.log("1.2---Ejercicio 3.1")

const encontrarMaximo = (a, b, c) => {
    return a > b
      ? (a > c ? `El valor máximo es: ${a}` : `El valor máximo es: ${c}`) 
      : (b > c ? `El valor máximo es: ${b}` : `El valor máximo es: ${c}`);
  };
  
  console.log(encontrarMaximo(5, 10, 3));   
  console.log(encontrarMaximo(15, 5, 8));   
  console.log(encontrarMaximo(2, 7, 12));  
 
//Nivel 3

//Ejercicio 4
//Operador ternario dentro de un bucle: Escribe una función parOImpar que acepte un array de números y utilice un bucle para recorrer el array. Dentro del bucle, utiliza el operador ternario para determinar si cada número es par o impar.
console.log("1.2---Ejercicio 4")

const parOImpar = (numeros) => {
    numeros.forEach(numero => {
      const resultado = numero % 2 === 0 ? "Par" : "Impar";
      console.log(`${numero} es ${resultado}`);
    });
  };
  
  const arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  parOImpar(arrayNumeros);
console.log("------------------------------------------------------------------------------------------------------------------------------------------------")

//Ejercicio 1.3: Callbacks

//Nivel 1
//Ejercicio 1
//Callback básico: Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback. La función procesar debe invocar la función de callback, pasando el número como parámetro.
console.log("1.3---Ejercicio 1")

function procesar(numero, callback) {
    callback(numero);
}

function imprimirNumero(num) {
    console.log(`El número es: ${num}`);
}

procesar(5, imprimirNumero); 


//Ejercicio 2
//Callbacks con operaciones matemáticas: Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback. La función calculadora debe invocar la función de callback con los dos números como parámetros. Luego, llama calculadora con una función que realice la suma de los dos números.

console.log("1.3---Ejercicio 2")
function calculadora(num1, num2, callback) {
    return callback(num1, num2);
}

function suma(a, b) {
    return a + b;
}

const resultado = calculadora(10, 5, suma);
console.log(`La suma es: ${resultado}`);

//Nivel 2
//Ejercicio 3
//Uso de callbacks en funciones asíncronas: Escribe una función esperarISaludar que acepte dos parámetros: un nombre y una función de callback. La función debe esperar 2 segundos y entonces invocar la función de callback, pasando el nombre como parámetro.

console.log("1.3---Ejercicio 3")

function esperarISaludar(nombre, funcionCallback) {
    setTimeout(() => {
        funcionCallback(nombre);
    }, 2000); 
}

function saludar(nombre) {
  console.log(`an pasado 2 segundos del ejercicio 1.3---Ejercicio3` );
}
esperarISaludar("pablo", saludar);

//1.3---Ejercicio 4
//Callbacks con arrays: Escribe una función procesarElements que acepte dos parámetros: un array y una función de callback. La función procesarElements debe invocar la función de callback por cada elemento del array.
console.log("1.3---Ejercicio 4")

const procesarElements = (array, callback) => {
    array.forEach((elemento) => {
      callback(elemento);
    });
  };
  
  const arrayNumeros2 = [1, 2, 3, 4, 5];
  
  const imprimirElemento = (elemento) => {
    console.log(`Elemento: ${elemento}`);
  };
  
  procesarElements(arrayNumeros2, imprimirElemento);
  
  




//Nivel 3
//Ejercicio 5
//Escribe una función procesarCadena que acepte dos parámetros: una cadena de caracteres y una función de callback. La función procesarCadena debe convertir la cadena a mayúsculas y entonces invocar la función de callback con la cadena transformada.

console.log("1.3---Ejercicio 5")

function procesarCadena(cadena, callback) {
    const cadenaMayusculas = cadena.toUpperCase();
    callback(cadenaMayusculas);
  }
function imprimirCadena(cadena) {
    console.log(`Cadena procesada: ${cadena}`);
  }
  
  procesarCadena("hola mundo", imprimirCadena);

  
  console.log("-----------------------------------------------------------------------------------------------------------------------------")
