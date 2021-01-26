class Game{
    constructor(){

    }

    getState(){
        database.ref('gameState').on("value",function(d){
            gameState = d.val();
        })
    }

    updateState(n){
        database.ref('/').update({
            gameState:n
        })
    }

    start(){
        if(gameState === 0){
            form = new Form();
            form.display();

            contestant = new Contestant();
            contestant.getCount();
        }
    }
    end(){
        Contestant.getContestantInfo();
        if(allContestants!==undefined){
            var y = 300;
            
            textSize(25);
            text("Note: Contestants highlighted in green answered correctly",displayWidth/2-280,displayHeight/3);
            for(var i in allContestants){
                if(allContestants[i].answer === "3"){
                    fill("green");
                }else{
                    fill("red");
                }
                textSize(25);
                y+=40;

                text(allContestants[i].name+" answered "+allContestants[i].answer,displayWidth/2-170,y);
            }
        }
    }
}