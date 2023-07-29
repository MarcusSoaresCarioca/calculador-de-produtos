// const quant = parseFloat(prompt("Informe a quantidade de Produtos"))
// const tara = parseFloat(prompt("Informe a tara do produto"))
// const PesoProduto = parseFloat(prompt("Informe o peso total dos produtos"))

// const result = PesoProduto - (tara * quant)

// alert("Resultado final:" + result)

function minhaFuncao(){

    var quant = parseFloat(document.getElementById('quantidade').value)
    var tara = parseFloat(document.getElementById('tara').value)
    var peso = parseFloat(document.getElementById('peso').value)

    var result = peso - (tara * quant)

    

    

    // document.querySelector('#result').innerHTML = valor;

    document.getElementById('result').innerHTML = result;
}