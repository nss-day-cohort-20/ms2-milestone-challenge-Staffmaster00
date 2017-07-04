'use strict';
//Manipulating DOM
// Hint: You must build up the entire string of columns/rows before injecting
// into the DOM. Use a counter variable to know when to close a row after
// three columns.
var CarLot = (function(globalScopeCarLot){

let dom = Object.create(null);
// TODO: bootstrap formater
dom.formatArr = function(arrayOfObjects){
	arrayOfObjects.forEach(cars, index, function(){//takes an array and formats for booty strap
	  `<div class="col-md-4">cars</div>`
	rowLocation.appendChild("col-md-4");
	})
}

globalScopeCarLot.DOM = dom;
return globalScopeCarLot;
})(CarLot || {});
//append formatArr's result to row div
// `<div class="row"> <------
// 	  <div class="col-md-4"></div>

// 	</div>`