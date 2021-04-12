function historiaLoki ()
{

    var escolhaLoki = prompt (`1 - Recusa a oferta por achar imoral \n 2 - Aceita a oferta, e fecha acordo`)

    if ( escolhaLoki== 1){

        document.write( `Você Falhou volte ao início <a href="../Loki/loki.html">VOLTAR</a>   `)
    }
    else if ( escolhaLoki== 2)
    {
        document.write( `Parabéns, você avançou para próxima fase!
        Clique no link para continuar <a href="./desafiol3.html">FASE 3</a>
        `)
    }
    else{

        alert(`OPÇÃO INVÁLIDA`)
    }
    
}

historiaLoki()

