// =========================
// ANO AUTOMÁTICO
/
const ano = new Date().getFullYear();

const direitos = document.querySelector(".direitos");

if(direitos){

    direitos.innerHTML = "© " + ano + " Nome da Empresa";

}

// =========================
// BOTÕES
// =========================

document.querySelectorAll(".botao").forEach(botao=>{

    botao.addEventListener("click",()=>{

        botao.style.pointerEvents="none";

        setTimeout(()=>{

            botao.style.pointerEvents="auto";

        },600);

    });

});

// =========================
// ANIMAÇÃO DOS CARDS
// =========================

const cards=document.querySelectorAll(".card,.item");

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("mostrar");

}

});

});

cards.forEach(card=>{

card.classList.add("escondido");

observer.observe(card);

});

// =========================
// VOLTAR AO TOPO
// =========================

const topo=document.createElement("button");

topo.innerHTML="⬆";

topo.className="topo";

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topo.classList.add("ativo");

}else{

topo.classList.remove("ativo");

}

});

topo.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

// =========================
// ONLINE / OFFLINE
// =========================

window.addEventListener("offline",()=>{

alert("Você está sem internet.");

});

// =========================
// CARREGAMENTO
// =========================

window.onload=()=>{

document.body.classList.add("carregado");

};

