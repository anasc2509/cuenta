var cantidad_dinero;
var cantidad_ingreso; 
var cantidad_retiro; 
function actualizaSaldo(){
    if(i==0){
       
        document.getElementById("mensaje").innerHTML=+ cantidad_dinero;
        document.write("Necesita indicar una cntidad de dinero.") + cantidad_dinero;
    }
    else{
       
        document.getElementById("mensaje").innerHTML=+ cantidad_dinero;
         document.write("Se han ingresado") + cantidad_ingreso;
    }
}