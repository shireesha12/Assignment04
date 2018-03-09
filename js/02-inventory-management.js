/*eslint-env browser*/
function displayMenu() {
	"use strict";
	window.console.log("Welcome to Inventory Management Application");
	window.console.log("");
	window.console.log("COMMAND MENU");
	window.console.log("view - view all products");
	window.console.log("update - update stock");
	window.console.log("exit - exit the program");
	window.console.log("");
}
function view(inventory) {
	"use strict";
	inventory.sort();
	inventory.forEach(function (product) {
        window.console.log(product[0] + " " + product[1] + " " + "(" + product[2] + ")" + " " + product[3]);
   });
	
	if (inventory) {
		localStorage.inventory = JSON.stringify(inventory);
	} else {
		inventory = JSON.parse(localStorage.inventory);
	}
	window.console.log("");
}

function update(inventory) {
	"use strict";
	var sku, productNo, i, quanity;
    sku = parseInt(window.prompt("enter sku number for product"), 10);
    for (i = 0; i < inventory.length; i += 1) {
        if (sku === inventory[i][0]) {
          productNo = inventory[i][0];
		}
    }
	
    if (isNaN(sku) || sku !== productNo) {
         window.alert("Please Provide Right Sku Number....!");
    } else {
        quanity = parseInt(window.prompt("Enter the quanity of the products"), 10);
        
            if (isNaN(quanity) || quanity < 0) {
                window.alert("Enter a valid non-negtive quantity");
                
            } else {
            inventory.forEach(function (product) {
				if (sku === product[0]) {
            product.splice(2, 1, quanity); }
             
         });
       }
	}
	if (inventory) {
		localStorage.inventory = JSON.stringify(inventory);
	} else {
		inventory = JSON.parse(localStorage.inventory);
	}
   localStorage.inventory = JSON.parse(localStorage.inventory);
}
        
function main() {
	"use strict";
	var inventory, command;
	displayMenu();
	inventory = [[3223, "Socks", 36, "$9.99"], [2233, "Hat", 12, "$14.99"], [4824, "Shirt", 10, "$15.99"], [9382, "Jackets", 5, "$49.99"], [6343, "Jeans", 22, "$39.99"] ];
	while (true) {
        command = window.prompt("enter command");
        if (command !== null) {
            if (command === "view") {
                 view(inventory);
			} else if (command === "update") {
                update(inventory);
            } else if (command === "exit") {
                break;
            } else {
                window.alert("command is not valid");
            }
        } else {
        break;
		}
    }
    window.console.log("program terminated");
}
main();

