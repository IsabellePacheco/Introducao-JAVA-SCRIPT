const Clicou = () => {
    let num1 = parseInt (document.getElementById("num1").value)
    let num2 = parseInt (document.getElementById("num2").value)
    let soma = num1 + num2
    document.getElementById("resultado").innerText = "O resultado é igual a:" + soma
}