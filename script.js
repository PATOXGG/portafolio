function saludo(){
    var nombre,apaterno,edad;

    nombre=prompt("escribr tu nombre","Nombre");
    alert("hola "+nombre);

    
}
function suma(){
    /*parseint();parseFloat*/
    var numero1,numero2,resultado;
    numero1=prompt("escribe un numero","");
    numero2=prompt("dame otro numero","");
    resultado=parseInt(numero1)+parseInt(numero2);
    alert("la suma es "+resultado);
}
function resta(){
    numero1=prompt("escribe un numero","");
    numero2=prompt("dame otro numero","");
    resultado=parseInt(numero1)-parseInt(numero2);
    alert("la resta es "+resultado);
}
function divide(){
    numero1=prompt("escribe un numero","");
    numero2=prompt("dame otro numero","");
    resultado=parseInt(numero1)/parseInt(numero2);
    alert("la division es "+resultado);
}

function sign(){
    numero1=prompt("escribe un numero","");

    resultado=parseInt(numero1);
    if(resultado<0){
        alert("es negativo");
    }
    if(resultado>0){
        alert("es positivo");
    }
}
function salude(){
    var num1, num2;
    parseInt(num1);
    parseInt(num2);
    var nom=document.getElementById("nombre").value;
    document.getElementById("resultado").innerHTML=nom;
}


function longitud(){
   var nom= document.getElementById("nombre").value;
    var long=nom.length;
    document.getElementById("r").value=long;
}

function conc(){
    var nom, ap;
    nom=document.getElementById("nombre").value;
    apellido=document.getElementById("ap").value;
    nom=nom+" ";
   var conc=nom.concat(apellido);
   document.getElementById("r").value=conc;
}

function mayus(){
    var nom, ap;
    nom=document.getElementById("nombre").value;
    apellido=document.getElementById("ap").value;
    nom=nom+" ";
   var conc=nom.concat(apellido);
    var mayusc=conc.toUpperCase();
    document.getElementById("r").value=mayusc;
}

function min(){
    var nom=document.getElementById("nombre").value;
    var ape=document.getElementById("ap").value;
    nom=nom+" ";
    var conc=nom.concat(ape);
    var minus=conc.toLowerCase();
    document.getElementById("r").value=minus;
}
function obchar(){
    var nom=document.getElementById("nombre").value;
    var indice=document.getElementById("n").value;
    var res=nom.CharAt(indice);
    document.getElementById("r").value=res;
}
function substring(){
    var nom=document.getElementById("nombre").value;
    
}
function split(){
    
    var nom=document.getElementById("nombre").value;
    var ape=document.getElementById("ap").value;
    nom=nom+" ";
    var conc=nom.concat(ape);

    var res=conc.split("");
    document.getElementById("r").value=res;
}
