// Carne = 400 gr por pessoa + de 6 horas 650gr
// Cerveja - 1200 ml por pessoa + 6 horas 2000 ml
// Refrigerante/agua = 1000 ml por pessoa + 6 horas 1500ml

// crianças valem por 0,5



function calcular() {

    let adultos = document.getElementById('adultos').value;
    let criancas = document.getElementById('criancas').value;
    let duracao = document.getElementById('duracao').value;

    let divResultado = document.getElementById('resultado');

    if (duracao >= 6) {
        var calcCarne = 650;
        var calcCerveja = 2000;
        var calcRefrigeranteAgua = 1500;
    } else {
        var calcCarne = 400;
        var calcCerveja = 1200;
        var calcRefrigeranteAgua = 1000;
    }

    let qdtCarne = (adultos * calcCarne) + (criancas * (calcCarne * 0.5));
    let qdtCerveja = adultos * calcCerveja;
    let qdtRefrigeranteAgua = (adultos * calcRefrigeranteAgua) + (criancas * (calcRefrigeranteAgua * 0.5));

    divResultado.innerHTML = "<p>" + qdtCarne / 1000 + " Kg de Carne</p>";
    divResultado.innerHTML += "<p>" + Math.ceil(qdtCerveja / 355) + " Latas de Cerveja</p>";
    divResultado.innerHTML += "<p>" + Math.ceil(qdtRefrigeranteAgua / 2000) + " Garrafa(s) de 2l de Bebidas</p>";



}