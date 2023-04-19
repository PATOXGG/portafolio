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


