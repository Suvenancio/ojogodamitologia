
function escolha(){

    var opcao = prompt("Vamos começar!\nEscolha seu personagem\n1- Artemis \n2- Loki\n3-Anúbis");
    if(opcao == 1)
    {
        document.write('<p class="personagem">Artemis</p>');
        return heroi = 'Artemis'
    }
    else if(opcao==2){
        document.write('<p class="personagem">Loki</p>');
        return heroi = 'Loki'
    }
    else if(opcao==3)
    {
        document.write('<p class="personagem">Anúbis</p>');
        return heroi = 'Anubis'
    }
    else
    {
        if((opcao > 3) || (opcao < 0))
        {
            return escolha()
        }
    }
}

var heroi = escolha()
console.log(heroi)




