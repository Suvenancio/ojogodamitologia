function historiaAnubis ()
{

    while(true){
        var desafioAnubis3 = prompt (`1 - Sim \n 2 - Não`)

        if ( desafioAnubis3== 2){

            document.write( `<p>VOCÊ FALHOU ! </p><a href="../index.html">JOGAR NOVAMENTE</a> </p>  `)
            break
        }
        else if(desafioAnubis3==1){
            document.write( `Parabéns, você chegou ao além vida! E agora vive em um mundo de almas boas. 
            Desfrute ! <p> <a href="../index.html">JOGAR NOVAMENTE</a> </p>
            `)
            break
        }
        alert(`Opção Inválida`)
    }
}
historiaAnubis()

