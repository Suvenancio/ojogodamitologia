function historiaAnubis ()
{

    var escolhaAnubis = prompt (`1 - Sim \n 2 - Não`)

    if ( escolhaAnubis== 2){

        document.write( `Você Falhou volte ao início <a href="../Anúbis/anubis.html">VOLTAR</a>   `)
    }
    else{
        document.write( `Parabéns, você avançou para próxima fase!
        Clique no link para continuar <a href="./desafioa3.html">FASE 3</a>
        `)
    }
    
}

historiaAnubis()

