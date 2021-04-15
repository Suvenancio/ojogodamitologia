function historiaArtemis ()
{

while(true){

    var desafioArtemis3 = prompt (`1- Aceita \n 2 - Não aceita`)

    if ( desafioArtemis3== 1){

        document.write( `<p>VOCÊ VENCEU!!</p> \n  A competição era uma armação de seu irmão
        Apolo, com o o objetivo de matar Órion. E o objetivo foi conquistado, Ártemis
        deu uma flexada em suas costas e o matou. <br>
        Devido ao seu grande remorço, por ter matado seu amado Órion, Ártemis criou  a 
        constelação de Órion, para iliminar o céu e sempre lembrar de seu amor.
        <p>
        <a href="../index.html">JOGAR NOVAMENTE</a> </p>`) 
         break
    }
    else if ( desafioArtemis3 == 2)
    {
        document.write( `<p>VOCÊ FALHOU ! </p> 
        <a href="../index.html">JOGAR NOVAMENTE</a> `)
         break
    }
    alert(`Opção Inválida`)
}
    
}

historiaArtemis()