
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
        imgsrc: "./resources/lore/arts_district.jpeg",
        sectionState: "active",
        tasks:[
            {
                goal: "Deliver 500 PC Bang tickets",
                reward: "$5000, 3000 SOCIAL EXP",
                itemReq: ["PC Bang tickets", 1000],
                skillReq: [],
                moneyReq: 0,
                status: "incomplete",
                giveReward(player){
                    player.social.earnExp(3000);
                    player.social.updateLevel()
                    
                   
    
                }

            },
            {
                goal: "Deliver 500 PC Bang tickets",
                reward: "$5000, 300 SOCIAL EXP",
                itemReq: ["PC Bang tickets", 1000],
                skillReq: [],
                moneyReq: 0,
                status: "incomplete",
                giveReward(player){
                    player.social.earnExp(300);
                    player.social.updateLevel()
                }

            }
        ]

    },
    {

        name: "ARTS",
        imgsrc: "./resources/lore/arts_district.jpeg",
        sectionState: "inactive",
        tasks:[
            {
                goal: "Deliver 500 PC Bang tickets",
                reward: "$5000, 300 SOCIAL EXP",
                itemReq: ["PC Bang tickets", 1000],
                skillReq: [],
                moneyReq: 0,
                status: "incomplete",
                giveReward(player){
                    player.social.earnExp(300);
                    player.social.updateLevel()
                }

            },
            {
                goal: "Deliver 500 PC Bang tickets",
                reward: "$5000, 300 SOCIAL EXP",
                itemReq: ["PC Bang tickets", 1000],
                skillReq: [],
                moneyReq: 0,
                status: "incomplete",
                giveReward(player){
                    player.social.earnExp(300);
                    player.social.updateLevel()
                }

            }
        ]
    },
    {
        name: "MECH",
        imgsrc: "./resources/lore/arts_district.jpeg",
        sectionState: "inactive",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "SOCIAL",
        imgsrc: "./resources/lore/arts_district.jpeg",
        sectionState: "inactive",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "SCIENCE",
        imgsrc: "./resources/lore/arts_district.jpeg",
        sectionState: "inactive",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "ATHLETICS",
        imgsrc: "./resources/lore/arts_district.jpeg",
        sectionState: "inactive",
        tasks:[
            {

            }
        ]
        
    },
    {
        name: "EMOTIONS",
        imgsrc: "./resources/lore/arts_district.jpeg",
        sectionState: "inactive",
        tasks:[
            {

            }
        ]
        
    }
]


function deactiveSections(){
    for (let i = 0; i<taskSections.length; i++){
        taskSections[i].sectionState = "inactive";
        
    }
    
}



function activateSection(taskSection){
    taskSection.style.backgroundColor = "#d4ca97";
    taskSection.style.color = "#221e1e";
    
}


export function populateTaskSections(player){

    populateTaskDetail(player, taskSections[0])
    removeChildItemDet(taskSections[0])
    removeChildItemDet(tasksWindowSections)


    for (let i = 0; i<taskSections.length; i++){
        let taskSection = document.createElement("div");
        taskSection.classList.add("task-section");
        taskSection.innerText = taskSections[i].name;

       if (taskSections[i].sectionState == "active"){
        taskSection.style.backgroundColor = "#d4ca97";
        taskSection.style.color = "#221e1e";
       }

       
       

        taskSection.addEventListener("click", function(){
            deactiveSections();
            taskSections[i].sectionState = "active";
            activateSection(taskSection)
            populateTaskSections(player)
            removeChildItemDet(tasksWindowSectionDetailBanner);
            removeChildItemDet(tasksWindowSectionDetailInfo);
          
            populateTaskDetail(player, taskSections[i])
            
           

            
        });

        tasksWindowSections.appendChild(taskSection);
       
    }
    
    
}


export function populateTaskDetail(player, taskSection){
    removeChildItemDet(tasksWindowSectionDetailBanner);
    removeChildItemDet(tasksWindowSectionDetailInfo);

    let taskImgDiv = document.createElement("div");
    taskImgDiv.classList.add("task-img-div");
    let taskImg = document.createElement("img");
    taskImg.classList.add("task-img")
    taskImg.src = taskSection.imgsrc;



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

            if (taskSection.tasks[i].status == "completed"){
                task.style.opacity = "30%";
                taskClaimBtn.innerText = "CLAIMED";
                taskClaimBtn.disabled = true;
            } else {
                taskClaimBtn.innerText = "CLAIM";
            }
            

    
           
           

            //check the progress



            
            let itemsAmount = 0;
            
            for (let j=0; j<taskSection.tasks[i].itemReq.length ;j+=2){
                let acumItemAmount = player.checkPlayerItemAmount(taskSection.tasks[j].itemReq[i])
                console.log(acumItemAmount)
                itemsAmount += acumItemAmount;
            }

           
           
            let itemsReqAmount = 0;

            for (let g=0; g<taskSection.tasks[i].itemReq.length; g+=2){
                let targetItemAmount = taskSection.tasks[g].itemReq[i+1];
                itemsReqAmount += targetItemAmount;
            }

            

            if (isNaN(itemsReqAmount)){
                itemsReqAmount = 1;
            }

            let goalProgress = (itemsAmount/itemsReqAmount)*100

            console.log(itemsAmount)
            console.log(itemsReqAmount)

            taskProgress.innerText = Math.round(goalProgress) + "%";
            taskBar.style.width = goalProgress + "%";

            if (itemsAmount == itemsReqAmount){


                taskClaimBtn.classList.add("task-claim-button-enabled");
              

                taskClaimBtn.addEventListener("click", function(){

                    task.style.opacity = "30%";
                    taskClaimBtn.innerText = "CLAIMED";
                    taskClaimBtn.disabled = true;
                    taskSection.tasks[i].giveReward(player);
                    taskSection.tasks[i].status = "completed";


                })

            }





            tasksWindowSectionDetailBanner.appendChild(taskImgDiv);
            taskImgDiv.appendChild(taskImg)
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