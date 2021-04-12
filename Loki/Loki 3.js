function historiaLoki ()
{

    var escolhaLoki = prompt (`1 - Ouve o que os deuses tem a dizer \n 2 - Impõem o seu próprio plano`)

    if ( escolhaLoki== 1){

        document.write( `Você Falhou volte ao início <a href="../Loki/loki.html">VOLTAR</a>   `)
    }
    else if ( escolhaLoki== 2)
        {
        document.write( `Parabéns, você venceu !
        Apesar de Loki ter uma vida repleta de atitutes trapaceiras, muitas delas acabam por 
        benefeciar os deuses, e nesse caso não foi diferente. Thor foi ao casamento disfarçado de 
        Freya, seguindo plano de Loki, e matou o gigante. Recuperando o seu martelo!
        `)
    }
    else{

        alert(`OPÇÃO INVÁLIDA`)
    }
    
}

historiaLoki()
