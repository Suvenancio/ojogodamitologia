function historiaArtemis ()
{

    var escolhaArtemis = prompt (`1 -  Permanecer no Olimpo \n 2 - Ir caçar`)

    if ( escolhaArtemis== 1){

        document.write( `Você Falhou volte ao início
        <a href="../Ártemis/artemis.html">VOLTAR</a>`)
    }
    else{
        document.write( `Parabéns, você avançou para próxima fase!
        Clique no linke para continuar <a href="Desafio2.html">FASE 2</a>
        `)
    }
    
}

historiaArtemis()

