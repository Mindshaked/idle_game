let p = 0;

import {shopInventory} from "./shop.js"


export class furniture {
    constructor(price, sellPrice, name, type, source, effects){
        this.name = name;
        this.price = price;
        this.sellPrice = sellPrice;
        this.stats = "+1 Sanity"
        this.description = "None";
        this.requirements = [];
        this.type = type;
        this.source = source;
        this.equipped = false;
        this.effectsState = "off";
        this.quantity = 1;
        this.effects = effects;
        let id=0;
        this.id = id;
        ++id;

        }

        applyEffects(status){

           
            let furniEffects = this.effects;
           
            if (status == "equipped" && furniEffects.length !== 0 && this.effectsState == "off"){
                this.effectsState = "on";

               for (let i=0; i< furniEffects.length; i+=3){


                    

                    player[furniEffects[i]][furniEffects[i+1]] += furniEffects[i+2];

                   
                    
               }

            } else if (status == "unequipped" && furniEffects.length !== 0){

                this.effectsState = "off";

                for (let i=0; i< furniEffects.length; i+=3){

                    player[furniEffects[i]][furniEffects[i+1]] -= furniEffects[i+2];


                    

                }
             } else {
               
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
        this.state = "inactive"
    }

    jobPay(){
        let finalPay = this.pay * this.payModifier;
        return finalPay;
    }
   
    jobEarnExp(exp){
        this.exp += exp * this.expModifier;
        
    }

    jobLevelUp(player){
        this.level += 1;

         populateJobSections(player);
       
    }
    updateLevel(){
        let arrayExp = player.levelArray();
        let currentExp = this.exp;
        let initialLevel = 1;
        let previousLevel = this.level
        for (let i = 0; arrayExp[i] < currentExp; i++){
           initialLevel++
           
        }
    
        this.level = initialLevel;

        if (previousLevel != previousLevel)
        player.displayAlert("Your " + this.name + " level is now " + this.level)
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

class Skill {
    constructor(name){
        this.name = name
        this.level = 1;
        this.exp = 0;
        this.modifier = 1;
        this.jobPayModifier = 1;
       
    }

    earnExp(exp){
        this.exp += exp;
    }

    updateLevel(){
        let arrayExp = player.levelArray();
        let currentExp = this.exp;
        let actualLevel = 1;
        for (let i = 0; arrayExp[i] < currentExp; i++){
           actualLevel++
           
        }
    
        this.level = actualLevel;
    }


}



class Activity{
    constructor(name, action, cost){
        this.name = name;
        this.level = 1;
        this.type = "activity";
        this.action = action;
        this.expModifier = 1;
        this.exp = 0;
        this.costModifier = 1;
        this.cost = cost;
        this.state = "inactive";
           
        }

        activityCost(){
            let finalCost = this.cost * this.costModifier;
            return finalCost;
        }
       
        activityEarnExp(){
            this.exp += 30 * this.expModifier;
        }
        activityLevelUp(){
            this.lvl += 1
        }


    updateLevel(){
        let arrayExp = player.levelArray();
        let currentExp = this.exp;
        let actualLevel = 1;
        for (let i = 0; arrayExp[i] < currentExp; i++){
           actualLevel++
           
        }
    
        this.level = actualLevel;
        }
    }



let tickets = new furniture(5, 2, "PC Bang tickets", "consumable", "resources/centraltable.png", []);
tickets.quantity = 1000;

let computerTools = new furniture(5, 2, "Computer tools", "item", "resources/centraltable.png", [])

let defaultWindow = new furniture(0, 0, "Soul City", "window", "resources/soulcitydefault.gif", [])

import {jobSections} from "./jobs.js"

class Player {
    constructor(name){
        this.name = name;
        this.money = 100000;
        this.jobLevel = 1;
        this.daysPassed = 0;
        this.currentActivity = "Doing nothing";
        this.currentDate = new Date();
        this.inventory = [tickets, computerTools, defaultWindow];
        this.room = [];
        this.interval = null;
        this.profilePicture = "resources/profilepicture.png";

        this.mood = "none";

        this.accomplished = {
            name: "Accomplished",
            modifier: 1,
            status: 0
            }

        this.depressed = {
            name: "Depressed",
            modifier: 1,
            status: 0
            }

        this.relaxed = {
            name: "Relaxed",
            modifier: 1,
            status: 0
            }

        this.stressed = {
            name: "Stressed",
            modifier: 1,
            status: 0
            }

        this.excited = {
            name: "Excited",
            modifier: 1,
            status: 0
            }

        this.afraid = {
            name: "Angry",
            modifier: 1,
            status: 0
            }

        this.accompanied = {
            name: "Accompanied",
            modifier: 1,
            status: 0
            }

        this.lonely = {
            name: "Lonely",
            modifier: 1,
            status: 0
            }

            this.playerEmotions = [this.accomplished, this.depressed, this.relaxed, this.stressed, this.excited, this.afraid, this.accompanied, this.lonely]



        //skills
        this.social = new Skill("Social");
    
        this.tech = new Skill("Tech")
        this.art = new Skill("Art")
        this.athletics = new Skill("Athletics")
        this.science = new Skill("Science")
        this.military = new Skill("Military")
        this.emotion = new Skill("Emotion")

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

        this.aiGovernor = new Job("AI Governor", "job", "ruling the whole society through AI", 200);
        this.cyberTerrorist = new Job("Cyberterrorist", "job", "hacking for a greater cause", 200);
        



        // activity levels

        this.walk = new Activity("walk", "walking", 0);
        

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


    //get current player mood
    getCurrentMood(){
        let max = this.playerEmotions[0]["status"];
        let maxEmotion = "passive";

        for (let i = 1; i < this.playerEmotions.length; i++){
            if (this.playerEmotions[i]["status"] > max){
                max = this.playerEmotions[i];
                maxEmotion = this.playerEmotions[i]["name"];
            }
        }

        return maxEmotion;
    }



        // input is skill, level
    checkPlayerSkill(skillRequirements){

       


        for (let i = 0; i < skillRequirements.length; i+=2){

        let playerUpgrades = this.upgrades;

       

        let targetStudy = (study) => study["name"] == skillRequirements[i];
        let targetSection = (section) => section["studies"].find(targetStudy)
        let sectionIndex = playerUpgrades.findIndex(targetSection)
              
        let skillToCheck = skillRequirements[i]

        if (playerUpgrades[sectionIndex] === undefined){
            skillToCheck = this[skillRequirements[i]].level
        } else {
            let studiesArray = playerUpgrades[sectionIndex]["studies"]; 
            let studiesIndex = studiesArray.findIndex(targetStudy);

            skillToCheck = studiesArray[studiesIndex].level
        }



    


            if (skillToCheck < skillRequirements[i+1]){
                return false;
            } 
            

           // jobSections[0].jobs[0].itemConsum

           // ["player.informatics.level", 10],
        }
        
        return true;
    }


        // input is item, amount of the item
    checkPlayerItem(itemRequirements){
        for (let i = 0; i < itemRequirements.length; i+=2){

            let itemIsTrue = (item) => item.name == itemRequirements[i];
            let itemIndex = this.inventory.findIndex(itemIsTrue);

            if (itemIndex == -1 || this.inventory[itemIndex].quantity < itemRequirements[i+1]){
                return false;
                
            } 
           
        }
        return true;
       
    }

    checkPlayerItemAmount(itemName){
        let itemIsTrue = (item) => item.name == itemName;
        let itemIndex = this.inventory.findIndex(itemIsTrue);

        if (itemIndex == -1){
            return 0;
        } else{
            let itemAmount = this.inventory[itemIndex].quantity;
            return  itemAmount;
        }

    }

    consumePlayerItem(items){

        for (let i = 0; i < items.length; i+=2){

            let itemIsThere = (item) => item.name == items[i];
            let itemIndex = this.inventory.findIndex(itemIsThere);
            this.inventory[itemIndex].quantity -= items[i+1];

            removeChildItemDet(inventoryMainWindow);
            populateInventorySections(this)

        }
        
            
        
    }
   



    startGame() {
        this.interval = setInterval(() => {
            
            this.displayStats();
        }, 1000);
    }

    stopGame(){
        clearInterval(this.interval);
    }


    activity(activity){
        if (activity == "walk"){
            let activitySkills = [
                {
                    "skill": this.athletics,
                    "experience": 10

                }
            ]

            let activityMood = [
                {
                    "mood" : this.relaxed,
                    "change": 0.01
                }
            ]

            let centralTable = new furniture(shopInventory[1].items[0].itemPrice, shopInventory[1].items[0].itemSellPrice, shopInventory[1].items[0].itemName, shopInventory[1].items[0].shopType, shopInventory[1].items[0].itemImg, shopInventory[1].items[0].itemBonus)
            let activityItemPool = [centralTable, 5]
            let activityItemConsum = jobSections[0].jobs[0].itemConsum
    

            this.startActivity(this.walk, this.walk.activityCost(), activitySkills, activityMood, activityItemPool, activityItemConsum)
            this.job = this.walk.name;
            
            
           
            
        } 
        
   


        this.displayStats();
    
    }



    work(job) {
        if (job == "PC Bang clerk"){

            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 30*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.relaxed,
                    "change": 0.01*this.relaxed.modifier,
                },
                {
                    "mood" : this.depressed,
                    "change": 0.02*this.depressed.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = jobSections[0].jobs[0].itemConsum

    
            this.pcBang.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.pcBang, this.pcBang.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.pcBang.name;
            
            
           
            
        } else if(job == "IT Technician"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 50*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.depressed,
                    "change": 0.01*this.depressed.modifier,
                },
                {
                    "mood" : this.stressed,
                    "change": 0.02*this.stressed.modifier,
                },
                {
                    "mood" : this.accomplished,
                    "change": 0.03*this.accomplished.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []
    
            this.itTechnician.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.itTechnician, this.itTechnician.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.itTechnician.name;

        } else if(job == "E-sports Player"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 50*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.accomplished,
                    "change": 0.01*this.accomplished.modifier
                },
                {
                    "mood" : this.excited,
                    "change": 0.01*this.excited.modifier,
                },
                {
                    "mood" : this.stressed,
                    "change" : 0.03*this.stressed.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.esportsPlayer.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.esportsPlayer, this.esportsPlayer.jobPay(), jobSkills, jobMood, jobItemPool), jobItemConsum
            this.job = this.esportsPlayer.name;

        } else if(job == "Mecha Mechanic"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 80*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.stressed,
                    "change": 0.01*this.stressed.modifier,
                },
                {
                    "mood" : this.excited,
                    "change": 0.02*this.excited.modifier,
                },
                {
                    "mood" : this.lonely,
                    "change" : 0.01*this.lonely.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.mechaMechanic.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.mechaMechanic, this.mechaMechanic.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.mechaMechanic.name;

            
        } else if(job == "Videogame Developer"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 80*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.stressed,
                    "change": 0.01*this.stressed.modifier,
                },
                {
                    "mood" : this.accomplished,
                    "change": 0.03*this.accomplished.modifier,
                },
                {
                    "mood" : this.lonely,
                    "change" : 0.01*this.lonely.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.videogameDev.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.videogameDev, this.videogameDev.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.videogameDev.name;


        } else if(job == "AI Specialist"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 80*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.accomplished,
                    "change": 0.02*this.accomplished.modifier,
                },
                {
                    "mood" : this.lonely,
                    "change": 0.02*this.lonely.modifier,
                },
                {
                    "mood" : this.stressed,
                    "change" : 0.01*this.stressed.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.aiSpecialist.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.aiSpecialist, this.aiSpecialist.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.aiSpecialist.name;


        } else if(job == "Street Racer"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 80*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.accomplished,
                    "change": 0.01*this.accomplished.modifier,
                },
                {
                    "mood" : this.afraid,
                    "change": 0.03*this.afraid.modifier
                },
                {
                    "mood" : this.accompanied,
                    "change" : 0.02*this.accompanied.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.streetRacing.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.streetRacing, this.streetRacing.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.streetRacing.name;


        } else if(job == "Cyber Security Expert"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 120*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.accomplished,
                    "change": 0.04*this.accomplished.modifier,
                },
                {
                    "mood" : this.lonely,
                    "change": 0.01*this.lonely.modifier,
                },
                {
                    "mood" : this.afraid,
                    "change" : 0.02*this.afraid.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.cyberSecurity.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.cyberSecurity, this.cyberSecurity.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.cyberSecurity.name;


        } else if(job == "Metal Bubble Racer"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 120*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.accomplished,
                    "change": 0.02*this.accomplished.modifier,
                },
                {
                    "mood" : this.excited,
                    "change": 0.04*this.excited.modifier,
                },
                {
                    "mood" : this.stressed,
                    "change" : 0.03*this.stressed.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.metalBubble.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.metalBubble, this.metalBubble.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.metalBubble.name;


        } else if(job == "Rogue AI Hunter"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 120*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.lonely,
                    "change": 0.03*this.lonely.modifier,
                },
                {
                    "mood" : this.depressed,
                    "change": 0.01*this.depressed.modifier,
                },
                {
                    "mood" : this.afraid,
                    "change" : 0.01*this.afraid.modifier,
                },
                {
                    "mood" : this.accomplished,
                    "change" : 0.06*this.accomplished.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.rogueAiHunter.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.rogueAiHunter, this.rogueAiHunter.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.rogueAiHunter.name;


        } else if(job == "Nanomachine Specialist"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 120*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.depressed,
                    "change": 0.03*this.depressed.modifier,
                },
                {
                    "mood" : this.accomplished,
                    "change": 0.04*this.accomplished.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.nanomachineSpecialist.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.nanomachineSpecialist, this.nanomachineSpecialist.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.nanomachineSpecialist.name;


        } else if(job == "AI Governor"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 250*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.lonely,
                    "change": 0.04*this.lonely.modifier,
                },
                {
                    "mood" : this.excited,
                    "change": 0.04*this.excited.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.aiGovernor.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.aiGovernor, this.aiGovernor.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.aiGovernor.name;
        } else if(job == "Cyberterrorist"){
            let jobSkills = [
                {
                    "skill" : this.tech,
                    "experience": 250*this.tech.modifier,
                    
                }
            ]

            let jobMood = [
                {
                    "mood" : this.afraid,
                    "change": 0.04*this.afraid.modifier,
                },
                {
                    "mood" : this.accomplished,
                    "change": 0.04*this.accomplished.modifier,
                }
            ]

           // let centralTable = new furniture(shopInventory[0].items[0].itemPrice, shopInventory[0].items[0].itemSellPrice, shopInventory[0].items[0].itemName, shopInventory[0].items[0].shopType, shopInventory[0].items[0].itemImg, shopInventory[0].items[0].itemBonus)
            //let jobItemPool = [centralTable, 5]

            let jobItemPool = []
            let jobItemConsum = []

            this.cyberTerrorist.payModifier *= this.tech.jobPayModifier;
            this.startActivity(this.cyberTerrorist, this.cyberTerrorist.jobPay(), jobSkills, jobMood, jobItemPool, jobItemConsum)
            this.job = this.cyberTerrorist.name;
        }


        this.displayStats();
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
                let moneyChange = (furniture.price * quantity) * -1;
                this.money -= furniture.price * quantity;
                player.displayAlert("Bought "+ quantity + furniture.name +" for " + furniture.price)
                this.displayMoneyChange("-" + moneyChange)
                this.displayStats();
            } else {
                this.inventory.push(furniture);
                const furniIndex = this.inventory.findIndex(item => item.name === furniture.name);
                let moneyChange = (furniture.price * quantity) * -1;
                this.inventory[furniIndex].quantity = quantity
                this.money -= furniture.price * quantity;
                player.displayAlert("You bought "+ quantity + furniture.name + " for " + furniture.price);
               
                this.displayMoneyChange(moneyChange)
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

    

    



    startActivity(activity, moneyChange, skills, mood, itemPool, itemConsum){

      
        
        player.displayAlert("You started " + activity.action);
        this.currentActivity = activity.name;
       

        this.interval = setInterval(() => {
            if (this.checkCost(moneyChange)){
                this.updateStats(moneyChange, skills, mood);
                updateStatsWindow()
                if (activity.type == "job"){
                    this.updateJobStats(activity);
                } else if(activity.type == "activity"){
                    this.updateActivityStats(activity);
                }
                populateJobSections(player)
                this.displayMoneyChange(moneyChange)
                this.consumePlayerItem(itemConsum);
                this.displayStats();
                this.progressBarMove();
                this.itemDropThrow(itemPool);


              
            } else {
                this.endActivity();
                player.displayAlert("You don't have enough money to keep" + activity.name);
            }
            
        }, 1000);




    }

    endActivity(){

    if (this.currentActivity !== "Doing nothing"){
        player.displayAlert("You stopped " + this.currentActivity);
        this.currentActivity = "Doing nothing";
        clearInterval(this.interval);
        this.displayStats
        }

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
                }

            } else{
                return;
            }
        }
     }






    //jobs level and experience updating

    updateJobStats(job){
       
            job.jobEarnExp(30)
            job.updateLevel();

        }
    


    //activity levels and experience updating

    updateActivityStats(activity){
        if (this.checkCurrentSkillExp(activity) < this.nextLevel(activity.level + 1)){
            activity.activityEarnExp()
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
           
                this.skillEarnExp(skills[i].skill, skills[i].experience, skills[i].skill.modifier);
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

    levelArray(){
        let arrayExp = [];
        let level = 2
        
        while (level < 99){
            arrayExp.push(player.nextLevel(level))
            level++
        }
        
    
        return arrayExp;
    
    }
    
    
    
    checkLevel(exp){
        let arrayExp = this.levelArray();
        let currentExp = exp;
        let actualLevel = 1;
        for (let i = 0; arrayExp[i] < currentExp; i++){
           actualLevel++
           
        }
    
        return actualLevel;
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

    displayMoneyChange(moneyChange){

        
        let moneyChangeNum = document.getElementById("money-change")
        
        if (moneyChange > 0){
            moneyChangeNum.style.color = "green";
            moneyChangeNum.innerText = "+" + moneyChange + "$";
        } else if (moneyChange == 0){
            moneyChangeNum.style.color = "black";
            moneyChangeNum.innerText = moneyChange + "$";
        } else if(moneyChange < 0){
            moneyChangeNum.style.color = "red";
            moneyChangeNum.innerText = moneyChange + "$";
        }

        console.log(moneyChangeNum.innerText)


        
    }


    displayAlert(message){
        let messageContainer = document.getElementById("message-container");
        let messageWindow = document.createElement("div");
        messageWindow.setAttribute("id", "message-window");
        let messageContent = document.createElement("div");
        messageContent.setAttribute("id", "message-content");
        let messageBtn =  document.createElement("div");
        messageBtn.setAttribute("id", "message-button");


        messageWindow.classList.add("message-animation");
        messageContent.innerText = message;


        messageContainer.appendChild(messageWindow);
        messageWindow.appendChild(messageContent);

        setTimeout(() => { messageContainer.removeChild(messageWindow)}, 3000);

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

    if (slotArray.length !== 0){
        slotArray.splice(0,1);
    }
    
    slotArray.push(selectedFurniture)

    selectedFurniture.applyEffects("equipped");


    
    player.cleanInventory(slot)
    let furniImg = document.createElement("img");
    furniImg.src = selectedFurniture.source
    slot.appendChild(furniImg)
        

   
   
    
}



//furniture slots to place


const centralFurnitureSlot = document.getElementById("central-furniture");
let centralFurnitureItem = [];

centralFurnitureSlot.addEventListener("click", function (){
        furniSelect("central-furniture", centralFurnitureSlot, centralFurnitureItem)
    
});


const bookShelfSlot = document.getElementById("book-shelf");
let bookShelfItem = [];

bookShelfSlot.addEventListener("click", function (){
        furniSelect("book-shelf", bookShelfSlot, bookShelfItem)
    
});

const windowSlot = document.getElementById("window");
let windowItem = [];

windowSlot.addEventListener("click", function (){
        furniSelect("window", windowSlot, windowItem)
    
});

const lampSlot = document.getElementById("lamp");
let lampItem = [];

lampSlot.addEventListener("click", function (){
        furniSelect("lamp", lampSlot, lampItem)
    
});


const tvStandSlot = document.getElementById("tv-stand");
let tvStandItem = [];

tvStandSlot.addEventListener("click", function (){
        furniSelect("tv-stand", tvStandSlot, tvStandItem)
    
});

const onTVStandSlot = document.getElementById("on-tv-stand");
let onTVStandItem = [];

onTVStandSlot.addEventListener("click", function (){
        furniSelect("on-tv-stand", onTVStandSlot, onTVStandItem)
    
});

const deskSlot = document.getElementById("desk");
let deskItem = [];

deskSlot.addEventListener("click", function (){
        furniSelect("desk", deskSlot, deskItem)
    
});

const onDeskSlot = document.getElementById("on-desk");
let onDeskItem = [];

onDeskSlot.addEventListener("click", function (){
        furniSelect("on-desk", onDeskSlot, onDeskItem)
    
});

const shelf1Slot = document.getElementById("shelf1");
let shelf1Item = [];

shelf1Slot.addEventListener("click", function (){
        furniSelect("shelf", shelf1Slot, shelf1Item)
    
});

const shelf2Slot = document.getElementById("shelf2");
let shelf2Item = [];

shelf2Slot.addEventListener("click", function (){
        furniSelect("shelf", shelf2Slot, shelf2Item)
    
});

const miscSlot = document.getElementById("miscellaneous");
let miscItem = [];

miscSlot.addEventListener("click", function (){
        furniSelect("miscellaneous", miscSlot, miscItem)
    
});

const onTableSlot = document.getElementById("on-table");
let onTableItem = [];

onTableSlot.addEventListener("click", function (){
    furniSelect("on-table", onTableSlot, onTableItem)

});

const chairSlot = document.getElementById("chair");
let chairItem = [];

chairSlot.addEventListener("click", function (){
    furniSelect("chair", chairSlot, chairItem)

});

const bookShelfSlot1 = document.getElementById("book-shelf1");
const bookShelfSlot2 = document.getElementById("book-shelf2");
const bookShelfSlot3 = document.getElementById("book-shelf3");
const onShelfSlot1 = document.getElementById("on-shelf1");
const onShelfSlot2 = document.getElementById("on-shelf2");
const onShelfSlot3 = document.getElementById("on-shelf3");
const onShelfSlot4 = document.getElementById("on-shelf4");
const wallItemSlot1 = document.getElementById("wall-item1");
const wallItemSlot2 = document.getElementById("wall-item2");
const wallItemSlot3 = document.getElementById("wall-item3");
const wallItemSlot4 = document.getElementById("wall-item4");


let bookShelfItem1 = [];
let bookShelfItem2 = [];
let bookShelfItem3 = [];
let onShelfItem1 = [];
let onShelfItem2 = [];
let onShelfItem3 = [];
let onShelfItem4 = [];
let wallItem1 = [];
let wallItem2 = [];
let wallItem3 = [];
let wallItem4 = [];


bookShelfSlot1.addEventListener("click", function (){
        furniSelect("decoration", bookShelfSlot1, bookShelfItem1)
    
});

bookShelfSlot2.addEventListener("click", function (){
    furniSelect("decoration", bookShelfSlot2, bookShelfItem2)

});

bookShelfSlot3.addEventListener("click", function (){
    furniSelect("decoration", bookShelfSlot3, bookShelfItem3)

});

onShelfSlot1.addEventListener("click", function (){
    furniSelect("decoration", onShelfSlot1, onShelfItem1)

});

onShelfSlot2.addEventListener("click", function (){
    furniSelect("decoration", onShelfSlot2, onShelfItem2)

});

onShelfSlot3.addEventListener("click", function (){
    furniSelect("decoration", onShelfSlot3, onShelfItem3)

});

onShelfSlot4.addEventListener("click", function (){
    furniSelect("decoration", onShelfSlot4, onShelfItem4)

});

wallItemSlot1.addEventListener("click", function (){
    furniSelect("wall", wallItemSlot1, wallItem1)

});

wallItemSlot2.addEventListener("click", function (){
    furniSelect("wall", wallItemSlot2, wallItem2)

});

wallItemSlot3.addEventListener("click", function (){
    furniSelect("wall", wallItemSlot3, wallItem3)

});

wallItemSlot4.addEventListener("click", function (){
    furniSelect("wall", wallItemSlot4, wallItem4)

});



/*

<div id="on-left-table" class="grid-slots grid-slots"></div>

<div id="on-shelf1" class="grid-slots grid-slots"></div>
<div id="on-shelf2" class="grid-slots grid-slots"></div>
<div id="on-shelf3" class="grid-slots grid-slots"></div>

<div id="central-furniture" class="grid-slots grid-slots"></div>
<div id="on-table" class="grid-slots grid-slots"></div>
<div id="book-shelf1" class="grid-slots grid-slots"></div>
<div id="book-shelf2" class="grid-slots grid-slots"></div>

*/




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
            let elementType = document.createElement("div");
            elementType.classList.add("element-type");
            elementType.innerText =  typeSlot.id
            typeSlot.appendChild(elementType);

            }
            emptyFurni.style.outline = "3px solid blue";
            for (let i = 0; i< typeArray.length; i++){
                if (typeArray[i].equipped == true){
                    typeArray[i].equipped = false;
                    console.log("furniture desequipado" + typeArray[i].name)
                    console.log(typeArray)
                    typeArray[i].applyEffects("unequipped");
                    typeSlotArray = [];
                    console.log("ha acabado")
                   
                   
                }
        
            }

            player.cleanInventory(inventoryPopupItems)
            populateInventoryPopup(typeArray, typeSlot, typeSlotArray);
            
            
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

            placeFurni(typeArray[i], typeSlot, typeSlotArray)

          
        })
    
    }

    
}

// function to select the furniture from the menu


function furniSelect(type, typeSlot, typeSlotArray){
   
    let typeFurnis = player.inventory.filter((furni) => furni.type == type);

    player.cleanInventory(inventoryPopupItems)
    populateInventoryPopup(typeFurnis, typeSlot, typeSlotArray);

    inventoryPopup.style.visibility = "visible";
    


}


//edit button so you can change the room or not

const editButton = document.getElementById("edit-button");
const gridElements = document.getElementsByClassName("grid-slots");



editButton.addEventListener("click", function(){

    if (gridElements[0].classList.contains("grid-slots-on") == true){


        let slotTags = document.querySelectorAll(".grid-slots-on .element-type");  
        slotTags.forEach((tag) => tag.remove())


        for(let i=0; i<gridElements.length;i++){
        gridElements[i].pointerEvents = "initial";
        gridElements[i].classList.remove("grid-slots-on");
        gridElements[i].style.opacity = "100%";

    
        }

        

    
    } else{
   
    for (let i = 0; i < gridElements.length; i++){
        gridElements[i].classList.add("grid-slots-on");
        gridElements[i].pointerEvents = "none";


        let elementType = document.createElement("div");
        elementType.classList.add("element-type");
        elementType.innerText =  gridElements[i].id

        
       

        gridElements[i].addEventListener("mouseover", function(){
            gridElements[i].style.backgroundColor = "darkblue";
            gridElements[i].style.opacity = "100%";
        })

        gridElements[i].addEventListener("mouseout", function(){
            gridElements[i].style.backgroundColor = "initial";
            gridElements[i].style.opacity = "70%";
        })

        gridElements[i].appendChild(elementType);

        }

        
   
    }  
})


// edit walls functionality

const editWallsBtn = document.getElementById("edit-walls");
const rightWall = document.getElementById("right-wall");
const leftWall = document.getElementById("left-wall");

let editWallsPanel = document.getElementById("edit-walls-panel");
let editWallsTitle = document.getElementById("edit-walls-title");
let editWallsPreColors = document.getElementById("edit-walls-pre-colors");
let closeWallsPanel = document.getElementById("close-edit-walls");

let wallColors = ["#FFFFFF", "#F4F4F4", "#A7776B", "#76DAE7", "#C65550", "#df9b5b", "#a83f48", "#6f975e", "#3b6b58", "#8A2E3F", "#DF9B5B", "#473354", "#466F77", "#A38DC9", "#524F73", "#7C3A67", "#5F80a6", "#566794", "#2a202a", "#000000"] 

editWallsBtn.addEventListener("click", function(){

    

        if (editWallsPanel.style.visibility == "visible"){
            editWallsPanel.style.visibility = "hidden"
        } else{
            editWallsPanel.style.visibility = "visible";

            removeChildItemDet(editWallsPreColors)
    
    
        for (let i=0; i<wallColors.length; i++){
            let colorButton = document.createElement("button");
            colorButton.classList.add("color-button")
            colorButton.style.backgroundColor = wallColors[i];
    
            colorButton.addEventListener("click", function(){
                rightWall.style.backgroundColor = wallColors[i];
                leftWall.style.backgroundColor = wallColors[i];
    
            })
    
            editWallsPreColors.appendChild(colorButton)
            }
        }
        



})

closeWallsPanel.addEventListener("click", function(){
    editWallsPanel.style.visibility = "hidden"
})



//show the phone menu

const phoneMenu = document.getElementById("smartphone-container");
const phoneMenuBtn = document.getElementById("smartphone-button");

function showPhoneMenu(){
    phoneMenu.classList.toggle("visible");
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

import {toggleShopWindow, populateShopSections, shopWindowbtn, shopWindowCloseBtn, shopWindowTitle, shopSectionsWindow} from "./shop.js"


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

import {populateInventorySections, toggleInventoryWindow, inventoryWindowbtn, inventoryWindowContainer, inventoryMainWindow, inventoryWindowName, inventoryWindowCloseBtn, inventoryMainWindowContent} from "./inventory.js"



inventoryWindowbtn.addEventListener("click", function(){

    toggleInventoryWindow();
    removeChildItemDet(inventoryMainWindowContent);
    populateInventorySections(player);
    
})

inventoryWindowCloseBtn.addEventListener("click", function(){
    toggleInventoryWindow()
    removeChildItemDet(inventoryMainWindowContent);
  
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



/// Tasks section

import {toggleTasksWindow, tasksWindowName, tasksWindowContainer, tasksWindowCloseBtn, tasksWindowBtn, populateTaskSections} from "./tasks.js";


tasksWindowBtn.addEventListener("click", function(){

    toggleTasksWindow();
    /*removeChildItemDet(upgradesWindowSections);*/
    populateTaskSections(player)
    
})

tasksWindowCloseBtn.addEventListener("click", function(){
    toggleTasksWindow()
   /* removeChildItemDet(upgradesWindowSections);*/
   populateTaskSections(player)
})



drag_div(tasksWindowName,tasksWindowContainer)