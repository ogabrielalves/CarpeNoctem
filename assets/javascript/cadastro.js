function cadastrar() {
    let idNome = nome.value;
    let idEmail = email.value;
    let idSenha = senha.value;
    let idRSenha = rsenha.value;

    if (idNome == "" || idEmail == "" || idSenha == "" || idRSenha == "") {
        erro.innerHTML = `Preencha todos os campos!`;
    }
    else if (idSenha != idRSenha) {
        erro.innerHTML = `As senhas estão diferentes`;
    }
    else {
        window.location.href = "login.html";
        setTimeout("cadastrar()", 4500);
    }
}