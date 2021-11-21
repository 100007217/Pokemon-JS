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

function getRndInteger(n, min, max) {
    let randoms = []
    for (let i = 0; i < n; i++) {
        randoms[i] = Math.floor(Math.random() * (max - min)) + min;
    }
    return randoms
}

function buttonOpacity(n) {
    if (document.getElementsByClassName("card")[n].style.opacity == "0.5") {
        document.getElementsByClassName("card")[n].style.opacity = "1"
    } else {
        document.getElementsByClassName("card")[n].style.opacity = "0.5";
    }
}

function listRandom() {
    document.getElementsByClassName("pokebola-button")[0].style.opacity = "0.5";
    let Valores = getRndInteger(17, 1, 17)
    console.log(Valores)
    return Valores
}

window.onload = function() {
    saludo();
    console.log(getRndInteger(1, 1, 18));
}