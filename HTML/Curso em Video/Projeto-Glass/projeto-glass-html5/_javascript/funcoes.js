const icone = document.getElementById('icone');

const home = document.getElementById('home');
const specs = document.getElementById('specs');
const fotos = document.getElementById('fotos');
const multimidia = document.getElementById('multimidia');
const fale_conosco = document.getElementById('fale-conosco');

function mudarFoto(icone)
{
    icone.src = icone;
}

home.addEventListener("mouseenter", () => mudarFoto("../_imagens/home.png"));
specs.addEventListener("mouseenter", () => mudarFoto("../_imagens/especificacoes.png"));
fotos.addEventListener("mouseenter", () => mudarFoto("../_imagens/fotos.png"));
multimidia.addEventListener("mouseenter", () => mudarFoto("../_imagens/multimidia.png"));
fale_conosco.addEventListener("mouseenter", () => mudarFoto("../_imagens/contato.png"));

home.addEventListener("mouseleave", () => mudarFoto("../_imagens/glass-oculos-preto-peq.png"));
specs.addEventListener("mouseleave", () => mudarFoto("../_imagens/glass-oculos-preto-peq.png"));
fotos.addEventListener("mouseleave", () => mudarFoto("../_imagens/glass-oculos-preto-peq.png"));
multimidia.addEventListener("mouseleave", () => mudarFoto("../_imagens/glass-oculos-preto-peq.png"));
fale_conosco.addEventListener("mouseleave", () => mudarFoto("../_imagens/glass-oculos-preto-peq.png"));