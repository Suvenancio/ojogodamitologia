function historiaAnubis ()
{

    var escolhaAnubis = prompt (`1 - Sim \n 2 - Não`)

    if ( escolhaAnubis== 2){

        document.write( `<p>VOCÊ FALHOU ! </p><a href="../index.html">JOGAR NOVAMENTE</a> </p>  `)
    }
    else if(escolhaAnubis==1){
        document.write( `Parabéns, você chegou ao além vida! E agora vive em um mundo de almas boas. 
        Desfrute ! <p> <a href="../index.html">JOGAR NOVAMENTE</a> </p>
        `)
    }
    else{
        alert(`Opção Inválida`)
        historiaAnubis()
    }
    
}
historiaAnubis()

