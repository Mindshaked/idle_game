
import {removeChildItemDet, furniture} from "./script.js"

export const shopWindowbtn = document.getElementById("shop-top-button");
export const shopWindow = document.getElementById("shop-window");
export const shopWindowCloseBtn = document.getElementById("shop-window-close-btn");
export const shopWindowTitle = document.getElementById("shop-window-title");
export const shopSectionsWindow = document.getElementById("shop-left-panel");
export const shopTopPanel = document.getElementById("shop-top-panel");




export function toggleShopWindow(){
    if (shopWindow.style.visibility == "visible"){
    shopWindow.style.visibility = "hidden";
  

    
    } else {
        shopWindow.style.visibility = "visible";
       
        
        
        }
}


//shop array

let basicSet = {
    sectionName: "BASIC SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "book-shelf",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic book shelf",
            itemImg: "resources/bookshelfBasic.png",
            itemBonus: [],
            itemDescription: "a normal book shelf",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "tv-stand",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic TV stand",
            itemImg: "resources/tvstandBasic.png",
            itemBonus: [],
            itemDescription: "a normal TV stand",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "on-tv-stand",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic retro TV",
            itemImg: "resources/retrotv.png",
            itemBonus: [],
            itemDescription: "a retro TV with a lot of charm",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "desk",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic desk",
            itemImg: "resources/desk.png",
            itemBonus: [],
            itemDescription: "a basic desk",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "on-desk",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic retro computer",
            itemImg: "resources/retrocomputer.png",
            itemBonus: [],
            itemDescription: "a retro computer",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "shelf",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic shelf",
            itemImg: "resources/shelf.png",
            itemBonus: [],
            itemDescription: "a basic shelf",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "lamp",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic lamp",
            itemImg: "resources/lamp.png",
            itemBonus: [],
            itemDescription: "a basic lamp",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "chair",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Basic chair",
            itemImg: "resources/chair.png",
            itemBonus: [],
            itemDescription: "a basic chair",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let socialSet = {
    sectionName: "SOCIAL SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let artSet = {
    sectionName: "ART SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}
let techSet = {
    sectionName: "TECH SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}
let emotionSet = {
    sectionName: "EMOTIONS SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}
let physicalSet = {
    sectionName: "ATHLETICS SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}
let militarySet = {
    sectionName: "MILITARY SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}
let scienceSet = {
    sectionName: "SCIENCE SET",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let deskItems = {
    sectionName: "ON-DESK ITEMS",
    items:
        [{
            shopType: "on-desk",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "on-desk",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let landscapeHolograms = {
    sectionName: "LANDSCAPES",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let pets = {
    sectionName: "PETS",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let miscFurniture = {
    sectionName: "STANDING FURNITURE",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let wallItems = {
    sectionName: "WALL ITEMS",
    items:
        [{
            shopType: "WALL ITEMS",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let shelfDecorations = {
    sectionName: "SHELF DECORATIONS",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}

let tvStandItems = {
    sectionName: "TV STAND FURNITURE",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["pcBang", "payModifier", 1],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: [],
            reqText: "None"
        }
    ]
}




export let shopInventory = [basicSet, socialSet, artSet, techSet, emotionSet, physicalSet, militarySet, scienceSet, deskItems, landscapeHolograms, pets, miscFurniture, wallItems, shelfDecorations, tvStandItems]




//shop class to populate the window

const shopItemWindow = document.getElementById("shop-bottom-panel")
const shopFurnitureImage = document.getElementById("furniture-shop-img");
const furniturePriceBonusSection = document.getElementById("furniture-shop-price-bonus")
const furniturePriceSection = document.getElementById("furniture-shop-price-section")
const furnitureBonusSection = document.getElementById("furniture-shop-bonus-section")
const furnitureDescSection = document.getElementById("furniture-shop-description-section");
const furnitureReqSection = document.getElementById("furniture-shop-req-section");
const shopItemTitle = document.createElement("div");
const shopItemImg = document.createElement("img");
const shopItemPriceDetail = document.createElement("div"); 
const shopItemBonus = document.createElement("div");
const shopItemDescription = document.createElement("div");
const shopItemReq = document.createElement("div");
const shopItemPriceTag = document.getElementById("furniture-shop-price-tag");
const shopItemBonusTag = document.getElementById("furniture-shop-bonus-tag")
const shopItemDescriptionTag = document.getElementById("furniture-shop-description-tag")
const shopItemReqTag = document.getElementById("furniture-shop-req-tag")









let menuHoverSound = new Audio("./resources/sounds/Minimalist3.mp3")
let menuClickSound = new Audio("./resources/sounds/Minimalist7.mp3")




export function  populateShopSections(player){

    for (let i=0;i<shopInventory.length;i++){
        const shopSection = document.createElement("div");
        shopSection.innerText = shopInventory[i].sectionName;
        shopSection.classList.add("shop-section-name")
        shopSectionsWindow.appendChild(shopSection);

        shopSection.addEventListener("mouseover", function(){
            menuHoverSound.play();
        })

        shopSection.addEventListener("click", function(){
            menuClickSound.play();
        })

        shopSection.addEventListener("mouseout", function(){
            menuHoverSound.currentTime = 0;
            menuHoverSound.play();
        })

      
        
        
        shopSection.addEventListener("click", function(){
            removeChildItemDet(shopItemWindow);
           
            populateSectionItems(shopInventory[i], player);
        })
        
    }
   
}



function populateSectionItems(section, player){
    for (let i=0;i<section.items.length;i++){
        const shopItem = document.createElement("div");
        const shopItemName = document.createElement("div");
        const shopItemPrice = document.createElement("div");
        shopItemName.innerText = section.items[i].itemName;
        shopItemPrice.innerText = section.items[i].itemPrice;
        shopItem.classList.add("shop-item")
        shopItemName.classList.add("shop-item-name");
        shopItemPrice.classList.add("shop-item-price");
        shopItemWindow.appendChild(shopItem);
        shopItem.appendChild(shopItemName);
        shopItem.appendChild(shopItemPrice);
        shopItem.addEventListener("click", function(){
            removeChildItemDet(shopTopPanel)
            populateItemDetail(section.items[i], player)
        })
    }


}



function populateItemDetail(item, player){

    const shopItemBuyBtnSlot = document.createElement("div")
    const shopItemBuyBtn = document.createElement("button")

    shopItemBuyBtn.remove();

    shopItemTitle.setAttribute("id", "furniture-shop-name")
    shopItemImg.setAttribute("id", "furniture-shop-img-source")
    shopItemPriceDetail.setAttribute("id", "furniture-shop-price")
    shopItemBonus.setAttribute("id", "furniture-shop-bonus")
    shopItemDescription.setAttribute("id", "furniture-shop-description")
    shopItemReq.setAttribute("id", "furniture-shop-req")
    furniturePriceBonusSection.setAttribute("id", "furniture-shop-price-bonus")
    furniturePriceSection.setAttribute("id", "furniture-shop-price-section")
    furnitureBonusSection.setAttribute("id", "furniture-shop-bonus-section")
    furnitureDescSection.setAttribute("id", "furniture-shop-description-section")
    furnitureReqSection.setAttribute("id", "furniture-shop-req-section")
    shopItemBuyBtnSlot.setAttribute("id", "furniture-shop-buy-btn-section");
    shopItemBuyBtn.setAttribute("id", "furniture-shop-buy-btn");

    shopItemTitle.innerText = item.itemName;
    shopItemImg.src = item.itemImg;
    shopItemPriceDetail.innerText = item.itemPrice;
    shopItemBonus.innerText = item.itemBonus;
    shopItemDescription.innerText = item.itemDescription;
    shopItemReq.innerText = item.itemReq;
    shopItemBuyBtn.innerText = "BUY";
    shopItemPriceTag.innerText = "PRICE"
    shopItemBonusTag.innerText = "BONUS"
    shopItemDescriptionTag.innerText = "DESCRIPTION";
    shopItemReqTag.innerText = "REQUIREMENETS"


    
      // item buy button functionality

     
     
      const buyItemFunc = function buyItemFunction(){
       

        if (player.checkPlayerSkill(item.itemReq)){
            let newFurniture = new furniture(item.itemPrice, item.itemSellPrice, item.itemName, item.shopType, item.itemImg, item.itemBonus);
            player.buyFurni(newFurniture, 1);
        } else {
            console.log("You don't meet the requirements")
        }
       
    
         }

        
         

         shopItemBuyBtn.addEventListener("click", buyItemFunc);
       




    shopTopPanel.appendChild(shopItemTitle);
    shopTopPanel.appendChild(shopFurnitureImage);
    shopTopPanel.appendChild(furniturePriceSection);
    shopTopPanel.appendChild(furnitureBonusSection);
    shopTopPanel.appendChild(furnitureDescSection);
    shopTopPanel.appendChild(furnitureReqSection);
    shopTopPanel.appendChild(furniturePriceBonusSection);
    shopTopPanel.appendChild(shopItemBuyBtnSlot)
    shopItemBuyBtnSlot.appendChild(shopItemBuyBtn);
    shopFurnitureImage.appendChild(shopItemImg);
    furniturePriceSection.appendChild(shopItemPriceDetail);
    furnitureBonusSection.appendChild(shopItemBonus);
    furniturePriceBonusSection.appendChild(furniturePriceSection);
    furniturePriceBonusSection.appendChild(furnitureBonusSection);
    furnitureDescSection.appendChild(shopItemDescription);
    furnitureReqSection.appendChild(shopItemReq);
    shopWindow.appendChild(shopWindowCloseBtn);

  

   


}


