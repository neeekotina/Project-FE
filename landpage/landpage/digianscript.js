function irparaSobre() {
    const imagem = document.getElementById("isobre")
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: "smooth"
    });

    }
function irparCont() {
    const imagem = document.getElementById("iserv")
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: "smooth"
    });
}