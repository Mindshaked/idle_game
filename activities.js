



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


export function toggleActivitiesWindow(){
    if (activitiesWindow.style.visibility == "visible"){
        activitiesStartBtn.style.visibility = "hidden";
        activitiesWindow.style.visibility = "hidden";
    } else {
        activitiesStartBtn.style.visibility = "visible";
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
        let toggleState = "inactive"
        
        activitySection.addEventListener("click", function(){
            if (toggleState == "active"){
                removeChildItemDet(activitySectionSubMenu)
                toggleState = "inactive";
                } else{
                    toggleActivitySectionContent(activitiesSections[i], activitySectionSubMenu, player);
                    toggleState = "active";
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
        console.log("activities displayed")


        activityItem.addEventListener("click", function(){
            /*removeChildItemDet(jobsWindowRightPanel)*/
            console.log("activity clicked")
            console.log(section.activities[i])
            populateActivitiesDetail(section.activities[i], player)
        })

        

    }

}


//populate activitiesSectionDetails





export function populateActivitiesDetail(activity, player){
    

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
