
//Definicion de variables.
let nombre
let edad 
let altura
let peso
let kilometros 

//Definicion de la constate para la funcion de orden superior class DATE.
const fecha = new Date();
let ahora = fecha.getDay();

//Creacion de la clase Usuario.
class Usuario {
constructor (nombre, edad, altura, peso, kilometros){
//Comprobacion de que ingrese un valor, que si presiona enter sin cargar un valor o presione ESC no lo permita avanzar.
    this.nombre = prompt ('Ingrese su nombre: ');
    while ((this.nombre === "") || (this.nombre == null)){
                                                alert ('Ingrese su nombre por favor para continuar');
                                                this.nombre = prompt ('Ingrese su nombre: ');
                                               }
//Solicitamos ingrese su edad al usuario, lo parseamos a entero y ese valor toma la variable "edad".
    this.edad = parseInt (prompt ('Ingresa tu edad: '));
    while ((this.edad == 0 ) || isNaN(this.edad) || (this.edad === null) || (this.edad === "")) 
                                                                {
                                                                    alert (this.nombre+' ingresa tu edad por favor para continuar.');
                                                                    this.edad = prompt ('Ingrese su edad: ');
                                                                }
//Comprobacion de que ingrese un valor, que si coloca un 0 o presione solo ESC o no cargue su altura o cargue una letra no lo permita avanzar.                                                                
    this.altura  = parseInt (prompt ('Ingrese su altura: '));
    while ((this.altura == 0 ) || isNaN(this.altura) || (this.altura === null) || (this.altura === "")) 
                                                                {
                                                                    alert (this.nombre+' ingresa tu altura por favor para continuar.');
                                                                    this.altura = prompt ('Ingrese su altura: ');
                                                                }

//Comprobacion de que ingrese un valor, que si coloca un 0 o presione solo ESC o no cargue su peso o cargue una letra no lo permita avanzar.                                                                
    this.peso =  parseInt (prompt ('Ingrese su peso: '));
    while ((this.peso == 0 ) || isNaN(this.peso) || (this.peso === null) || (this.peso === "")) 
                                                                {
                                                                    alert (this.nombre+' ingresa tu peso por favor para continuar.');
                                                                    this.peso = prompt ('Ingrese su peso: ');
                                                                }
//Comprobacion de que ingrese un valor, que si coloca un 0 o presione solo ESC o no cargue sus kilometros realizados no lo permita avanzar.
    this.kilometros = parseFloat (prompt('¿Cuántos kilometros realizaste ' +this.nombre+ ' hoy?'))
    while ((this.kilometros === "") || isNaN(this.kilometros) ||(this.kilometros == 0) || (this.kilometros === null)) 
                                                                {
                                                                    alert (this.nombre+' ingresa los kilometros que realizaste el dia de hoy. \nRecorda que debes colocar un número. \nUtiliza el punto si vas a colocar un valor decimal.');
                                                                    this.kilometros = parseInt (prompt('¿Cuántos kilometros realizaste ' +this.nombre+ ' hoy?'));
                                                                }
                                                    }   
//El metodo "calcularImc" calcula el indice de masa corporal del usuario.
//Con la funcion de orden superior Math se lo redondea para tener un valor mas preciso.      
//* ESTE CALCULO LA IDEA ES UTILIZARLO EN UN FUTURO EN EL PROYECTO PERO YA LO DEFINO *//                                            
            
    calcularImc()
    {
    let imc = (this.peso /(this.altura*this.altura))*10000;
    alert (this.nombre+' tu indice de masa corporal es de '+(Math.floor(imc))+'.');    
    }
//Funcion "caminar" calcula los pasos por kilometro realizado y condicionales para saber si llego al objetivo.
//La cantidad de pasos aproximado por cada kilometro son 1500.
//La cantidad de pasos recomendado por dia son minimo 10000.
    caminar() 
                {
                let pasosRealizados = this.kilometros * 1500;
                if (pasosRealizados >= 10000)
                                            {
                                             //Condicional para determinar el dia en que realizo el ejercicio.   
                                                                if (ahora == 1)
                                                                {
                                                                    alert ('Felicitaciones hoy lunes caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+this.nombre+' !!!');
                                                                }else if (ahora == 2)
                                                                {
                                                                    alert ('Felicitaciones hoy martes caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+this.nombre+' !!!');
                                                                }else if (ahora == 3)
                                                                {
                                                                    alert ('Felicitaciones hoy miercoles caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+this.nombre+' !!!');
                                                                }else if (ahora == 4)
                                                                {
                                                                    alert ('Felicitaciones hoy jueves caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+this.nombre+' !!!');
                                                                }else if (ahora == 5)
                                                                {
                                                                    alert ('Felicitaciones hoy viernes caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+this.nombre+' !!!');
                                                                }else if (ahora == 6)
                                                                {
                                                                    alert ('Felicitaciones hoy sabado caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+this.nombre+' !!!');
                                                                }else if (ahora == 7)
                                                                {
                                                                    alert ('Felicitaciones hoy domingo caminaste lo recomendado por día que son más de 10000 pasos. \nRealizaste '+pasosRealizados+ ' pasos hoy. \n¡¡¡A seguir así '+this.nombre+' !!!');
                                                                }
                                            }
                                            else
                                            {
                                                alert (this.nombre+' caminaste '+pasosRealizados+ ' pasos hoy '+(fecha.toDateString()) +' , lo recomendado es hacer mínimo 10000 pasos por día.\n¡¡¡Ánimo a seguir intentando!!!');
                                            }
                                            
                                        }
           
                }
                
//Creacion de un objeto con sus respectivos datos.
const usuario1 = {nombre:'Cecilia', edad: 37, altura: 155, peso: 81, kilometros: 5};

//Creacion de la constante para poder ingresar un nuevo objeto.
const usuario3 = new Usuario (nombre, edad, altura, peso, kilometros);

//Definicion del array donde se alojaran los usuarios.
//Agregamos un objeto literal al array, previamente agregue un objeto.
const listaDeUsuarios = [usuario1,{nombre: 'Azul', edad: 17 , altura: 180, peso: 78, kilometros: 9}];

//Utilizo el metodo PUSH para agregar el nuevo objeto al array.
listaDeUsuarios.push (usuario3);

//Utilizo el metodo de busqueda "MAP" para obtener un array solo con los nombres de los usuarios.
//Lo muestro por consola.
const nombreListaDeUsuarios = listaDeUsuarios.map ((soloNombre) => soloNombre.nombre);
console.log (nombreListaDeUsuarios);

//Utilizo el metodo "SORT" para ordenar el array por orden alfabetico.
//Lo muestro por tabla.
listaDeUsuarios.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.table(listaDeUsuarios);

//Invoco a las funciones declaradas en la clase para poder realizar los calculos.
usuario3.caminar();
usuario3.calcularImc();

//Despedida
alert ('¡¡¡Gracias por utilizar esta web y por estar interesado en mantenerte en forma!!!');




