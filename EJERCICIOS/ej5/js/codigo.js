function show(){
    document.getElementById("foto").src = e.target.src;
    document.getElementById("descripcion").textContent =  e.target.alt;
}
document.getElementById("lista").addEventListener("click", click_lista);