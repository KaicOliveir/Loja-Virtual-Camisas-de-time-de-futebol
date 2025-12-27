// ===============================
// MENU MOBILE
// ===============================

var MenuItens = document.getElementById("MenuItens");

// Menu começa fechado
MenuItens.style.maxHeight = "0px";

function menucelular() {
    if (MenuItens.style.maxHeight === "0px") {
        MenuItens.style.maxHeight = "300px";
    } else {
        MenuItens.style.maxHeight = "0px";
    }
}

var produtosImg = document.getElementById("produtosImg");
var produtoMiniatura = document.getElementsByClassName("produtoMiniatura");

for (let i = 0; i < produtoMiniatura.length; i++) {
    produtoMiniatura[i].onclick = function () {
        produtosImg.src = this.src;
    };
}