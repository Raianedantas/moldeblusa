
   //função para Altura do Corpo
function evalInput(strInput) {
    // Valor fixo
    var valorFixo = "alturadocorpo=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o busto 
		function evalInput1(strInput) {
    // Valor fixo
    var valorFixo = "busto=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

//função para a altura do cintura 
		function evalInput2(strInput) {
    // Valor fixo
    var valorFixo = "cintura=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }
    
    //função para o comprimento total
		function evalInput3(strInput) {
    // Valor fixo
    var valorFixo = "comprimentototal=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o largura do braço 
		function evalInput4(strInput) {
    // Valor fixo
    var valorFixo = "larguradobraco=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o ombro
		function evalInput5(strInput) {
    // Valor fixo
    var valorFixo = "ombro=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }

 //função para o separação do busto
		function evalInput6(strInput) {
    // Valor fixo
    var valorFixo = "separacaodobusto=";

    // Adiciona o valor fixo ao valor inserido pelo usuário
    var resultado = valorFixo + strInput;

    // Executa o comando com o resultado
    ggbApplet.evalCommand(resultado.toString());

    // Limpa o campo de entrada
    document.getElementById('campo').value = '';

    // Retorna falso para evitar o envio do formulário
    return false;
    }


function enviarValores() {
            var alturadoCorpoValue = document.getElementsByName('inputField')[0].value;
            var bustoValue = document.getElementsByName('inputField1')[0].value;
            var cinturaValue = document.getElementsByName('inputField2')[0].value;
            var comprimentoTotalValue = document.getElementsByName('inputField3')[0].value;
            var larguradoBracoValue = document.getElementsByName('inputField4')[0].value;
            var ombroValue = document.getElementsByName('inputField5')[0].value;
            var separacaodoBistoValue = document.getElementsByName('inputField6')[0].value;
            	
            evalInput(alturadoCorpoValue);
            evalInput1(bustoValue);
            evalInput2(cinturaValue);
            evalInput3(comprimentoTotalValue);
	    evalInput4(larguradoBracoValue);
            evalInput5(ombroValue);
	    evalInput6(separacaodoBistoValue);
            
}
