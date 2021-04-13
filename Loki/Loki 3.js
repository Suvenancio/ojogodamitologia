function historiaLoki ()
{

    var escolhaLoki = prompt (`1 - Ouve o que os deuses tem a dizer \n 2 - Impõe o seu próprio plano`)

    if ( escolhaLoki== 1){

        document.write( `<p>Você Falhou volte ao início</p> <a href="../Loki/loki.html">VOLTAR</a>   `)
    }
    else if ( escolhaLoki== 2)
        {
        document.write( `<p>PARABÉNS VOCÊ VENCEU ! </p>
        Apesar de Loki ter uma vida repleta de atitutes trapaceiras, muitas delas acabam por 
        benefeciar os deuses, e nesse caso não foi diferente. Thor foi ao casamento disfarçado de 
        Freya, seguindo plano de Loki, e matou o gigante. Recuperando o seu martelo!
        <p> <a href="../index.html">JOGAR NOVAMENTE</a> </p>
        `)
    }
    else{

        alert(`OPÇÃO INVÁLIDA`)
        historiaLoki()
    }
    
}

historiaLoki()
