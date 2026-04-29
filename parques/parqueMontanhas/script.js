
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

criarSlideShow("slide-tresPicos", [
    "../../images/parqueTresPicos/trilhaPedraElefante/pedraElefante.png",
    "../../images/parqueTresPicos/trilhaPedraElefante/pedraElefante2.png",
    "../../images/parqueTresPicos/cachuFrades/imgCachuFrades2.png",
    "../../images/parqueTresPicos/trilhaPedraElefante/pedraElefante3.png"
]);

criarSlideShow("slide-parnaso", [
    "../../images/parqueParnaso/trilhaPedraSino/pedraSino.png",
    "../../images/parqueParnaso/trilha360/360II.png",
    "../../images/parqueParnaso/cachuDoisIrmaosParqueNacional/doisIrmaosParqueNacional2.png",
    "../../images/parqueParnaso/trilhaPedraSino/imgVistaPedraSino.png"
]);
