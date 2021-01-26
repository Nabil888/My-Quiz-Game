class Form{
    constructor(){
        this.button = createButton('SUBMIT');
        this.input1 = createInput('Name');
        this.input2 = createInput('Answer Number');
        this.heading = createElement('h1');
        this.question = createElement('h2');
        this.answer1 = createElement('h2');
        this.answer2 = createElement('h2');
        this.answer3 = createElement('h2');
        this.answer4 = createElement('h2');
        this.heading2 = createElement('h1')
        this.waitText = createElement('h2');
    }
    display(){
        
        this.heading.html("My Quiz Game");
        this.heading.position(displayWidth/2-70,displayHeight/20);

        this.question.html("Question: What is the name of the black hole in the centre of our Milky Way galaxy?");
        this.question.position(displayWidth/5,displayHeight/5);
        this.answer1.html("1. Epsilon B");
        this.answer1.position(displayWidth/5,230);
        this.answer2.html("2. TON 618");
        this.answer2.position(displayWidth/5,260);
        this.answer3.html("3. Sagittarius A");
        this.answer3.position(displayWidth/5,290);
        this.answer4.html("4. XTE J1650-500");
        this.answer4.position(displayWidth/5,320);
        this.button.position(displayWidth/2,displayHeight-displayHeight/5);
        this.button.mousePressed(()=>{
            this.input1.hide();
            this.input2.hide();
            this.question.hide();
            this.button.hide();
            this.heading.hide();
            this.answer1.hide();
            this.answer2.hide();
            this.answer3.hide();
            this.answer4.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount++;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
            this.waitText.html("We will display the results once all four players have answered...");
            this.waitText.position(displayWidth/2-250,displayHeight/2)
        })

        this.input1.position(displayWidth/3-60,displayHeight/1.5)
        this.input2.position(displayWidth/1.5-60,displayHeight/1.5)
    }
    //hideDetails(){
        //this.button.hide();
        //this.input1.hide();
    //}
}