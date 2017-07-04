'use strict';
// XHR handling
// This IIFE will add a new module to Carlot in the
// namespace of CarLot.Inventory
var CarLot = (function(globalScopeCarLot) {

        // Define a private scope variable to store cars
    let _car_inventory = [];

        // Start building the Object that will be attached
        // to the CarLot.Inventory namespace
    let inventory = Object.create(null);

    inventory.loadInventory = function(callback) {//ran
        console.log("Called LoadXHRInv");
        var load = new XMLHttpRequest();
        load.addEventListener("load", function() { inventory.setInventory(callback) }) //storage callback//which calls a callback...
        load.open("GET", "inventory.json")
        load.send();
    };


    inventory.setInventory = function(callback) {//ran
        console.log("Called setInv");
        var cars = JSON.parse(event.target.responseText).cars
        console.log("carJsonObj", cars);
        callback(cars) //needs to push cars to array
    }
    // Add each car to the private _car_inventory array
    inventory.setArray = function(carJsonObj) {
        console.log("called SetArr");
        _car_inventory.push(carJsonObj) //return?
    }

    // inventory.getArray = function() {
    //     console.log("inventory", inventory);
    //     return _car_inventory
    // }

    globalScopeCarLot.Inventory = inventory;
    return globalScopeCarLot;
})(CarLot || {});



// If this is the first module that gets evaluated,
// CarLot will be `undefined` and a new empty object
// will augmented.
