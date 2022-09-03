'use strict'
// No cambies los nombres de las funciones.

function quickSort(array) {
  // Implementar el método conocido como quickSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
 if (array.length <= 1) return array;
  //let pivote = array.length-1;
  let pivote = array.length-1;
  let left = [];
  let rigth = [];
  for (let i = 0; i < array.length;i++){
    if (i !== pivote){
      if(array[i] < array[pivote])
        left.push(array[i]);
        else rigth.push(array[i]);
    }
  }
  return quickSort(left).concat(array[pivote]).concat(quickSort(rigth))
}

function mergeSort(array) {
  // Implementar el método conocido como mergeSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  if (array.length <=1) return array;
  let middle = Math.floor(array.length / 2);
  let left = array.slice(0,middle);
  let right = array.slice(middle);
  return merge(mergeSort(left),mergeSort(right));

}
function merge(left,right){
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while(indexLeft<left.length && indexRight<right.length){
    if(left[indexLeft]<right[indexRight]){
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }
  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  quickSort,
  mergeSort,
};
