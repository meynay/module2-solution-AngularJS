angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService)

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
    let tbc = this;
    tbc.toBuy = ShoppingListCheckOffService.getToBuy();
    console.log(tbc.toBuy);
    tbc.buyItem = function(itemIndex) {
        ShoppingListCheckOffService.buy(itemIndex);
    }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
    let abc = this;
    abc.bought = ShoppingListCheckOffService.getBought();
}

function ShoppingListCheckOffService() {
    let service = this;
    service.toBuy = [
        {
            quantity: 2,
            name: 'cookies'
        },
        {
            quantity: 4,
            name: 'colas'
        },
        {
            quantity: 3,
            name: 'sodas'
        },
        {
            quantity: 1,
            name: 'biscuits'
        },
        {
            quantity: 6,
            name: 'chips'
        },
        {
            quantity: 8,
            name: 'courses'
        }
    ];
    service.bought = [];

    service.getToBuy = function(){
        return service.toBuy;
    }
    service.getBought = function(){
        return service.bought;
    }
    service.buy = function(itemIndex) {
        let item = service.toBuy[itemIndex];
        service.toBuy.splice(itemIndex, 1);
        service.bought.push(item);
        console.log(service.toBuy)
    }
}