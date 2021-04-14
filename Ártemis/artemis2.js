function historiaArtemis ()
{

    var escolhaArtemis = prompt (`1 -  Permanecer na floresta \n 2 - Voltar ao Olimpo`)

    if ( escolhaArtemis== 2){

        document.write( `<p>VOCÊ FALHOU ! VOLTE AO INÍCIO</p>  <a href="./artemis.html">VOLTAR</a>
        `)
    }
    else if ( escolhaArtemis==1){
        document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
        <p>CLIQUE NO LINK PARA CONTINUAR </p> 
        <p> <a href="./desafio3.html">FASE 3</a> </p>
        `)
    }
    else{
        alert(`Opção Inválida`)
        historiaArtemis()
    }
    
}

historiaArtemis()