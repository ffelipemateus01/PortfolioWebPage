const btSeeMore = document.getElementById("btSeeMore");
const rightArea = document.getElementById("rightArea");

btSeeMore.addEventListener("click", ()=>{
    // abre pagina do chatgpt com prompt definido
    window.open("https://chatgpt.com/?prompt=Frases%20motivacionais%20para%20o%20trabalho");
});

// botão só aparece se o mouse estiver sobre o painel
rightArea.addEventListener("mouseenter", () => {
    btSeeMore.style.opacity="1";
});

rightArea.addEventListener("mouseleave", () => {
    btSeeMore.style.opacity="0";
});