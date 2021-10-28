//Calculo valor venta y ganancia
console.group("Calculo de valor producto");

// Funcion para el calculo ganancia
function calculoGanancia(compra,utilidad){
      return (compra*utilidad/100)
}

// Funcion para el calculo valor venta
function calculoVenta(compra, utilidad, iva){
    return  ((compra*(utilidad + iva))/100) + compra;
}
//funcion de validacion que solo el usuario pueda ingresar numeros

function validacion(evt){
    var code= (evt.which) ? evt.which : evt.keycode;
    if (code == 8 || code == 46){
        return true;
    } else if (code>=48 && code<=57) {
        return true;
    } else{
        return false;
    }
}

function valorVenta(){
    var input = document.getElementById("inputValorCompra");
    var valor = parseFloat(input.value);
    var input2 = document.getElementById("inpututilidad");
    var valor2 = parseFloat(input2.value);
    var input3 = document.getElementById("inputiva");
    var valor3 = parseFloat(input3.value);
    var ventaTotal = calculoVenta(valor, valor2, valor3);
    document.getElementById("resultadoVenta").value = (`$ ${new Intl.NumberFormat().format(ventaTotal)}`);
    var ganancia = calculoGanancia(valor, valor2);
    document.getElementById("resultadoGanancia").value = (`$ ${new Intl.NumberFormat().format(ganancia)}`);

    
}  
console.groupEnd();






