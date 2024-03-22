
//job array

let basicJobsSection = {
    sectionName: "BASIC JOBS",
    jobs:
        [{
            jobName: "Pizza Delivery Man",
            jobPay: 10,
            skillReq: ["player.military.level", 1],
            jobReq: "Military lvl 1, 1 basic central table",
            itemReq: ["Basic central table", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "Pizza Delivery Man",
            jobExperience: 0
        },
        {
            jobName: "Garbage Collector",
            jobPay: 10,
            skillReq: ["player.military.level", 2],
            jobReq: "Military lvl 2, 1 basic central table",
            itemReq: ["Basic central table", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "Garbage collector",
            jobExperience: 0
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

export function  populateJobSections(player){

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
        jobItem.innerText = section.jobs[i].jobName;
        jobItem.classList.add("job-left-panel");
        sectionDom.appendChild(jobItem);
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
const jobApplyBtnSection =  document.createElement("div");
const jobApplyBtn = document.createElement("button")



function populateJobDetail(job, player){
    

        jobApplyBtnSection.setAttribute("id","job-apply-btn-section")
        jobImage.setAttribute("id", "job-img-source");
        jobTitle.setAttribute("id", "job-detail-title");
        jobPay.setAttribute("id", "job-detail-pay");
        jobReq.setAttribute("id", "job-detail-req");
        jobDesc.setAttribute("id", "job-detail-desc");
        jobApplyBtn.setAttribute("id", "job-apply-btn")

        jobImage.src = job.jobSrc;
        jobTitle.innerText = job.jobName;
        jobPay.innerText = "$" + job.jobPay;
        jobReq.innerText = job.jobReq;
        jobDesc.innerText = job.jobDesc;
        console.log("job details appended")
        jobApplyBtn.innerText = "APPLY";
        jobApplyBtn.style.visibility = "visible";

        jobTitleTag.innerText = "JOB TITLE: ";
        jobPayTag.innerText = "PAY:";
        jobReqTag.innerText = "REQUIREMENTS: ";
        jobDescTag.innerText = "DESCRIPTION: ";



        
        
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


                //job button functionality

                
        if (jobApplyBtn.classList.contains("event-added")){
            return;
        } else{
            jobApplyBtn.addEventListener("click", function() {
                jobApplyBtn.classList.add("event-added");    
                console.log("EventLIstener added")
                if (player.currentActivity == job.jobActivity){
                    player.endActivity()
                    console.log("you stopped doing that")
                    return;
                } 
            
                if (player.checkPlayerItem(job.itemReq) == true && player.checkPlayerSkill(job.skillReq) == true){
                    player.work(job.jobActivity);
                } else {
                    alert("You don't meet the requirements for this job")
                }
                
               
              
            
            });
        }
}
