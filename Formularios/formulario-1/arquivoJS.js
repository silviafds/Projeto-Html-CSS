function validaNomeCompleto() {
    var recebeNomeCompleto = document.getElementById("nomeUsuario").value;

    if(recebeNomeCompleto=="" || recebeNomeCompleto>0 || recebeNomeCompleto<0) {
        document.getElementById("erroNome").innerHTML = "Informe um nome válido"
        document.getElementById("nomeUsuario").style.borderColor = "red";
        return false;
    }
    var valorNomeCompleto = 1;
    document.getElementById("nomeUsuario").style.borderColor = "green";
    document.getElementById("erroNome").innerHTML = ""
    return true;
}


function validaCPF() {
    var cpf = document.getElementById("CPF").value;

    cpf = cpf.replace(/[\s.-]*/igm, '')
    const x = (typeof cpf)

    if (!cpf || cpf.length != 11 || cpf == "00000000000" || cpf == "11111111111" || cpf == "22222222222" || cpf == "33333333333" || cpf == "44444444444" || cpf == "55555555555" || cpf == "66666666666" || cpf == "77777777777" || cpf == "88888888888" || cpf == "99999999999" ) {
        document.getElementById("CPF").style.borderColor = "red";
        document.getElementById("erroCPF").innerHTML = "Informe um CPF válido"
        return false
    }
    
    var soma = 0
    var resto
    for (var i = 1; i <= 9; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (11 - i)
    }

    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11)) {
        resto = 0
    }

    if (resto != parseInt(cpf.substring(9, 10)) ) {
        document.getElementById("CPF").style.borderColor = "red";
        document.getElementById("erroCPF").innerHTML = "Informe um CPF válido"
        return false
    }

    soma = 0

    for (var i = 1; i <= 10; i++) {
        soma = soma + parseInt(cpf.substring(i-1, i)) * (12 - i)
    }

    resto = (soma * 10) % 11

    if ((resto == 10) || (resto == 11))  {
        resto = 0
    } 

    if (resto != parseInt(cpf.substring(10, 11) ) ) {
        document.getElementById("CPF").style.borderColor = "red";
        document.getElementById("erroCPF").innerHTML = "Informe um CPF válido"
        return false
    }
    var valorCPF = 1;
    document.getElementById("CPF").style.borderColor = "green";
    document.getElementById("erroCPF").innerHTML = ""
    return true
}


function validaDataNasc() {
    var recebeDataNascimento = document.getElementById("dataNascimento").value;
    
    if(recebeDataNascimento == "") {
        document.getElementById("dataNascimento").style.borderColor = "red";
        document.getElementById("erroDtNascimento").innerHTML = "Informe a Data de Nascimento"
        return false;
    } 
    var valorDataNascimento = 1;
    document.getElementById("dataNascimento").style.borderColor = "green";
    document.getElementById("erroDtNascimento").innerHTML = ""
    return true;
}

function validaRegiaoNascimento() {
    var recebeValidaRegiaoNasc = document.getElementById("regiaoNascimento").value;
    
    if(recebeValidaRegiaoNasc == "") {innerHTM
        document.getElementById("regiaoNascimento").style.borderColor = "red";
        document.getElementById("erroRegiaoNasc").innerHTML = "Selecione a Região"
        return false;
    }
    var valorRegiaoNascimento = 1;
    document.getElementById("regiaoNascimento").style.borderColor = "green";
    document.getElementById("erroRegiaoNasc").innerHTML = ""
    return true;
}

function validaTelefone() {
    var recebeTelefone = document.getElementById("telefone").value;

    if(recebeTelefone == "" || recebeTelefone.length > 11 || recebeTelefone.length < 11) {
        document.getElementById("telefone").style.borderColor = "red";
        document.getElementById("erroTelefone").innerHTML = "Digite o número de telefone";
        return false;
    }
    var valorTelefone = 1;
    document.getElementById("telefone").style.borderColor = "green";
    document.getElementById("erroTelefone").innerHTML = "";
    return true;
}

function validaEmail() {
    var recebeEmail = document.getElementById("emailUsuario").value;

    if(recebeEmail == "" || recebeEmail.indexOf('@') == -1 || recebeEmail.indexOf('.') == -1) {
        document.getElementById("emailUsuario").style.borderColor = "red";
        document.getElementById("erroEmail").innerHTML = "Digite um email válido";
        return false;
    }
    var valorEmail = 1;
    document.getElementById("emailUsuario").style.borderColor = "green";
    document.getElementById("erroEmail").innerHTML = "";
    return true;
}

function validaDados() {
    var dadosPreenchidos = valorNomeCompleto + valorCPF + valorTelefone + valorEmail;

    if(dadosPreenchidos == 4) {
        /*alert("Dados preenchidos com sucesso.");*/
        document.getElementById("confirmaDados").innerHTML = "Dados preenchidos com sucesso.";
        return true;
    }
    /*alert("Existem dados que não foram preenchidos com suceso. Por favor, preencha para finalizar cadastro.");*/
    document.getElementById("confirmaDados").innerHTML = "Existem dados que não foram preenchidos com suceso. Por favor, preencha para finalizar cadastro.";
    return false;
    
}