function historiaAnubis ()
{

    var escolhaAnubis = prompt (`1 - Sim \n 2 - Não`)

    if ( escolhaAnubis== 2){

        document.write( `<p> VOCÊ FALHOU ! VOLTE AO INÍCIO </p><a href="../Anúbis/anubis.html">VOLTAR</a>   `)
    }
    else if( escolhaAnubis==1){
        document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
        <p>CLIQUE NO LINK PARA CONTINUAR </p> <a href="./desafioa2.html">FASE 2</a>
        `)
    }
    else{
        alert(`Opção Inválida`)
        historiaAnubis()
    }
}

historiaAnubis()

