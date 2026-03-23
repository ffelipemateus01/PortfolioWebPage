
// executa após carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    const basePath = window.location.pathname.includes("/pages") ? "../assets/" : "assets/";
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    //recupera ultima tema
    if(savedTheme === "dark"){
        document.body.classList.add("dark");
        if (icon) icon.src = basePath + "light-off.png";
    }
});