function saludo() {
    const titulo = document.getElementById("titulo");
    const d = new Date();
    let hora = d.getHours();
    console.log(hora)
    if (hora < 7 || hora > 17) {
        titulo.innerHTML = "Buenas noches";
        document.body.style.backgroundColor = "#3E3730"
    } else {
        titulo.innerHTML = "Buenos dias";
        document.body.style.backgroundColor = "rgb(238, 107, 47)"
    }
}
window.onload = function() {
    saludo();


}