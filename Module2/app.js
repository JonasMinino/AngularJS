(function (){
'use strict';


angular.module(`ShoppingListCheckOff`, [])
.controller(`ToBuyController`, ToBuyController)
.controller(`AlreadyBoughtController`,AlreadyBoughtController)
.service(`ShoppingListCheckOffService`, ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var toBuy =this;
  toBuy.Empty = false;
  toBuy.items = ShoppingListCheckOffService.getToBuy();

  toBuy.remove = function(index){
    ShoppingListCheckOffService.checkOff(index);
    if (toBuy.items === undefined || toBuy.items.length == 0) {
        toBuy.Empty = true;
    }
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

 var bought = this;
 bought.items = ShoppingListCheckOffService.getBought();
 bought.empty = function(){
   return bought.items.length<1;
 };
}

function ShoppingListCheckOffService(){
  var service = this;
  var toBuyList = [{name:"Milk", quantity:2}, {name: "Donut", quantity:4}, {name: "Cookie", quantity:6}, {name:  "Chocolate", quantity:3} , {name:"Peanut Butter", quantity:6}, {name:"Bread", quantity:1}];
  var boughtList= [];

  service.checkOff = function (index) {
      boughtList.push(toBuyList[index]);
      toBuyList.splice(index, 1);
    };


  service.getToBuy = function () {
    return toBuyList;
  };


  service.getBought = function(){
    return boughtList;
  };
}

})();
