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

  
//Ejercicio 1.4: Rest & Spread operators
//Nivel 1

//Ejercicio 1
//Operador Spread en Arrays: Crea dos arrays, array1 y array2. Use el operador spread para crear una tercera array que contenga todos los elementos de array1 y array2.
console.log("1.4---Ejercicio 1");

const Array14 = ["primer", "array", "del", "ejercicio"];
const Array142 = ["segundo", "array", "del", "ejercicio"];

Array3 = [...Array14, ...Array142];
console.log(Array3);


//Ejercicio 2
//Operador Rest en Funciones: Crea una función 'suma' que utilice el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.

console.log("1.4---Ejercicio 2");

function suma(...numeros) {
    return numeros.reduce((num1, num2) => num1 + num2, 0);
  } 
  console.log(suma(1, 0, 3, 5)); 
  console.log(suma(1, 20, 130));
  console.log(suma(100, 200, 300, 400, 500));
  console.log(suma(0, 0, 0, 0));
  console.log(suma(1, 2, 4, 7, 8, 10));
  
//Nivel 2
//Ejercicio 3
//Copiando objetos con Spread: Crea un objeto 'objeto1'. Luego crea un segundo objeto, 'objeto2', que sea una copia de 'objeto1' utilizando el operador spread. Cambia una propiedad de 'objeto2' y comprueba que 'objeto1' no ha cambiado.

console.log("1.4---Ejercicio 3");
const objeto1 = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Madrid",
  };
  
  const objeto2 = { ...objeto1, edad: 35 };
  
  console.log("Objeto 1:", objeto1);
  console.log("Objeto 2:", objeto2);
  

//Ejercicio 4
//Resto en Destructuring: Crea un array con varios elementos. Utiliza destructuring y el operador resto para asignar los primeros dos elementos a variables, y después asignar el resto de los elementos a una tercera variable.
console.log("1.4---Ejercicio4");
  
const arrayDestructuring = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [primerNum, segundoNum, ...resto] = arrayDestructuring;

console.log(primerNum);  
console.log(resto); 
console.log(segundoNum)

//Nivel 3
//Ejercicio 5
//Spread en Funciones: Crea una función que acepte tres argumentos. Después, crea un array con tres elementos y llama a la función utilizando el operador spread con esa array.
  
console.log("1.4---Ejercicio 5");

const tresArgumentos = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
  };
  
  const argumentos = ["soy", "la", "prueba"];
  
  const array3Elementos = tresArgumentos(...argumentos);
  
  console.log(`${array3Elementos}`);

//Ejercicio 6
//Fusionando Objetos con Spread: Crea dos objetos con propiedades distintas. Utiliza el operador spread para fusionar estos dos objetos en uno nuevo.
console.log("1.4---Ejercicio 6");

const objeto3 = {
    nombre: "Juan",
    edad: 30,
    codigoUsuario: "12345",
  };
  
  const objeto4 = {
    ciudad: "Madrid",
    telefono: "606060606",
    juego: "League of Legends",
  };

  
  const objetoNuevo = { ...objeto3, ...objeto4 };
  
  console.log(objetoNuevo); 


//Ejercicio 1.5: Array transformations
//Nivel 1
//Ejercicio 1
//Map: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que contenga el cuadrado de cada número.

console.log("ejercicio 1.5---Ejercicio 1")

const numeros1 = [1, 2, 3, 4];
const cuadrados = numeros1.map((numero) => numero ** 2);

console.log(cuadrados); 


//Ejercicio 2
//Filtero: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que sólo contenga los números pares.
console.log("1.5---Ejercicio2")

arrayNumPares = numeros1.filter((numero) => numero % 2 === 0);
console.log(arrayNumPares);


//Ejercicio 3
//Find: Tiene un array de números [1, 10 , 8, 11]. Use la función find para encontrar el primer número que es mayor a 10.
console.log("1.5---Ejercicio3")

const numeros2 = [1, 10, 8, 11];
const mayorQueDiez = numeros2.find((numero) => numero > 10);

console.log(mayorQueDiez);

//Ejercicio 4
//Reducción: Tiene un array de números [13, 7, 8, 21]. Utiliza la función reduccion para calcular la suma total de los números.

console.log("1.5---Ejercicio4")

const numeros3 = [13, 7, 8, 21];
const sumaTotal = numeros3.reduce((num5, num6) => num5 + num6, 0);

console.log(sumaTotal);


//Nivel 2
//Ejercicio 5
//Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una función en una sola línea que haga lo siguiente:

console.log("Nivel 2---1.5---Ejercicio5")


//- Filtra los números mayores o iguales a 10.
//- Multiplica cada número filtrado por 2.
//- Calcula la suma de los números filtrados y multiplicados por 2.
//- La función debe devolver el resultado de la suma.
arrayNumEjercicio5 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const numerosProcesados = arrayNumEjercicio5
  .filter((numero) => numero >= 10)
  .map((numero) => numero * 2)
  .reduce((num1, num2) => num1 + num2, 0);

console.log(numerosProcesados);

//Nivel 3
//Ejercicio 6
//Every / Some: Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son ​​mayores que 10, respectivamente

console.log("1.5---Ejercicio6")
const numeros4 = [11, 12, 13, 14];
const todosMayoresQueDiez = numeros4.every((numero) => numero > 10);
const algunosMayoresQueDiez = numeros4.some((numero) => numero > 10);
console.log(`los numeros son mayores que 10: ${todosMayoresQueDiez}`);
console.log(`alguno de los numero es mayor a 10: ${algunosMayoresQueDiez}`);


//Ejercicio 1.6: Array loops
//Nivel 1
//Ejercicio 1
//forEach: Tiene un array de nombres. Utiliza forEach para imprimir cada nombre en la consola: let nombres = ['Anna', 'Bernat', 'Clara'];
console.log("1.6---Ejercicio")

let nombres = ['Anna', 'Bernat', 'Clara'];

nombres.forEach((nombre) => {
    console.log(nombre);
}
);

//Ejercicio 2
//for-of: Tiene un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola: let noms = ['Anna', 'Bernat', 'Clara'];
console.log("1.6---Ejercicio2")

for (const nombre of nombres) {
    console.log(nombre);
} 

//Ejercicio 3
//filtro: Tiene un array de números. Use filtro para crear una nueva array que sólo contenga los números pares. let numeros = [1, 2, 3, 4, 5, 6];

console.log("1.6---Ejercicio3")
const numeros5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numerosPares = numeros5.filter((numero) => numero % 2 === 0);
console.log(numerosPares);
//Nivel 2
//Ejercicio 4
//for-in: Tiene un objeto con pares clave-valor: let obj = { nombre: Ola, edad: 25, ciudad: 'Barcelona' }; Use un bucle for-in para imprimir en la consola cada clave y su valor correspondiente.

console.log("1.6---Ejercicio4")
let obj = {nombre: "Ola", edad: 25, ciudad: "barcelona" };
for (const clave in obj) {
    console.log(`${clave}: ${obj[clave]}`);
}

//Ejercicio 5
//for-of con break: Tiene un array de números. Utiliza un bucle //for-of para imprimir en la consola los números hasta encontrar el número 5, entonces detiene el bucle: let numeros = [1, 2, 3, 4, 5, 6];

console.log("1.6---Ejercicio5")
let numeros6 = [1, 2, 3, 4, 5, 6];
for (const numero of numeros6) {
    if (numero === 5) {
      console.log(numero);
        break;
    }
    console.log(numero);
} 

//Nivel 3
//Ejercicio 6
///for-of con index: Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición (index): let noms = ['Anna', 'Bernat', 'Clara']
console.log("1.6---Ejercicio6")

let noms = ['Anna', 'Bernat', 'Clara'];
for (const [posición, nombre] of noms.entries()) {
    console.log(`Posición: ${posición}, Nombre: ${nombre}`);
}

//Ejercicio 1.7: Promisas & Async/Await
//Nivel 1
//Ejercicio 1
//Creación de una Promesa: Crea una promesa que se resuelva después de 2 segundos y que devuelva la cadena de texto 'Hola, mundo'.

console.log("Ejercicio 1.7---Ejercicio 1")
const promesa = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hola, mundo--promesa");
    }, 2000); 
  });
  
  promesa.then((resultado) => console.log(resultado));
  console.log("desde aqui empieza el conteo de los 2 segundos -se llama a la promesa-.");

//Ejercicio 2
//Utilización de una Promesa: Utiliza la promesa creada en el ejercicio anterior. Crea un .then que imprima el resultado en la consola.

console.log("Ejercicio 1.7---Ejercicio 2")
promesa.then((resultado) => {
    console.log(`Ejercicio1.7-2 ...Resultado de la promesa: ${resultado}`);
  } 
);

//Ejercicio 3
//Promesa con reject: Crea una promesa que se resuelva después de 2 segundos si el input es igual a 'Hola', y que la rechace si el input es cualquier otra cosa.

console.log("Ejercicio 1.7---Ejercicio 3")
const promesaConReject = (input) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (input === "Hola") {
          resolve("input igual a --hola--");
        } else {
          reject("input diferente a --hola--");
        }
      }, 2000); 
    });
  };
  
  promesaConReject("Hola")
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));
  
  promesaConReject("Adiós")
    .then((resultado) => console.log(resultado))
    .catch((error) => console.log(error));

//Ejercicio 4
//Uso de async/await: Escribe una función asíncrona que utilice la función await para esperar el resultado de la promesa creada en el ejercicio 1, y que después imprima este resultado en la consola.
console.log("Ejercicio 1.7---Ejercicio 4")
async function ejecutarPromesa() {
    try {
      const resultado = await promesa;
      console.log(`Ejercicio1.7-4 ...Resultado de la promesa: ${resultado}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }


//Nivel 2
//Ejercicio 5
//Gestión de errores con async/await: Modifica la función del ejercicio 4 para que capture cualquier posible error utilizando un blog try/catch.
console.log("Ejercicio 1.7---Ejercicio 5")
async function ejecutarPromesaConError() {
    try {
      const resultado = await promesaConReject("Adiós");
      console.log(`Ejercicio1.7-5 ...Resultado de la promesa: ${resultado}`);
    } catch (error) {
      console.error("Error:", error);
    }
  }


//Nivel 3
//Ejercicio 6
//Promise.all: Crea dos promesas que se resuelvan después de 2 y 3 segundos, respectivamente. Utiliza Promise.all para esperar que ambas promesas se resuelvan, e imprime los resultados en la consola.

console.log("Ejercicio 1.7---Ejercicio 6")

const promesa1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de la promesa 1");
    }, 2000); 
  });
  
  const promesa2 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resultado de la promesa 2");
    }, 3000); 
  });
  
  Promise.all([promesa1, promesa2])
    .then((resultados) => {
      console.log("Resultados de ambas promesas:", resultados);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
    