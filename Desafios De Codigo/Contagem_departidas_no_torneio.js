var matchs = 0;
var inGame = 7;
let rounds = 0;
let totalMatchs = [];

console.log(`São ${inGame} equipes que se inscreveram e apenas uma saíra vencedora!!\nPREPARADOS?`)

while(inGame > 1){

    if(inGame == 2){
        rounds++
        matchs = inGame / 2;
        inGame = inGame / 2;
        totalMatchs.push(matchs);

        console.log(`\nROUND ${rounds}`);
        console.log(`ÚLTIMA PARTIDA:`);
        console.log('ESTAMOS NA RETA FINAL')
        console.log(`Uma Equipe foi a GRANDE CAMPEÃ!!!`);
    }

    else if (inGame % 2 === 0){
        rounds++
        matchs = inGame / 2;
        inGame = inGame / 2;
        totalMatchs.push(matchs);

        console.log(`\nROUND ${rounds}`);
        console.log(`RESTAM APENAS ${matchs} PARTIDAS:`);
        console.log(`EQUIPES QUE AVANÇARAM: ${inGame}`);
    }
    
    else{
        rounds++
        matchs = (inGame - 1) / 2;
        inGame = (inGame - 1) / 2 + 1;

        totalMatchs.push(matchs);
        console.log(`\nROUND ${rounds}`);
        console.log(`RESTAM APENAS ${matchs} PARTIDAS:`);
        console.log(`EQUIPES QUE AVANÇARAM: ${inGame}`);

    }
}
console.log(`Total do número de partidas: ${totalMatchs.reduce(function(soma, i){return soma + i;})}`);
