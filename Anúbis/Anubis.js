function historiaAnubis ()
{

    while(true){
        var desafioAnubis1 = prompt (`1 - Sim \n 2 - Não`)

        if ( desafioAnubis1== 2){

            document.write( `<p> VOCÊ FALHOU ! VOLTE AO INÍCIO </p><a href="../Anúbis/anubis.html">VOLTAR</a>   `)
            break
        }
        else if( desafioAnubis1 ==1){
            document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
            <p>CLIQUE NO LINK PARA CONTINUAR </p> <a href="./desafioa2.html">FASE 2</a>
            `)
            break
        }
        alert(`Opção Inválida`)
    }
    }

historiaAnubis()

