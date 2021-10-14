class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
  // escreva aqui o código para ocultar os elementos da questão
    this.title.hide(); 
    this.button.hide(); 
    this.question.hide(); 
    this.input1.hide(); 
    this.input2.hide();    
    // escreva o código aqui para mudar a cor de fundo
    background.shapeColor = "yellow"
    // escreva o código para exibir um cabeçalho indicando o resultado do Quiz
    this.title.html (this.name+"respondeu corretamente"); 
    this.title.html (this.name+"respondeu incorretamente");
    // chame getContestantInfo () aqui
    if (allContestants!== undefined){
      fill ("blue")
      textSize (20); 
      text ("Jogador que respondeu a respota correta está destacado na cor verde", 130,230)
    }

    // escreva a condição para verificar se contestantInfor não é indefinido
    for (var plr in allContestants){
      var correctAns = "2"
      if (correctAns === allContestants[plr].answer){
        fill ("green")
      } else{
        fill ("red")
      }
    }

    
  }

}
