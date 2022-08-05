
# Homework JavaScript Avanzado I

## Scope & Hoisting

Determiná que será impreso en la consola, sin ejecutar el código.

> Investiga cuál es la diferencia entre declarar una variable con `var` y directamente asignarle un valor.

```javascript
x = 1;
var a = 5;
var b = 10;
var c = function(a, b, c) {
  var x = 10;
  console.log(x); // 10
  console.log(a); // 8
  var f = function(a, b, c) {
    b = a;
    console.log(b); // 8
    b = c;
    var x = 5;
  }
  f(a,b,c);
  console.log(b); // 9
}
c(8,9,10);
console.log(b); //10
console.log(x); // 1
```

```javascript
console.log(bar); // undefined
console.log(baz); // crasheo porque no se creó baz y no ejecuta función
foo();
function foo() { console.log('Hola!'); }
var bar = 1;
baz = 2;
```

```javascript
var instructor = "Tony";
if(true) {
    var instructor = "Franco";
}
console.log(instructor); // Franco
```

```javascript
var instructor = "Tony";
console.log(instructor); // Tony
(function() {
   if(true) {
      var instructor = "Franco";
      console.log(instructor); // Franco
   }
})();
console.log(instructor); // Tony
```

```javascript
var instructor = "Tony";
let pm = "Franco";
if (true) {
    var instructor = "The Flash";
    let pm = "Reverse Flash";
    console.log(instructor); // The Flash
    console.log(pm); // Reverse Flash
}
console.log(instructor); // The Flash
console.log(pm); // Franco
```
### Coerción de Datos

¿Cuál crees que será el resultado de la ejecución de estas operaciones?:

```javascript
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" // '9'px
"$" + 4 + 5 // $'45'
"4" - 2 // 2
"4px" - 2 // NaN
7 / 0 // Infinity
{}[0] // undefined
parseInt("09") // 9
5 && 2 // 2
2 && 5 // 5
5 || 0 // 5
0 || 5 // 5
[3]+[3]-[10] // 23
3>2>1 // false
[] == ![] // true
```

> Si te quedó alguna duda repasá con [este artículo](http://javascript.info/tutorial/object-conversion).


### Hoisting

¿Cuál es el output o salida en consola luego de ejecutar este código? Explicar por qué:

```javascript
function test() {
   console.log(a); // undefined ya que se ha reservado espacio en memoria
   //para 'var a', pero aun no se sabe su valor.
   console.log(foo()); // 2. Se ejecuta la función pese a estar declarada mas abajo

   var a = 1;
   function foo() {
      return 2;
   }
}

test();
```

Y el de este código? :

```javascript
var snack = 'Meow Mix';

function getFood(food) {
    if (food) {
        var snack = 'Friskies';
        return snack;
    }
    return snack;
}

getFood(false); // undefined el scope de Meow Mix esta fuera de la funcion,
//y al pasar el false, la variable snack creada dentro de la funcion, no tiene valor asignado 
```


### This

¿Cuál es el output o salida en consola luego de ejecutar esté código? Explicar por qué:

```javascript
var fullname = 'Juan Perez';
var obj = {
   fullname: 'Natalia Nerea',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
         return this.fullname;
      }
   }
};

console.log(obj.prop.getFullname());//Aurelio De Rosa, ya que en el contexto de la funcion en 'getFullname' de prop: el this toma el valor de 'fullname' y lo retorna

var test = obj.prop.getFullname;

console.log(test()); // Juan Perez, en este caso el entorno es global y this toma Juan Perez
```

### Event loop

Considerando el siguiente código, ¿Cuál sería el orden en el que se muestra por consola? ¿Por qué?

```javascript
function printing() {
   console.log(1); // 1, se encuentra primero y lo ejecuta
   setTimeout(function() { console.log(2); }, 1000);// 4, queda ultimo por el intervalo de tiempo colocado
   setTimeout(function() { console.log(3); }, 0);// 3, al tener intervalo 0, se ejecuta antes que 2
   console.log(4); //2, porque aunque el intervalo de 3 es 0, debe ejecutarlo y demora mas
}

printing();
```
