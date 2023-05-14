function calcularPrecioFinal(){
    //en cantEntradas almaceno la cantidad de entradas que ingresa un usuario
    let cantEnt = document.getElementById("CantEntradas").value;

    let desc = document.getElementById("porcDescuento").value;

    let descTotal = (cantEnt*1000) * desc/100;

    let precioFin = (cantEnt*1000) - descTotal;

    document.getElementById("precioFinal").value = precioFin;

    // document.getElementById("precioFinal2").style.display = "none";
}