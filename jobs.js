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

export let techJobSection = {
    sectionName: "TECH",
    sectionState: "inactive",
    jobs:
        [{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            itemConsum: ["PC Bang tickets", 1],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["Informatics", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            itemConsum: [],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: "0.02/s stressed, 0.01/s depressed, Tech 50xp/s"
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["Machine Control", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: "0.01/s accomplished, 0.01/s stressed, 0.02/s excited, Tech 50xp/s"
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["Mechanics", 25, "Robotics", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: "0.01/s stressed, 0.02/s excited, 0.01/s lonely, Tech 80xp/s "
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["Programming", 25, "itTechnician", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: "0.01/s stressed, 0.03/s accomplished, 0.01/s lonely, Tech 80xp/s"
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["Artificial Intelligence", 25, "Programming", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: "0.01/s stressed, 0.02/s lonely, 0.02/s accomplished, Tech 80xp/s"
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["Machine Control", 30, "Mechanics", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: "0.01/s stressed, 0.03/s afraid, 0.02/s accompanied, Tech 80xp/s"
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["itTechnician", 40, "Programming", 50, "Informatics", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: "0.02/s afraid, 0.01/s lonely, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["Machine Control", 40, "streetRacing", 50, "Mechanics", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: "0.03/s stressed, 0.04/s excited, 0.02/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["Artificial Intelligence", 60, "Programming", 50, "videogameDev", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: "0.03/s lonely, 0.01/s depressed, 0.01/s afraid, 0.06/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["Machine Control", 40, "mechaMechanic", 50, "Nanotech", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: "0.03/s depressed, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["rogueAiHunter", 80, "aiSpecialist", 85, "Machine Control", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: "0.04/s excited, 0.04/s lonely, Tech 250xp/s "
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["cyberSecurity", 85, "Informatics", 80, "Programming", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: "0.04/s afraid, 0.04 accomplished, Tech 250xp/s"
        }
    ]
}

let artJobSection = {
        sectionName: "ARTS",
        sectionState: "inactive",
        jobs:[{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            itemConsum: ["PC Bang tickets", 1],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["Informatics", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            itemConsum: [],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: "0.02/s stressed, 0.01/s depressed, Tech 50xp/s"
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["Machine Control", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: "0.01/s accomplished, 0.01/s stressed, 0.02/s excited, Tech 50xp/s"
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["Mechanics", 25, "Robotics", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: "0.01/s stressed, 0.02/s excited, 0.01/s lonely, Tech 80xp/s "
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["Programming", 25, "itTechnician", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: "0.01/s stressed, 0.03/s accomplished, 0.01/s lonely, Tech 80xp/s"
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["Artificial Intelligence", 25, "Programming", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: "0.01/s stressed, 0.02/s lonely, 0.02/s accomplished, Tech 80xp/s"
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["Machine Control", 30, "Mechanics", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: "0.01/s stressed, 0.03/s afraid, 0.02/s accompanied, Tech 80xp/s"
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["itTechnician", 40, "Programming", 50, "Informatics", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: "0.02/s afraid, 0.01/s lonely, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["Machine Control", 40, "streetRacing", 50, "Mechanics", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: "0.03/s stressed, 0.04/s excited, 0.02/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["Artificial Intelligence", 60, "Programming", 50, "videogameDev", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: "0.03/s lonely, 0.01/s depressed, 0.01/s afraid, 0.06/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["Machine Control", 40, "mechaMechanic", 50, "Nanotech", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: "0.03/s depressed, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["rogueAiHunter", 80, "aiSpecialist", 85, "Machine Control", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: "0.04/s excited, 0.04/s lonely, Tech 250xp/s "
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["cyberSecurity", 85, "Informatics", 80, "Programming", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: "0.04/s afraid, 0.04 accomplished, Tech 250xp/s"
        }
    ]

}

let mechJobSection = {
        sectionName: "MECH",
        sectionState: "inactive",
        jobs:[{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            itemConsum: ["PC Bang tickets", 1],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["Informatics", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            itemConsum: [],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: "0.02/s stressed, 0.01/s depressed, Tech 50xp/s"
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["Machine Control", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: "0.01/s accomplished, 0.01/s stressed, 0.02/s excited, Tech 50xp/s"
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["Mechanics", 25, "Robotics", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: "0.01/s stressed, 0.02/s excited, 0.01/s lonely, Tech 80xp/s "
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["Programming", 25, "itTechnician", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: "0.01/s stressed, 0.03/s accomplished, 0.01/s lonely, Tech 80xp/s"
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["Artificial Intelligence", 25, "Programming", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: "0.01/s stressed, 0.02/s lonely, 0.02/s accomplished, Tech 80xp/s"
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["Machine Control", 30, "Mechanics", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: "0.01/s stressed, 0.03/s afraid, 0.02/s accompanied, Tech 80xp/s"
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["itTechnician", 40, "Programming", 50, "Informatics", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: "0.02/s afraid, 0.01/s lonely, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["Machine Control", 40, "streetRacing", 50, "Mechanics", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: "0.03/s stressed, 0.04/s excited, 0.02/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["Artificial Intelligence", 60, "Programming", 50, "videogameDev", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: "0.03/s lonely, 0.01/s depressed, 0.01/s afraid, 0.06/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["Machine Control", 40, "mechaMechanic", 50, "Nanotech", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: "0.03/s depressed, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["rogueAiHunter", 80, "aiSpecialist", 85, "Machine Control", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: "0.04/s excited, 0.04/s lonely, Tech 250xp/s "
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["cyberSecurity", 85, "Informatics", 80, "Programming", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: "0.04/s afraid, 0.04 accomplished, Tech 250xp/s"
        }
    ]

}

let socialJobSection = {
        sectionName: "SOCIAL",
        sectionState: "inactive",
        jobs:[{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            itemConsum: ["PC Bang tickets", 1],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["Informatics", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            itemConsum: [],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: "0.02/s stressed, 0.01/s depressed, Tech 50xp/s"
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["Machine Control", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: "0.01/s accomplished, 0.01/s stressed, 0.02/s excited, Tech 50xp/s"
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["Mechanics", 25, "Robotics", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: "0.01/s stressed, 0.02/s excited, 0.01/s lonely, Tech 80xp/s "
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["Programming", 25, "itTechnician", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: "0.01/s stressed, 0.03/s accomplished, 0.01/s lonely, Tech 80xp/s"
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["Artificial Intelligence", 25, "Programming", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: "0.01/s stressed, 0.02/s lonely, 0.02/s accomplished, Tech 80xp/s"
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["Machine Control", 30, "Mechanics", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: "0.01/s stressed, 0.03/s afraid, 0.02/s accompanied, Tech 80xp/s"
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["itTechnician", 40, "Programming", 50, "Informatics", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: "0.02/s afraid, 0.01/s lonely, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["Machine Control", 40, "streetRacing", 50, "Mechanics", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: "0.03/s stressed, 0.04/s excited, 0.02/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["Artificial Intelligence", 60, "Programming", 50, "videogameDev", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: "0.03/s lonely, 0.01/s depressed, 0.01/s afraid, 0.06/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["Machine Control", 40, "mechaMechanic", 50, "Nanotech", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: "0.03/s depressed, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["rogueAiHunter", 80, "aiSpecialist", 85, "Machine Control", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: "0.04/s excited, 0.04/s lonely, Tech 250xp/s "
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["cyberSecurity", 85, "Informatics", 80, "Programming", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: "0.04/s afraid, 0.04 accomplished, Tech 250xp/s"
        }
    ]

}

let scienceJobSection = {
        sectionName: "SCIENCE",
        sectionState: "inactive",
        jobs:[{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            itemConsum: ["PC Bang tickets", 1],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["Informatics", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            itemConsum: [],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: "0.02/s stressed, 0.01/s depressed, Tech 50xp/s"
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["Machine Control", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: "0.01/s accomplished, 0.01/s stressed, 0.02/s excited, Tech 50xp/s"
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["Mechanics", 25, "Robotics", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: "0.01/s stressed, 0.02/s excited, 0.01/s lonely, Tech 80xp/s "
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["Programming", 25, "itTechnician", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: "0.01/s stressed, 0.03/s accomplished, 0.01/s lonely, Tech 80xp/s"
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["Artificial Intelligence", 25, "Programming", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: "0.01/s stressed, 0.02/s lonely, 0.02/s accomplished, Tech 80xp/s"
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["Machine Control", 30, "Mechanics", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: "0.01/s stressed, 0.03/s afraid, 0.02/s accompanied, Tech 80xp/s"
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["itTechnician", 40, "Programming", 50, "Informatics", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: "0.02/s afraid, 0.01/s lonely, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["Machine Control", 40, "streetRacing", 50, "Mechanics", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: "0.03/s stressed, 0.04/s excited, 0.02/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["Artificial Intelligence", 60, "Programming", 50, "videogameDev", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: "0.03/s lonely, 0.01/s depressed, 0.01/s afraid, 0.06/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["Machine Control", 40, "mechaMechanic", 50, "Nanotech", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: "0.03/s depressed, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["rogueAiHunter", 80, "aiSpecialist", 85, "Machine Control", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: "0.04/s excited, 0.04/s lonely, Tech 250xp/s "
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["cyberSecurity", 85, "Informatics", 80, "Programming", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: "0.04/s afraid, 0.04 accomplished, Tech 250xp/s"
        }
    ]

}

let athleticsJobSection = {
        sectionName: "ATHLETICS",
        sectionState: "inactive",
        jobs:[{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            itemConsum: ["PC Bang tickets", 1],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["Informatics", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            itemConsum: [],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: "0.02/s stressed, 0.01/s depressed, Tech 50xp/s"
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["Machine Control", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: "0.01/s accomplished, 0.01/s stressed, 0.02/s excited, Tech 50xp/s"
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["Mechanics", 25, "Robotics", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: "0.01/s stressed, 0.02/s excited, 0.01/s lonely, Tech 80xp/s "
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["Programming", 25, "itTechnician", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: "0.01/s stressed, 0.03/s accomplished, 0.01/s lonely, Tech 80xp/s"
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["Artificial Intelligence", 25, "Programming", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: "0.01/s stressed, 0.02/s lonely, 0.02/s accomplished, Tech 80xp/s"
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["Machine Control", 30, "Mechanics", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: "0.01/s stressed, 0.03/s afraid, 0.02/s accompanied, Tech 80xp/s"
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["itTechnician", 40, "Programming", 50, "Informatics", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: "0.02/s afraid, 0.01/s lonely, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["Machine Control", 40, "streetRacing", 50, "Mechanics", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: "0.03/s stressed, 0.04/s excited, 0.02/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["Artificial Intelligence", 60, "Programming", 50, "videogameDev", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: "0.03/s lonely, 0.01/s depressed, 0.01/s afraid, 0.06/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["Machine Control", 40, "mechaMechanic", 50, "Nanotech", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: "0.03/s depressed, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["rogueAiHunter", 80, "aiSpecialist", 85, "Machine Control", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: "0.04/s excited, 0.04/s lonely, Tech 250xp/s "
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["cyberSecurity", 85, "Informatics", 80, "Programming", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: "0.04/s afraid, 0.04 accomplished, Tech 250xp/s"
        }
    ]

}

let emotionJobSection = {
        sectionName: "EMOTIONS",
        sectionState: "inactive",
        jobs:[{
            jobName: "PC Bang clerk",
            jobPay: 10,
            jobIdentifier: "pcBang",
            skillReq:[],
            jobReq: "None",
            itemReq: [],
            itemConsum: ["PC Bang tickets", 1],
            jobDesc: "Chill job where you can play your favorite games at the same time",
            jobActivity: "working at a PC Bang",
            jobBuff: "0.02/s relaxed, 0.01/s depressed, Tech 30xp/s"
        },
        {
            jobName: "IT Technician",
            jobPay: 20,
            jobIdentifier: "itTechnician",
            skillReq: ["Informatics", 10],
            jobReq: "Informatics lvl 10, 1 computer tools",
            itemReq: ["Computer tools", 1],
            itemConsum: [],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing computers",
            jobBuff: "0.02/s stressed, 0.01/s depressed, Tech 50xp/s"
        },
        {
            jobName: "E-sports Player",
            jobPay: 20,
            jobIdentifier: "esportsPlayer",
            skillReq: ["Machine Control", 10],
            jobReq: "Machine control lvl 10, 1 game console",
            itemReq: ["Game console", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "playing games very seriously",
            jobBuff: "0.01/s accomplished, 0.01/s stressed, 0.02/s excited, Tech 50xp/s"
        },
        {
            jobName: "Mecha Mechanic",
            jobPay: 40,
            jobIdentifier: "mechaMechanic",
            skillReq: ["Mechanics", 25, "Robotics", 15],
            jobReq: "Mechanics lvl 25, Robotics lvl 15, 1 mech tools",
            itemReq: ["Mech tools", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "fixing giant robots",
            jobBuff: "0.01/s stressed, 0.02/s excited, 0.01/s lonely, Tech 80xp/s "
        },
        {
            jobName: "Videogame Developer",
            jobPay: 40,
            jobIdentifier: "videogameDev",
            skillReq: ["Programming", 25, "itTechnician", 15],
            jobReq: "Programming lvl 25, IT Technician lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "developing videogames",
            jobBuff: "0.01/s stressed, 0.03/s accomplished, 0.01/s lonely, Tech 80xp/s"
        },
        {
            jobName: "AI Specialist",
            jobPay: 40,
            jobIdentifier: "aiSpecialist",
            skillReq: ["Artificial Intelligence", 25, "Programming", 15],
            jobReq: "Artificial Intelligence lvl 25, Programming lvl 15, 1 computer",
            itemReq: ["Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "creating AI Prompts",
            jobBuff: "0.01/s stressed, 0.02/s lonely, 0.02/s accomplished, Tech 80xp/s"
        },
        {
            jobName: "Street Racer",
            jobPay: 40,
            jobIdentifier: "streetRacing",
            skillReq: ["Machine Control", 30, "Mechanics", 10],
            jobReq: "Machine Control lvl 30, Mechanics lvl 10, 1 car",
            itemReq: ["Car", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "driving in an ilegal street race",
            jobBuff: "0.01/s stressed, 0.03/s afraid, 0.02/s accompanied, Tech 80xp/s"
        },
        {
            jobName: "Cyber Security Expert",
            jobPay: 80,
            jobIdentifier: "cyberSecurity",
            skillReq: ["itTechnician", 40, "Programming", 50, "Informatics", 50],
            jobReq: "IT Technician lvl 40, Programming lvl 50, Informatics lvl 50, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping hackers",
            jobBuff: "0.02/s afraid, 0.01/s lonely, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Metal Bubble Racer",
            jobPay: 80,
            jobIdentifier: "metalBubble",
            skillReq: ["Machine Control", 40, "streetRacing", 50, "Mechanics", 50],
            jobReq: "Machine Control lvl 40, Street Racing lvl 50, Mechanics lvl 50, 1 Metal Bubble",
            itemReq: ["Metal Bubble", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "rolling and rolling",
            jobBuff: "0.03/s stressed, 0.04/s excited, 0.02/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Rogue AI Hunter",
            jobPay: 80,
            jobIdentifier: "rogueAiHunter",
            skillReq: ["Artificial Intelligence", 60, "Programming", 50, "videogameDev", 40],
            jobReq: "Artificial Intelligence lvl 60, Programming lvl 50, Videogame Developer lvl 40, 1 high-end computer",
            itemReq: ["High-end Computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "stopping the end of the world",
            jobBuff: "0.03/s lonely, 0.01/s depressed, 0.01/s afraid, 0.06/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "Nanomachine Specialist",
            jobPay: 80,
            jobIdentifier: "nanomachineSpecialist",
            skillReq: ["Machine Control", 40, "mechaMechanic", 50, "Nanotech", 60],
            jobReq: "Machine control lvl 40, Mecha Mechanic lvl 50, Nano Tech lvl 60, 1 Nano equipment",
            itemReq: ["Nano equipment", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "making very little machines",
            jobBuff: "0.03/s depressed, 0.04/s accomplished, Tech 120xp/s"
        },
        {
            jobName: "AI Governor",
            jobPay: 200,
            jobIdentifier: "aiGovenor",
            skillReq: ["rogueAiHunter", 80, "aiSpecialist", 85, "Machine Control", 60],
            jobReq: "Rogue AI Hunter lvl 80, AI Specialist lvl 85, Machine Control lvl 60, 1 AI Brain Implant",
            itemReq: ["AI Brain Implant", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "ruling the whole society through AI",
            jobBuff: "0.04/s excited, 0.04/s lonely, Tech 250xp/s "
        },
        {
            jobName: "Cyberterrorist",
            jobPay: 200,
            jobIdentifier: "cyberTerrorist",
            skillReq: ["cyberSecurity", 85, "Informatics", 80, "Programming", 70],
            jobReq: "Cyber Security Expert lvl 85, Informatics lvl 80, Programming lvl 70, 1 Hacking computer",
            itemReq: ["Hacking computer", 1],
            jobDesc: "an accessible and easy job to for beginners in the job market",
            jobActivity: "hacking for a greater cause",
            jobBuff: "0.04/s afraid, 0.04 accomplished, Tech 250xp/s"
        }
    ]

}



export let jobSections = [techJobSection, artJobSection, mechJobSection, socialJobSection, scienceJobSection, athleticsJobSection, emotionJobSection]


export const jobsWindowbtn = document.getElementById("jobs-top-button");
export const jobsWindow = document.getElementById("job-window");
export const jobsWindowLeftPanel = document.getElementById("job-window-left-panel");
export const jobsWindowRightPanel = document.getElementById("job-window-right-panel");
export const jobsWindowName = document.getElementById("job-window-name");
export const jobsWindowCloseBtn = document.getElementById("job-window-close-btn");

export function toggleJobWindow(){
    if (jobsWindow.style.visibility == "visible"){
     
    jobsWindow.style.visibility = "hidden";
    } else {
      
        jobsWindow.style.visibility = "visible";
        }
}


export function  populateJobSections(player){

    removeChildItemDet(jobsWindowLeftPanel)

    

    for (let i=0;i<jobSections.length;i++){
        const jobSection = document.createElement("div");
        const jobSectionSubMenu = document.createElement("div");
        jobSection.innerText = jobSections[i].sectionName;
        jobSection.classList.add("job-section-name")
        jobSectionSubMenu.classList.add("job-section-sub-menu")



       
        
        if (jobSections[i].sectionState == "active"){
            removeChildItemDet(jobSectionSubMenu)
            toggleJobSectionContent(jobSections[i], jobSectionSubMenu, player);
            } else{
                
               
            }
        
        jobSection.addEventListener("click", function(){
            if (jobSections[i].sectionState == "active"){
                removeChildItemDet(jobSectionSubMenu)
                jobSections[i].sectionState = "inactive";
                
                } else{
                   
                    toggleJobSectionContent(jobSections[i], jobSectionSubMenu, player);
                    jobSections[i].sectionState = "active"
                }
           
           
        })

        jobsWindowLeftPanel.appendChild(jobSection);
        jobsWindowLeftPanel.appendChild(jobSectionSubMenu);
        
        
    }
   
}




//toggle job section jobs


function toggleJobSectionContent(section, sectionDom, player){
    for (let i=0; i<section.jobs.length;i++){

        const jobItem = document.createElement("div");
        const jobItemLvl = document.createElement("div");
        const jobItemTop = document.createElement("div");
        const jobItemContent = document.createElement("div");
        const jobItemBar = document.createElement("div");

        jobItem.classList.add("job-left-panel");
        jobItemLvl.classList.add("job-left-panel-lvl")
        jobItemTop.classList.add("job-left-panel-top");
        jobItemContent.classList.add("job-left-panel-content");
        jobItemBar.classList.add("job-left-panel-bar")


        if (player.checkPlayerItem(section.jobs[i].itemReq) !== true || player.checkPlayerSkill(section.jobs[i].skillReq) !== true){

            jobItemContent.style.opacity = "50%";

            }
        
        jobItem.innerText = section.jobs[i].jobName;

        let jobIdentifier = section.jobs[i].jobIdentifier;

        jobItemLvl.innerText = player[jobIdentifier].level;
        jobItemLvl.style.fontSize = "12px";

        function jobWindowLvlBar (){
            let jobBarLvl = player[jobIdentifier].level

        if (player[jobIdentifier].level == 1){

       
            jobItemBar.style.width = player.checkCurrentSkillExp(player[jobIdentifier])/player.nextLevel(jobBarLvl+1)*100 + "%";


        } else {
            jobItemBar.style.width = ((player.checkCurrentSkillExp(player[jobIdentifier])-player.nextLevel(jobBarLvl))/(player.nextLevel(jobBarLvl + 1)- player.nextLevel(jobBarLvl))*100)  + "%";
        }
        }

        jobWindowLvlBar();


        console.log(jobItemBar.style.width);
     

        

        jobItemContent.addEventListener("click", function(){
        

                populateJobDetail(section.jobs[i], player)
            
        })

        sectionDom.appendChild(jobItemContent);
        jobItemTop.appendChild(jobItem)
        jobItemTop.appendChild(jobItemLvl)
        jobItemContent.appendChild(jobItemTop)
        jobItemContent.appendChild(jobItemBar)
       
        

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




function populateJobDetail(job, player){

        const jobApplyBtnSection =  document.createElement("div");
        const jobApplyBtn = document.createElement("button")
        const jobDetailLvl = document.createElement("div");
        jobApplyBtnSection.remove();

    
        jobApplyBtnSection.setAttribute("id","job-apply-btn-section")
        jobImage.setAttribute("id", "job-img-source");
        jobTitle.setAttribute("id", "job-detail-title");
        jobPay.setAttribute("id", "job-detail-pay");
        jobReq.setAttribute("id", "job-detail-req");
        jobDesc.setAttribute("id", "job-detail-desc");
        jobBuff.setAttribute("id", "job-detail-buff")
        jobApplyBtn.setAttribute("id", "job-apply-btn")
        jobDetailLvl.setAttribute("id", "job-detail-lvl");

        jobImage.src = job.jobSrc;
        jobTitle.innerText = job.jobName;
        jobPay.innerText = "$" + job.jobPay;
        jobReq.innerText = job.jobReq;
        jobDesc.innerText = job.jobDesc;
        jobBuff.innerText = job.jobBuff;
        jobApplyBtn.innerText = "APPLY"



    

        if (job.state == "inactive"){
            jobApplyBtn.style.backgroundColor = "#84a699";
            jobApplyBtn.innerText = "APPLY"

        } else if(job.state == "active"){
            jobApplyBtn.style.backgroundColor = "red";
            jobApplyBtn.innerText = "STOP"
            jobApplyBtn.style.color = "white";
        }
        
        

        jobTitleTag.innerText = "JOB TITLE";
        jobPayTag.innerText = "PAY";
        jobReqTag.innerText = "REQUIREMENTS";
        jobDescTag.innerText = "DESCRIPTION";
        jobBuffTag.innerText = "EFFECTS";
        let targetJobIdentifier = job.jobIdentifier
        console.log(targetJobIdentifier)
        jobDetailLvl.innerText = "Lvl. " +player[targetJobIdentifier].level


        //job button functionality
        
    

    let applyJob = function applyJobFunction(){
    


        if (player.currentActivity == job.jobActivity){
            player.endActivity()
            jobApplyBtn.style.backgroundColor = "#84a699";
            jobApplyBtn.innerText = "APPLY"
            job.state = "inactive"
            
            return;
        } 

        if (player.checkPlayerItem(job.itemReq) == true && player.checkPlayerSkill(job.skillReq) == true && player.checkPlayerItem(job.itemConsum == true)){
            player.work(job.jobName);
            jobApplyBtn.style.backgroundColor = "red";
            jobApplyBtn.innerText = "STOP"
            job.state = "active"
        } else {
            player.displayAlert("You don't meet the requirements for this job")
        }

    }

        
        jobApplyBtn.addEventListener("click", applyJob)

        
        

        

        
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
        jobApplyBtnSection.appendChild(jobDetailLvl);
        jobsWindowRightPanel.appendChild(jobImageSection);
        jobsWindowRightPanel.appendChild(jobTitleSection);
        jobsWindowRightPanel.appendChild(jobPaySection);
        jobsWindowRightPanel.appendChild(jobReqSection);
        jobsWindowRightPanel.appendChild(jobDescSection);
        jobsWindowRightPanel.appendChild(jobBuffSection);
        jobsWindowRightPanel.appendChild(jobApplyBtnSection);

        


            
    }

