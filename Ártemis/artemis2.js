function historiaArtemis ()
{

    var escolhaArtemis = prompt (`1 -  Permanecer na floresta \n 2 - Voltar ao Olimpo`)

    if ( escolhaArtemis== 2){

        document.write( `Você Falhou volte ao inicio <a href="../Ártemis/artemis.html">VOLTAR</a>
        `)
    }
    else{
        document.write( `Parabéns, você avançou para próxima fase!
        Clique no link para continuar <a href="./desafio3.html">Fase 3</a>
        `)
    }
    
}

historiaArtemis()