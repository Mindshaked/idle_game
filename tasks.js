
export const tasksWindowContainer = document.getElementById("tasks-window-container");
export const tasksWindowName = document.getElementById("tasks-window-name");
export const tasksMainWindow = document.getElementById("tasks-main-window");
export const tasksWindowCloseBtn = document.getElementById("tasks-window-close-btn");
export const tasksWindowBtn = document.getElementById("tasks-top-button")
export const tasksWindowSections = document.getElementById("tasks-window-sections")
export const tasksWindowSectionDetail = document.getElementById("tasks-window-section-detail");
export const tasksWindowSectionDetailBanner = document.getElementById("tasks-window-section-detail-banner");
export const tasksWindowSectionDetailInfo = document.getElementById("tasks-window-section-detail-info");


import {removeChildItemDet} from "./script.js"



export function toggleTasksWindow(){
    if (tasksWindowContainer.style.visibility == "visible"){
        
        tasksWindowContainer.style.visibility = "hidden";
        tasksMainWindow.style.visibility = "hidden";
        tasksWindowName.style.visibility = "hidden";
        
    } else {
        
        tasksWindowContainer.style.visibility = "visible";
        tasksMainWindow.style.visibility = "visible";
        tasksWindowName.style.visibility = "visible";
        }
}



let taskSections = [
    {
        name: "TECH",
        tasks:[
            {
                goal: "Deliver 500 PC Bang tickets",
                reward: "$5000, 300 SOCIAL EXP"

            }
        ]

    },
    {

        name: "ARTS",
        tasks:[
            {

            }
        ]
    },
    {
        name: "MECH",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "SOCIAL",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "SCIENCE",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "ATHLETICS",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "EMOTIONS",
        tasks:[
            {

            }
        ]
        
    }
]




export function populateTaskSections(player){

    for (let i = 0; i<taskSections.length; i++){
        let taskSection = document.createElement("div");
        taskSection.classList.add("task-section");
        taskSection.innerText = taskSections[i].name;

        taskSection.addEventListener("click", function(){
            populateTaskDetail(player, taskSections[i])
            
        });

        tasksWindowSections.appendChild(taskSection);
        console.log(taskSections[i].tasks)
    }
    
    
}


export function populateTaskDetail(player, taskSection){
        for (let i = 0; i < taskSection.tasks.length; i++){
            let task = document.createElement("div");
            task.classList.add("task");

            console.log("populated task")

            let taskGoal = document.createElement("div");
            taskGoal.classList.add("task-goal");
            taskGoal.innerText = taskSection.tasks[i].goal;

            let taskBarSection = document.createElement("div");
            taskBarSection.classList.add("task-bar-section");
            let taskBar = document.createElement("div");
            taskBar.classList.add("task-bar");
            let taskBarDiv = document.createElement("div");
            taskBarDiv.classList.add("task-bar-div");
            let taskProgress = document.createElement("div");
            taskProgress.classList.add("task-progress");
            let taskBottomSection = document.createElement("div");
            taskBottomSection.classList.add("task-bottom-section");
            let taskRewardSection = document.createElement("div");
            taskRewardSection.classList.add("task-reward-section");
            let taskRewardTag = document.createElement("div");

            taskRewardTag.innerText = "REWARD:"
            taskRewardTag.classList.add("task-reward-tag");

            let taskReward = document.createElement("div");
            taskReward.classList.add("task-reward");
            taskReward.innerText = taskSection.tasks[i].reward;

            let taskClaimBtn = document.createElement("button");
            taskClaimBtn.classList.add("task-claim-button");
            taskClaimBtn.innerText = "CLAIM";

            tasksWindowSectionDetailInfo.appendChild(task);
            task.appendChild(taskGoal);
            task.appendChild(taskBarSection);
            taskBarSection.appendChild(taskBarDiv);
            taskBarDiv.appendChild(taskBar)
            taskBarSection.appendChild(taskProgress);
            task.appendChild(taskBottomSection);
            taskRewardSection.appendChild(taskRewardTag);
            taskRewardSection.appendChild(taskReward);
            taskBottomSection.appendChild(taskRewardSection);
            taskBottomSection.appendChild(taskClaimBtn);



        }
}