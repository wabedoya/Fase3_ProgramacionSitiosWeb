// HTML equivalencias

console.group("Equivalencia de datos")

function ByteDatos(seleccion2, valorEquivalencia){
    switch (seleccion2){
        case ("Kilobytes"):
             return (valorEquivalencia / 1000)
                              
        case ("Megabytes"):
            return (valorEquivalencia / 1000000)
            
        case ("Gigabytes"):
            return (valorEquivalencia / 1000000000)
        case ("Terabytes"):
            return (valorEquivalencia / 1000000000000)                  
        default:
            return (valorEquivalencia)
    }
}
function KiloBytesDatos(seleccion2, valorEquivalencia){
    switch (seleccion2){
        case ("Bytes"):
            return (valorEquivalencia * 1000)
                                 
        case ("Megabytes"):
            return (valorEquivalencia / 1000)
                
        case ("Gigabytes"):
            return (valorEquivalencia / 1000000)
        case ("Terabytes"):
            return (valorEquivalencia / 1000000000)                  
        default:
            return (valorEquivalencia)
        }
    
}
function MegaBytesDatos(seleccion2, valorEquivalencia){
    switch (seleccion2){
        case ("Bytes"):
            return (valorEquivalencia * 1000000)
                                 
        case ("Kilobytes"):
            return (valorEquivalencia * 1000)
                
        case ("Gigabytes"):
            return (valorEquivalencia / 1000)
        case ("Terabytes"):
            return (valorEquivalencia / 1000000)                  
        default:
            return (valorEquivalencia)
        }
    
} 
function GigaBytesDatos(seleccion2, valorEquivalencia){
    switch (seleccion2){
        case ("Bytes"):
            return (valorEquivalencia * 1000000000)
                                 
        case ("Kilobytes"):
            return (valorEquivalencia * 1000000)
                
        case ("Megabytes"):
            return (valorEquivalencia * 1000)
        case ("Terabytes"):
            return (valorEquivalencia / 1000)                  
        default:
            return (valorEquivalencia)
        }
    
}    
function TeraBytesDatos(seleccion2, valorEquivalencia){
    switch (seleccion2){
        case ("Bytes"):
            return (valorEquivalencia * 1000000000000)
                                 
        case ("Kilobytes"):
            return (valorEquivalencia * 1000000000)
                
        case ("Megabytes"):
            return (valorEquivalencia * 1000000)
        case ("Terabytes"):
            return (valorEquivalencia * 1000)                  
        default:
            return (valorEquivalencia)
        }
    
}        
 
function IngresoDatosEquivalencia(){
    var input4 = document.getElementById("inputSelect1");
    var valorEquivalencia= parseFloat(input4.value)
    var seleccion1 = document.getElementById("inputGroupSelect1").value;
    var  seleccion2= document.getElementById("inputGroupSelect2").value;
    switch (seleccion1){
        case ("Bytes"):
            var resultado = ByteDatos(seleccion2, valorEquivalencia);
            break;
                                 
        case ("Kilobytes"):
            var resultado = KiloBytesDatos(seleccion2, valorEquivalencia);
            break;
                
        case ("Megabytes"):
            var resultado = MegaBytesDatos(seleccion2, valorEquivalencia);
            break;
        case ("Gigabytes"):
            var resultado = GigaBytesDatos(seleccion2, valorEquivalencia);
            break;
                             
        default:
            var resultado = TeraBytesDatos(seleccion2, valorEquivalencia);
            break;
    }
    document.getElementById("inputSelect2").value = resultado ;
    var optSelect1 = document.getElementById("inputGroupSelect1");
    var seleccionOpcion1 = optSelect1.value;
    var optSelect2 = document.getElementById("inputGroupSelect2");
    var seleccionOpcion2 = optSelect2.value;
    document.getElementById("resultadoEquivalencia").innerText = `${valorEquivalencia}  ${seleccionOpcion1}  equivalen a ${resultado} ${seleccionOpcion2}`;
    
}

console.groupEnd();