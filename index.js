console.log("hola mundo!");

//Declarar variables
var total = 0;
var monto = 0;

//Asignar elementos del documento a variables
var montoTxt = document.getElementById("monto");
var totalMsg= document.getElementById("totalMsg");
var descripcionTxt = document.getElementById("descripcion");
var listaTicket = document.getElementById("ticket");

//Calcular el total
function calcularTotal() {
    //obtener el monto del campo de texto
    monto = montoTxt.value;
    monto = parseInt(monto); //resolviendo conflicto de ionic -- revisar error
    
    total = total + monto;
   
    //Imprimir Total en pagina
    totalMsg.innerHTML = "Total: " + total;

    imprimirTicket(monto);
}

function imprimirTicket(monto) {

//Crear elementos de lista
     var elementoTicket = document.createElement("ion-item"); //elemento de lista
     var labelElemento = document.createElement("ion-label"); //etiqueta de elemento

//Crear el texto para la etiqueta
     labelElemento.innerHTML = descripcionTxt.value + " : $" + monto;
//Asignar la etiqueta en el elemento de la lista
     elementoTicket.appendChild(labelElemento);

//Inyectar el elemento creado en la lista 
     listaTicket.appendChild(elementoTicket);

//Limpiar campos de texto
    descripcionTxt.value = "";
    montoTxt.value = "";

}