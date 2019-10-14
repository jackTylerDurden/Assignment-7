/*eslint-env browser*/
var inventory = [[4824, "Shirt", 10, 15.99],[6343, "Jeans", 22, 39.99],[3223, "Socks", 36, 9.99],[2233, "Hat", 12, 49.99], [9382, "Jacket", 5, 49.99]];
var i,j;

function displayInventory(){
    "use strict";
    inventory.forEach(function(item){
        window.console.log(item[0] + " " + item[1] + " ("+item[2]+") $"+item[3]);       
    });
}

function updateProduct(){
    "use strict";
     var productToUpdate = window.prompt("Please enter the sku number of the product to update");
     var isFound = false;
     var quantityToUpdate;
    //  var itemToUpdate;
     var k;
     var invItem;
    while(true){
        for(k=0;k < inventory.length; k++){        
            if(inventory[k][0] === Number(productToUpdate)){
                invItem = inventory[k];
                // isFound = true;            
                break;
            }
         }    
        if(invItem){
            while(true){
                quantityToUpdate = window.prompt("Please enter the quantity to be updated : ");
                if(isNaN(quantityToUpdate)){
                    window.alert("Please enter a valid quantity");
                } else {
                    break;
                }
            }
            invItem[2] = quantityToUpdate;
            window.console.log(" Updated inventory is ");
            displayInventory();
            break;
        }else{
            window.alert("Please enter a valid sku number");
        }
    }          
}

function main(){
    "use strict";
    while(true){
        var userInput = window.prompt("Enter command \n 1. View All Prodcuts.\n 2. Update existing product's quantity.\n 3.Exit");        
        switch (userInput){
            case "1" :
                displayInventory();
                break;
            case "2": 
                updateProduct();
                break;
            case "3":
                return;
        }
    }
}
main();