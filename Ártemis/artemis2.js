function historiaArtemis ()
{

    while( true){
    var desafioArtemis2 = prompt (`1 -  Permanecer na floresta \n 2 - Voltar ao Olimpo`)

    if ( desafioArtemis2== 2){

        document.write( `<p>VOCÊ FALHOU ! VOLTE AO INÍCIO</p>  <a href="./artemis.html">VOLTAR</a>
        `)
        break
    }
    else if( desafioArtemis2==1){
        document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
        <p>CLIQUE NO LINK PARA CONTINUAR </p> 
        <p> <a href="./desafio3.html">FASE 3</a> </p>
        `)
        break
    }
    alert(`Opção Inválida`)
}
}

historiaArtemis()