var total;
function califica()
    {var total=0;
    	for (var x=1;x<=5;x++)
    	{
        var res=0;
        var nom="r"+x;
        var resul=document.getElementsByName(nom);
        for(var i=0;i<resul.length;i++)
        {
            if(resul[i].checked==true)
                res=parseInt(resul[i].value);
        }
        total=total+res;
        document.getElementById("total").innerHTML="Puntos obtenidos: "+total+" Puntos";
        }
        if(total>=20)
        	document.getElementById("comentario").innerHTML="EXCELENTE!!!";
        else
        	if(total==15)
        	document.getElementById("comentario").innerHTML="Regular!!";
        else
        	if(total<=15)
        	document.getElementById("comentario").innerHTML="Estudia un poco más";
    }

function generar(){
//Crear un objeto o instancia jsPDF
var doc = new jsPDF();

//Definir el tamaño de la letra
doc.setFontSize(50);
//Color del texto
doc.setTextColor(70,185,99);
doc.text(40, 20, "Tabla de resultado");
doc.setTextColor(89, 100, 101); //Color en formato RGB
doc.setFontSize(35);
doc.text(50, 35, "Checa tus resultados"); //Ubicación, Texto
doc.setTextColor(0,0,0);
doc.setFontSize(25);
doc.text(20, 50, "20 puntos o mas. Excelente. \r Tu conocimiento es avanzado :))");
doc.text(20, 70, "15 puntos. Muy bien. \r Tu conocimiento es suficiente :)");
doc.text(20, 90, "10 puntos. Regular \r Te hace falta repasar un poco :(");
doc.text(20, 110, "0 puntos. \r Vamos si se puede no te rindas :((");

var string = doc.output('datauristring');

$('iframe').attr('src', string);
}