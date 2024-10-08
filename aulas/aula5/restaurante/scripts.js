function calcularTotal(){
    var precoPrato = parseFloat(document.getElementById('prato').value);
    var quantidade = parseInt(document.getElementById('quantidade').value);

    if(precoPrato === 0){
        document.getElementById('resultado').textContent = "Por favor, selecione seu prato"
    
    }else if(quantidade < 0 || quantidade > 30){
        document.getElementById('resultado').textContent = "Quantidade inválida";
    }  
    
    else{
        var total = precoPrato * quantidade;
        document.getElementById('resultado').textContent = "Total a Pagar é " + total.toFixed(2)
    }
}