function historiaLoki ()
{
    while(true){
        var desafioLoki2 = prompt (`1 - Recusa a oferta por achar imoral \n 2 - Aceita a oferta, e fecha acordo`)

        if ( desafioLoki2== 1){

            document.write( `<p>VOCÊ FALHOU ! VOLTE AO INÍCIO</p> <a href="../Loki/loki.html">VOLTAR</a>   `)
            break
        }
        else if ( desafioLoki2== 2)
        {
            document.write( `<p>PARABÉNS, VOCÊ AVANÇOU PARA PRÓXIMA FASE!</p>
            <p>CLIQUE NO LINK PARA CONTINUAR</p> <a href="./desafiol3.html">FASE 3</a>
            `)
            break
        }
        alert(`OPÇÃO INVÁLIDA`)
    }
    }

historiaLoki()

