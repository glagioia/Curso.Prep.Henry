// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var newArray=[];
  for(var clave in objeto){
    newArray.push([clave, objeto[clave]])
  }
  return newArray;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var object={}
  for(var i=0; i<string.length; i++){
    if(!object[string[i]]){
      object[string[i]]=0;
    }
  object[string[i]] += 1;
  }    
  return object 
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var capitals='';
  var lower='';

  for(var i = 0; i < s.length; i++){
    var mayus = s.charAt(i);
    if(mayus === mayus.toUpperCase()){
      capitals += mayus;
    }
  }  
  for(var j = 0; j < s.length; j++){
    var minus = s.charAt(j);
    if(minus === minus.toLowerCase()){
       lower += minus;  
  }
}
  return capitals+lower;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  var resultado = []
  var array= str.split(' ');
  for(var i = 0; i < array.length; i++){
    var newarray = array[i].split('')
    newarray = newarray.reverse()
    resultado.push(newarray.join(''))
  }
  return resultado.join(' ')
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
 /* 
  var numerostring = numero + ''
  var numerosplit = numerostring.split('')
  var numeroReverse = numerosplit.reverse()

  if(numerostring === numeroReverse.join('')){
    return 'Es capicua'
  }
  else{
    return 'No es capicua'
  }
}
*/
var numstring = numero + ''
if(numstring === asAmirror(numstring)){
  return 'Es capicua'
}
return 'No es capicua'
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  cadena = cadena.replace('a','');
  cadena = cadena.replace('b','');
  cadena = cadena.replace('c','');
  return cadena;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(elementoActual, elementoSiguiente){
    return elementoActual.length - elementoSiguiente.length})
    return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  var inter=[];
  for(var i=0; i<arreglo1.length; i++){
    for(var j=0; j<arreglo2.length; j++){
        if(arreglo1[i] === arreglo2[j]){
         inter.push(arreglo1[i]);
       }
    }
  }
 return inter;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

