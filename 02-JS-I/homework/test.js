function devolverString(str) {
    // "Return" la string provista: str
    // Tu código: 
    let nuevoString = str;
    console.log(nuevoString)
    return nuevoString ;
  }
  devolverString("holaMundo")
  
  function suma(x, y) {
    // "x" e "y" son números
    // Suma "x" e "y" juntos y devuelve el valor
    // Tu código:
    let numA=x;
    let numB=y;
    let suma= numA + numB;
    console.log(suma,"este es el resultado de mi suma")
    return suma

  }
  suma (5, 4)
  
  function resta(x, y) {
    // Resta "y" de "x" y devuelve el valor
    // Tu código:
    let numA=x;
    let numB=y;
    let resta= numA - numB;
    console.log(resta,"este Es El Resultado De Mi Resta")
    return resta
  }
  resta (3, 2)

  function multiplica(x, y) {
    // Multiplica "x" por "y" y devuelve el valor
    // Tu código:
    let numA=x;
    let numB=y;
    let multiplicar= numA * numB;
    console.log(multiplicar, "resultado de mi operacion")
    return multiplicar
  }
  multiplica (5, 5)

  function divide(x, y) {
    // Divide "x" entre "y" y devuelve el valor
    // Tu código:
    let numA=x;
    let numB=y;
    let dividir= numA / numB;
    console.log(dividir, "resultado de mi operacion")
    return dividir
  }
  divide (9, 3)

  function probandoLength(str1,str2){
    const param1=str1;
    const param2=str2;
    if(param1.length === param2.length){
      console.log("es verdadera esta condidcion", true)
      return true
    }else{
    console.log("es falsa", false)
     return false
    }

  }
probandoLength("hola", "bola")

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
