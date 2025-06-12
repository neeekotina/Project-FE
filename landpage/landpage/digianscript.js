function irparaSobre() {
    const imagem = document.getElementById("isobre");
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: "smooth"
    });   
}
function irparaServ() {
    const imagem = document.getElementById("iserv");
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo( {
        top: posicaoY,
        behavior: "smooth"
    });

}
function irparaCont() {
    const imagem = document.getElementById("icont");
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: "smooth"
    });
}
function irparaInicio() {
    const imagem = document.getElementById("ini");
    const posicaoY = imagem.getBoundingClientRect().top;
    window.scrollTo({
        top: posicaoY,
        behavior: "smooth"
    });
}
