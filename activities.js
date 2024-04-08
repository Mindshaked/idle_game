import {removeChildItemDet} from "./script.js"



export const activitiesWindowbtn = document.getElementById("activities-top-button");
export const activitiesWindow = document.getElementById("activities-window");
export const activitiesWindowLeftPanel = document.getElementById("activities-window-left-panel");
export const activitiesWindowRightPanel = document.getElementById("activities-window-right-panel");
export const activitiesWindowName = document.getElementById("activities-window-name");
export const activitiesWindowCloseBtn = document.getElementById("activities-window-close-btn");

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
const activitiesStartBtn = document.createElement("button");


//activities array

let basicActivitiesSection = {
    sectionName: "PASSIVE ACTIVITIES",
    sectionState: "inactive",
    activities:
        [{
            activityName: "Take a walk",
            activityCost: 0,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "an accessible and easy way to exercise and release stress",
            activity: "walking",
            activityIdentifier: "walk",
            activityBuff: []
        },
        {
            activityName: "BBQ with friends",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "bbq",
            activityIdentifier: "bbq",
            activityBuff: []
        },
        {
            activityName: "Go clubbing",
            activityCost: 10,
            activityConsum: [],
            activityReq: [],
            requirementsText: "",
            skillReq: [],
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "club",
            activityIdentifier: "club",
            activityBuff: []
        },
        {
            activityName: "Sleep",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "sleep",
            activityIdentifier: "sleep",
            activityBuff: []
        },
        {
            activityName: "Sauna",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "sauna",
            activityIdentifier: "sauna",
            activityBuff: []
        },
        {
            activityName: "Go to Pop concerts",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "pop",
            activityIdentifier: "pop",
            activityBuff: []
        },
        {
            activityName: "Emotions trafficking",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "emotiontraffic",
            activityIdentifier: "emotiontraffic",
            activityBuff: []
        },
        {
            activityName: "Mecha battles",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "mechabattle",
            activityIdentifier: "mechabattle",
            activityBuff: []
        },
        {
            activityName: "Prosthetic boxing",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "boxing",
            activityIdentifier: "boxing",
            activityBuff: []
        },
        {
            activityName: "Drone racing",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "drone",
            activityIdentifier: "drone",
            activityBuff: []
        },
        {
            activityName: "Urban exploration",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "urbanexplore",
            activityIdentifier: "urbanexplore",
            activityBuff: []
        },
        {
            activityName: "Electronic tinkering",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "tinkering",
            activityIdentifier: "tinkering",
            activityBuff: []
        },
        {
            activityName: "Play videogames",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "playgame",
            activityIdentifier: "playgame",
            activityBuff: []
        },
        {
            activityName: "Assault drones",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "assaultdrones",
            activityIdentifier: "assaultdrones",
            activityBuff: []
        },
        {
            activityName: "Karaoke",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "karaoke",
            activityIdentifier: "karaoke",
            activityBuff: []
        },
        {
            activityName: "Workout",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "workout",
            activityIdentifier: "workout",
            activityBuff: []
        },
        {
            activityName: "Memory tourism",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "memorytourism",
            activityIdentifier: "memorytourism",
            activityBuff: []
        },
        {
            activityName: "Ride outer walls Harra",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "harra",
            activityIdentifier: "harra",
            activityBuff: []
        },
        {
            activityName: "Collect garbage",
            activityCost: 5,
            activityConsum: [],
            activityReq: [],
            skillReq: [],
            requirementsText: "",
            activityDesc: "You might smell bad when coming back home, but it is what it is",
            activity: "garbage",
            activityIdentifier: "garbage",
            activityBuff: []
        }
    ]
}

let advancedActivitiesSection = {
    sectionName: "ACTIVE ACTIVITIES",
    sectionState: "inactive",
    activities:[{
        activityName: "Real estate",
        activityCost: 5,
        activityConsum: [],
        activityReq: [],
        skillReq: [],
        requirementsText: "",
        activityDesc: "You might smell bad when coming back home, but it is what it is",
        activity: "realestateactivity",
        activityIdentifier: "realestateactivity",
        activityBuff: []
        },
        {
        activityName: "Crypto investing",
        activityCost: 5,
        activityConsum: [],
        activityReq: [],
        skillReq: [],
        requirementsText: "",
        activityDesc: "You might smell bad when coming back home, but it is what it is",
        activity: "crypto",
        activityIdentifier: "crypto",
        activityBuff: []
        },
        {
        activityName: "Street car racing",
        activityCost: 5,
        activityConsum: [],
        activityReq: [],
        skillReq: [],
        requirementsText: "",
        activityDesc: "You might smell bad when coming back home, but it is what it is",
        activity: "crypto",
        activityIdentifier: "crypto",
        activityBuff: []
        }
]

}

let activitiesSections = [basicActivitiesSection, advancedActivitiesSection]


export function toggleActivitiesWindow(){
    if (activitiesWindow.style.visibility == "visible"){
       
        activitiesWindow.style.visibility = "hidden";
    } else {
      
        activitiesWindow.style.visibility = "visible";
        }
}

export function  populateActivitiesSections(player){

    for (let i=0;i<activitiesSections.length;i++){
        const activitySection = document.createElement("div");
        const activitySectionSubMenu = document.createElement("div");
        activitySection.innerText = activitiesSections[i].sectionName;
        activitySection.classList.add("activities-section-name")
        activitySectionSubMenu.classList.add("activities-section-sub-menu")
        activitiesWindowLeftPanel.appendChild(activitySection);
        activitiesWindowLeftPanel.appendChild(activitySectionSubMenu);
        
        
        activitySection.addEventListener("click", function(){
            if (activitiesSections[i].sectionState == "active"){
                removeChildItemDet(activitySectionSubMenu)
                activitiesSections[i].sectionState = "inactive";
                } else{
                    toggleActivitySectionContent(activitiesSections[i], activitySectionSubMenu, player);
                    activitiesSections[i].sectionState = "active";
                }
           
           
        })
        
        
    }
   
}

//toggle activities section 

export function toggleActivitySectionContent(section, sectionDom, player){
    for (let i=0; i<section.activities.length;i++){
        const activityItem = document.createElement("div");
        activityItem.innerText = section.activities[i].activityName;
        activityItem.classList.add("activities-left-panel");
        sectionDom.appendChild(activityItem);
    


        activityItem.addEventListener("click", function(){
      
            populateActivitiesDetail(section.activities[i], player)
        })

        

    }

}


//populate activitiesSectionDetails





export function populateActivitiesDetail(activity, player){
    
        activitiesStartBtn.remove();

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
        activitiesStartBtn.innerText = "START";
      
        activitiesTitleTag.innerText = "JOB TITLE: ";
        activitiesCostTag.innerText = "COST: $";
        activitiesReqTag.innerText = "REQUIREMENTS: ";
        activitiesDescTag.innerText = "DESCRIPTION: ";

        if (activity.state == "inactive"){
            activitiesStartBtn.style.backgroundColor = "#84a699";
            activitiesStartBtn.innerText = "START"

        } else if(activity.state == "active"){
            activitiesStartBtn.style.backgroundColor = "red";
            activitiesStartBtn.innerText = "STOP"
            activitiesStartBtn.style.color = "white";
        }



        let startActivity = function startActivityFunction(){
            if (player.currentActivity == activity.activityIdentifier){
                player.endActivity()
                activitiesStartBtn.style.backgroundColor = "#84a699";
                activitiesStartBtn.innerText = "START"
                activity.state = "inactive";

                console.log("activity stopped")
                return;
            } 
        
            if (player.checkPlayerItem(activity.activityReq) == true && player.checkPlayerSkill(activity.skillReq) == true && player.checkPlayerItem(activity.itemConsum == true)){
                player.activity(activity.activityIdentifier);
                activitiesStartBtn.style.backgroundColor = "red";
                activitiesStartBtn.innerText = "STOP"
                activity.state = "active"

                console.log(player.currentActivity + activity.activity)
            } else {
                alert("You don't meet the requirements for this activity")
            }
            
           
          
        
        }


        
        activitiesStartBtn.addEventListener("click", startActivity);
      



        
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
