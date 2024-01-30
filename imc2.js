const botaoCalcularIMC=document.querySelector('btn-calcular');




botaoCalcularIMC.addEventListener('click', ()=>{
 const nomeUsuario = document.querySelector('.input-nome').value;
 const pesoUsuario = (document.querySelector('.input-peso').value.replace(',','.'));
 const alturaUsuario = (document.querySelector('.input-altura').value.replace(',','.'));
    

    let imc = calcularIMC(pesoUsuario, alturaUsuario);
    let grauObesidade = verificarGrauObesidade(imc);
    mensagem = `${nomeUsuario}, seu IMC é ${imc}! ${grauObesidade}`;
    document.querySelector('.resultado').classList.add = mensagem;
    document.querySelector('.resultado').innerHTML=mensagem; 

});

function calcularIMC(peso, altura) {
    return imc = (peso / altura ** 2).toFixed(2);
}
function verificarGrauObesidade(imc) {
    if (imc < 18.5){
        return 'Grau 0 - Magreza';
    }else if (imc < 25){
        return 'Grau 0 - Normal';
    }else if (imc < 30){
        return 'Grau 1 - Sobrepeso';
    }else if (imc < 40){
        return 'Grau 2 - Obesidade';
    }else {
        return 'Grau 3 - Obesidade Grave';
    }
}

  