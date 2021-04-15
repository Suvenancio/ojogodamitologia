function historiaAnubis ()
{

    while( true){
        var desafioAnubis2 = prompt (`1 - Sim \n 2 - Não`)

        if ( desafioAnubis2== 2){

            document.write( `<p> VOCÊ FALHOU ! VOLTE AO INÍCIO </p> <a href="../Anúbis/anubis.html">VOLTAR</a>   `)
            break
        }
        else if(desafioAnubis2==1){
            document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
            <p>CLIQUE NO LINK PARA CONTINUAR </p> <a href="./desafioa3.html">FASE 3</a>
            `)
            break
        }
        alert(`Opção Inválida`)
    }
    }

historiaAnubis()

