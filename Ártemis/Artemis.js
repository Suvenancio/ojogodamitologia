function historiaArtemis ()
{

    while ( true){

    var desafioArtemis1 = prompt (`1 -  Aproveitaria o relaxamento no Olimpo \n 2 - Iria caçar`)

    if ( desafioArtemis1 == 1){

        document.write( `<p>VOCÊ FALHOU ! VOLTE AO INÍCIO</p> <a href="./artemis.html">VOLTAR</a>`)
        break
    }
    else if ( desafioArtemis1== 2){
        document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
        <p>CLIQUE NO LINK PARA CONTINUAR </p> <a href="Desafio2.html">FASE 2</a>
        `)
        break
    }
    alert(`Opção Inválida`)     
}
}

historiaArtemis()

