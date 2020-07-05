var modo = document.querySelector("#select");
var btnComecar = document.querySelector("#btnComecar");
var erro = document.querySelector("#erro");
var msg = document.querySelector("#msg");
var btnlimpar = document.querySelector("#btnlimpar");
var placarx = document.querySelector("#placarx");
var placaro = document.querySelector("#placaro");
var contx = 0;
var conto = 0;

// Variáveis para modo == singleplayer;
var jogo = [];
var posicoes = [];
var jogador = "X";
var cpu = "O";
var nivel = 1;

// Variáveis para modo == multiplayer;
var player1 = "X";
var player2 = "O";
var TurnoDe = player1;
var FimJogo = false;

// Mais Variáveis para modo == singleplayer;
var Turno = jogador;
var Fim = false;

// Mais Variáveis para modo == multiplayer;
/*
 * titleplacar;
 * txtX;
 * txtO;
 * txtVez;
 * player;
 * colunas;
 * p1, p2, p3, p4, p5, p6, p7, p8, p9;
 * vencedor;
 */

btnComecar.onclick = function () {

    erro.innerHTML = '';

    switch (modo.value) {

        //SINGLEPLAYER
        case 'Singleplayer':
            erro.className = '';

            

            break;

        //MULTIPLAYER
        case 'Multiplayer':
            erro.className = '';

            var titleplacar = document.querySelector("#titleplacar");
            titleplacar.appendChild(document.createTextNode("Placar"));
            var txtX = document.querySelector("#txtX");
            txtX.appendChild(document.createTextNode("Vitórias de X: "));
            var txtO = document.querySelector("#txtO");
            txtO.appendChild(document.createTextNode("Vitórias de O: "));
            var txtVez = document.querySelector("#txtVez");
            txtVez.appendChild(document.createTextNode("Vez de: "));


            atualizar();
            ativarColunas();

            function atualizar() {

                if (FimJogo) { return; }

                if (TurnoDe == player1) {

                    var player = document.querySelectorAll("div#VezDe img")[0];
                    player.setAttribute("src", "img/x.png");

                } else {

                    var player = document.querySelectorAll("div#VezDe img")[0];
                    player.setAttribute("src", "img/o.png");

                }

            };

            function ativarColunas() {

                var colunas = document.getElementsByClassName('col');
                for (i = 0; i < colunas.length; i++) {

                    colunas[i].addEventListener("click", function () {

                        if (FimJogo) { return; }

                        if (this.getElementsByTagName('img').length == 0) {

                            if (TurnoDe == player1) {

                                this.innerHTML = "<img src='img/x.png' width='140px' style='margin-left: 10px; margin-top: 5px'>";
                                this.setAttribute("jogar", player1);
                                TurnoDe = player2;

                            } else {

                                this.innerHTML = "<img src='img/o.png' width='140px' style='margin-left: 10px; margin-top: 5px'>";
                                this.setAttribute("jogar", player2);
                                TurnoDe = player1;

                            }
                            atualizar();

                            verificar();

                        }

                    });//addevent

                }//for

            };

            function verificar() {

                var p1 = document.getElementById('p1').getAttribute('jogar');
                var p2 = document.getElementById('p2').getAttribute('jogar');
                var p3 = document.getElementById('p3').getAttribute('jogar');

                var p4 = document.getElementById('p4').getAttribute('jogar');
                var p5 = document.getElementById('p5').getAttribute('jogar');
                var p6 = document.getElementById('p6').getAttribute('jogar');

                var p7 = document.getElementById('p7').getAttribute('jogar');
                var p8 = document.getElementById('p8').getAttribute('jogar');
                var p9 = document.getElementById('p9').getAttribute('jogar');

                var vencedor = '';

                console.log(`P1: ${p1}`);
                console.log(`P2: ${p2}`);
                console.log(`P3: ${p3}`);
                console.log(`P4: ${p4}`);
                console.log(`P5: ${p5}`);
                console.log(`P6: ${p6}`);
                console.log(`P7: ${p7}`);
                console.log(`P8: ${p8}`);
                console.log(`P9: ${p9}`);

                if (((p1 == p2 && p1 == p3) || (p1 == p4 && p1 == p7) || (p1 == p5 && p1 == p9) && p1 != '')) {
                    vencedor = p1;
                } else if (((p5 == p4 && p5 == p6) || (p5 == p2 && p5 == p8) || (p5 == p3 && p5 == p7) && p5 != '')) {
                    vencedor = p5;
                } else if (((p9 == p7 && p9 == p8) || (p9 == p3 && p9 == p6) && p9 != '')) {
                    vencedor = p9;
                } else if (p1 != '' && p2 != '' && p3 != '' && p4 != '' && p5 != '' && p6 != '' && p7 != '' && p8 != '' && p9 != '') {
                    msg.appendChild(document.createTextNode(`Empate, não houve vencedor e perdedor nesta rodada!`));
                    msg.className = 'alert alert-success mx-auto w-50 text-center d-block mt-3';

                    btnlimpar.appendChild(document.createTextNode('Limpar'));
                    btnlimpar.className = 'btn btn-dark mx-auto d-block';
                }

                if (vencedor != '') {

                    FimJogo = true;

                    msg.appendChild(document.createTextNode(`O vencedor desta rodada foi o ${vencedor}`));
                    msg.className = 'alert alert-success mx-auto w-50 text-center d-block mt-3';

                    btnlimpar.appendChild(document.createTextNode('Limpar'));
                    btnlimpar.className = 'btn btn-dark mx-auto d-block';

                }

                if (TurnoDe == player2 && FimJogo == true) {
                    // 'X' venceu
                    contx++;
                    placarx.innerHTML = '';
                    placarx.appendChild(document.createTextNode(contx));

                } else if (TurnoDe == player1 && FimJogo == true) {
                    // 'O' venceu
                    conto++;
                    placaro.innerHTML = '';
                    placaro.appendChild(document.createTextNode(conto));

                }

            };

            break;

        //DEFAULT ERRO
        default:
            erro.appendChild(document.createTextNode("Erro! Selecione um modo de jogo!"));
            erro.className = 'alert alert-danger mx-auto w-50 text-center d-block mt-3 mt-4';

    }

};

btnlimpar.onclick = function () {

    p1.innerHTML = '';
    p2.innerHTML = '';
    p3.innerHTML = '';
    p4.innerHTML = '';
    p5.innerHTML = '';
    p6.innerHTML = '';
    p7.innerHTML = '';
    p8.innerHTML = '';
    p9.innerHTML = '';

    p1.setAttribute("jogar", '');
    p2.setAttribute("jogar", '');
    p3.setAttribute("jogar", '');
    p4.setAttribute("jogar", '');
    p5.setAttribute("jogar", '');
    p6.setAttribute("jogar", '');
    p7.setAttribute("jogar", '');
    p8.setAttribute("jogar", '');
    p9.setAttribute("jogar", '');

    FimJogo = false;

    msg.innerHTML = '';
    btnlimpar.innerHTML = '';
    msg.className = '';
    btnlimpar.className = '';

};