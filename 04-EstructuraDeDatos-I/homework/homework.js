'use strict'

/*
Definir las funciones recursivas nFactorial y nFibonacci.

nFactorial(n) debe retornar el factorial de n sabiendo que, siendo n un número natural, su factorial (representado como n!) es el producto de n por todos los números naturales menores que él y mayores a 0. Ejemplo: 5! = 5 * 4 * 3 * 2 * 1

nFibonacci(n) debe retornar el enésimo número de la secuencia de Fibonacci, tomando al 0 y al 1, respectivamente, como primer y segundo elementos de la misma, y sabiendo que cualquier elemento que se agregue a esta secuencia será el resultado de la suma del último elemento y el anterior.
Ejemplo: nFibonacci(7) retornará 13, ya que 13 es el dígito que está en la posición 7 de la secuencia.

Secuencia:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ... 


Como ejercicio adicional y completamente opcional, al terminar de resolver este problema pueden intentar definir funciones que logren los mismos resultados pero de manera iterativa.
*/

function nFactorial(n) {
  var total = 0;
  if (n <= 1) return 1;
  return n * nFactorial(n - 1);
}

function nFibonacci(n) {
  if (n <= 1) return n;
  return nFibonacci(n-1) + nFibonacci(n-2);
}

/*
Implementar la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero que se quita. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Pueden utilizar class o función constructora.
*/
class Nodo{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  enqueue(value){
    let nodo = new Nodo(value);
    if (this.first){
      this.last.next = nodo;
      this.last = nodo;
    } else {
      this.first = nodo;
      this.last = nodo;
    }

    this.length++;
  }

  dequeue(){
    if(this.first === null){
      return undefined;
    }
    let current = this.first;
    this.first = this.first.next;
    this.length--;

    return current.value;
  }

  size(){
    return this.length;
  }
}

function Queue() {
  this.arr = [];
  this.enqueue = function(data){ //una forma
      this.arr.push(data);
  } 
}
var que2 = new Queue;

Queue.prototype.dequeue = function(){
  return this.arr.shift();
} // Otra forma - Prototype es donde se guardan las funciones de un objeto (Queue en este caso)
Queue.prototype.size = function(){
  return this.arr.length;
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Queue,
  nFactorial,
  nFibonacci
};
