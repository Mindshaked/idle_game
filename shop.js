
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

export let centralFurnitureSection = {
    sectionName: "CENTRAL FURNITURE",
    items:
        [{
            shopType: "central-furniture",
            itemPrice: 50,
            itemSellPrice: 30,
            itemName: "Basic central table",
            itemImg: "resources/centraltable.png",
            itemBonus: ["player.pizza.payModifier", 1],
            itemDescription: "a normal table",
            itemReq: "None",
        },
        {
            shopType: "central-furniture",
            itemPrice: 200,
            itemSellPrice: 120,
            itemName: "Luxury central table",
            itemImg: "resources/centraltable.png",
            itemBonus: [],
            itemDescription: "a normal table",
            itemReq: "None"
        }
    ]
}

export let shopInventory = [centralFurnitureSection]




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
const shopItemBuyBtnSlot = document.createElement("div")
const shopItemBuyBtn = document.createElement("button")
const shopItemPriceTag = document.getElementById("furniture-shop-price-tag");
const shopItemBonusTag = document.getElementById("furniture-shop-bonus-tag")
const shopItemDescriptionTag = document.getElementById("furniture-shop-description-tag")
const shopItemReqTag = document.getElementById("furniture-shop-req-tag")



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









export function  populateShopSections(player){

    for (let i=0;i<shopInventory.length;i++){
        const shopSection = document.createElement("div");
        shopSection.innerText = shopInventory[i].sectionName;
        shopSection.classList.add("shop-section-name")
        shopSectionsWindow.appendChild(shopSection);
        
        
        shopSection.addEventListener("click", function(){
            removeChildItemDet(shopItemWindow);
           
            populateSectionItems(shopInventory[i], player);
        })
        
    }
   
}



console.log("ahihi" + shopInventory[0]);

console.log(centralFurnitureSection);

function populateSectionItems(section, player){
    console.log("això és la secció" + section)
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
            console.log("shop details should be shown")
            removeChildItemDet(shopTopPanel)
            populateItemDetail(section.items[i], player)
        })
    }


}



function populateItemDetail(item, player){



    shopItemTitle.innerText = item.itemName;
    shopItemImg.src = item.itemImg;
    shopItemPriceDetail.innerText = item.itemPrice;
    shopItemBonus.innerText = item.itemBonus;
    shopItemDescription.innerText = item.itemDescription;
    shopItemReq.innerText = item.itemReq;
    shopItemBuyBtn.innerText = "BUY";
    shopItemBuyBtn.style.visibility = "visible";
    shopItemPriceTag.innerText = "PRICE:"
    shopItemBonusTag.innerText = "BONUS:"
    shopItemDescriptionTag.innerText = "DESCRIPTION:";
    shopItemReqTag.innerText = "REQUIREMENETS:"


    
      // item buy button functionality

      const buyItemFunc = function buyItemFunction(){
        let newFurniture = new furniture(item.itemPrice, item.itemSellPrice, item.itemName, item.shopType, item.itemImg, item.itemBonus);
        player.buyFurni(newFurniture, 1);
        console.log (player.inventory)
        player.displayAlert("You bought " + newFurniture.name + " for $" + item.itemPrice)
        shopItemBuyBtn.classList.add("event-added")
        
    }

        if (!shopItemBuyBtn.classList.contains("event-added")){
            shopItemBuyBtn.addEventListener("click", buyItemFunc);
        }

       




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


