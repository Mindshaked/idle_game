

class furniture {
    constructor(price, name, type, source){
        this.name = name;
        this.price = price;
        this.stats = "+1 Sanity"
        this.type = type;
        this.source = source;
        this.equipped = false;
        let id=0;
        this.id = id;
        ++id;
      
    }

  
}

let inventoryWindow = document.getElementById("inventory-window")


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
            this.cleanInventory(inventoryWindow)
            this.populateInventory()
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

    cleanInventory(parent){

        let child = parent.lastElementChild;
        while (child){
            parent.removeChild(child);
            child = parent.lastElementChild;
        }
    
    }
    
    populateInventory(){
        for (let i=0; i<this.inventory.length; i++){
            let item = document.createElement("div");
            item.innerText = this.inventory[i].name
            item.className = "item"
            inventoryWindow.appendChild(item)
        }
    }

    displayStats() {
        document.getElementById("money").innerText = "Money:"+ this.money;
        document.getElementById("job").innerText = "Current Job:"+ this.job;
        document.getElementById("study").innerText = "Study Level:"+ this.studyLevel;
        document.getElementById("current-activity").innerText = "Currently:" + this.currentActivity;
        document.getElementById("current-date").innerText = this.currentDate.toDateString();
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




let buyTableBtn = document.getElementById("buy-table");
let tableImg = document.createElement("img");


buyTableBtn.addEventListener("click", function(){
    let table = new furniture(50, "Table", "central-furniture", "resources/centraltable.png");
    tableImg.src = table.source;
    player.buyFurni(table);

    });


/* setInterval(() => player.simulateTimePassage(), 1000)*/







//function to place furniture

function placeFurni(selectedFurniture, slot, slotArray){
    //popup the menu with the

    console.log("this is the slotarray" + slotArray)
    if (slotArray.length !== 0){
        slotArray.splice(0,1);
    }
    
    slotArray.push(selectedFurniture)
    player.cleanInventory(slot)
    let furniImg = document.createElement("img");
    furniImg.src = selectedFurniture.source
    slot.appendChild(furniImg)
    console.log("this is the active array" + slotArray)
}

//test placing furniture


const centralFurnitureSlot = document.getElementById("central-furniture");
let centralFurnitureItem = [];

centralFurnitureSlot.addEventListener("click", function (){
        furniSelect("central-furniture", centralFurnitureSlot, centralFurnitureItem)
    
});


//open window with furniture to select, depending on the slot

const inventoryPopup = document.getElementById("furni-selection-window");
const inventoryPopupItems = document.getElementById("furni-list");
const inventoryPopupCloseBtn = document.getElementById("close-popup-button");

inventoryPopupCloseBtn.addEventListener("click", function(){
    inventoryPopup.style.visibility = "hidden";
})




//function puplate inventory popup
function populateInventoryPopup(typeArray, typeSlot, typeSlotArray){

        let emptyFurni = document.createElement("div");
        emptyFurni.className = "empty-furni";
        emptyFurni.innerText = "X";
        inventoryPopupItems.appendChild(emptyFurni);

        emptyFurni.addEventListener("click", function(){
            if (typeSlot.hasChildNodes() == true){
            typeSlot.removeChild(typeSlot.firstElementChild)
            }
            emptyFurni.style.outline = "3px solid blue";
            for (let i = 0; i< typeArray.length; i++){
                if (typeArray[i].equipped == true){
                    typeArray[i].equipped = false;
                    typeSlotArray = [];
                    console.log("not equipped anymore");
                    console.log("this is the active array" + typeSlotArray)
                }
        
            }

            player.cleanInventory(inventoryPopupItems)
            populateInventoryPopup(typeArray, typeSlot, typeSlotArray);
            
            
            console.log("empty furni button pressed")
        })

    for (let i = 0; i< typeArray.length; i++){
        let furniCard = document.createElement("div");
        if (typeArray[i].equipped == true){
            furniCard.style.outline = "3px solid green"
        } else{
            furniCard.style.outline = "none";
        }

        
        furniCard.className = "furni-cards"
        furniCard.innerText = typeArray[i].name;
        inventoryPopupItems.appendChild(furniCard)

        furniCard.addEventListener("click", function(){

            for (let i = 0; i< typeArray.length; i++){
                if (typeArray[i].equipped == true){
                    typeArray[i].equipped = false;
                }
        
            }

            typeArray[i].equipped = true;
            player.cleanInventory(inventoryPopupItems)
            populateInventoryPopup(typeArray, typeSlot, typeSlotArray);
            console.log(typeArray[i].equipped);

            placeFurni(typeArray[i], typeSlot, typeSlotArray)
            console.log("furnicard clicked")
        })
    
    }

    
}

// function to select the furniture from the menu


function furniSelect(type, typeSlot, typeSlotArray){
   
    let typeFurnis = player.inventory.filter((furni) => furni.type == type);

    console.log(typeFurnis)
    player.cleanInventory(inventoryPopupItems)
    populateInventoryPopup(typeFurnis, typeSlot, typeSlotArray);

    console.log(typeFurnis)
    inventoryPopup.style.visibility = "visible";
    


}


//edit button so you can change the room or not

const editButton = document.getElementById("edit-button");
const gridElements = document.getElementsByClassName("grid-slots");
console.log(gridElements)
editButton.addEventListener("click", function(){

    if (gridElements[0].classList.contains("grid-slots-on") == true){
        for(let i=0; i<gridElements.length;i++){
        gridElements[i].pointerEvents = "initial";
        gridElements[i].classList.remove("grid-slots-on")
        console.log("element added");
        }
    } else{

    let i = 0;
    while (i < gridElements.length){
    gridElements[i].classList.add("grid-slots-on");
    gridElements[i].pointerEvents = "none";
    i = i + 1;
    console.log("element removed" + gridElements.length)
    }
}
})