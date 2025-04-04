document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("miboton2").addEventListener("click", function() {
        cambiarcolor();
    });
});



function cambiarcolor(){
    
    var contenedor = document.getElementById("contenedor");
    var color ="black";
    contenedor.style.backgroundColor=color;
    contenedor.style.position = "absolute";
    contenedor.style.width ="700px";
    contenedor.style.left ="100px";
    contenedor.style.top ="200px";
    contenedor.classList.add ("animated")
}

