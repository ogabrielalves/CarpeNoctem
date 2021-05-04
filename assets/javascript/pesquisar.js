function pesquisar() {
    let idBusca = busca.value;

    if (idBusca == "sobre") {
        window.location.href = "sobre.html";
        setTimeout("pesquisar()", 4500);
    } 
    else if (idBusca == "cadastro") {
        window.location.href = "cadastro.html";
        setTimeout("pesquisar()", 4500);
    }
    else if (idBusca == "login") {
        window.location.href = "login.html";
        setTimeout("pesquisar()", 4500);
    }
    else if (idBusca == "contato") {
        window.location.href = "contato.html";
        setTimeout("pesquisar()", 4500);
    }
    else {
        window.location.href = "NaoAchado.html";
        setTimeout("pesquisar()", 4500);
    }
}