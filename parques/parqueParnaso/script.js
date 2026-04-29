
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
    "../../images/parqueMontanhas/pedraTartaruga/pedraTartaruga.png",
    "../../images/parqueMontanhas/pedraTartaruga/vistaPedraTartaruga.png",
    "../../images/parqueMontanhas/pedraCamelo/imgPedraCamelo.png",
    "../../images/parqueMontanhas/pedraCamelo/imgPedraCamelo2.png"
]);

criarSlideShow("slide-tresPicos", [
    "../../images/parqueTresPicos/trilhaPedraElefante/pedraElefante.png",
    "../../images/parqueTresPicos/trilhaPedraElefante/pedraElefante2.png",
    "../../images/parqueTresPicos/cachuFrades/imgCachuFrades2.png",
    "../../images/parqueTresPicos/trilhaPedraElefante/pedraElefante3.png"
]);
