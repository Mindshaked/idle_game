let p = 0;

import {shopInventory, centralFurnitureSection} from "./shop.js"

export class furniture {
    constructor(price, sellPrice, name, type, source, effects){
        this.name = name;
        this.price = price;
        this.sellPrice = sellPrice;
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
               
                return;
             }
      
    }


}


class Job {
    constructor(name, type, action, pay){
        this.name = name;
        this.level = 1;
        this.type = type;
        this.action = action;
        this.expModifier = 1;
        this.exp = 0;
        this.payModifier = 1;
        this.pay = pay;   
    }

    jobPay(){
        let finalPay = this.pay * this.payModifier;
        console.log(this.payModifier)
        return finalPay;
    }
   
    jobEarnExp(){
        this.exp += 30 * this.expModifier;
    }
    jobLevelUp(player){
        this.level += 1;
        console.log(this.level);

         populateJobSections(player);
       
    }
 
}

class Upgrade {
    constructor(name, requirements){
        this.name = name;
        this.level = 1;
        this.modifier = 1;
        this.requirements = requirements;
        this.status = "active";
    }

    levelCost(){
        let cost = (500*this.level)*this.modifier * 1.25;
        return cost;
    }

    levelUp(){
        
        player.money -= this.levelCost()
        this.level += 1;
    
    }
}



class Player {
    constructor(name){
        this.name = name;
        this.money = 1000;
        this.jobLevel = 1;
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

        // TECH JOBS

        this.pcBang = new Job("PC Bang clerk", "job", "working at a PC Bang", 10);

        this.itTechnician = new Job("IT Technician", "job", "fixing computers", 20);
        this.esportsPlayer = new Job("E-sports Professional Player", "job", "playing games", 20);

        this.mechaMechanic = new Job("Mecha Mechanic", "job", "fixing giant robots", 40);
        this.videogameDev = new Job("Videogame Developer", "job", "developing videogames", 40);
        this.aiSpecialist = new Job("AI Specialist", "job", "creating AI Prompts", 40);
        this.streetRacing = new Job("Street Racer", "job", "driving in an illegal race", 40);

        this.cyberSecurity = new Job("Cyber Security Expert", "job", "stopping hackers", 80);
        this.metalBubble = new Job("Metal Bubble Racer", "job", "frolling and rolling", 80);
        this.rogueAiHunter = new Job("Rogue AI Hunter", "job", "stopping the end of the world", 80);
        this.nanomachineSpecialist = new Job("Nanomachine Specialist", "job", "making very little machines", 80);

        this.aiGovenor = new Job("AI Governor", "job", "ruling the whole society through AI", 200);
        this.cyberTerrorist = new Job("Cyberterrorist", "job", "hacking for a greater cause", 200);
        



        // activity levels

        this.walk = {
            name: "walk",
            level: 1,
            type: "activity",
            action: "walking",
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


        // TECH
        const machineControl = new Upgrade("Machine Control", []);
        const artificialIntelligence = new Upgrade("Artificial Intelligence", []);
        const programming = new Upgrade("Programming", []);
        const mechanics = new Upgrade("Mechanics", []);
        const informatics = new Upgrade("Informatics", []);
        const nanoTech = new Upgrade("Nanotech", []);


        // SOCIAL
        const selling = new Upgrade("Sales", []);
        const persuasion = new Upgrade("Persuasion", []);
        const digitalRep = new Upgrade("Digital Reputation", []);
        const economics = new Upgrade("Economics", [])


        // EMOTIONS

        const divination = new Upgrade("Divination", []);
        const emotionalShifting = new Upgrade ("Emotional Shifting", []);
        const emotionalControl = new Upgrade ("Emotional Control", []);
        const memoryArchitecture = new Upgrade ("Memory Architecture", []);

        //ARTS

        const dancing = new Upgrade ("dancing", []);
        const voiceControl = new Upgrade ("Voice Control", []);
        const acting = new Upgrade ("Acting", []);
        const influence = new Upgrade ("Influence", []);

        // ATHLETICS

        const fighting = new Upgrade ("Fighting", []);
        const agility = new Upgrade ("Agility", []);
        const physicalStrength = new Upgrade ("Physical Strength", []);
        const courage = new Upgrade ("Courage", []);

        //SCIENCE

        const medicine = new Upgrade ("Medicine", []);
        const biology = new Upgrade ("Biology", []);
        const chemistry = new Upgrade ("Chemistry", []);
        const engineering = new Upgrade ("Engineering", []);

        //MILITARY

        const pilotage = new Upgrade ("Pilotage", []);
        const firearmSkill = new Upgrade ("Firearm Skill", []);
        const espionage = new Upgrade ("Espionage", []);
        const militaryStrategy = new Upgrade ("Military Strategy", [])


        this.upgrades = [
            {
                name: "TECH",
                studies: [machineControl, artificialIntelligence, programming, mechanics, informatics, nanoTech]
            },

            {
                name: "SOCIAL",
                studies: [selling, persuasion, digitalRep, economics]
            },

            {
                name: "EMOTIONS",
                studies: [divination, emotionalShifting, emotionalControl, memoryArchitecture]
            },

            {
                name: "ARTS",
                studies: [dancing, voiceControl, acting, influence]
            },

            {
                name: "ATHLETICS",
                studies: [fighting, agility, physicalStrength, courage]
            },

            {
                name: "SCIENCE",
                studies: [medicine, biology, chemistry, engineering]
            },

            {
                name: "MILITARY",
                studies: [pilotage, firearmSkill, espionage, militaryStrategy]
            }
        ] 
       
       
    }


        // input is skill, level
    checkPlayerSkill(skillRequirements){
        for (let i = 0; i < skillRequirements.length; i+=2){
            if (skillRequirements[i] < skillRequirements[i+1]){
                player.displayAlert("the player doesn't have the level required");
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
                player.displayAlert(itemRequirements[i] + "not found")
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
                    "mood" : this.relaxed,
                    "change": 0.1
                }
            ]

            let centralTable = new furniture(centralFurnitureSection.items[0].itemPrice, centralFurnitureSection.items[0].itemSellPrice, centralFurnitureSection.items[0].itemName, centralFurnitureSection.items[0].shopType, centralFurnitureSection.items[0].itemImg, centralFurnitureSection.items[0].itemBonus)
            let activityItemPool = [centralTable, 5]

    

            this.startActivity(this.walk, this.walk.activityCost(), activitySkills, activityMood, activityItemPool)
            this.job = this.walk.name;
            
            
           
            
        } 
        
   


        this.displayStats();
    
    }



    work(job) {
        if (job == "PC Bang clerk"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 30,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.relaxed,
                    "change": 0.01,
                },
                {
                    "mood" : this.depressed,
                    "change": 0.02,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.pcBang, this.pcBang.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.pcBang.name;
            
            
           
            
        } else if(job == "IT Technician"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.itTechnician, this.itTechnician.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.itTechnician.name;

        } else if(job == "E-sports Player"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.esportsPlayer, this.esportsPlayer.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.esportsPlayer.name;

        } else if(job == "Mecha Mechanic"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.mechaMechanic, this.mechaMechanic.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.mechaMechanic.name;

            
        } else if(job == "Videogame Developer"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.videogameDev, this.videogameDev.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.videogameDev.name;


        } else if(job == "AI Specialist"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.aiSpecialist, this.aiSpecialist.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.aiSpecialist.name;


        } else if(job == "Street Racer"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.streetRacing, this.streetRacing.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.streetRacing.name;


        } else if(job == "Cyber Security Expert"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.cyberSecurity, this.cyberSecurity.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.cyberSecurity.name;


        } else if(job == "Metal Bubble Racer"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.metalBubble, this.metalBubble.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.metalBubble.name;


        } else if(job == "Rogue AI Hunter"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.rogueAiHunter, this.rogueAiHunter.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.rogueAiHunter.name;


        } else if(job == "Nanomachine Specialist"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.nanomachineSpecialist, this.nanomachineSpecialist.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.nanomachineSpecialist.name;


        } else if(job == "AI Governor"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.aiGovenor, this.aiGovenor.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.aiGovenor.name;
        } else if(job == "Cyberterrorist"){
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

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
    

            this.startActivity(this.cyberTerrorist, this.cyberTerrorist.jobPay(), jobSkills, jobMood, jobItemPool)
            this.job = this.cyberTerrorist.name;
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
                player.displayAlert("Bought "+ quantity + furniture.name +" for " + furniture.price)
                                
                this.displayStats();
            } else {
                this.inventory.push(furniture);
                const furniIndex = this.inventory.findIndex(item => item.name === furniture.name);
                this.inventory[furniIndex].quantity = quantity
                this.money -= furniture.price * quantity;
                player.displayAlert("You bought "+ quantity + furniture.name + " for " + furniture.price);
               
               
                this.displayStats();
            }

          
        } else {
            player.displayAlert("Not enough money to buy " + furniture.name)
        }
    }

    sellFurni(furniture, amount){
        const furniIndex = this.inventory.findIndex(item => item.name === furniture.name)
        if (furniIndex !== -1){
            if (this.inventory[furniIndex].quantity > 1){
                this.inventory[furniIndex].quantity -= amount;
                this.money += furniture.sellPrice * amount;
                if (this.inventory[furniIndex].quantity == 0){
                    this.inventory.splice(furniIndex, 1);
                }
                player.displayAlert("You sold " + furniture.name + " for " + furniture.sellPrice);
            } else if (this.inventory[furniIndex].quantity <= 1){
                this.money += furniture.sellPrice;
                this.inventory.splice(furniIndex, 1);
                player.displayAlert("You sold " + furniture.name + " for " + furniture.sellPrice);
            } 
           
        } else {
            player.displayAlert("Not found in your inventory");
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

        //ADD VARIABLE THAT YOU CAN INPUT IN THE FUNCTION PARAMETERS TO CHANGE WHAT IS THE INTERVAL OF EVERY ACTIVITY
      
        
        player.displayAlert("You started " + activity.action);
        this.currentActivity = activity.action;

        this.interval = setInterval(() => {
            if (this.checkCost(moneyChange)){
                this.updateStats(moneyChange, skills, mood);
                updateStatsWindow()
                if (activity.type == "job"){
                    this.updateJobStats(activity);
                } else if(activity.type == "activity"){
                    this.updateActivityStats(activity);
                }
                
                
                this.displayStats();
                this.progressBarMove();
                this.itemDropThrow(itemPool);

                console.log(activity.exp)
            } else {
                this.endActivity();
                player.displayAlert("You don't have enough money to keep" + activity.name);
            }
            
        }, 1000);

        console.log("current activity after starting activity:" + this.currentActivity)



    }

    endActivity(){

    if (this.currentActivity !== "Doing nothing"){
        player.displayAlert("You stopped " + this.currentActivity);
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
                    player.displayAlert(itemPool[i].name + " acquired")
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
            job.jobLevelUp(player)
            player.displayAlert("Your " + job.name + " level is now " + job.level);
            console.log(job.level)

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
            player.displayAlert("you level up at" + activity.name)

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
                player.displayAlert("Level up!, now you are level " + skills[i].skill.level + " of " + skills[i].skill.name)
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


    displayAlert(message){
        let messageContainer = document.createElement("div");
        messageContainer.setAttribute("id", "message-container");
        let messageWindow = document.createElement("div");
        messageWindow.setAttribute("id", "message-window");
        let messageContent = document.createElement("div");
        messageContent.setAttribute("id", "message-content");
        let messageBtn =  document.createElement("div");
        messageBtn.setAttribute("id", "message-button");
        let gameContainer = document.getElementById("game-container");

        messageWindow.classList.add("message-animation");
        messageContent.innerText = message;

        gameContainer.appendChild(messageContainer);
        messageContainer.appendChild(messageWindow);
        messageWindow.appendChild(messageContent);

    }

  





}


export const player = new Player("Edi");
player.startGame();

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



//remove childs function
export function removeChildItemDet(container){

    while (container.firstChild){
 
     container.removeChild(container.firstChild);
    }
 }





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

// add the rest of furniture slots 


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

   

    for (let i = 0; i < gridElements.length; i++){
        gridElements[i].classList.add("grid-slots-on");
        gridElements[i].pointerEvents = "none";
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


// room window

const roomWindow = document.getElementById("grid-container2");
const roomTitle = document.getElementById("room-window-title"); 
const roomContainer = document.getElementById("room")

drag_div(roomTitle,roomContainer)


//shop popup

export const shopWindow = document.getElementById("shop-window");

import {toggleShopWindow, populateShopSections, shopWindowbtn, shopWindowCloseBtn, shopWindowTitle, shopTopPanel, shopSectionsWindow} from "./shop.js"


shopWindowbtn.addEventListener("click", function(){
    removeChildItemDet(shopSectionsWindow);
   
    populateShopSections(player)
    toggleShopWindow();
})

shopWindowCloseBtn.addEventListener("click", function(){
    removeChildItemDet(shopSectionsWindow);
   
    populateShopSections(player)
    toggleShopWindow();
})



drag_div(shopWindowTitle,shopWindow)





//job popup



import {toggleJobWindow, jobsWindowbtn, jobsWindowCloseBtn, populateJobSections, jobsWindowLeftPanel, jobsWindowRightPanel, jobsWindowName, jobsWindow} from "./jobs.js"

jobsWindowbtn.addEventListener("click", function(){
    toggleJobWindow();
    removeChildItemDet(jobsWindowLeftPanel)
    
    populateJobSections(player)
})

jobsWindowCloseBtn.addEventListener("click", function(){
    toggleJobWindow()
    removeChildItemDet(jobsWindowLeftPanel)
   
    populateJobSections(player)
})


drag_div(jobsWindowName, jobsWindow)






//Activities popup

import {populateActivitiesSections, activitiesWindow, toggleActivitiesWindow, activitiesWindowbtn, activitiesWindowCloseBtn, activitiesWindowName, activitiesWindowLeftPanel, activitiesWindowRightPanel} from "./activities.js"



activitiesWindowbtn.addEventListener("click", function(){

    toggleActivitiesWindow();
    removeChildItemDet(activitiesWindowLeftPanel)
    removeChildItemDet(activitiesWindowRightPanel);
    populateActivitiesSections(player)
})

activitiesWindowCloseBtn.addEventListener("click", function(){
    toggleActivitiesWindow()
    removeChildItemDet(activitiesWindowLeftPanel)
    removeChildItemDet(activitiesWindowRightPanel);
    populateActivitiesSections(player)
})



drag_div(activitiesWindowName, activitiesWindow)





/// STATS WINDOW AND FUNCTIONALITY

/*let intervalId = window.setInterval(function(){
    removeChildItemDet(statsWindowContent);
    removeChildItemDet(statsWindowSkills);
    removeChildItemDet(statsWindowEmotions);

    populateStatsSections();
}, 500);

*/

import {populateStatsSections, toggleStatsWindow, statsWindowContent, statsWindowSkills, statsWindowEmotions, statsWindowBtn, statsWindowCloseBtn, statsWindowName, statsWindowContainer} from "./stats.js"

function updateStatsWindow(){
    removeChildItemDet(statsWindowContent);
    removeChildItemDet(statsWindowSkills);
    removeChildItemDet(statsWindowEmotions);

    populateStatsSections(player);
}




statsWindowBtn.addEventListener("click", function(){

    toggleStatsWindow();
    removeChildItemDet(statsWindowContent);
    removeChildItemDet(statsWindowSkills);
    removeChildItemDet(statsWindowEmotions);
    populateStatsSections(player);
})

statsWindowCloseBtn.addEventListener("click", function(){
    toggleStatsWindow()
    removeChildItemDet(statsWindowSkills);
    removeChildItemDet(statsWindowContent);
    populateStatsSections(player);
})




drag_div(statsWindowName, statsWindowContainer)




// Inventory functionality

import {populateInventorySections, toggleInventoryWindow, inventoryWindowbtn, inventoryWindowContainer, inventoryMainWindow, inventoryWindowName, inventoryWindowCloseBtn, inventoryWindowItemDetail} from "./inventory.js"



inventoryWindowbtn.addEventListener("click", function(){

    toggleInventoryWindow();
    removeChildItemDet(inventoryMainWindow);
    populateInventorySections(player);
    console.log(player.inventory)
    
})

inventoryWindowCloseBtn.addEventListener("click", function(){
    toggleInventoryWindow()
    removeChildItemDet(inventoryMainWindow);
  
    populateInventorySections(player);
})



drag_div(inventoryWindowName,inventoryWindowContainer)




//// Upgrades section

import {toggleUpgradesWindow, populateUpgradesSections, upgradesWindowSections, upgradesWindowName, upgradesWindowContainer, upgradesWindowCloseBtn, upgradesWindowBtn} from "./upgrades.js";


upgradesWindowBtn.addEventListener("click", function(){

    toggleUpgradesWindow();
    removeChildItemDet(upgradesWindowSections);
    populateUpgradesSections(player);
    
})

upgradesWindowCloseBtn.addEventListener("click", function(){
    toggleUpgradesWindow()
    removeChildItemDet(upgradesWindowSections);
  
    populateUpgradesSections(player);
})



drag_div(upgradesWindowName,upgradesWindowContainer)