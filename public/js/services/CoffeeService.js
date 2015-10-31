angular.module("CoffeeSrv", []).factory("CoffeeService", ["$rootScope", "$http", function($rootScope, $http) {
    var service = {};

    service.coffees = [];

    service.GetCoffees = function() {
        $http.get("/api/coffees", { cache: true }).success(function(response) {
            service.coffees.splice(0, service.coffees.length);
            response.forEach(function(coffee) {
                service.coffees.push(coffee);
            });
        });
    };

    return service;
}]);