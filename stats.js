export const statsWindowBtn = document.getElementById("stats-top-button");
export const statsWindowContainer = document.getElementById("stats-window-container")
const statsWindow = document.getElementById("stats-window");
export const statsWindowName = document.getElementById("stats-window-name");
export const statsWindowCloseBtn = document.getElementById("stats-window-close-btn");


export const statsWindowContent = document.createElement("div");
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
export const statsWindowEmotions = document.createElement("div");
const statsWindowSkillsTitle = document.createElement("div");
export const statsWindowSkills = document.createElement("div");
let statsWindowSocialBar = document.createElement("div");


export function toggleStatsWindow(){
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










export function populateStatsSections(player){
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

        let statsEmotionResult = Math.round(player.playerEmotions[i].status - player.playerEmotions[i+1].status);
       
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
    statsWindowMainMoodTag.innerText = "CURRENT MOOD: ";
    statsWindowMainMood.innerText = " " + player.getCurrentMood()

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
