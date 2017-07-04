'use strict';
//Manipulating DOM
// Hint: You must build up the entire string of columns/rows before injecting
// into the DOM. Use a counter variable to know when to close a row after
// three columns.
var CarLot = (function(globalScopeCarLot) {
    let dom = Object.create(null);
    var counter = 0;
    let rowNodes = document.createTextNode(`<div class="col-md-4">.col-md-4</div>`)
    // TODO: bootstrap format
    dom.createRows = function() {
        if (counter <= cars.length) {
            rowLocation.appendChild(rowNodes);
        }
        counter++
    }


    dom.formatArr = function(arrayOfObjects) {

        arrayOfObjects.forEach(function() { //takes an array and formats for booty strap

            //row location is in main.js

        })
    }

    globalScopeCarLot.DOM = dom;
    return globalScopeCarLot;
})(CarLot || {});
//append formatArr's result to row div
// `<div class="row"> <------
// 	  <div class="col-md-4"></div>

// 	</div>`
