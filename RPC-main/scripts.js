const score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
  }
  scoreElement();


  function resultsElement(result){
    document.querySelector('.results')
    .innerHTML = `${result}`;
  }
  
  function scoreElement(){
    document.querySelector('.scores')
    .innerHTML = `Wins:${score.wins} Losses: ${score.losses}, Ties: ${score.ties}`;
  }

  function movesElement(playerMove, computerMove){
    document.querySelector('.moves')
      .innerHTML = `You <img class="move-icon" src="Images/${playerMove}-emoji.png" alt="">
      <img class="move-icon" src="Images/${computerMove}-emoji.png" alt=""> Computer`;
  }
  

  function playGame(playerMove){
    
    let result='';
    const computerMove= move();

    if(playerMove==='rock'){

      if(computerMove==='rock'){
        result='Tie!';
      }
      else if(computerMove==='paper'){
        result='You Lose!';
      }
      else{
        result='You Win!';
      }
    }

    else if(playerMove==='paper'){

      if(computerMove==='rock'){
        result='You Win!';
      }
      else if(computerMove==='paper'){
        result='Tie!';
      }
      else{
        result='You Lose!';
      }
    }

    else if(playerMove==='scissors'){

      if(computerMove==='rock'){
        result='You Lose!';
      }
      else if(computerMove==='paper'){
        result='You Win!';
      }
      else{
        result='Tie!';
      }     
    }

    if(result==='You Win!'){
      score.wins+=1;
    }
    else if(result==='You Lose!'){
      score.losses+=1;
    }
    else{
      score.ties+=1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    const rock = 

    resultsElement(result);
    movesElement(playerMove, computerMove);
    scoreElement();

  }

  function move(){

    const n = Math.random();
    let computerMovePick='';

    if(n>=0 && n<1/3){
      computerMovePick='rock'; 
    }
    else if(n>1/3 && n<2/3){
      computerMovePick='paper';
    }
    else{
      computerMovePick='scissors';
    }
    return computerMovePick;
  }