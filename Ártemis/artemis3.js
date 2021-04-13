function historiaArtemis ()
{

    var escolhaArtemis = prompt (`1- Aceita \n 2 - Não aceita`)

    if ( escolhaArtemis== 1){

        document.write( `<p>VOCÊ VENCEU!!</p> \n  A competição era uma armação de seu irmão
        Apolo, com o o objetivo de matar Órion. E o objetivo foi conquistado, Ártemis
        deu uma flexada nas costas de Orion e o matou. <br>
        Devido ao seu grande remorço, por ter matado seu amado Orion, Ártemis criou  a 
        constelação de Órion, para iliminar o céu e sempre lembrar de seu amor.
        <p>
        <a href="../index.html">JOGAR NOVAMENTE</a> </p>

        `)
    }
    else if( escolhaArtemis==2){
        document.write( `<p>VOCÊ FALHOU ! </p> 
        <a href="../index.html">JOGAR NOVAMENTE</a>
        `)
    }
    else{
        alert(`Opção Inválida`)
        historiaArtemis()
    }
}

historiaArtemis()