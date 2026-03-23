const basePath = window.location.pathname.includes("/pages") ? "../assets/" : "assets/";

const btn = document.getElementById("themeButton");
const icon = document.getElementById("themeIcon");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    // verifica se está ativando ou desativando o dark mode
    if(isDark){
        localStorage.setItem("theme", "dark");
        icon.src= basePath + "light-off.png";
    }
    else{
        localStorage.setItem("theme", "light");
        icon.src= basePath + "light-on.png";
    }
})