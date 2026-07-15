// =========================
// KAPPUZ
// script.js
// =========================

// Atualiza o ano automaticamente
const direitos = document.querySelector(".direitos");

if (direitos) {
    direitos.innerHTML = "© " + new Date().getFullYear() + " Kappuz";
}

// Revela os cards quando aparecem na tela
const elementos = document.querySelectorAll(".card, .item");

const observer = new IntersectionObserver((entradas) => {

    entradas.forEach((entrada) => {

        if (entrada.isIntersecting) {

            entrada.target.classList.add("mostrar");

        }

    });

}, {
    threshold: 0.2
});

elementos.forEach((elemento) => {

    elemento.classList.add("escondido");
    observer.observe(elemento);

});

// Botão voltar ao topo
const topo = document.createElement("button");

topo.innerHTML = "⬆";
topo.className = "topo";

document.body.appendChild(topo);

window.addEventListener("scroll", () => {

    if (window.scrollY > 350) {

        topo.classList.add("ativo");

    } else {

        topo.classList.remove("ativo");

    }

});

topo.onclick = () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

};

// Desabilita o botão por um instante para evitar vários cliques
document.querySelectorAll(".botao").forEach((botao) => {

    botao.addEventListener("click", () => {

        botao.style.pointerEvents = "none";

        setTimeout(() => {

            botao.style.pointerEvents = "auto";

        }, 700);

    });

});

// Detecta perda de internet
window.addEventListener("offline", () => {

    alert("Sem conexão com a internet.");

});
