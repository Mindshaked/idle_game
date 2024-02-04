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
        let id=0;
        this.id = id;
        ++id;

        this.mood = "none";
      
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
        this.currentActivity = "Doing nothing";
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


    startActivity(activity, moneyChange, studyLevel){
        this.endActivity();
        
        console.log("You started" + activity);
        this.currentActivity = activity;

        this.interval = setInterval(() => {
            if (this.checkCost(activity, moneyChange)){
                this.updateStats(moneyChange, studyLevel);
                this.displayStats();
                this.progressBarMove();
            } else {
                this.endActivity();
                console.log("You don't have enough money to keep" + activity);
            }
            
        }, 1000);



    }

    endActivity(){

    if (this.currentActivity !== "Doing nothing"){
        console.log("You finished" + this.currentActivity);
        this.currentActivity = "Doing nothing";
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
        document.getElementById("money").innerText = "MONEY: $"+ this.money;
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

function toggleShopWindow(){
    if (shopWindow.style.visibility == "visible"){
    shopWindow.style.visibility = "hidden";
    } else {
        shopWindow.style.visibility = "visible";
        }
}

shopWindowbtn.addEventListener("click", function(){
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









function  populateShopSections(){

    for (let i=0;i<shopInventory.length;i++){
        const shopSection = document.createElement("div");
        shopSection.innerText = shopInventory[i].sectionName;
        shopSection.classList.add("shop-section-name")
        shopSectionsWindow.appendChild(shopSection);
        
        
        shopSection.addEventListener("click", function(){
            removeChildItemDet(shopItemWindow)
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
        player.buyFurni(newFurniture);
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


}

function removeChildItemDet(container){

   while (container.firstChild){
    console.log("dom element removed")
    container.removeChild(container.firstChild);
   }
}




//job popup


const jobsWindowbtn = document.getElementById("jobs-top-button");
const jobsWindow = document.getElementById("job-window");
const jobsWindowLeftPanel = document.getElementById("job-window-left-panel");
const jobsWindowRightPanel = document.getElementById("job-window-right-panel")

function toggleJobWindow(){
    if (jobsWindow.style.visibility == "visible"){
    jobsWindow.style.visibility = "hidden";
    } else {
        jobsWindow.style.visibility = "visible";
        }
}

jobsWindowbtn.addEventListener("click", function(){

    toggleJobWindow();
    removeChildItemDet(jobsWindowLeftPanel)
    populateJobSections()
})


//job array

let basicJobsSection = {
    sectionName: "BASIC JOBS",
    jobs:
        [{
            jobName: "Pizza Delivery",
            jobPay: 50,
            jobReq: "None",
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "pizza"
        },
        {
            jobName: "Garbage Collector",
            jobPay: 50,
            jobReq: "None",
            jobDesc: "You might smell bad when coming back home, but it is what it is",
            jobActivity: "garbage"
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
const jobApplyBtnSection = document.getElementById("job-apply-btn-section");
const jobApplyBtn = document.createElement("button")



function populateJobDetail(job){
    


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

        jobApplyBtn.addEventListener("click", function() {
            if (player.currentActivity == job.jobActivity){
                return;
            } 
        
            player.work(job.jobActivity);
           
        
        });


        
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


}



