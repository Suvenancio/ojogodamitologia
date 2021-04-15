function historiaLoki ()
{

    while(true){
        var desafioLoki1 = prompt (`1 - Aceita \n 2 - Não Aceita`)

        if ( desafioLoki1== 2){

            document.write( `<p>VOCÊ FALHOU ! VOLTE AO INÍCIO</p> <a href="../Loki/loki.html">VOLTAR</a>   `)
            break
        }
        else if ( desafioLoki1== 1)
            {
            document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
            <p>CLIQUE NO LINK PARA CONTINUAR</p> <a href="./desafiol2.html">FASE 2</a>
            `)
            break
        }
        alert(`OPÇÃO INVÁLIDA`)
    }
    }

historiaLoki()

