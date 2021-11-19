window.onload = function saludo() {
    const titulo = document.getElementById("titulo");
    const d = new Date();
    let hora = d.getHours();
    console.log(hora)
    if (hora < 7 || hora > 17) {
        titulo.innerHTML = "Buenas noches";
    } else {
        titulo.innerHTML = "Buenos dias";
    }


}