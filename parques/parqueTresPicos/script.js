
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
    "../parqueMontanhas/images/pedraTartaruga/pedraTartaruga.png",
    "../parqueMontanhas/images/pedraTartaruga/vistaPedraTartaruga.png",
    "../parqueMontanhas/images/pedraTartaruga/vistaPedraTartaruga3.png",
    "../parqueMontanhas/images/pedraCamelo/imgPedraCamelo.png"
]);

criarSlideShow("slide-parnaso", [
    "../parqueParnaso/images/trilhaPedraSino/pedraSino.png",
    "../parqueParnaso/images/trilhaPedraSino/imgVistaPedraSino.png",
    "../parqueParnaso/images/trilha360/360II.png"
]);
