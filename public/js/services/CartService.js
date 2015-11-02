angular.module("CartSrv", []).factory("CartService", ["$rootScope", "$http", function($rootScope, $http) {
    var service = {};

    service.items = [];
    service.location = {};

    service.AddItem = function(item) {
        for (var i = 0; i < service.items.length; ++i) {
            var elem = service.items[i];
            if (elem.Name === item.Name && elem.Size == item.Size) {
                elem.Amount += item.Amount;
                elem.Price += item.Price;
                return;
            }
        }

        service.items.push(item);
    };

    service.RemoveItem = function(id) {
        service.items.splice(id, 1);
    };

    service.EmptyCart = function() {
        service.items.splice(0, service.items.length);
    };

    service.CalculateTotal = function() {
        var total = 0;
        service.items.forEach(function(item) {
            total += item.Price;
        });

        return total;
    };

    service.Pay = function(method, callback) {
        $http.post("/api/pay", {
            method: method,
            items: service.items,
            coords: service.location
        }).success(function(response) {
            callback(response);
        });
    };

    return service;
}]);