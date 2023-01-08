var comprar_ou_vender;
var quantidade_peca;
var Saldo_peca = parseInt(prompt("Insira o saldo da peça em estoque:"));

while (Saldo_peca.length <= "0") {
    var Saldo_peca = parseInt(prompt("Insira o saldo da peça em estoque:"));

}

iniciar_programa();

function iniciar_programa() {
    comprar_ou_vender = parseInt(prompt("1 _ Para Comprar 2  _Para Vender"));
    quantidade_peca = parseInt(prompt("Quantidade de peças:"));
    //Ferificar se campos foram preenchidos
    while (comprar_ou_vender.length <= "0" || quantidade_peca.length <= "0") {
        iniciar_programa();
    }//fim

    // Iniciar a Verificação da entrar ou saida 
    switch (comprar_ou_vender) {
        case 1:
            Saldo_peca += quantidade_peca;
            alert("Saldo atualizado: " + `${Saldo_peca}`);
            reinicializar_sistema();
            break;

        case 2:

            if (Saldo_peca < quantidade_peca) {
                alert("Saldo atualizado: " + `${Saldo_peca}`);
                alert("Saldo insuficiente");
                break;
            }

            Saldo_peca -= quantidade_peca;
            alert("Saldo atualizado: " + `${Saldo_peca}`);
            reinicializar_sistema();
            break;

        default:

            iniciar_programa();
            break;
    }
}

function reinicializar_sistema() {
    var reiniciar = prompt("Deseja continuar (s) ou não (n) com a entrada de dados");

    switch (reiniciar) {
        case 'n':
            finalizar_programa();
            break;

        case 's':
            iniciar_programa();
            break;

        default:
            alert("Alternativa invalida");
            reinicializar_sistema();
            break;
    }
}

function finalizar_programa() {
    alert("Sistema encerrado");
}
