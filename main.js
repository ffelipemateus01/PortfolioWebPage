// executa após carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
    const savedTheme = localStorage.getItem("theme");
    const icon = document.getElementById("themeIcon");
    //recupera ultima tema
    if(savedTheme === "dark"){
        document.body.classList.add("dark");
        if (icon) icon.src = "/assets/light-off.png";
    }
});