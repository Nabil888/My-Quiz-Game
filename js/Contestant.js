class Contestant{
    constructor(){
        this.name = null;
        this.index = null;
        this.answer = null;
    }

    getCount(){
        database.ref('contestantCount').on("value",function(d){
            contestantCount = d.val();
        })
    }

    updateCount(num){
        database.ref('/').update({
            contestantCount:num
        })
    }

    update(){
        var contestantInfo = "contestants/contestant"+this.index;
        database.ref(contestantInfo).update({
            name:this.name,
            answer:this.answer
        })
    }
    static getContestantInfo(){
        database.ref('contestants').on("value",function(d){
            allContestants = d.val();
        })
    }
}