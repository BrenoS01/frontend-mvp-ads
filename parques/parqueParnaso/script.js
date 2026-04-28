
function criarSlideShow(classe, imagens, tempo = 4000) {
    let intervalo;
    let index = 0;
    const elemento = document.querySelector(`.${classe}`);

    function iniciar() {
        intervalo = setInterval(() => {
            index = (index + 1) % imagens.length;
            elemento.src = imagens[index];
        }, tempo);
    }

    function parar() {
        clearInterval(intervalo);
    }

    elemento.addEventListener("mouseenter", parar);
    elemento.addEventListener("mouseleave", iniciar);

    iniciar();
}

criarSlideShow("slide-montanha", [
    "/ecoSerra/inicio/images/trilhas/pedraTartaruga.png",
    "/ecoSerra/inicio/images/trilhas/vistaPedraTartaruga.png",
    "/ecoSerra/inicio/images/trilhas/pedraCamelo/imgPedraCamelo.png",
    "/ecoSerra/inicio/images/trilhas/pedraCamelo/imgPedraCamelo2.png",
    "/ecoSerra/parques/parqueMontanhas/images/pedraAlpina/pedraAlpina.png"
]);

criarSlideShow("slide-tresPicos", [
    "/ecoSerra/inicio/images/trilhas/trilhaPedraElefante/pedraElefante.png",
    "/ecoSerra/inicio/images/cachoeiras/cachuFrades/imgCachuFrades2.png",
    "/ecoSerra/inicio/images/trilhas/trilhaPedraElefante/pedraElefante3.png"
]);
