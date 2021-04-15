function historiaLoki ()
{

    while(true){
        var desafioLoki3 = prompt (`1 - Ouve o que os deuses tem a dizer \n 2 - Impõe o seu próprio plano`)

        if ( desafioLoki3== 1){

            document.write( `<p>VOCÊ FALHOU ! </p>
            <p> <a href="../index.html">JOGAR NOVAMENTE</a> </p>   `)
            break
        }
        else if ( desafioLoki3== 2)
            {
            document.write( `<p>PARABÉNS VOCÊ VENCEU ! </p>
            Apesar de Loki ter uma vida repleta de atitutes trapaceiras, muitas delas acabam por 
            benefeciar os deuses, e nesse caso não foi diferente. Thor foi ao casamento disfarçado de 
            Freya, seguindo o plano de Loki, e matou o gigante. Recuperando o seu martelo!
            <p> <a href="../index.html">JOGAR NOVAMENTE</a> </p>
            `)
            break
        }
        alert(`OPÇÃO INVÁLIDA`)
    }
    }

historiaLoki()
