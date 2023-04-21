
function suma(){
    /*parseint();parseFloat*/
    var num1,num2,resultado;

 
 var num1=document.getElementById("num1").value;
 var num2=document.getElementById("num2").value;
   resultado=parseInt(num1)+parseInt(num2);
 document.getElementById("resultado").innerHTML=resultado;

}
function resta(){
    var num1,num2,resultado;

 
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
      resultado=parseInt(num1)-parseInt(num2);
    document.getElementById("resultado").innerHTML=resultado;
}
/*function suma(){
    /*parseint();parseFloat
    var num1,num2,resultado;

 
 var num1=document.getElementById("num1").value;
 var num2=document.getElementById("num2").value;
   resultado=parseInt(num1)+parseInt(num2);
 document.getElementById("resultado").innerHTML=resultado;

}*/

function divide(){
    var num1,num2,resultado;

 
 var num1=document.getElementById("num1").value;
 var num2=document.getElementById("num2").value;
   resultado=parseInt(num1)/parseInt(num2);
 document.getElementById("resultado").innerHTML=resultado;
}
function multi(){
    var num1,num2,resultado;

 
 var num1=document.getElementById("num1").value;
 var num2=document.getElementById("num2").value;
   resultado=parseInt(num1)* parseInt(num2);
 document.getElementById("resultado").innerHTML=resultado;
}


function salude(){
    var num1, num2;
    parseInt(num1);
    parseInt(num2);
    var nom=document.getElementById("nombre").value;
    document.getElementById("resultado").innerHTML=nom;
}