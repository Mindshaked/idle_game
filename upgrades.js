export const upgradesWindowBtn = document.getElementById("upgrades-top-button");
export const upgradesWindowContainer = document.getElementById("upgrades-window-container")
const upgradesMainWindow = document.getElementById("upgrades-main-window");
export const upgradesWindowName = document.getElementById("upgrades-window-name");
export const upgradesWindowCloseBtn = document.getElementById("upgrades-window-close-btn");
export const upgradesWindowSections = document.getElementById("upgrades-window-sections");
const upgradesWindowSectionItems = document.getElementById("upgrades-window-section-list");


import {removeChildItemDet} from "./script.js"



export function toggleUpgradesWindow(){
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

export function populateUpgradesSections(player){

    for (let i = 0; i < player.upgrades.length; i++){
        console.log(player.upgrades[i].name)
        console.log(player.upgrades[i].studies[0])

        let upgradesSection = document.createElement("div");
        upgradesSection.classList.add("upgrades-section-element")
        upgradesSection.innerText = player.upgrades[i].name;

        upgradesSection.addEventListener("click", function(){
            removeChildItemDet(upgradesWindowSectionItems);
            populateUpgradesSectionList(player.upgrades[i], player);
        })

        upgradesWindowSections.appendChild(upgradesSection);
        

    }



}

function populateUpgradesSectionList(section, player){
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


        if (!upgradesSectionItemUpgradeBtn.classList.contains("event-added")){

            upgradesSectionItemUpgradeBtn.addEventListener("click", function(){

                upgradesSectionItemUpgradeBtn.classList.add("event-added");
    
                if (section.studies[i].levelCost() > player.money){
                    player.displayAlert("Not enough money to upgrade");
                    return;
                }
                section.studies[i].levelUp();


                player.displayStats();
    
                player.displayAlert("You upgraded " + section.studies[i].name + " to level " + section.studies[i].level)
                upgradesSectionItemUpgradeCost.innerText =  "$" + section.studies[i].levelCost();
                upgradesSectionItemLevel.innerText = "Lvl. " + section.studies[i].level;
            })


        }

        

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