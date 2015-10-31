angular.module("CartSrv", []).factory("CartService", ["$rootScope", function($rootScope) {
	var service = {};

	service.items = [];

	service.AddItem = function(item) {
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

	return service;
}]);