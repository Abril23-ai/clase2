


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miboton").addEventListener("click", function() {
        mostrarmenssaje();
    });

    document.getElementById("miboton2").addEventListener("click", function() {
        cambiarcolor();
    });
});


function mostrarmenssaje() {
   
    // declaracion de variables
    var dato1;
    var dato2;
    // asignacion de id a las  variables
    dato1 = document.getElementById ("input1").value;
    dato2 = document.getElementById ("input2").value;

   

    if ( dato1.trim === ' '|| dato2.trim === ' ')
            alert(por_favor_llenar_sus_datos);        
    else
    {
      // construir mensaje
    var mensaje = "los datos son" + " " + dato1 + " y " + dato2;
    // mostrar mensaje
        (document.getElementById("resultado").innerText = mensaje);
    } 
 
}

function cambiarcolor() {

    var elemento; 

    elemento = document.getElementById("container");

   if (document.body.style.backgroundColor === "black")
    {
        document.body.style.backgroundColor = "white"
        elemento.style.position="adsolute";
        elemento.style.width = "150px";
       elemento.style.heigth = "150px";
      document.body.style.backgroundColor = "red"
    }
    
   
    else {
        document.body.style.backgroundColor === "black" 
        elemento.style.width = "150px";
        elemento.style.heigth = "150px";
        document.body.style.backgroundColor === "white"   
    }

    
}
    

