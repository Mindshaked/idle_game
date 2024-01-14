
Date.prototype.addDays = function(days){
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}





class Player {
    constructor(){
        this.money = 0;
        this.jobLevel = 1;
        this.studyLevel = 1;
        this.dailyExpenses = 2;
        this.daysPassed = 0;
        this.currentActivity = "Doing nothing";
        this.workStatus = false;
        this.studyStatus = false;
        this.currentDate = new Date(1995, 11, 17);
       
    }

    work() {
        if (player.workStatus == false){
            return;
        }
        this.money += this.jobLevel * 10;
        this.currentActivity = "Working";
        this.updateStats();
    }

    study() {
        if (player.studyStatus == false){
            return;
        }
        this.money -= this.studyLevel * 5;
        this.studyLevel++;
        this.currentActivity = "Studying";
        this.updateStats();
    }

    buyFurniture(){

    }

    simulateTimePassage(){
        this.money -= this.dailyExpenses;
        this.daysPassed++;
        this.currentDate = currentDate.addDays(1);
        this.updateStats();
        
    }

    updateCurrentActivity(activity){
        this.currentActivity = activity;
        this.updateStats();
    }

    updateStats() {
        document.getElementById("money").innerText = "Money:"+ this.money;
        document.getElementById("job").innerText = "Current Job:"+ this.job;
        document.getElementById("study").innerText = "Study Level:"+ this.studyLevel;
        document.getElementById("current-activity").innerText = "Currently:" + this.currentActivity;
        document.getElementById("current-date").innerText = "Current date:" + this.currentDate.toDateString();


    }
}


const player = new Player();

//work button click event

document.getElementById("pizza-delivery").addEventListener("click", function() {
    if (player.currentActivity == "Working"){
        return;
    } 

    
    player.workStatus = true;
    player.studyStatus = false;
    player.updateCurrentActivity("Working");
    workInterval = setInterval(() => player.work(), 1000);
    clearInterval(studyInterval);
  
    
    
});

document.getElementById("study-coding").addEventListener("click", function(){
    if (player.currentActivity == "Studying"){
        return;
    } 
    
    player.studyStatus = true;
    player.workStatus = false;
    player.updateCurrentActivity("Studying");
    studyInterval = setInterval(() => player.study(), 1000);
    clearInterval(workInterval);
    
})

setInterval(() => player.simulateTimePassage(), 1000);
