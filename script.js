//Challenge -1
function ageinDays(){
    var birth=prompt("When you are born....good friend? ");
    var ageinDayss=(2020-birth)*365;
    console.log(ageinDayss);
    var h1=document.createElement('h1');
    var textAnswer=document.createTextNode('You are ' + ageinDayss + 'days old');
    h1.setAttribute('id','ageinDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}
function reset(){           
    document.getElementById('ageinDays').remove();
}

// Challenge-2
function generateCat(){
    var image=document.createElement('img');
    var div=document.getElementById('flex-cat-gen');
    image.src ="https://media.tenor.com/images/47b81948be5023555549c01d88ae3289/tenor.gif";
    div.appendChild(image);
}

function rpsGame(yourChoice){
    // console.log(yourChoice.id);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;

    botChoice = numberToChoice(randToRpsInt());
    console.log("Computer Choice",botChoice);

    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    
    message = finalMessage(results);
    
    // console.log(message); 
    
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock':{'scissors': 1,'rock': 0.5,'paper': 0},
        'paper':{'rock': 1,'paper': 0.5,'scissors': 0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0}  
    };

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore,computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { message: "You Lost!", color: "red" };
  } else if (yourScore === 0.5) {
    return { message: "You Tied!", color: "bllue" };
  } else {
    return { message: "You Won!", color: "green" };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src
    } 
    

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    // var humanDiv = document.createElement('div');
    // var botDiv = document.createElement('div');
    // var messageDiv = document.createElement('div');

    // humanDiv.innerHTML = "<img src'" + imagesDatabase[humanImageChoice] + "'height=150 width=150 style='box-shadow: box-shadow: 10px 10px 14px 0px rgba(37, 50, 233, 1);'>"
    // messageDiv.innerHTML = "<h1 style='color: " +finalMessage['color'] + "; font-size:60px; padding:30px; ' >" + finalMessage['message'] + "</h1>"
    // botDiv.innerHTML =
    //   "<img src'" +
    //   imageDatabase[botImageChoice] +
    //   "'height=150 width=150 style='box-shadow: box-shadow: 10px 10px 14px 0px rgba(37, 50, 233, 1);'>";
    
    

    // document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    // document.getElementById('flex-box-rps-div').appendChild(botDiv);
    // document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}

