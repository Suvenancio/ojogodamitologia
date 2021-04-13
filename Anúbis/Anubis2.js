function historiaAnubis ()
{

    var escolhaAnubis = prompt (`1 - Sim \n 2 - Não`)

    if ( escolhaAnubis== 2){

        document.write( `<p>VOCÊ FALHOU !</p> Volte ao início <a href="../Anúbis/anubis.html">VOLTAR</a>   `)
    }
    else if(escolhaAnubis==1){
        document.write( `Parabéns, você chegou ao submundo! E agora vive em um mundo de almas boas. 
        Parabéns! <p> <a href="../index.html">JOGAR NOVAMENTE</a> </p>
        `)
    }
    else{
        alert(`Opção Inválida`)
        historiaAnubis()
    }
    
}
historiaAnubis()

