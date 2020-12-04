document.forms[0].onsubmit = function () {
    var formularioValido = true;

    if (document.querySelector("#nome").value.length > 20) {
        document.querySelector("#msgnome").innerHTML = "O nome deve ter no mínimo 4 e no máximo 20 caracteres!";
        document.querySelector("#nome").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgnome").innerHTML = "";
        document.querySelector("#nome").classList.remove("border-danger");
    }

    if (document.querySelector("#telefone").value.length != 11) {
        document.querySelector("#msgtelefone").innerHTML = "O número deve conter 11 caracteres!";
        document.querySelector("#telefone").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgtelefone").innerHTML = "";
        document.querySelector("#telefone").classList.remove("border-danger");
    }

    if (document.querySelector("#assunto").value.length != 11) {
        document.querySelector("#msgassunto").innerHTML = "O Assunto deve conter até 60 caracteres";
        document.querySelector("#assunto").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgassunto").innerHTML = "";
        document.querySelector("#assunto").classList.remove("border-danger");
    }

    if (document.querySelector("#msg").value.length != 11) {
        document.querySelector("#msgmsg").innerHTML = "A msg deve conter até 300 caracteres";
        document.querySelector("#msg").classList.add("border-danger");
        formularioValido = false;
    } else {
        document.querySelector("#msgmsg").innerHTML = "";
        document.querySelector("#msg").classList.remove("border-danger");
    }
    
    if (document.querySelector("#email").value.indexOf("@") == -1) {
        document.querySelector("#msgemail").innerHTML = "O email deve conter até 300 caracteres";
        document.querySelector("#email").classList.add("border-danger");
        formularioValido = false;
    }
    else {
        document.querySelector("#msgemail").innerHTML = "";
        document.querySelector("#email").classList.remove("border-danger");
    }
    return formularioValido
}