function calcularImc() {
    let { idade, peso, altura } = getDadosFormulario();
    altura = altura / 100;
    const imc = peso / (altura * altura).toFixed(2);

    const planoABasic = (100 + (idade * 10 * (imc / 10)))
    const planoAStandard = (150 + (idade * 15)) * (imc / 10)
    const planoAPremium = (200 - (imc * 10) + (idade * 20)) * (imc / 10)

    const comorbidade = Comorbidade(imc);
    const planoBBasic = 100 + (comorbidade * 10 * (imc / 10));
    const planoBStandard = (150 + (comorbidade * 15)) * (imc / 10);
    const planoBPremium = (200 - (imc * 10) + (comorbidade * 20)) * (imc / 10);

    
    
    document.getElementById('planoABasic').innerText = planoABasic.toFixed(2)
    document.getElementById('planoBBasic').innerText = planoBBasic.toFixed(2)
    
    document.getElementById('planoAStandard').innerText = planoAStandard.toFixed(2)
    document.getElementById('planoBStandard').innerText = planoBStandard.toFixed(2)
    
    document.getElementById('planoAPremium').innerText = planoAPremium.toFixed(2)
    document.getElementById('planoBPremium').innerText = planoBPremium.toFixed(2)

    document.getElementById('tabelaDeValores').style.display = "table";
}





function getDadosFormulario() {
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    return { idade, peso, altura };
}
function Comorbidade(imc) {
    if (imc < 18.5) {
        return 10; 
    } else if (imc >= 18.5 && imc < 24.9) {
        return 1; 
    } else if (imc >= 25 && imc < 29.9) {
        return 6; 
    } else if (imc >= 30 && imc < 34.9) {
        return 10; 
    } else if (imc >= 35 && imc < 39.9) {
        return 20; 
    } else {
        return 30; 
    }
}
