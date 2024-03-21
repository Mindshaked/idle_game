let p = 0;

class furniture {
    constructor(price, name, type, source, effects){
        this.name = name;
        this.price = price;
        this.stats = "+1 Sanity"
        this.description = "None";
        this.requirements = "None";
        this.type = type;
        this.source = source;
        this.equipped = false;
        this.effectsState = "off";
        this.quantity = 1;
        this.effects = effects;
        console.log(this.effects)
        let id=0;
        this.id = id;
        ++id;

        }

        applyEffects(status){

           
            let furniEffects = this.effects;
            if (status == "equipped" && furniEffects.length !== 0 && this.effectsState == "off"){
                this.effectsState = "on";

               for (let i=0; i< furniEffects.length; i+=2){
                   
        
                    furniEffects[i] += furniEffects[i+1];
                    console.log("furni effects applied")
                    console.log(furniEffects[i]);
                    console.log ("this is effectsState" + this.effectsState)
               }

            } else if (status == "unequipped" && furniEffects.length !== 0){

                this.effectsState = "off";

                for (let i=0; i< furniEffects.length; i+=2){
                    
                    furniEffects[i] -= furniEffects[i+1];
                    console.log(furniEffects[i] + "furni effects disabled");
                }
             } else {
                console.log("effects already applied")
                console.log(player.pizza.pay)
                return;
             }
      
    }


}




class Player {
    constructor(name){
        this.name = name;
        this.money = 1000;
        this.jobLevel = 1;
       
        this.dailyExpenses = 2;
        this.daysPassed = 0;
        this.currentActivity = "Doing nothing";
        this.currentDate = new Date();
        this.inventory = [];
        this.room = [];
        this.interval = null;
        this.profilePicture = "resources/profilepicture.png";

        this.mood = "none";

        this.acomplished = {
            name: "Acomplishment",
            modifier: 1,
            status: 0
            }

        this.depressed = {
            name: "Depression",
            modifier: 1,
            status: 0
            }

        this.relaxed = {
            name: "Relax",
            modifier: 1,
            status: 0
            }

        this.stressed = {
            name: "Stress",
            modifier: 1,
            status: 0
            }

        this.joyful = {
            name: "Excitement",
            modifier: 1,
            status: 0
            }

        this.afraid = {
            name: "Anger",
            modifier: 1,
            status: 0
            }

        this.companionship = {
            name: "Fear",
            modifier: 1,
            status: 0
            }

        this.lonely = {
            name: "Loneliness",
            modifier: 1,
            status: 0
            }

            this.playerEmotions = [this.acomplished, this.depressed, this.relaxed, this.stressed, this.joyful, this.afraid, this.companionship, this.lonely]


        //skills
        this.social = {
            name: "Social",
            level: 1,
            exp: 0,
            modifier: 1
        }
        
        this.tech = {
            name: "Tech",
            level: 1,
            exp: 0,
            modifier: 1
        }

        this.art = {
            name: "Art",
            level: 1,
            exp: 0,
            modifier: 1
        }

        this.athletics = {
            name: "Athletics",
            level: 1,
            exp: 0,
            modifier: 1
        }

        this.science = {
            name: "Science",
            level: 1,
            exp: 0,
            modifier: 1
        }

        this.military = {
            name: "Military",
            level: 1,
            exp: 0,
            modifier: 1
        }

        this.emotion = {
            name: "Emotion",
            level: 1,
            exp: 0,
            modifier: 1
        }

        this.playerSkills = [this.social, this.tech, this.art, this.athletics, this.science, this.military, this.emotion]

       
        


        //job levels

        this.pizza = {
            name: "Pizza Delivery Man",
            level: 1,
            type: "job",
            expModifier: 1,
            exp: 0,
            payModifier: 1,
            pay: 10,
            jobPay(){
                let finalPay = this.pay * this.payModifier;
                console.log(this.payModifier)
                return finalPay;
            },
           
            jobEarnExp(){
                this.exp += 30 * this.expModifier;
            },
            jobLevelUp(){
                this.lvl += 1
            }
        }



        // activity levels

        this.walk = {
            name: "walk",
            level: 1,
            type: "activity",
            expModifier: 1,
            exp: 0,
            costModifier: 1,
            cost: 0,
            activityCost(){
                let finalCost = this.cost * this.costModifier;
                console.log(this.costModifier)
                return finalCost;
            },
           
            activityEarnExp(){
                this.exp += 30 * this.expModifier;
            },
            activityLevelUp(){
                this.lvl += 1
            }
        }

        //study levels

        this.upgrades = [
            {
                name: "TECH",
                studies: [
                    {
                        name: "Mecha Engineering",
                        level: 1,
                        modifier: 1,
                        requirements: 0,
                        status: "active",
                        levelCost(){
                            let cost = (500*this.level)*this.modifier * 1.25;
                            return cost;
                        },
                        levelUp(){
                            this.level += 1;
                            this.money -= this.levelCost()
                        }

                    },
                    {
                        name: "Artificial Intelligence",
                        level: 1,
                        modifier: 1,
                        requirements: 0,
                        status: "inactive",
                        levelCost(){
                            let cost =  (500*this.level)*this.modifier * 1.25;
                            return cost;
                        },
                        levelUp(){
                            this.level += 1;
                            this.money -= this.levelCost()
                        }
                    }
                ]
            }
        ]
       
       
    }


        // input is skill, level
    checkPlayerSkill(skillRequirements){
        for (let i = 0; i < skillRequirements.length; i+=2){
            if (skillRequirements[i] < skillRequirements[i+1]){
                console.log("the player doesn't have the level required")
                return false;
            } 

           
        }
        console.log("You meet the skill requirements")
        return true;
    }


        // input is item, amount of the item
    checkPlayerItem(itemRequirements){
        for (let i = 0; i < itemRequirements.length; i+=2){

            let itemIsTrue = (item) => item.name == itemRequirements[i];
            let itemIndex = this.inventory.findIndex(itemIsTrue);

            if (itemIndex == -1 || this.inventory[itemIndex].quantity < itemRequirements[i+1]){
                console.log("no se ha encontrado" + itemRequirements[i])
                return false;
                
            } 
           
        }
        console.log("you have all the items")
        return true;
       
    }
   



    startGame() {
        console.log("Game started");
        this.interval = setInterval(() => {
            
            this.displayStats();
        }, 1000);
    }

    stopGame(){
        console.log("Game stopped");
        clearInterval(this.interval);
    }


    activity(activity){
        if (activity == "walk"){
            let activitySkills = [
                {
                    "skill" : this.social,
                    "experience": 30,
                    
                },
                {
                    "skill": this.athletics,
                    "experience": 10

                }
            ]

            let activityMood = [
                {
                    "mood" : this.acomplished,
                    "change": 1
                }
            ]

            let centralTable = new furniture(centralFurnitureSection.items[0].itemPrice, centralFurnitureSection.items[0].itemName, centralFurnitureSection.items[0].shopType, centralFurnitureSection.items[0].itemImg, centralFurnitureSection.items[0].itemBonus)
            let activityItemPool = [centralTable, 5]

    

            this.startActivity(this.walk, this.walk.activityCost(), activitySkills, activityMood, activityItemPool)
            this.job = this.pizza.name;
            
            
           
            
        } 
        
        /*else if(job == "receptionist"){
            this.startActivity("receptionist", 15, 0)
            this.job = "Receptionist";

        } else if(job == "real-estate"){
            this.startActivity("real-estate", 25, 0)
            this.job = "Real Estate Agent";

        } else if(job == "lawyer"){
            this.startActivity("lawyer", 50, 0)
            this.job = "Lawyer";
        }
        */


        this.displayStats();
    
    }


    work(job) {
        if (job == "Pizza Delivery Man"){
            let jobSkills = [
                {
                    "skill" : this.social,
                    "experience": 30,
                    
                },
                {
                    "skill": this.athletics,
                    "experience": 10

                }
            ]

            let jobMood = [
                {
                    "mood" : this.depressed,
                    "change": 1
                }
            ]

            let centralTable = new furniture(centralFurnitureSection.items[0].itemPrice, centralFurnitureSection.items[0].itemName, centralFurnitureSection.items[0].shopType, centralFurnitureSection.items[0].itemImg, centralFurnitureSection.items[0].itemBonus)
            let jobItemPool = [centralTable, 5]

    

            this.startActivity(this.pizza, this.pizza.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.pizza.name;
            
            
           
            
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

   


    checkActivityRequirements(activityLvl){
     
    }


    checkCost(moneyChange) {
        if (this.money + moneyChange >= 0) {
            return true;
        } else {
            return false;
        }
    }

    buyFurni(furniture, quantity){

        const furniIndex = this.inventory.findIndex(item => item.name === furniture.name);

        
        if (this.money >= furniture.price){
            if (furniIndex !== -1){
                this.inventory[furniIndex].quantity += quantity;
                this.money -= furniture.price * quantity;
                alert("Bought "+ quantity + furniture.name +" for " + furniture.price)
                                
                this.displayStats();
            } else {
                this.inventory.push(furniture);
                const furniIndex = this.inventory.findIndex(item => item.name === furniture.name);
                this.inventory[furniIndex].quantity = quantity
                this.money -= furniture.price * quantity;
                alert("You bought "+ quantity + furniture.name + " for " + furniture.price);
               
               
                this.displayStats();
            }

          
        } else {
            console.log("Not enough money to buy " + furniture.name)
        }
    }

    sellFurni(furniture, amount){
        const furniIndex = this.inventory.findIndex(item => item.name === furniture.name)
        if (furniIndex !== -1){
            if (this.inventory[furniIndex].quantity > 1){
                this.inventory[furniIndex].quantity -= amount;
                this.money += furniture.price * amount;
                if (this.inventory[furniIndex].quantity == 0){
                    this.inventory.splice(furniIndex, 1);
                }
                console.log("You sold " + furniture.name + " for " + furniture.price);
            } else if (this.inventory[furniIndex].quantity <= 1){
                this.money += furniture.price;
                this.inventory.splice(furniIndex, 1);
                console.log("You sold " + furniture.name + " for " + furniture.price);
            } 
           
        } else {
            console.log("Not found in your inventory");
        }
    }


    //current activity progress bar

    progressBarMove(){
        if (p == 0){
        p = 1;
        let bar = document.getElementById("activity-progress-bar");
        let barWidth = 1;
        let id = setInterval(frame, 10);
        function frame(){
            if (barWidth >= 100){
                clearInterval(id);
                p = 0;
            } else{
                barWidth++;
                bar.style.width = barWidth + "%";
            }
        }
     }

    }

    

    



    startActivity(activity, moneyChange, skills, mood, itemPool){
      
        
        console.log("You started" + activity.name);
        this.currentActivity = activity.name;

        this.interval = setInterval(() => {
            if (this.checkCost(moneyChange)){
                this.updateStats(moneyChange, skills, mood);

                if (activity.type == "job"){
                    this.updateJobStats(activity);
                } else if(activity.type == "activity"){
                    this.updateActivityStats(activity);
                }
                
                
                this.displayStats();
                this.progressBarMove();
                this.itemDropThrow(itemPool);

                console.log(moneyChange)
            } else {
                this.endActivity();
                console.log("You don't have enough money to keep" + activity.name);
            }
            
        }, 1000);

        console.log("current activity after starting activity:" + this.currentActivity)



    }

    endActivity(){

    if (this.currentActivity !== "Doing nothing"){
        console.log("You finished" + this.currentActivity);
        this.currentActivity = "Doing nothing";
        console.log(this.currentActivity)
        clearInterval(this.interval);
        this.displayStats
        }
        console.log("current activity after finishing activity:" + this.currentActivity)

    }

    updateCurrentActivity(activity){
        this.currentActivity = activity;
        this.updateStats();
    }

    updateStats(moneyChange, skill, mood){
        this.money += moneyChange;
       
       
        this.updateSkillStats(skill)
        this.updateMoodStats(mood)
    }


//mood updating



    updateMoodStats(mood){
        for(let i = 0; i < mood.length; i++){
            if (mood[i].mood.status >= 35 || mood[i].mood.status <= -35){
                return;
            } else{
                mood[i].mood.status += mood[i].change * mood[i].mood.modifier;
                console.log(mood[i].mood.name + " increased by " + mood[i].change + "total:" + this.depressed.status)
            }
                
    

            }
      

    }


    //items drop rate

    itemDropRate(){
        return Math.floor(Math.random() * 100);
    }


    //array with item, droprate
    itemDropThrow(itemPool){

        for (let i = 0; i < itemPool.length; i+=2){

            let itemChance = this.itemDropRate();
            if (itemChance <= itemPool[i+1]){
                const itemIndex = this.inventory.findIndex(item => item.name === itemPool[i].name);

                if (itemIndex !== -1){
                    this.inventory[itemIndex].quantity += 1;
                    console.log("item added to quantity")
                } else{
                    this.inventory.push(itemPool[i]);
                    console.log("item pusshed into inventory")
                }

            } else{
                console.log("You didn't get the item")
                return;
            }
        }
     }






    //jobs level and experience updating

    updateJobStats(job){
        if (this.checkCurrentSkillExp(job) < this.nextLevel(job.level + 1)){
            job.jobEarnExp()
            console.log("this is" + job.name + "experience: " + job.exp)
        } else {
            job.jobEarnExp()
            job.jobLevelUp()
            console.log("you level up at" + job.name)

        }
    }


    //activity levels and experience updating

    updateActivityStats(activity){
        if (this.checkCurrentSkillExp(activity) < this.nextLevel(activity.level + 1)){
            activity.activityEarnExp()
            console.log("this is" + activity.name + "experience: " + activity.exp)
        } else {
            activity.activityEarnExp()
            activity.activityLevelUp()
            console.log("you level up at" + activity.name)

        }
    }


    //skills updating

    updateSkillStats(skills){

        for(let i = 0; i < skills.length; i++){
            if (this.checkCurrentSkillExp(skills[i].skill) < this.nextLevel(skills[i].skill.level + 1)){
           
                console.log("you have earned " + skills[i].experience + " in " + skills[i].skill.name)
                this.skillEarnExp(skills[i].skill, skills[i].experience, skills[i].skill.modifier);
                console.log(this.checkCurrentSkillExp(skills[i].skill))
            } else{
                this.skillEarnExp(skills[i].skill, skills[i].experience, skills[i].skill.modifier);
                this.skillLevelUp(skills[i].skill);
                console.log("Level up!, now you are level " + skills[i].skill.level + " of " + skills[i].skill.name)
            }

        }

        
    }

    nextLevel(level){
        let exponent = 1.5;
        let baseXp = 500;
        return Math.floor(baseXp * (level ** exponent))
    }

    checkCurrentSkillExp(skill){
        return skill.exp;
    }

    skillEarnExp(skill, experience, skillModifier){
        skill.exp += experience * skillModifier;
    }

    skillLevelUp(skill){
        skill.level += +1;
    }


    // furni inventory

    cleanInventory(parent){

        let child = parent.lastElementChild;
        while (child){
            parent.removeChild(child);
            child = parent.lastElementChild;
        }
    
    }
    
  

    displayStats() {
        document.getElementById("money").innerText = "MONEY: $"+ this.money;
        
        document.getElementById("current-activity").innerText = "Currently:" + this.currentActivity;
        document.getElementById("current-date").innerText = this.currentDate.toDateString();
        document.getElementById("days-passed").innerText = "Days passed:" + this.daysPassed;
        document.getElementById("inventory").innerText = "Inventory:" + this.inventory;

    



    }
}


const player = new Player("Edi");
player.startGame();




//Studying activities


document.getElementById("study-coding").addEventListener("click", function(){
    if (player.currentActivity == "Studying"){
        return;
    } 
    

    player.study("customer service");

    
})



//skill progress bar



//function to place furniture

function placeFurni(selectedFurniture, slot, slotArray){
    //popup the menu with the

    console.log("this is the slotarray" + slotArray)
    if (slotArray.length !== 0){
        slotArray.splice(0,1);
    }
    
    slotArray.push(selectedFurniture)

    selectedFurniture.applyEffects("equipped");

    
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
                    typeArray[i].applyEffects("unequipped");
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
                    typeArray[i].applyEffects("unequipped");
                   
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

console.log(player.pizza.jobPay());

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

//show the phone menu

const phoneMenu = document.getElementById("smartphone-container");
const phoneMenuBtn = document.getElementById("smartphone-button");

function showPhoneMenu(){
    phoneMenu.classList.toggle("visible");
    console.log("button clicked");
}

phoneMenuBtn.addEventListener("click", function(){

    showPhoneMenu();
})



//shop popup

const shopWindowbtn = document.getElementById("shop-top-button");
const shopWindow = document.getElementById("shop-window");
const shopWindowCloseBtn = document.getElementById("shop-window-close-btn");

function toggleShopWindow(){
    if (shopWindow.style.visibility == "visible"){
    shopWindow.style.visibility = "hidden";
    
    } else {
        shopWindow.style.visibility = "visible";
        
        
        }
}

shopWindowbtn.addEventListener("click", function(){
    removeChildItemDet(shopSectionsWindow);
    removeChildItemDet(shopTopPanel)
    populateShopSections()
    toggleShopWindow();
})

shopWindowCloseBtn.addEventListener("click", function(){
    removeChildItemDet(shopSectionsWindow);
    removeChildItemDet(shopTopPanel)
    populateShopSections()
    toggleShopWindow();
})


//shop array

let centralFurnitureSection = {
    sectionName: "CENTRAL FURNITURE",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [player.pizza.payModifier, 1],
            itemDescription: "a normal table",
            itemReq: "None",
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: "None"
        }
    ]
}

let shopInventory = [centralFurnitureSection]




//shop class to populate the window

const shopSectionsWindow = document.getElementById("shop-left-panel");
const shopItemWindow = document.getElementById("shop-bottom-panel")
const shopTopPanel = document.getElementById("shop-top-panel");
const shopFurnitureImage = document.getElementById("furniture-shop-img");
const furniturePriceBonusSection = document.getElementById("furniture-shop-price-bonus")
const furniturePriceSection = document.getElementById("furniture-shop-price-section")
const furnitureBonusSection = document.getElementById("furniture-shop-bonus-section")
const furnitureDescSection = document.getElementById("furniture-shop-description-section");
const furnitureReqSection = document.getElementById("furniture-shop-req-section");
const shopItemTitle = document.createElement("div");
const shopItemImg = document.createElement("img");
const shopItemPriceDetail = document.createElement("div"); 
const shopItemBonus = document.createElement("div");
const shopItemDescription = document.createElement("div");
const shopItemReq = document.createElement("div");
const shopItemBuyBtnSlot = document.createElement("div")
const shopItemBuyBtn = document.createElement("button")
const shopItemPriceTag = document.getElementById("furniture-shop-price-tag");
const shopItemBonusTag = document.getElementById("furniture-shop-bonus-tag")
const shopItemDescriptionTag = document.getElementById("furniture-shop-description-tag")
const shopItemReqTag = document.getElementById("furniture-shop-req-tag")
const shopWindowTitle = document.getElementById("shop-window-title");



shopItemTitle.setAttribute("id", "furniture-shop-name")
shopItemImg.setAttribute("id", "furniture-shop-img-source")
shopItemPriceDetail.setAttribute("id", "furniture-shop-price")
shopItemBonus.setAttribute("id", "furniture-shop-bonus")
shopItemDescription.setAttribute("id", "furniture-shop-description")
shopItemReq.setAttribute("id", "furniture-shop-req")
furniturePriceBonusSection.setAttribute("id", "furniture-shop-price-bonus")
furniturePriceSection.setAttribute("id", "furniture-shop-price-section")
furnitureBonusSection.setAttribute("id", "furniture-shop-bonus-section")
furnitureDescSection.setAttribute("id", "furniture-shop-description-section")
furnitureReqSection.setAttribute("id", "furniture-shop-req-section")
shopItemBuyBtnSlot.setAttribute("id", "furniture-shop-buy-btn-section");
shopItemBuyBtn.setAttribute("id", "furniture-shop-buy-btn");









function  populateShopSections(){

    for (let i=0;i<shopInventory.length;i++){
        const shopSection = document.createElement("div");
        shopSection.innerText = shopInventory[i].sectionName;
        shopSection.classList.add("shop-section-name")
        shopSectionsWindow.appendChild(shopSection);
        
        
        shopSection.addEventListener("click", function(){
            removeChildItemDet(shopItemWindow);
           ;
            populateSectionItems(shopInventory[i]);
        })
        
    }
   
}



console.log("ahihi" + shopInventory[0]);

console.log(centralFurnitureSection);

function populateSectionItems(section){
    console.log("això és la secció" + section)
    for (let i=0;i<section.items.length;i++){
        const shopItem = document.createElement("div");
        const shopItemName = document.createElement("div");
        const shopItemPrice = document.createElement("div");
        shopItemName.innerText = section.items[i].itemName;
        shopItemPrice.innerText = section.items[i].itemPrice;
        shopItem.classList.add("shop-item")
        shopItemName.classList.add("shop-item-name");
        shopItemPrice.classList.add("shop-item-price");
        shopItemWindow.appendChild(shopItem);
        shopItem.appendChild(shopItemName);
        shopItem.appendChild(shopItemPrice);
        shopItem.addEventListener("click", function(){
            console.log("shop details should be shown")
            removeChildItemDet(shopTopPanel)
            populateItemDetail(section.items[i])
        })
    }


}



function populateItemDetail(item){



    shopItemTitle.innerText = item.itemName;
    shopItemImg.src = item.itemImg;
    shopItemPriceDetail.innerText = item.itemPrice;
    shopItemBonus.innerText = item.itemBonus;
    shopItemDescription.innerText = item.itemDescription;
    shopItemReq.innerText = item.itemReq;
    shopItemBuyBtn.innerText = "BUY";
    shopItemBuyBtn.style.visibility = "visible";
    shopItemPriceTag.innerText = "PRICE:"
    shopItemBonusTag.innerText = "BONUS:"
    shopItemDescriptionTag.innerText = "DESCRIPTION:";
    shopItemReqTag.innerText = "REQUIREMENETS:"


  
      // item buy button functionality

      const buyItemFunc = function buyItemFunction(){
        let newFurniture = new furniture(item.itemPrice, item.itemName, item.shopType, item.itemImg, item.itemBonus);
        player.buyFurni(newFurniture, 1);
        console.log (player.inventory)
        console.log("el item que has comprado es" + newFurniture.name)
        shopItemBuyBtn.removeEventListener("click", buyItemFunc)
    }
        

        shopItemBuyBtn.addEventListener("click", buyItemFunc)




    shopTopPanel.appendChild(shopItemTitle);
    shopTopPanel.appendChild(shopFurnitureImage);
    shopTopPanel.appendChild(furniturePriceSection);
    shopTopPanel.appendChild(furnitureBonusSection);
    shopTopPanel.appendChild(furnitureDescSection);
    shopTopPanel.appendChild(furnitureReqSection);
    shopTopPanel.appendChild(furniturePriceBonusSection);
    shopTopPanel.appendChild(shopItemBuyBtnSlot)
    shopItemBuyBtnSlot.appendChild(shopItemBuyBtn);
    shopFurnitureImage.appendChild(shopItemImg);
    furniturePriceSection.appendChild(shopItemPriceDetail);
    furnitureBonusSection.appendChild(shopItemBonus);
    furniturePriceBonusSection.appendChild(furniturePriceSection);
    furniturePriceBonusSection.appendChild(furnitureBonusSection);
    furnitureDescSection.appendChild(shopItemDescription);
    furnitureReqSection.appendChild(shopItemReq);
    shopWindow.appendChild(shopWindowCloseBtn);

  

   


}

function removeChildItemDet(container){

   while (container.firstChild){

    container.removeChild(container.firstChild);
   }
}


drag_div(shopWindowTitle,shopWindow)




//job popup


const jobsWindowbtn = document.getElementById("jobs-top-button");
const jobsWindow = document.getElementById("job-window");
const jobsWindowLeftPanel = document.getElementById("job-window-left-panel");
const jobsWindowRightPanel = document.getElementById("job-window-right-panel");
const jobsWindowName = document.getElementById("job-window-name");
const jobsWindowCloseBtn = document.getElementById("job-window-close-btn");

function toggleJobWindow(){
    if (jobsWindow.style.visibility == "visible"){
        jobApplyBtn.style.visibility = "hidden"
    jobsWindow.style.visibility = "hidden";
    } else {
        jobApplyBtn.style.visibility = "visible"
        jobsWindow.style.visibility = "visible";
        }
}

jobsWindowbtn.addEventListener("click", function(){

    toggleJobWindow();
    removeChildItemDet(jobsWindowLeftPanel)
    removeChildItemDet(jobsWindowRightPanel);
    populateJobSections()
})

jobsWindowCloseBtn.addEventListener("click", function(){
    toggleJobWindow()
    removeChildItemDet(jobsWindowLeftPanel)
    removeChildItemDet(jobsWindowRightPanel);
    populateJobSections()
})


// draggable window




function drag_div(div_bar, div_window){

let mousePosition;
let offset = [0,0];
let isDown = false;

div_bar.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div_window.offsetLeft - e.clientX,
        div_window.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div_window.style.left = (mousePosition.x + offset[0]) + 'px';
        div_window.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
}


//job array

let basicJobsSection = {
    sectionName: "BASIC JOBS",
    jobs:
        [{
            jobName: "Pizza Delivery Man",
            jobPay: 10,
            skillReq: [player.military.level, 1],
            jobReq: "Military lvl 1, 1 basic central table",
            itemReq: ["Basic central table", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "Pizza Delivery Man",
            jobExperience: 0
        },
        {
            jobName: "Garbage Collector",
            jobPay: 10,
            skillReq: [player.military.level, 2],
            jobReq: "Military lvl 2, 1 basic central table",
            itemReq: ["Basic central table", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "Garbage collector",
            jobExperience: 0
        }
    ]
}

let advancedJobsSection = {
    sectionName: "ADVANCED JOBS",
    jobs:[{

    }
]

}

let jobSections = [basicJobsSection, advancedJobsSection]



function  populateJobSections(){

    for (let i=0;i<jobSections.length;i++){
        const jobSection = document.createElement("div");
        const jobSectionSubMenu = document.createElement("div");
        jobSection.innerText = jobSections[i].sectionName;
        jobSection.classList.add("job-section-name")
        jobSectionSubMenu.classList.add("job-section-sub-menu")
        jobsWindowLeftPanel.appendChild(jobSection);
        jobsWindowLeftPanel.appendChild(jobSectionSubMenu);
        let toggleState = "inactive"
        
        jobSection.addEventListener("click", function(){
            if (toggleState == "active"){
                removeChildItemDet(jobSectionSubMenu)
                toggleState = "inactive";
                } else{
                    toggleJobSectionContent(jobSections[i], jobSectionSubMenu);
                    toggleState = "active";
                }
           
           
        })
        
        
    }
   
}

//toggle job section jobs

function toggleJobSectionContent(section, sectionDom){
    for (let i=0; i<section.jobs.length;i++){
        const jobItem = document.createElement("div");
        jobItem.innerText = section.jobs[i].jobName;
        jobItem.classList.add("job-left-panel");
        sectionDom.appendChild(jobItem);
        console.log("jobs displayed")


        jobItem.addEventListener("click", function(){
            /*removeChildItemDet(jobsWindowRightPanel)*/
            console.log("job clicked")
            console.log(section.jobs[i])
            populateJobDetail(section.jobs[i])
        })

        

    }

}


//populate jobSectionDetails




const jobImageSection = document.getElementById("job-img");
const jobImage = document.createElement("img");
const jobTitleSection = document.getElementById("job-detail-title-section");
const jobTitleTag = document.getElementById("job-detail-title-tag");
const jobTitle = document.createElement("div");
const jobPaySection = document.getElementById("job-detail-pay-section");
const jobPayTag = document.getElementById("job-detail-pay-tag");
const jobPay = document.createElement("div");
const jobReqSection = document.getElementById("job-detail-req-section");
const jobReqTag = document.getElementById("job-detail-req-tag");
const jobReq = document.createElement("job-detail-req");
const jobDescSection = document.getElementById("job-detail-desc-section");
const jobDescTag = document.getElementById("job-detail-desc-tag");
const jobDesc = document.createElement("div");
const jobApplyBtnSection =  document.createElement("div");
const jobApplyBtn = document.createElement("button")



function populateJobDetail(job){
    

        jobApplyBtnSection.setAttribute("id","job-apply-btn-section")
        jobImage.setAttribute("id", "job-img-source");
        jobTitle.setAttribute("id", "job-detail-title");
        jobPay.setAttribute("id", "job-detail-pay");
        jobReq.setAttribute("id", "job-detail-req");
        jobDesc.setAttribute("id", "job-detail-desc");
        jobApplyBtn.setAttribute("id", "job-apply-btn")

        jobImage.src = job.jobSrc;
        jobTitle.innerText = job.jobName;
        jobPay.innerText = "$" + job.jobPay;
        jobReq.innerText = job.jobReq;
        jobDesc.innerText = job.jobDesc;
        console.log("job details appended")
        jobApplyBtn.innerText = "APPLY";
        jobApplyBtn.style.visibility = "visible";

        jobTitleTag.innerText = "JOB TITLE: ";
        jobPayTag.innerText = "PAY:";
        jobReqTag.innerText = "REQUIREMENTS: ";
        jobDescTag.innerText = "DESCRIPTION: ";


        //job button functionality

        

        
        
        
        
        
       


        
        jobImageSection.appendChild(jobImage);
        jobTitleSection.appendChild(jobTitleTag);
        jobTitleSection.appendChild(jobTitle);
        jobPaySection.appendChild(jobPayTag);
        jobPaySection.appendChild(jobPay);
        jobReqSection.appendChild(jobReqTag);
        jobReqSection.appendChild(jobReq);
        jobDescSection.appendChild(jobDescTag);
        jobDescSection.appendChild(jobDesc);
        jobApplyBtnSection.appendChild(jobApplyBtn);
        jobsWindowRightPanel.appendChild(jobImageSection);
        jobsWindowRightPanel.appendChild(jobTitleSection);
        jobsWindowRightPanel.appendChild(jobPaySection);
        jobsWindowRightPanel.appendChild(jobReqSection);
        jobsWindowRightPanel.appendChild(jobDescSection);
        jobsWindowRightPanel.appendChild(jobApplyBtnSection);

        if (jobApplyBtn.classList.contains("event-added")){
            return;
        } else{
            jobApplyBtn.addEventListener("click", function() {
                jobApplyBtn.classList.add("event-added");    
                console.log("EventLIstener added")
                if (player.currentActivity == job.jobActivity){
                    player.endActivity()
                    console.log("you stopped doing that")
                    return;
                } 
            
                if (player.checkPlayerItem(job.itemReq) == true && player.checkPlayerSkill(job.skillReq) == true){
                    player.work(job.jobActivity);
                } else {
                    alert("You don't meet the requirements for this job")
                }
                
               
              
            
            });
        }
}


drag_div(jobsWindowName, jobsWindow)






//Activities popup



const activitiesWindowbtn = document.getElementById("activities-top-button");
const activitiesWindow = document.getElementById("activities-window");
const activitiesWindowLeftPanel = document.getElementById("activities-window-left-panel");
const activitiesWindowRightPanel = document.getElementById("activities-window-right-panel");
const activitiesWindowName = document.getElementById("activities-window-name");
const activitiesWindowCloseBtn = document.getElementById("activities-window-close-btn");

function toggleActivitiesWindow(){
    if (activitiesWindow.style.visibility == "visible"){
        activitiesStartBtn.style.visibility = "hidden";
        activitiesWindow.style.visibility = "hidden";
    } else {
        activitiesStartBtn.style.visibility = "visible";
        activitiesWindow.style.visibility = "visible";
        }
}

activitiesWindowbtn.addEventListener("click", function(){

    toggleActivitiesWindow();
    removeChildItemDet(activitiesWindowLeftPanel)
    removeChildItemDet(activitiesWindowRightPanel);
    populateActivitiesSections()
})

activitiesWindowCloseBtn.addEventListener("click", function(){
    toggleActivitiesWindow()
    removeChildItemDet(activitiesWindowLeftPanel)
    removeChildItemDet(activitiesWindowRightPanel);
    populateActivitiesSections()
})


// draggable window




function drag_div(div_bar, div_window){

let mousePosition;
let offset = [0,0];
let isDown = false;

div_bar.addEventListener('mousedown', function(e) {
    isDown = true;
    offset = [
        div_window.offsetLeft - e.clientX,
        div_window.offsetTop - e.clientY
    ];
}, true);

document.addEventListener('mouseup', function() {
    isDown = false;
}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (isDown) {
        mousePosition = {

            x : event.clientX,
            y : event.clientY

        };
        div_window.style.left = (mousePosition.x + offset[0]) + 'px';
        div_window.style.top  = (mousePosition.y + offset[1]) + 'px';
    }
}, true);
}


//job array

let basicActivitiesSection = {
    sectionName: "BASIC ACTIVITIES",
    activities:
        [{
            activityName: "Take a walk",
            activityCost: 5,
            activityReq: [],
            skillReq: [],
            activityDesc: "an accessible and easy way to exercise and release stress",
            activity: "walk"
        },
        {
            activityName: "Garbage Collector",
            activityCost: 50,
            activityReq: [],
            skillReq: [],
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "garbage"
        }
    ]
}

let advancedActivitiesSection = {
    sectionName: "ADVANCED ACTIVITIES",
    activities:[{

    }
]

}

let activitiesSections = [basicActivitiesSection, advancedActivitiesSection]



function  populateActivitiesSections(){

    for (let i=0;i<activitiesSections.length;i++){
        const activitySection = document.createElement("div");
        const activitySectionSubMenu = document.createElement("div");
        activitySection.innerText = activitiesSections[i].sectionName;
        activitySection.classList.add("activities-section-name")
        activitySectionSubMenu.classList.add("activities-section-sub-menu")
        activitiesWindowLeftPanel.appendChild(activitySection);
        activitiesWindowLeftPanel.appendChild(activitySectionSubMenu);
        let toggleState = "inactive"
        
        activitySection.addEventListener("click", function(){
            if (toggleState == "active"){
                removeChildItemDet(activitySectionSubMenu)
                toggleState = "inactive";
                } else{
                    toggleActivitySectionContent(activitiesSections[i], activitySectionSubMenu);
                    toggleState = "active";
                }
           
           
        })
        
        
    }
   
}

//toggle activities section 

function toggleActivitySectionContent(section, sectionDom){
    for (let i=0; i<section.activities.length;i++){
        const activityItem = document.createElement("div");
        activityItem.innerText = section.activities[i].activityName;
        activityItem.classList.add("activities-left-panel");
        sectionDom.appendChild(activityItem);
        console.log("activities displayed")


        activityItem.addEventListener("click", function(){
            /*removeChildItemDet(jobsWindowRightPanel)*/
            console.log("activity clicked")
            console.log(section.activities[i])
            populateActivitiesDetail(section.activities[i])
        })

        

    }

}


//populate activitiesSectionDetails




const activitiesImageSection = document.getElementById("activities-img");
const activitiesImage = document.createElement("img");
const activitiesTitleSection = document.getElementById("activities-detail-title-section");
const activitiesTitleTag = document.getElementById("activities-detail-title-tag");
const activitiesTitle = document.createElement("div");
const activitiesCostSection = document.getElementById("activities-detail-cost-section");
const activitiesCostTag = document.getElementById("activities-detail-cost-tag");
const activitiesCost = document.createElement("div");
const activitiesReqSection = document.getElementById("activities-detail-req-section");
const activitiesReqTag = document.getElementById("activities-detail-req-tag");
const activitiesReq = document.createElement("activities-detail-req");
const activitiesDescSection = document.getElementById("activities-detail-desc-section");
const activitiesDescTag = document.getElementById("activities-detail-desc-tag");
const activitiesDesc = document.createElement("div");
const activitiesStartBtnSection =  document.createElement("div");
const activitiesStartBtn = document.createElement("button")



function populateActivitiesDetail(activity){
    

        activitiesStartBtnSection.setAttribute("id","activities-start-btn-section")
        activitiesImage.setAttribute("id", "activities-img-source");
        activitiesTitle.setAttribute("id", "activities-detail-title");
        activitiesCost.setAttribute("id", "activities-detail-cost");
        activitiesReq.setAttribute("id", "activities-detail-req");
        activitiesDesc.setAttribute("id", "activities-detail-desc");
        activitiesStartBtn.setAttribute("id", "activities-start-btn")

        activitiesImage.src = activity.activitySrc;
        activitiesTitle.innerText = activity.activityName;
        activitiesCost.innerText = activity.activityCost;
        activitiesReq.innerText = activity.activityReq;
        activitiesDesc.innerText = activity.activityDesc;
        console.log("job details appended")
        activitiesStartBtn.innerText = "START";
        activitiesStartBtn.style.visibility = "visible";

        activitiesTitleTag.innerText = "JOB TITLE: ";
        activitiesCostTag.innerText = "COST: $";
        activitiesReqTag.innerText = "REQUIREMENTS: ";
        activitiesDescTag.innerText = "DESCRIPTION: ";


        if ( activitiesStartBtn.classList.contains("event-added")){
            return;
        } else{
            activitiesStartBtn.addEventListener("click", function() {
                activitiesStartBtn.classList.add("event-added");    
                console.log("EventLIstener added")
                if (player.currentActivity == activity.activity){
                    player.endActivity()
                    console.log("you stopped doing that")
                    return;
                } 
            
                if (player.checkPlayerItem(activity.activityReq) == true && player.checkPlayerSkill(activity.skillReq) == true){
                    player.activity(activity.activity);
                } else {
                    alert("You don't meet the requirements for this job")
                }
                
               
              
            
            });
        }


        
        activitiesImageSection.appendChild(activitiesImage);
        activitiesTitleSection.appendChild(activitiesTitleTag);
        activitiesTitleSection.appendChild(activitiesTitle);
        activitiesCostSection.appendChild(activitiesCostTag);
        activitiesCostSection.appendChild(activitiesCost);
        activitiesReqSection.appendChild(activitiesReqTag);
        activitiesReqSection.appendChild(activitiesReq);
        activitiesDescSection.appendChild(activitiesDescTag);
        activitiesDescSection.appendChild(activitiesDesc);
        activitiesStartBtnSection.appendChild(activitiesStartBtn);
        activitiesWindowRightPanel.appendChild(activitiesImageSection);
        activitiesWindowRightPanel.appendChild(activitiesTitleSection);
        activitiesWindowRightPanel.appendChild(activitiesCostSection);
        activitiesWindowRightPanel.appendChild(activitiesReqSection);
        activitiesWindowRightPanel.appendChild(activitiesDescSection);
        activitiesWindowRightPanel.appendChild(activitiesStartBtnSection);


}


drag_div(activitiesWindowName, activitiesWindow)





/// STATS WINDOW AND FUNCTIONALITY


const statsWindowbtn = document.getElementById("stats-top-button");
const statsWindowContainer = document.getElementById("stats-window-container")
const statsWindow = document.getElementById("stats-window");
const statsWindowName = document.getElementById("stats-window-name");
const statsWindowCloseBtn = document.getElementById("stats-window-close-btn");

function toggleStatsWindow(){
    if (statsWindowContainer.style.visibility == "visible"){
        
        statsWindowContainer.style.visibility = "hidden";
        statsWindow.style.visibility = "hidden";
        statsWindowName.style.visibility = "hidden";
    } else {
        
        statsWindowContainer.style.visibility = "visible";
        statsWindow.style.visibility = "visible";
        statsWindowName.style.visibility = "visible";
        }
}

statsWindowbtn.addEventListener("click", function(){

    toggleStatsWindow();
    removeChildItemDet(statsWindowContent);
    removeChildItemDet(statsWindowSkills);
    removeChildItemDet(statsWindowEmotions);
    populateStatsSections();
})

statsWindowCloseBtn.addEventListener("click", function(){
    toggleStatsWindow()
    removeChildItemDet(statsWindowSkills);
    removeChildItemDet(statsWindowContent);
    populateStatsSections();
})


// stats dom

const statsWindowContent = document.createElement("div");
const statsWindowImgContainer = document.createElement("div");
const statsWindowImg = document.createElement("img");
const statsWindowMain = document.createElement("div");
const statsWindowMainNameContainer = document.createElement("div");
const statsWindowMainName = document.createElement("div");
const statsWindowMainMoneyContainer = document.createElement("div");
const statsWindowMainMoney = document.createElement("div");
const statsWindowMainMoodContainer = document.createElement("div");
const statsWindowMainMood = document.createElement("div");
const statsWindowMainNameTag = document.createElement("div");
const statsWindowMainMoneyTag = document.createElement("div");
const statsWindowMainMoodTag = document.createElement("div");
const statsWindowEmotionsTitle = document.createElement("div");
const statsWindowEmotions = document.createElement("div");
const statsWindowSkillsTitle = document.createElement("div");
const statsWindowSkills = document.createElement("div");
let statsWindowSocialBar = document.createElement("div");






let intervalId = window.setInterval(function(){
    removeChildItemDet(statsWindowContent);
    removeChildItemDet(statsWindowSkills);
    removeChildItemDet(statsWindowEmotions);

    populateStatsSections();
}, 500);




function populateStatsSections(){
    statsWindowContent.setAttribute("id", "stats-window-content");
    statsWindowImgContainer.setAttribute("id", "stats-window-img-container");
    statsWindowImg.setAttribute("id", "stats-window-img");
    statsWindowMain.setAttribute("id", "stats-window-main")
    statsWindowEmotionsTitle.setAttribute("id", "stats-window-emotions-title");
    statsWindowEmotions.setAttribute("id", "stats-window-emotions");
    statsWindowSkillsTitle.setAttribute("id", "stats-window-skills-title");
    statsWindowSkills.setAttribute("id", "stats-window-skills");

    statsWindowMainNameContainer.setAttribute("id", "stats-window-main-name-container");
    statsWindowMainMoneyContainer.setAttribute("id", "stats-window-main-money-container");
    statsWindowMainMoodContainer.setAttribute("id", "stats-window-main-mood-container");

    statsWindowMainNameTag.classList.add("stats-window-tags");
    statsWindowMainMoneyTag.classList.add("stats-window-tags");
    statsWindowMainMoodTag.classList.add("stats-window-tags");

    statsWindowSocialBar.setAttribute("id", "social-progress-bar")





    //emotions section



    
    for (let i=0; i<player.playerEmotions.length; i+=2){
        let statsWindowEmotionSlot = document.createElement("div");
        let statsWindowEmotionName = document.createElement("div");
        let statsWindowEmotionName2 = document.createElement("div");
        let statsWindowEmotionBarContainer = document.createElement("div");
        let statsWindowEmotionBar = document.createElement("div");

        statsWindowEmotionSlot.classList.add("emotions-slot");
        statsWindowEmotionName.classList.add("emotion-name-1");
        statsWindowEmotionName2.classList.add("emotion-name-2");

        statsWindowEmotionBarContainer.classList.add("emotion-progress-bar-div");
        statsWindowEmotionBar.classList.add("emotion-progress-bar-slider");

        statsWindowEmotionName.innerText = player.playerEmotions[i].name;
        statsWindowEmotionName2.innerText = player.playerEmotions[i+1].name;

        let statsEmotionResult = player.playerEmotions[i].status - player.playerEmotions[i+1].status;
       
        statsWindowEmotionBar.style.bottom = (35 + statsEmotionResult) + "%";
        statsWindowEmotionBar.innerText = statsEmotionResult;

        

        if (statsEmotionResult < 0){
            statsWindowEmotionBar.style.backgroundColor = "red";
        } else if(statsEmotionResult == 0){
            statsWindowEmotionBar.style.backgroundColor = "white";
        } else{
            statsWindowEmotionBar.style.backgroundColor = "green";
        }
        
        
    



        statsWindowEmotions.appendChild(statsWindowEmotionSlot);
        statsWindowEmotionSlot.appendChild(statsWindowEmotionName);
        statsWindowEmotionSlot.appendChild(statsWindowEmotionBarContainer);
        statsWindowEmotionSlot.appendChild(statsWindowEmotionName2);
        statsWindowEmotionBarContainer.appendChild(statsWindowEmotionBar);
        
    

    }

    //skills section
    for (let i=0; i<player.playerSkills.length;i++){
        let statsWindowSkill = document.createElement("div");
        let statsWindowSkillName = document.createElement("div");
        let statsWindowSkillBar = document.createElement("div");
        let statsWindowSkillLvl = document.createElement("div");
        let statsWindowSkillBarBase = document.createElement("div");
        let statsWindowSkillBarContainer = document.createElement("div");
        let statsWindowSkillExp = document.createElement("div");
        statsWindowSkillBarBase.classList.add("skill-progress-bar-div");
        statsWindowSkillBarContainer.classList.add("skill-progress-bar-container")
        statsWindowSkillLvl.classList.add("stats-window-skill-level")
        statsWindowSkillBar.classList.add("skill-progress-bar")

        
        statsWindowSkillName.innerText = player.playerSkills[i].name;
        statsWindowSkillLvl.innerText = "Lvl. " + player.playerSkills[i].level;
        statsWindowSkillExp.innerText = player.playerSkills[i].exp + "/" + (player.nextLevel(player.playerSkills[i].level + 1))

        if (player.playerSkills[i].level == 1){

       
        statsWindowSkillBar.style.width = ((player.playerSkills[i].exp/player.nextLevel(player.playerSkills[i].level + 1)) * 100) + "%";
        } else {
            statsWindowSkillBar.style.width = ((player.playerSkills[i].exp-player.nextLevel(player.playerSkills[i].level))/(player.nextLevel(player.playerSkills[i].level + 1)-player.nextLevel(player.playerSkills[i].level)) * 100) + "%";
        }
        

        

        statsWindowSkill.classList.add("stats-window-skill-element");
        statsWindowSkills.appendChild(statsWindowSkill);
        statsWindowSkill.appendChild(statsWindowSkillName);
        statsWindowSkillBarBase.appendChild(statsWindowSkillBar);
        statsWindowSkillBarContainer.appendChild(statsWindowSkillBarBase);
        statsWindowSkill.appendChild(statsWindowSkillBarContainer);
        statsWindowSkillBarContainer.appendChild(statsWindowSkillLvl);
        statsWindowSkill.appendChild(statsWindowSkillExp);
    }




    statsWindowImg.src = player.profilePicture;
    statsWindowEmotionsTitle.innerText = "Emotions";
    statsWindowSkillsTitle.innerText = "Skills";
    statsWindowMainNameTag.innerText = "NAME: "
    statsWindowMainName.innerText = player.name;
    statsWindowMainMoneyTag.innerText = "MONEY: "
    statsWindowMainMoney.innerText = "$" + player.money;
    statsWindowMainMoodTag.innerText = "CURRENT MOOD: "
    statsWindowMainMood.innerText = "needs to be set"

    statsWindow.appendChild(statsWindowContent);
    statsWindowContent.appendChild(statsWindowImgContainer);
    statsWindowImgContainer.appendChild(statsWindowImg);
    statsWindowMain.appendChild(statsWindowMainNameContainer);
    statsWindowMain.appendChild(statsWindowMainMoneyContainer);
    statsWindowMain.appendChild(statsWindowMainMoodContainer);
    statsWindowMainNameContainer.appendChild(statsWindowMainNameTag);
    statsWindowMainNameContainer.appendChild(statsWindowMainName);
    statsWindowMainMoneyContainer.appendChild(statsWindowMainMoneyTag);
    statsWindowMainMoneyContainer.appendChild(statsWindowMainMoney);
    statsWindowMainMoodContainer.appendChild(statsWindowMainMoodTag);
    statsWindowMainMoodContainer.appendChild(statsWindowMainMood);
    statsWindowContent.appendChild(statsWindowMain);
    statsWindowContent.appendChild(statsWindowEmotionsTitle);
    statsWindowContent.appendChild(statsWindowEmotions);
    statsWindowContent.appendChild(statsWindowSkillsTitle);
    statsWindowContent.appendChild(statsWindowSkills);



}


drag_div(statsWindowName, statsWindowContainer)





// Inventory window functionality and populate.

const inventoryWindowbtn = document.getElementById("inventory-top-button");
const inventoryWindowContainer = document.getElementById("inventory-window-container")
const inventoryMainWindow = document.getElementById("inventory-main-window");
const inventoryWindowName = document.getElementById("inventory-window-name");
const inventoryWindowCloseBtn = document.getElementById("inventory-window-close-btn");
const inventoryWindowItemDetail = document.getElementById("inventory-item-detail");



function toggleInventoryWindow(){
    if (inventoryWindowContainer.style.visibility == "visible"){
        
        inventoryWindowContainer.style.visibility = "hidden";
        inventoryMainWindow.style.visibility = "hidden";
        inventoryWindowName.style.visibility = "hidden";
        inventoryWindowItemDetail.style.visibility = "hidden";
    } else {
        
        inventoryWindowContainer.style.visibility = "visible";
        inventoryMainWindow.style.visibility = "visible";
        inventoryWindowName.style.visibility = "visible";
        }
}

inventoryWindowbtn.addEventListener("click", function(){

    toggleInventoryWindow();
    removeChildItemDet(inventoryMainWindow);
    populateInventorySections();
    console.log(player.inventory)
    
})

inventoryWindowCloseBtn.addEventListener("click", function(){
    toggleInventoryWindow()
    removeChildItemDet(inventoryMainWindow);
  
    populateInventorySections();
})





function populateInventorySections(){

    for (let i=0; i < player.inventory.length; i++ ){
        let inventoryItem = document.createElement("div");
        inventoryItem.classList.add("inventory-item-element")
        let inventoryItemImg = document.createElement("img");
        inventoryItemImg.classList.add("inventory-item-img");
        inventoryItemImg.src = player.inventory[i].source;
        let inventoryItemNum = document.createElement("div");
        inventoryItemNum.classList.add("inventory-item-num");
        inventoryItemNum.innerText = player.inventory[i].quantity;

        console.log("item attached to inventory");
       

        inventoryItem.addEventListener("click", function(){
            removeChildItemDet(inventoryWindowItemDetail);
            inventoryWindowItemDetail.style.visibility = "visible";

            //attach all the elements for the details of an item

            const inventoryWindowDetailNameDescContainer = document.createElement("div");
            inventoryWindowDetailNameDescContainer.setAttribute("id", "inventory-window-detail-name-desc-container")
            const inventoryWindowDetailNameContainer = document.createElement("div");
            inventoryWindowDetailNameContainer.setAttribute("id", "inventory-window-detail-name-container")
            const inventoryWindowDetailDescContainer = document.createElement("div");
            inventoryWindowDetailDescContainer.setAttribute("id", "inventory-window-detail-desc-container")
            const inventoryWindowDetailActionsContainer = document.createElement("div");
            inventoryWindowDetailActionsContainer.setAttribute("id", "inventory-window-detail-actions-container")
            const inventoryWindowDetailSellContainer = document.createElement("div");
            inventoryWindowDetailSellContainer.setAttribute("id", "inventory-window-detail-sell-container")
            const inventoryWindowDetailPriceContainer = document.createElement("div");
            inventoryWindowDetailPriceContainer.setAttribute("id", "inventory-window-detail-price-container")

            const inventoryWindowDetailNameTag = document.createElement("div");
            inventoryWindowDetailNameTag.setAttribute("id", "inventory-item-detail-name-tag");
            inventoryWindowDetailNameTag.innerText = "NAME"
            const inventoryWindowDetailName = document.createElement("div");
            inventoryWindowDetailName.setAttribute("id", "inventory-item-detail-name");
            inventoryWindowDetailName.innerText = player.inventory[i].name;

            const inventoryWindowDetailImgContainer = document.createElement("div");
            inventoryWindowDetailImgContainer.setAttribute("id", "inventory-item-detail-image-container");

            const inventoryWindowDetailImg = document.createElement("img");
            inventoryWindowDetailImg.setAttribute("id", "inventory-item-detail-image");
            inventoryWindowDetailImg.src = player.inventory[i].source;

            const inventoryWindowDetailDescTag = document.createElement("div");
            inventoryWindowDetailDescTag.setAttribute("id", "inventory-item-detail-desc-tag");
            inventoryWindowDetailDescTag.innerText = "DESCRIPTION"

            const inventoryWindowDetailDesc = document.createElement("div");
            inventoryWindowDetailDesc.setAttribute("id", "inventory-item-detail-desc");
            inventoryWindowDetailDesc.innerText = player.inventory[i].description;

            const inventoryWindowDetailPriceTag = document.createElement("div");
            inventoryWindowDetailPriceTag.setAttribute("id", "inventory-item-detail-price-tag");
            inventoryWindowDetailPriceTag.innerText = "Price";

            const inventoryWindowDetailPrice = document.createElement("div");
            inventoryWindowDetailPrice.setAttribute("id", "inventory-item-detail-price");
            inventoryWindowDetailPrice.innerText = player.inventory[i].price;


            let itemAmount = player.inventory[i].quantity;

            const inventoryWindowDetailNumContainer = document.createElement("div");
            inventoryWindowDetailNumContainer.setAttribute("id", "inventory-item-detail-number-container");

            const inventoryWindowDetailNumUp = document.createElement("img");
            inventoryWindowDetailNumUp.setAttribute("id", "inventory-item-detail-number-up");
            inventoryWindowDetailNumUp.addEventListener("click", function(){
                if (itemAmount < player.inventory[i].quantity){
                    itemAmount++;
                    inventoryWindowDetailNum.innerText = itemAmount;
                } else {
                    return;
                }
            })

            const inventoryWindowDetailNumDown = document.createElement("img");
            inventoryWindowDetailNumDown.setAttribute("id", "inventory-item-detail-number-down");
            inventoryWindowDetailNumDown.addEventListener("click", function(){
                if (itemAmount > 1){
                    itemAmount--;
                    inventoryWindowDetailNum.innerText = itemAmount;
                } else {
                    return;
                }
            
            })

            const inventoryWindowDetailNum = document.createElement("div");
            inventoryWindowDetailNum.setAttribute("id", "inventory-item-detail-number");
            
            inventoryWindowDetailNum.innerText = itemAmount;



            const inventoryWindowSellBtn = document.createElement("button");
            inventoryWindowSellBtn.setAttribute("id", "inventory-item-detail-sell-btn");
            inventoryWindowSellBtn.innerText = "SELL";

            inventoryWindowSellBtn.addEventListener("click", function(){
                let newItemAmount = player.inventory[i].quantity - itemAmount;
                let itemName = player.inventory[i].name;
                player.sellFurni(player.inventory[i], itemAmount)
                
                alert("se ha vendido" + itemAmount + " " + itemName);


                itemAmount = newItemAmount;
                inventoryWindowDetailNum.innerText = itemAmount;
             
                removeChildItemDet(inventoryMainWindow);
                populateInventorySections();
               
            })

            

            const inventoryWindowDestroyBtn = document.createElement("button");
            inventoryWindowDestroyBtn.setAttribute("id", "inventory-item-detail-destroy-btn");
            inventoryWindowDestroyBtn.innerText = "DESTROY";

            inventoryWindowDetailImgContainer.appendChild(inventoryWindowDetailImg)
            inventoryWindowItemDetail.appendChild(inventoryWindowDetailImgContainer)
            inventoryWindowItemDetail.appendChild(inventoryWindowDetailNameDescContainer)
            inventoryWindowItemDetail.appendChild(inventoryWindowDetailActionsContainer);
            inventoryWindowDetailNameDescContainer.appendChild(inventoryWindowDetailNameContainer)
            inventoryWindowDetailNameContainer.appendChild(inventoryWindowDetailNameTag);
            inventoryWindowDetailNameContainer.appendChild(inventoryWindowDetailName);
            inventoryWindowDetailNameDescContainer.appendChild(inventoryWindowDetailDescContainer)
            inventoryWindowDetailDescContainer.appendChild(inventoryWindowDetailDescTag);
            inventoryWindowDetailDescContainer.appendChild(inventoryWindowDetailDesc);
            inventoryWindowDetailActionsContainer.appendChild(inventoryWindowDetailPriceContainer)
            inventoryWindowDetailPriceContainer.appendChild(inventoryWindowDetailPriceTag);
            inventoryWindowDetailPriceContainer.appendChild(inventoryWindowDetailPrice);
            inventoryWindowDetailActionsContainer.appendChild(inventoryWindowDetailSellContainer);

            inventoryWindowDetailNumContainer.appendChild(inventoryWindowDetailNumDown);
            inventoryWindowDetailNumContainer.appendChild(inventoryWindowDetailNum);
            inventoryWindowDetailNumContainer.appendChild(inventoryWindowDetailNumUp);

            inventoryWindowDetailSellContainer.appendChild(inventoryWindowDetailNumContainer);
            inventoryWindowDetailSellContainer.appendChild(inventoryWindowSellBtn);
            inventoryWindowDetailSellContainer.appendChild(inventoryWindowDestroyBtn);


        })


        inventoryMainWindow.appendChild(inventoryWindowItemDetail)
        inventoryMainWindow.appendChild(inventoryItem);
        inventoryItem.appendChild(inventoryItemImg);
        inventoryItem.appendChild(inventoryItemNum);
    }

    for (let i=0; i < 10; i++ ){
        let inventoryEmptySlot = document.createElement("div");
        inventoryEmptySlot.classList.add("inventory-empty-slot")
        inventoryMainWindow.appendChild(inventoryEmptySlot)

    }



}

drag_div(inventoryWindowName,inventoryWindowContainer)




//// Upgrades section

const upgradesWindowbtn = document.getElementById("upgrades-top-button");
const upgradesWindowContainer = document.getElementById("upgrades-window-container")
const upgradesMainWindow = document.getElementById("upgrades-main-window");
const upgradesWindowName = document.getElementById("upgrades-window-name");
const upgradesWindowCloseBtn = document.getElementById("upgrades-window-close-btn");
const upgradesWindowSections = document.getElementById("upgrades-window-sections");
const upgradesWindowSectionItems = document.getElementById("upgrades-window-section-list");



function toggleUpgradesWindow(){
    if (upgradesWindowContainer.style.visibility == "visible"){
        
        upgradesWindowContainer.style.visibility = "hidden";
        upgradesMainWindow.style.visibility = "hidden";
        upgradesWindowName.style.visibility = "hidden";
        
    } else {
        
        upgradesWindowContainer.style.visibility = "visible";
        upgradesMainWindow.style.visibility = "visible";
        upgradesWindowName.style.visibility = "visible";
        }
}

upgradesWindowbtn.addEventListener("click", function(){

    toggleUpgradesWindow();
    removeChildItemDet(upgradesWindowSections);
    populateUpgradesSections();
    
})

upgradesWindowCloseBtn.addEventListener("click", function(){
    toggleUpgradesWindow()
    removeChildItemDet(upgradesWindowSections);
  
    populateUpgradesSections();
})



function populateUpgradesSections(){

    for (let i = 0; i < player.upgrades.length; i++){
        console.log(player.upgrades[i].name)
        console.log(player.upgrades[i].studies[0])

        let upgradesSection = document.createElement("div");
        upgradesSection.classList.add("upgrades-section-element")
        upgradesSection.innerText = player.upgrades[i].name;

        upgradesSection.addEventListener("click", function(){
            removeChildItemDet(upgradesWindowSectionItems);
            populateUpgradesSectionList(player.upgrades[i]);
        })

        upgradesWindowSections.appendChild(upgradesSection);
        

    }



}

function populateUpgradesSectionList(section){
    for (let i = 0; i < section.studies.length; i++){
        let upgradesSectionItem = document.createElement("div");
        upgradesSectionItem.classList.add("upgrades-section-items");

        let upgradesSectionItemLeft = document.createElement("div");
        upgradesSectionItemLeft.classList.add("upgrades-section-items-left");

        let upgradesSectionItemName = document.createElement("div");
        upgradesSectionItemName.classList.add("upgrades-section-items-name");
        upgradesSectionItemName.innerText = section.studies[i].name;
        let upgradesSectionItemLevel = document.createElement("div");
        upgradesSectionItemLevel.classList.add("upgrades-section-items-level");
        upgradesSectionItemLevel.innerText = "Lvl. " + section.studies[i].level;


        let upgradesSectionItemRight = document.createElement("div");
        upgradesSectionItemRight.classList.add("upgrades-section-items-right");

        let upgradesSectionItemUpgradeBtn = document.createElement("button");
        upgradesSectionItemUpgradeBtn.classList.add("upgrade-section-items-upgrade-button");
        upgradesSectionItemUpgradeBtn.innerText = "UPGRADE";

        upgradesSectionItemUpgradeBtn.addEventListener("click", function(){

            if (section.studies[i].levelCost() > player.money){
                console.log("not enough money to upgrade");
                return;
            }
            section.studies[i].levelUp();
            upgradesSectionItemUpgradeCost.innerText =  "$" + section.studies[i].levelCost();
            upgradesSectionItemLevel.innerText = "Lvl. " + section.studies[i].level;
        })

        let upgradesSectionItemUpgradeCost = document.createElement("div");
        upgradesSectionItemUpgradeCost.classList.add("upgrade-section-item-upgrade-cost");
        upgradesSectionItemUpgradeCost.innerText = "$" + section.studies[i].levelCost();


       

        upgradesWindowSectionItems.appendChild(upgradesSectionItem);
        upgradesSectionItem.appendChild(upgradesSectionItemLeft);
        upgradesSectionItemLeft.appendChild(upgradesSectionItemName);
        upgradesSectionItemLeft.appendChild(upgradesSectionItemLevel);
        upgradesSectionItem.appendChild(upgradesSectionItemRight);
        upgradesSectionItemRight.appendChild(upgradesSectionItemUpgradeBtn);
        upgradesSectionItemRight.appendChild(upgradesSectionItemUpgradeCost);
    }
}

drag_div(upgradesWindowName,upgradesWindowContainer)