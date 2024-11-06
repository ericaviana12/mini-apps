/**
 * Validação da maioridade
 * @author Erica Viana
 */

// Função para validação de maioridade
function validar(event) {
    
    // a linha abaixo desabilita o comportamento padrão de envio do formulário
    event.preventDefault()
    
    // alert("Teste de envio") - "alert" somente para efetuar testes, pois o alert trava o JS
    let nome = document.getElementById('nome').value
    
    // alert(nome) - quando a palavra está como variável, exibe o resultado do input na tela e quando está entre "" exibe o texto definido
    let idade = document.getElementById('idade').value
    
    // saída    
    document.getElementById('aluno').value = `Aluno: ${nome}`

    if (idade < 18) {
        document.getElementById('status').value = "Menor de idade"
    }  else document.getElementById('status').value = "Maior de idade"

}
