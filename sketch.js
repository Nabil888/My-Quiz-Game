var canvas;
var database;
var gameState = 0;
var form,game,contestant;
var contestantCount;
var allContestants;
function setup(){
  canvas = createCanvas(displayWidth,displayHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background("skyblue");
  if(contestantCount===4){
    game.updateState(1);
    
  }
  if(gameState===1){
    clear();
    background("gold");
    form.waitText.hide();
    form.heading2.html("Results:");
    form.heading2.position(displayWidth/2-50,30);
    game.end();
  }
}
