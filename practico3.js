function Cumple() {
    var nombre = document.getElementById("nombre").value;
    var cumple = document.getElementById("cumple").value;

    
    var fechaCumple = new Date(cumple);
    var mesCumple = fechaCumple.getMonth() + 1; 

    if (mesCumple === 5) {
        
        document.getElementById("imagen").style.display = "block";
        document.getElementById("mensaje").innerHTML = "Felicidades obtuviste un descuento por tu cumpleaños, " + nombre + " c:";
    } else {
        
        document.getElementById("imagen").style.display = "none";
        document.getElementById("mensaje").innerHTML = "Lo sentimos no obtuviste descuento, " + nombre + " V´:";
    }
}