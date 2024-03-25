import {removeChildItemDet} from "./script.js"


//job array

/* jobName: "Pizza Delivery Man",
            jobPay: 10,
            jobIdentifier: "pizza",
            skillReq:["player.military.level", 1],
            jobReq: "Military lvl 1, 1 basic central table",
            itemReq: ["Basic central table", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "delivering pizza"


            */

let techJobSection = {
    sectionName: "TECH",
    jobs:
        [{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["player.informatics.level", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: ""
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["player.machineControl.level", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: ""
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["player.mechanics.level", 25, "player.robotics.level", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: ""
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["player.programming.level", 25, "player.itTechnician.level", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: ""
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["player.artificialIntelligence.level", 25, "player.programming.level", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: ""
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["player.machineControl.level", 30, "player.mechanics.level", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: ""
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["player.itTechnician.level", 40, "player.programming.level", 50, "player.informatics.level", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Comuter", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: ""
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["player.machineControl.level", 40, "player.streetRacing.level", 50, "player.mechanics.level", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: ""
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["player.artificialIntelligence.level", 60, "player.programming.level", 50, "player.videogameDev.level", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: ""
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["player.machineControl.level", 40, "player.mechaMechanic", 50, "player.nanoTech.level", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: ""
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["player.rogueAiHunter.level", 80, "player.aiSpecialist.level", 85, "player.machineControl.level", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: ""
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["player.cyberSecurity.level", 85, "player.informatics.level", 80, "player.programming.level", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: ""
        }
    ]
}

let advancedJobsSection = {
    sectionName: "ADVANCED JOBS",
    jobs:[{

    }
]

}

let jobSections = [techJobSection, advancedJobsSection]


export const jobsWindowbtn = document.getElementById("jobs-top-button");
export const jobsWindow = document.getElementById("job-window");
export const jobsWindowLeftPanel = document.getElementById("job-window-left-panel");
export const jobsWindowRightPanel = document.getElementById("job-window-right-panel");
export const jobsWindowName = document.getElementById("job-window-name");
export const jobsWindowCloseBtn = document.getElementById("job-window-close-btn");

export function toggleJobWindow(){
    if (jobsWindow.style.visibility == "visible"){
        jobApplyBtn.style.visibility = "hidden"
    jobsWindow.style.visibility = "hidden";
    } else {
        jobApplyBtn.style.visibility = "visible"
        jobsWindow.style.visibility = "visible";
        }
}

let toggleState = "inactive";

export function  populateJobSections(player){

    removeChildItemDet(jobsWindowLeftPanel)

    for (let i=0;i<jobSections.length;i++){
        const jobSection = document.createElement("div");
        const jobSectionSubMenu = document.createElement("div");
        jobSection.innerText = jobSections[i].sectionName;
        jobSection.classList.add("job-section-name")
        jobSectionSubMenu.classList.add("job-section-sub-menu")
        jobsWindowLeftPanel.appendChild(jobSection);
        jobsWindowLeftPanel.appendChild(jobSectionSubMenu);
        
        if (toggleState == "active"){
            removeChildItemDet(jobSectionSubMenu)
            toggleJobSectionContent(jobSections[i], jobSectionSubMenu, player);
            } else{
                
               
            }
        
        jobSection.addEventListener("click", function(){
            if (toggleState == "active"){
                removeChildItemDet(jobSectionSubMenu)
                toggleState = "inactive";
                } else{
                    toggleJobSectionContent(jobSections[i], jobSectionSubMenu, player);
                    toggleState = "active";
                }
           
           
        })
        
        
    }
   
}

//toggle job section jobs

function toggleJobSectionContent(section, sectionDom, player){
    for (let i=0; i<section.jobs.length;i++){

        const jobItem = document.createElement("div");
        const jobItemLvl = document.createElement("div");

        console.log("this is item requirements" + section.jobs[i].itemReq)

        if (!player.checkPlayerItem(section.jobs[i].itemReq) == true && player.checkPlayerSkill(!section.jobs[i].skillReq) == true){

            jobItem.style.opacity = "50%";

            }
        
        jobItem.innerText = section.jobs[i].jobName;

        let jobIdentifier = section.jobs[i].jobIdentifier;

        jobItemLvl.innerText = player[jobIdentifier].level;
        jobItemLvl.style.fontSize = "12px";
        jobItem.classList.add("job-left-panel");
        sectionDom.appendChild(jobItem);
        jobItem.appendChild(jobItemLvl);
        console.log("jobs displayed")


        jobItem.addEventListener("click", function(){
            /*removeChildItemDet(jobsWindowRightPanel)*/
            console.log("job clicked")
            console.log(section.jobs[i])
            populateJobDetail(section.jobs[i], player)
        })

        

    }

}


//populate jobSectionDetails




const jobImageSection = document.getElementById("job-img");
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
const jobBuffSection = document.getElementById("job-detail-buff-section");
const jobBuffTag = document.getElementById("job-detail-buff-tag");
const jobBuff = document.createElement("div");
const jobApplyBtnSection =  document.createElement("div");
const jobApplyBtn = document.createElement("button")



function populateJobDetail(job, player){
    

        jobApplyBtnSection.setAttribute("id","job-apply-btn-section")
        jobImage.setAttribute("id", "job-img-source");
        jobTitle.setAttribute("id", "job-detail-title");
        jobPay.setAttribute("id", "job-detail-pay");
        jobReq.setAttribute("id", "job-detail-req");
        jobDesc.setAttribute("id", "job-detail-desc");
        jobBuff.setAttribute("id", "job-detail-buff")
        jobApplyBtn.setAttribute("id", "job-apply-btn")

        jobImage.src = job.jobSrc;
        jobTitle.innerText = job.jobName;
        jobPay.innerText = "$" + job.jobPay;
        jobReq.innerText = job.jobReq;
        jobDesc.innerText = job.jobDesc;
        jobBuff.innerText = job.jobBuff;
        console.log("job details appended")
        jobApplyBtn.innerText = "APPLY";
        jobApplyBtn.style.visibility = "visible";

        jobTitleTag.innerText = "JOB TITLE";
        jobPayTag.innerText = "PAY";
        jobReqTag.innerText = "REQUIREMENTS";
        jobDescTag.innerText = "DESCRIPTION";
        jobBuffTag.innerText = "EFFECTS";



        
        
        jobImageSection.appendChild(jobImage);
        jobTitleSection.appendChild(jobTitleTag);
        jobTitleSection.appendChild(jobTitle);
        jobPaySection.appendChild(jobPayTag);
        jobPaySection.appendChild(jobPay);
        jobReqSection.appendChild(jobReqTag);
        jobReqSection.appendChild(jobReq);
        jobDescSection.appendChild(jobDescTag);
        jobDescSection.appendChild(jobDesc);
        jobBuffSection.appendChild(jobBuffTag);
        jobBuffSection.appendChild(jobBuff);
        jobApplyBtnSection.appendChild(jobApplyBtn);
        jobsWindowRightPanel.appendChild(jobImageSection);
        jobsWindowRightPanel.appendChild(jobTitleSection);
        jobsWindowRightPanel.appendChild(jobPaySection);
        jobsWindowRightPanel.appendChild(jobReqSection);
        jobsWindowRightPanel.appendChild(jobDescSection);
        jobsWindowRightPanel.appendChild(jobBuffSection);
        jobsWindowRightPanel.appendChild(jobApplyBtnSection);


                //job button functionality

                
        if (!jobApplyBtn.classList.contains("event-added")){

            jobApplyBtn.addEventListener("click", function() {
                  
               jobApplyBtn.classList.add("event-added");
                if (player.currentActivity == job.jobActivity){
                    player.endActivity()
                    
                    return;
                } 
            
                if (player.checkPlayerItem(job.itemReq) == true && player.checkPlayerSkill(job.skillReq) == true){
                    player.work(job.jobName);
                    console.log(job.jobActivity + "currentactivity" + player.currentActivity)
                } else {
                    player.displayAlert("You don't meet the requirements for this job")
                }
                
               
              
            
            });
        }
            
    }

