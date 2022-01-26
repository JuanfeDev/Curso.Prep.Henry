// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const   nuevaString="juan";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 22;

// Crea una variable booleana:
const nuevoBool= true ;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;


// En los próximos 22 problemas, deberás compvarar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código: 
  var nuevoString = str;
  return nuevoString ;
}
devolverString("hola")

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  var numA=x;
  var numB=y;
  var suma= numA + numB;
  return suma
}
suma(5,5)
function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  var numA=x;
  var numB=y;
  var resta= numA - numB;
  return resta
}
resta (3, 2)

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  var numA=x;
  var numB=y;
  var multiplicar= numA * numB;
  return multiplicar
}
multiplica (5, 5)

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  var numA=x;
  var numB=y;
  var dividir= numA / numB;
  return dividir
}
divide (9, 3)
  
function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  var num1=x;
  var num2=y;
  var resultado=num1 == num2;
  return resultado

}
sonIguales(4,4)

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  var param1=str1;
  var param2=str2; 
  if(param1.length===param2.length){
  return true
  }else{
  return false
  }
}
tienenMismaLongitud("hola","bola")

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  var num1= num
  if(num1<90){
    return true
  }else{
  return false
  }
}
menosQueNoventa(100)

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  var num1= num
  if(num1>50){
    return true
  }else{
    return false
  }
}
  mayorQueCincuenta(80)

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  return x % y;
}
obtenerResto(2,2)

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  var num1= num
  if(num % 2 === 0){
    return true
  }else{
    return false
  }
}
esPar(2)

//numero % 2 !== 0   si el numero al dividirlo su residuo es un numero diferente a 0  es impar
//numero % 2 === 0 si el numero al dividirlo su residuo es 0 es par


function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  var num1= num
  if(num % 2 === 1){
    return true
  } else {
    return false 
  }
}
esImpar(3)

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
 
  return Math.pow(num,2)
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  return Math.pow(num, 3)
  
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  return Math.pow(num, exponent)
  
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  return Math.round(num)
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  return Math.ceil(num)
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random (899 * 1)
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  const entero= numero;

  if(Math.sign(entero) === -1){
    return "Es negativo"
  }else if (Math.sign(entero)=== +1){
    return "Es positivo"
  }else{
    return false
  }
}
esPositivo(4)

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  return str + "!"
}
agregarSimboloExclamacion("hola")

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  var combinado = nombre + " " + apellido;
return combinado
}
combinarNombres("juanito", "alimaña")


function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  return 'Hola' +" "+ nombre + '!' ;

}
obtenerSaludo('Hola')

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  return alto * ancho ;
}
obtenerAreaRectangulo(5, 2)

function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
 return  lado * 4 ; 
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
return (base * altura) / 2
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  return euro * 1.20 
}


function esVocal(varra){
  //Escribe una función que reciba una varra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  if ( varra.length > 1) { 
    return "Dato incorrecto"
  }else if (varra === "a" || varra === "e" || varra === "i" || varra === "o" || varra === "u" ) {
    return "Es vocal"
  }else{
  return "Dato incorrecto"
}
  }
 



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
