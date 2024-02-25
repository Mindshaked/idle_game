let p = 0;

class furniture {
    constructor(price, name, type, source){
        this.name = name;
        this.price = price;
        this.stats = "+1 Sanity"
        this.description = "None";
        this.requirements = "None";
        this.type = type;
        this.source = source;
        this.equipped = false;
        this.amount = 1;
        let id=0;
        this.id = id;
        ++id;


      
    }

  
}

let inventoryWindow = document.getElementById("inventory-window")


class Player {
    constructor(name){
        this.name = name;
        this.money = 0;
        this.jobLevel = 1;
        this.studyLevel = 1;
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
            exp: 0,
            modifier: 1,
            jobEarnExp(){
                this.exp += 30 * this.modifier;
            },
            jobLevelUp(){
                this.lvl += 1
            }
        }
       
       
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

    

            this.startActivity(this.pizza, 10, 0, jobSkills, jobMood)
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

    activity(activity){
        
    }


    checkStudyRequirements(studyLvl){
        if (this.studyLevel >= studyLvl){
            receptionistBtn.disabled = false;
            receptionistBtn.textContent = "Receptionist"
        } else {
            return;
        }
    }


    checkCost(moneyChange) {
        if (this.money + moneyChange >= 0) {
            return true;
        } else {
            return false;
        }
    }

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

    

    



    startActivity(activity, moneyChange, studyLevel, skills, mood){
      
        
        

       
        
        console.log("You started" + activity.name);
        this.currentActivity = activity.name;

        this.interval = setInterval(() => {
            if (this.checkCost(moneyChange)){
                this.updateStats(moneyChange, studyLevel, skills, mood);
                this.updateJobStats(activity);
                this.displayStats();
                this.progressBarMove();
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

    updateStats(moneyChange, studyLevel, skill, mood){
        this.money += moneyChange;
        this.studyLevel += studyLevel;
       
       
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
    
    populateInventory(){
        for (let i=0; i<this.inventory.length; i++){
            let item = document.createElement("div");
            item.innerText = this.inventory[i].name
            item.className = "item"
            inventoryWindow.appendChild(item)
        }
    }

    displayStats() {
        document.getElementById("money").innerText = "MONEY: $"+ this.money;
        document.getElementById("study").innerText = "Study Level:"+ this.studyLevel;
        document.getElementById("current-activity").innerText = "Currently:" + this.currentActivity;
        document.getElementById("current-date").innerText = this.currentDate.toDateString();
        document.getElementById("days-passed").innerText = "Days passed:" + this.daysPassed;
        document.getElementById("inventory").innerText = "Inventory:" + this.inventory;

    
        
        this.checkStudyRequirements(10)



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
    shopItemBuyBtn.remove();
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
            itemBonus: "none",
            itemDescription: "a normal table",
            itemReq: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: "none",
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









function  populateShopSections(){

    for (let i=0;i<shopInventory.length;i++){
        const shopSection = document.createElement("div");
        shopSection.innerText = shopInventory[i].sectionName;
        shopSection.classList.add("shop-section-name")
        shopSectionsWindow.appendChild(shopSection);
        
        
        shopSection.addEventListener("click", function(){
            removeChildItemDet(shopItemWindow);
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
            removeChildItemDet(shopTopPanel)
            populateItemDetail(section.items[i])
        })
    }


}

function populateItemDetail(item){




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

    shopItemBuyBtn.addEventListener("click", function(){
        let newFurniture = new furniture(item.itemPrice, item.itemName, item.shopType, item.itemImg);
        removeChildItemDet(inventoryMainWindow);
        populateInventorySections();
        player.buyFurni(newFurniture);
        console.log(player.inventory[0].name)
    })

    

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
    console.log("dom element removed")
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
        jobApplyBtn.remove();
    jobsWindow.style.visibility = "hidden";
    } else {
       
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
            jobPay: 50,
            jobReq: "None",
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "Pizza Delivery Man",
            jobExperience: 0
        },
        {
            jobName: "Garbage Collector",
            jobPay: 50,
            jobReq: "None",
            jobDesc: "You might smell bad when coming back home, but it is what it is",
            jobActivity: "garbage",
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




const jobImageSection = document.getElementById("furniture-shop-img");
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
        jobPay.innerText = job.jobPay;
        jobReq.innerText = job.jobReq;
        jobDesc.innerText = job.jobDesc;
        console.log("job details appended")
        jobApplyBtn.innerText = "APPLY";
        jobApplyBtn.style.visibility = "visible";

        jobTitleTag.innerText = "JOB TITLE: ";
        jobPayTag.innerText = "PAY: $";
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
            
                player.work(job.jobActivity);
              
            
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
            activityName: "Taka a walk",
            activityCost: 50,
            activityReq: "None",
            activityDesc: "an accessible and easy job to for beginners in the job market",
            activityActivity: "pizza"
        },
        {
            activityName: "Garbage Collector",
            activityCost: 50,
            activityReq: "None",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activityActivity: "garbage"
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



function populateActivitiesDetail(job){
    

        activitiesStartBtnSection.setAttribute("id","activities-start-btn-section")
        activitiesImage.setAttribute("id", "activities-img-source");
        activitiesTitle.setAttribute("id", "activities-detail-title");
        activitiesCost.setAttribute("id", "activities-detail-cost");
        activitiesReq.setAttribute("id", "activities-detail-req");
        activitiesDesc.setAttribute("id", "activities-detail-desc");
        activitiesStartBtn.setAttribute("id", "activities-start-btn")

        activitiesImage.src = job.activitySrc;
        activitiesTitle.innerText = job.activityName;
        activitiesCost.innerText = job.activityCost;
        activitiesReq.innerText = job.activityReq;
        activitiesDesc.innerText = job.activityDesc;
        console.log("job details appended")
        activitiesStartBtn.innerText = "APPLY";
        activitiesStartBtn.style.visibility = "visible";

        activitiesTitleTag.innerText = "JOB TITLE: ";
        activitiesCostTag.innerText = "COST: $";
        activitiesReqTag.innerText = "REQUIREMENTS: ";
        activitiesDescTag.innerText = "DESCRIPTION: ";


        //job button functionality

        /*jobApplyBtn.addEventListener("click", function() {
            if (player.currentActivity == job.jobActivity){
                return;
            } 
        
            player.work(job.jobActivity);
           
        
        });

        */


        
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
        
        console.log("emotions bar position:" + statsWindowEmotionBar.style.top)
    



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

        console.log(player.playerSkills)
        statsWindowSkillName.innerText = player.playerSkills[i].name;
        statsWindowSkillLvl.innerText = "Lvl. " + player.playerSkills[i].level;
        statsWindowSkillExp.innerText = player.playerSkills[i].exp + "/" + (player.nextLevel(player.playerSkills[i].level + 1))

        if (player.playerSkills[i].level == 1){

       
        statsWindowSkillBar.style.width = ((player.playerSkills[i].exp/player.nextLevel(player.playerSkills[i].level + 1)) * 100) + "%";
        } else {
            statsWindowSkillBar.style.width = ((player.playerSkills[i].exp-player.nextLevel(player.playerSkills[i].level))/(player.nextLevel(player.playerSkills[i].level + 1)-player.nextLevel(player.playerSkills[i].level)) * 100) + "%";
        }
        console.log (player.nextLevel(player.playerSkills[i].level))

        

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

            const inventoryWindowDetailNum = document.createElement("div");
            inventoryWindowDetailNum.setAttribute("id", "inventory-item-detail-number");
            inventoryWindowDetailNum.innerText = player.inventory[i].amount;

            const inventoryWindowSellBtn = document.createElement("button");
            inventoryWindowSellBtn.setAttribute("id", "inventory-item-detail-sell-btn");
            inventoryWindowSellBtn.innerText = "SELL";

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
            inventoryWindowDetailActionsContainer.appendChild(inventoryWindowDetailSellContainer)
            inventoryWindowDetailSellContainer.appendChild(inventoryWindowDetailNum);
            inventoryWindowDetailSellContainer.appendChild(inventoryWindowSellBtn);
            inventoryWindowDetailSellContainer.appendChild(inventoryWindowDestroyBtn);


        })


        inventoryMainWindow.appendChild(inventoryWindowItemDetail)
        inventoryMainWindow.appendChild(inventoryItem);
        inventoryItem.appendChild(inventoryItemImg);
    }

    for (let i=0; i < 10; i++ ){
        let inventoryEmptySlot = document.createElement("div");
        inventoryEmptySlot.classList.add("inventory-empty-slot")
        inventoryMainWindow.appendChild(inventoryEmptySlot)

    }



}

drag_div(inventoryWindowName,inventoryMainWindow)