




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
        this.currentDate = new Date("1995-11-17");
       
    }

    work(job) {
        if (job == "pizza"){
            this.money += this.jobLevel * 10;
            this.job = "Pizza Delivery Man";
            
        } else if(job == "receptionist"){
            this.money += this.jobLevel * 15;
            this.job = "Receptionist";
        } else if(job == "real-estate"){
            this.money += this.jobLevel * 25;
            this.job = "Real Estate Agent";
        } else if(job == "lawyer"){
            this.money += this.jobLevel * 50;
            this.job = "Lawyer";
        }
        this.workStatus = true;
        this.studyStatus = false;
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

    incrementDate(dateInput,increment){
        let dateFormatTotime = new Date(dateInput);
        let increasedDate = new Date(dateFormatTotime.getTime() + (increment * 86400000));
        return increasedDate;
    }

    buyFurniture(){

    }

    simulateTimePassage(){
        this.money -= this.dailyExpenses;
        this.daysPassed++;
        this.currentDate = incrementDate(currentDate, 1);
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
        document.getElementById("days-passed").innerText = "Days passed:" + this.daysPassed;



    }
}


const player = new Player();

//work button click event

document.getElementById("pizza-delivery").addEventListener("click", function() {
    if (player.currentActivity == "Working"){
        return;
    } 
    workInterval = setInterval(() => player.work("pizza"), 1000);
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
