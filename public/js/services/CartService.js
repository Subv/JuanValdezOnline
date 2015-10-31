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

	return service;
}]);