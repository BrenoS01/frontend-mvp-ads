
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
    "../inicio/images/trilhas/pedraTartaruga.png",
    "../inicio/images/trilhas/vistaPedraTartaruga.png",
    "../inicio/images/trilhas/pedraCamelo/imgPedraCamelo.png",
    "../inicio/images/trilhas/pedraCamelo/imgPedraCamelo2.png"
]);

criarSlideShow("slide-tresPicos", [
    "../inicio/images/trilhas/trilhaPedraElefante/pedraElefante.png",
    "../inicio/images/trilhas/trilhaPedraElefante/pedraElefante2.png",
    "../inicio/images/cachoeiras/cachuFrades/imgCachuFrades2.png",
    "../inicio/images/trilhas/trilhaPedraElefante/pedraElefante3.png"
]);

criarSlideShow("slide-parnaso", [
    "../inicio/images/trilhas/trilhaPedraSino/pedraSino.png",
    "../inicio/images/trilhas/trilha360/360II.png",
    "../inicio/images/cachoeiras/cachuParqueNacional/doisIrmaosParqueNacional.png",
    "../inicio/images/trilhas/trilhaPedraSino/imgVistaPedraSino.png"
]);


// criarSlideShow("slide-360", [
//     "../inicio/images/trilhas/trilha360/360II.png",
//     "../inicio/images/trilhas/trilha360/360III.png",
//     "../inicio/images/trilhas/trilha360/360IV.png"
// ]);