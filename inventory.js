// Inventory window functionality and populate.

export const inventoryWindowbtn = document.getElementById("inventory-top-button");
export const inventoryWindowContainer = document.getElementById("inventory-window-container")
export const inventoryMainWindow = document.getElementById("inventory-main-window");
export const inventoryWindowName = document.getElementById("inventory-window-name");
export const inventoryWindowCloseBtn = document.getElementById("inventory-window-close-btn");
export const inventoryWindowItemDetail = document.getElementById("inventory-item-detail");



function removeChildItemDet(container){

    while (container.firstChild){
 
     container.removeChild(container.firstChild);
    }
 }


 export function toggleInventoryWindow(){
    if (inventoryWindowContainer.style.visibility == "visible"){
        
        inventoryWindowContainer.style.visibility = "hidden";
        inventoryMainWindow.style.visibility = "hidden";
        inventoryWindowName.style.visibility = "hidden";
        inventoryWindowItemDetail.style.visibility = "hidden";
    } else {
        
        inventoryWindowContainer.style.visibility = "visible";
        inventoryMainWindow.style.visibility = "visible";
        inventoryWindowName.style.visibility = "visible";
        }
}


export function populateInventorySections(player){

    for (let i=0; i < player.inventory.length; i++ ){
        let inventoryItem = document.createElement("div");
        inventoryItem.classList.add("inventory-item-element")
        let inventoryItemImg = document.createElement("img");
        inventoryItemImg.classList.add("inventory-item-img");
        inventoryItemImg.src = player.inventory[i].source;
        let inventoryItemNum = document.createElement("div");
        inventoryItemNum.classList.add("inventory-item-num");
        inventoryItemNum.innerText = player.inventory[i].quantity;

        console.log("item attached to inventory");
       

        inventoryItem.addEventListener("click", function(){
            removeChildItemDet(inventoryWindowItemDetail);
            inventoryWindowItemDetail.style.visibility = "visible";

            //attach all the elements for the details of an item

            const inventoryWindowDetailNameDescContainer = document.createElement("div");
            inventoryWindowDetailNameDescContainer.setAttribute("id", "inventory-window-detail-name-desc-container")
            const inventoryWindowDetailNameContainer = document.createElement("div");
            inventoryWindowDetailNameContainer.setAttribute("id", "inventory-window-detail-name-container")
            const inventoryWindowDetailDescContainer = document.createElement("div");
            inventoryWindowDetailDescContainer.setAttribute("id", "inventory-window-detail-desc-container")
            const inventoryWindowDetailActionsContainer = document.createElement("div");
            inventoryWindowDetailActionsContainer.setAttribute("id", "inventory-window-detail-actions-container")
            const inventoryWindowDetailSellContainer = document.createElement("div");
            inventoryWindowDetailSellContainer.setAttribute("id", "inventory-window-detail-sell-container")
            const inventoryWindowDetailPriceContainer = document.createElement("div");
            inventoryWindowDetailPriceContainer.setAttribute("id", "inventory-window-detail-price-container")

            const inventoryWindowDetailNameTag = document.createElement("div");
            inventoryWindowDetailNameTag.setAttribute("id", "inventory-item-detail-name-tag");
            inventoryWindowDetailNameTag.innerText = "NAME"
            const inventoryWindowDetailName = document.createElement("div");
            inventoryWindowDetailName.setAttribute("id", "inventory-item-detail-name");
            inventoryWindowDetailName.innerText = player.inventory[i].name;

            const inventoryWindowDetailImgContainer = document.createElement("div");
            inventoryWindowDetailImgContainer.setAttribute("id", "inventory-item-detail-image-container");

            const inventoryWindowDetailImg = document.createElement("img");
            inventoryWindowDetailImg.setAttribute("id", "inventory-item-detail-image");
            inventoryWindowDetailImg.src = player.inventory[i].source;

            const inventoryWindowDetailDescTag = document.createElement("div");
            inventoryWindowDetailDescTag.setAttribute("id", "inventory-item-detail-desc-tag");
            inventoryWindowDetailDescTag.innerText = "DESCRIPTION"

            const inventoryWindowDetailDesc = document.createElement("div");
            inventoryWindowDetailDesc.setAttribute("id", "inventory-item-detail-desc");
            inventoryWindowDetailDesc.innerText = player.inventory[i].description;

            const inventoryWindowDetailPriceTag = document.createElement("div");
            inventoryWindowDetailPriceTag.setAttribute("id", "inventory-item-detail-price-tag");
            inventoryWindowDetailPriceTag.innerText = "Price";

            const inventoryWindowDetailPrice = document.createElement("div");
            inventoryWindowDetailPrice.setAttribute("id", "inventory-item-detail-price");
            inventoryWindowDetailPrice.innerText = player.inventory[i].price;


            let itemAmount = player.inventory[i].quantity;

            const inventoryWindowDetailNumContainer = document.createElement("div");
            inventoryWindowDetailNumContainer.setAttribute("id", "inventory-item-detail-number-container");

            const inventoryWindowDetailNumUp = document.createElement("img");
            inventoryWindowDetailNumUp.setAttribute("id", "inventory-item-detail-number-up");
            inventoryWindowDetailNumUp.addEventListener("click", function(){
                if (itemAmount < player.inventory[i].quantity){
                    itemAmount++;
                    inventoryWindowDetailNum.innerText = itemAmount;
                } else {
                    return;
                }
            })

            const inventoryWindowDetailNumDown = document.createElement("img");
            inventoryWindowDetailNumDown.setAttribute("id", "inventory-item-detail-number-down");
            inventoryWindowDetailNumDown.addEventListener("click", function(){
                if (itemAmount > 1){
                    itemAmount--;
                    inventoryWindowDetailNum.innerText = itemAmount;
                } else {
                    return;
                }
            
            })

            const inventoryWindowDetailNum = document.createElement("div");
            inventoryWindowDetailNum.setAttribute("id", "inventory-item-detail-number");
            
            inventoryWindowDetailNum.innerText = itemAmount;



            const inventoryWindowSellBtn = document.createElement("button");
            inventoryWindowSellBtn.setAttribute("id", "inventory-item-detail-sell-btn");
            inventoryWindowSellBtn.innerText = "SELL";

            inventoryWindowSellBtn.addEventListener("click", function(){
                let newItemAmount = player.inventory[i].quantity - itemAmount;
                let itemName = player.inventory[i].name;
                player.sellFurni(player.inventory[i], itemAmount)
                
                player.displayAlert("You sold " + itemAmount + " " + itemName);


                itemAmount = newItemAmount;
                inventoryWindowDetailNum.innerText = itemAmount;
             
                removeChildItemDet(inventoryMainWindow);
                populateInventorySections(player);
                inventoryWindowItemDetail.style.visibility = "hidden";
               
            })

            

            const inventoryWindowDestroyBtn = document.createElement("button");
            inventoryWindowDestroyBtn.setAttribute("id", "inventory-item-detail-destroy-btn");
            inventoryWindowDestroyBtn.innerText = "DESTROY";

            inventoryWindowDetailImgContainer.appendChild(inventoryWindowDetailImg)
            inventoryWindowItemDetail.appendChild(inventoryWindowDetailImgContainer)
            inventoryWindowItemDetail.appendChild(inventoryWindowDetailNameDescContainer)
            inventoryWindowItemDetail.appendChild(inventoryWindowDetailActionsContainer);
            inventoryWindowDetailNameDescContainer.appendChild(inventoryWindowDetailNameContainer)
            inventoryWindowDetailNameContainer.appendChild(inventoryWindowDetailNameTag);
            inventoryWindowDetailNameContainer.appendChild(inventoryWindowDetailName);
            inventoryWindowDetailNameDescContainer.appendChild(inventoryWindowDetailDescContainer)
            inventoryWindowDetailDescContainer.appendChild(inventoryWindowDetailDescTag);
            inventoryWindowDetailDescContainer.appendChild(inventoryWindowDetailDesc);
            inventoryWindowDetailActionsContainer.appendChild(inventoryWindowDetailPriceContainer)
            inventoryWindowDetailPriceContainer.appendChild(inventoryWindowDetailPriceTag);
            inventoryWindowDetailPriceContainer.appendChild(inventoryWindowDetailPrice);
            inventoryWindowDetailActionsContainer.appendChild(inventoryWindowDetailSellContainer);

            inventoryWindowDetailNumContainer.appendChild(inventoryWindowDetailNumDown);
            inventoryWindowDetailNumContainer.appendChild(inventoryWindowDetailNum);
            inventoryWindowDetailNumContainer.appendChild(inventoryWindowDetailNumUp);

            inventoryWindowDetailSellContainer.appendChild(inventoryWindowDetailNumContainer);
            inventoryWindowDetailSellContainer.appendChild(inventoryWindowSellBtn);
            inventoryWindowDetailSellContainer.appendChild(inventoryWindowDestroyBtn);


        })


        inventoryMainWindow.appendChild(inventoryWindowItemDetail)
        inventoryMainWindow.appendChild(inventoryItem);
        inventoryItem.appendChild(inventoryItemImg);
        inventoryItem.appendChild(inventoryItemNum);
    }

    for (let i=0; i < 10; i++ ){
        let inventoryEmptySlot = document.createElement("div");
        inventoryEmptySlot.classList.add("inventory-empty-slot")
        inventoryMainWindow.appendChild(inventoryEmptySlot)

    }



}

