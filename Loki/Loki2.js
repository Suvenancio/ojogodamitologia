function historiaLoki ()
{

    var escolhaLoki = prompt (`1 - Recusa a oferta por achar imoral \n 2 - Aceita a oferta, e fecha acordo`)

    if ( escolhaLoki== 1){

        document.write( `<p>VOCÊ FALHOU ! VOLTE AO INÍCIO</p> <a href="../Loki/loki.html">VOLTAR</a>   `)
    }
    else if ( escolhaLoki== 2)
    {
        document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
        <p>CLIQUE NO LINK PARA CONTINUAR</p> <a href="./desafiol3.html">FASE 3</a>
        `)
    }
    else{

        alert(`OPÇÃO INVÁLIDA`)
        historiaLoki()
    }
    
}

historiaLoki()

