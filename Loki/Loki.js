function historiaLoki ()
{

    var escolhaLoki = prompt (`1 - Aceita \n 2 - Não Aceita`)

    if ( escolhaLoki== 2){

        document.write( `<p>VOCÊ FALHOU ! VOLTE AO INÍCIO</p> <a href="../Loki/loki.html">VOLTAR</a>   `)
    }
    else if ( escolhaLoki== 1)
        {
        document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
        <p>CLIQUE NO LINK PARA CONTINUAR</p> <a href="./desafiol2.html">FASE 2</a>
        `)
    }
    else{

        alert(`OPÇÃO INVÁLIDA`)
        historiaLoki()
    }
    
}

historiaLoki()

