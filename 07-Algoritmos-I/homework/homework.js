'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let divisor = 2;
  while (num > 1){
    if(num % divisor === 0){
      arr.push(divisor);
      num = num / divisor;
    }else divisor++;
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let change = true;

  while (change){
    change = false;
    for (let i = 0; i < array.length - 1; i++){
      if (array[i] > array[i + 1]){
        var aux = array[i];
        array [i] = array[i + 1];
        array[i + 1] = aux;

        change = true;
      }
    }
  }
  return array;
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length;i++){
    let anterior = i - 1;
    let aux = array[i];
    while (anterior >= 0 && aux < array[anterior]){
      array[anterior+1] = array[anterior];
      anterior--;
    }
    array[anterior+1] = aux;
  }
  return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0;i < array.length;i++){
    let min = i;
    //recorro el array buscando un numero mas chico
    for (let x = i+ 1; x < array.length; x++){
      if (array[min] > array[x]) min = x;//actualizamos el index del numero mas chico
    }
    //intercambiamos valores entre el num + chico y el "primer" valor
    if (i !== min){
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux;
    }
  }
  return array;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
