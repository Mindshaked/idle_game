

class furniture {
    constructor(price, name){
        this.name = name;
        this.price = price;
        this.stats = "+1 Sanity"
    }

  
}


class Player {
    constructor(){
        this.money = 0;
        this.jobLevel = 1;
        this.studyLevel = 1;
        this.dailyExpenses = 2;
        this.daysPassed = 0;
        this.currentActivity = null;
        this.currentDate = new Date();
        this.inventory = [];
        this.room = [];
        this.interval = null;
       
    }

    startGame() {
        console.log("Game started");
        this.interval = setInterval(() => {
            this.updateStats(0,0);
            this.displayStats();
        }, 1000);
    }

    stopGame(){
        console.log("Game stopped");
        clearInterval(this.interval);
    }

    work(job) {
        if (job == "pizza"){
            this.startActivity("pizza", 10, 0)
            this.job = "Pizza Delivery Man";
            
        } else if(job == "receptionist"){
            this.startActivity("receptionist", 15, 0)
            this.job = "Receptionist";

        } else if(job == "real-estate"){
            this.startActivity("real-estate", 25, 0)
            this.job = "Real Estate Agent";

        } else if(job == "lawyer"){
            this.startActivity("lawyer", 50, 0)
            this.job = "Lawyer";
        }


        this.displayStats();
    }

   

    study(subject) {
        let studyCost = 0;

        if(player.money <= studyCost){
            this.endActivity();
        } 

        if (subject == "customer service"){
        studyCost = -5;
        this.startActivity("Study", studyCost, 1)
        }
    }

/*
    incrementDate(dateInput,increment){
        let dateFormatTotime = new Date(dateInput);
        let increasedDate = new Date(dateFormatTotime.getTime() + (increment * 86400000));
        return increasedDate;
    }
*/

    checkStudyRequirements(studyLvl){
        if (this.studyLevel >= studyLvl){
            receptionistBtn.disabled = false;
            receptionistBtn.textContent = "Receptionist"
        } else {
            return;
        }
    }


    checkCost(activity, moneyChange) {
        if (this.money + moneyChange >= 0) {
            return true;
        } else {
            return false;
        }
    }
    /*
    simulateTimePassage(){
        this.money -= this.dailyExpenses;
        this.daysPassed++;
        this.currentDate = incrementDate(currentDate, 1);
        this.updateStats();
        
    }
    */

    buyFurni(furniture){
        if (this.money >= furniture.price){
            this.money -= furniture.price;
            this.inventory.push(furniture);
            console.log("You bought " + furniture.name + " for " + furniture.price);
            this.displayStats();
        } else {
            console.log("Not enough money to buy " + furniture.name)
        }
    }

    sellFurni(furniture){
        const furniIndex = this.inventory.indexOf(furniture);
        if (furniIndex !== -1){
            this.money += furniture.price;
            this.inventory.splice(furniIndex, 1);
            console.log("You sold " + furniture.name + " for " + furniture.price);
        } else {
            console.log("Not found in your inventory");
        }
    }


    startActivity(activity, moneyChange, studyLevel){
        this.endActivity();
        
        console.log("You started" + activity);
        this.currentActivity = activity;

        this.interval = setInterval(() => {
            if (this.checkCost(activity, moneyChange)){
                this.updateStats(moneyChange, studyLevel);
                this.displayStats();
            } else {
                this.endActivity();
                console.log("You don't have enough money to keep" + activity);
            }
            
        }, 1000);

    }

    endActivity(){

    if (this.currentActivity !== null){
        console.log("You finished" + this.currentActivity);
        this.currentActivity = null;
        console.log(this.currentActivity)
        clearInterval(this.interval);
        this.displayStats
        }

    }

    updateCurrentActivity(activity){
        this.currentActivity = activity;
        this.updateStats();
    }

    updateStats(moneyChange, studyLevel){
        this.money += moneyChange;
        this.studyLevel += studyLevel;
    }

    displayStats() {
        document.getElementById("money").innerText = "Money:"+ this.money;
        document.getElementById("job").innerText = "Current Job:"+ this.job;
        document.getElementById("study").innerText = "Study Level:"+ this.studyLevel;
        document.getElementById("current-activity").innerText = "Currently:" + this.currentActivity;
        document.getElementById("current-date").innerText = "Current date:" + this.currentDate.toDateString();
        document.getElementById("days-passed").innerText = "Days passed:" + this.daysPassed;
        document.getElementById("inventory").innerText = "Inventory:" + this.inventory;


        this.checkStudyRequirements(10)



    }
}


const player = new Player();
player.startGame();




//work activities

document.getElementById("pizza-delivery").addEventListener("click", function() {
    if (player.currentActivity == "pizza"){
        return;
    } 

    player.work("pizza");
   

});

let receptionistBtn = document.getElementById("receptionist");
receptionistBtn.disabled = true;

receptionistBtn.addEventListener("click", function() {
    
    if (player.currentActivity == "receptionist"){
        return;
    };

    player.work("receptionist");

});

let realEstateBtn = document.getElementById("real-estate");
realEstateBtn.disabled = true;

realEstateBtn.addEventListener("click", function() {
    
    if (player.currentActivity == "real-estate"){
        return;
    } ;

    player.work("real-estate");

});


let lawyerBtn = document.getElementById("lawyer");
lawyerBtn.disabled = true;


    lawyerBtn.addEventListener("click", function() {
        if (player.currentActivity == "lawyer"){
            return;
        } ;
    
        player.work("lawyer");
    
    });
    




//Studying activities


document.getElementById("study-coding").addEventListener("click", function(){
    if (player.currentActivity == "Studying"){
        return;
    } 
    

    player.study("customer service");

    
})


let table = new furniture(50, "Table");

let buyTableBtn = document.getElementById("buy-table");

buyTableBtn.addEventListener("click", function(){
    player.buyFurni(table);

    });


/* setInterval(() => player.simulateTimePassage(), 1000)*/




//grid construction

/*
document.addEventListener("DOMContentLoaded", function(){
    const gridContainer = document.getElementById("grid-container");
    const numRows = 5;
    const numCols = 10;

    //CReate grid cells
    for (let row=0; row<numRows; row++){
        for (let col=0; col<numCols; col++){
            const cell = document.createElement("div");
            cell.className = "grid-cell";
            cell.setAttribute("data-row", row);
            cell.setAttribute("data-col", col);
            gridContainer.appendChild(cell);
        }
    }

    //event listener for clicking on grid cells

    gridContainer.addEventListener("click", function (event){
        const clickedCell = event.target;
        if (clickedCell.classList.contains("grid-cell")){
            const row = clickedCell.getAttribute("data-row");
            const col = clickedCell.getAttribute("data-col");
            alert("clicked on cell at" + row + "," + col)
        }
    })
})

*/

const container = document.getElementById("grid-container");

function makeRows(rows, cols){
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-cols", cols);
    for (c=0; c<(rows*cols); c++){
        let cell = document.createElement("div");
        cell.innerText= (c+1);
        cell.setAttribute("data", c);
        container.appendChild(cell).className = "grid-item";
    }
}
    container.addEventListener("click", function (event){
        const clickedCell = event.target;
        if (clickedCell.classList.contains("grid-item")){
            const data = clickedCell.getAttribute("data");
            alert("clicked on cell at" + data);
        }
    });
    

    


makeRows(8,13);