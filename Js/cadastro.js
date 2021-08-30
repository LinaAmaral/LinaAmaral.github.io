$(".depoimento_revendedora").hide()
$("#btn_cadastrar").prop("disabled", true)

$(".revendedoras_img").eq(0).mouseenter(function () {
    $(this).attr("src", "Imagens/Revendedoras/depoimento_rev_01.png");
})
$(".revendedoras_img").eq(0).mouseleave(function () {
    $(this).attr("src", "Imagens/Revendedoras/revendedora_01.jpg");
})
$(".revendedoras_img").eq(1).mouseenter(function () {
    $(this).attr("src", "Imagens/Revendedoras/depoimento_rev_02.png");
})
$(".revendedoras_img").eq(1).mouseleave(function () {
    $(this).attr("src", "Imagens/Revendedoras/revendedora_02.jpg");
})
$(".revendedoras_img").eq(2).mouseenter(function () {
    $(this).attr("src", "Imagens/Revendedoras/depoimento_rev_03.png");
})
$(".revendedoras_img").eq(2).mouseleave(function () {
    $(this).attr("src", "Imagens/Revendedoras/revendedora_03.jpg");
})
$(".revendedoras_img").eq(3).mouseenter(function () {
    $(this).attr("src", "Imagens/Revendedoras/depoimento_rev_04.png");
})
$(".revendedoras_img").eq(3).mouseleave(function () {
    $(this).attr("src", "Imagens/Revendedoras/revendedora_04.jpg");
})

$(".form-control").blur(function () { validar_formulario() })
$(".form-check-input").click(function () { validar_formulario() })

function validar_formulario() {
    cont_input_valido = 0

    validar_texto($(".form-control[name='nome']"))
    validar_numero($(".form-control[name='cpf']"))
    validar_email($(".form-control[name='email']"))
    validar_data($(".form-control[name='data_nascimento']"))
    validar_texto($(".form-control[name='endereco']"))
    validar_texto($(".form-control[name='cidade']"))
    validar_estado($(".form-control[name='estado']"))
    validar_numero($(".form-control[name='telefone']"))
    validar_checkbox($(".form-check-input[name='termos_de_contrato']"))
    console.log(cont_input_valido)

    if(cont_input_valido == 9){
        console.log("teste")
        $("#btn_cadastrar").prop("disabled", false)
    }else  $("#btn_cadastrar").prop("disabled", true)

}

function tornar_valido(elemento_alvo) {
    $(elemento_alvo).removeClass("invalido")
    $(elemento_alvo).addClass("valido")
}
function tornar_invalido(elemento_alvo) {
    $(elemento_alvo).removeClass("valido")
    $(elemento_alvo).addClass("invalido")
}

function validar_texto(elemento_alvo) {
    if (!($(elemento_alvo).val()))
        return
    if ($(elemento_alvo).val().length > 3) {
        tornar_valido(elemento_alvo)
        cont_input_valido += 1
    }
    else
        tornar_invalido(elemento_alvo)
}
function validar_numero(elemento_alvo) {
    if (!($(elemento_alvo).val()))
        return
    var numero = $(elemento_alvo).val()

    if (numero.length < 11)
        tornar_invalido(elemento_alvo)
    else {
        tornar_valido(elemento_alvo)
        cont_input_valido += 1
    }
}
function validar_email(elemento_alvo) {
    if (!($(elemento_alvo).val()))
        return
    let email = $(elemento_alvo).val()
    for (i in email) {
        if (email[i] == "@") {
            tornar_valido(elemento_alvo)
            cont_input_valido += 1;
            return
        }
    }tornar_invalido(elemento_alvo)
}
function validar_data(elemento_alvo) {

    if ($(elemento_alvo).val().length == 0)
        return
    const data_nascimento = new Date($(elemento_alvo).val());
    const data_atual = new Date();

    if (data_nascimento > data_atual || data_nascimento < data_atual.setFullYear(data_atual.getFullYear() - 130))
        tornar_invalido(elemento_alvo)
    else {
        tornar_valido(elemento_alvo)
        cont_input_valido += 1;
    }
}

//olhar essa lógica
function validar_estado(elemento_alvo) {
    if ($(elemento_alvo).val() == "")
        return
    tornar_valido(elemento_alvo)
    cont_input_valido += 1
}
function validar_checkbox(elemento_alvo) {
    let checkbox = $(elemento_alvo);
    if (checkbox.is(":checked"))
        cont_input_valido += 1
}




