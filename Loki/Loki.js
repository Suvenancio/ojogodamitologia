function historiaLoki ()
{

    var escolhaLoki = prompt (`1 - Aceita \n 2 - Não Aceita`)

    if ( escolhaLoki== 2){

        document.write( `Você Falhou volte ao início <a href="../Loki/loki.html">VOLTAR</a>   `)
    }
    else if ( escolhaLoki== 1)
        {
        document.write( `Parabéns, você avançou para próxima fase!
        Clique no link para continuar <a href="./desafiol2.html">FASE 2</a>
        `)
    }
    else{

        alert(`OPÇÃO INVÁLIDA`)
    }
    
}

historiaLoki()

