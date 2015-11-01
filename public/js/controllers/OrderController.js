angular.module('OrderCtrl', ['ngGeolocation', 'CartSrv', 'CoffeeSrv'])
    .controller('OrderController', ['$rootScope', '$scope', '$state', '$geolocation', 'CartService', 'CoffeeService', 
        function($rootScope, $scope, $state, $geolocation, CartService, CoffeeService) {
    $scope.cartItems = CartService.items;
    $scope.coords = CartService.location;
    $scope.coffees = CoffeeService.coffees;
    $scope.selectedAmount = 1;

    CoffeeService.GetCoffees();

    $scope.fillLocation = function() {
        $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            $scope.coords.longitude = position.coords.longitude;
            $scope.coords.latitude = position.coords.latitude;
         });
    };

    $scope.addItemToCart = function() {
        if ($scope.canAddToCart()) {
            CartService.AddItem({ 
                Name: $scope.selectedCoffee.Name, 
                Size: $scope.selectedSize.Name, 
                Price: $scope.selectedSize.Price * $scope.selectedAmount, 
                Amount: $scope.selectedAmount 
            });
        }
    };

    $scope.removeItem = function(id) {
        CartService.RemoveItem(id);
    };

    $scope.emptyCart = function() {
        CartService.EmptyCart();
    };

    $scope.getRunningTotal = function() {
        return CartService.CalculateTotal();
    };

    $scope.confirm = function() {
        if ($scope.cartItems.length == 0)
            return;
        $state.go("home.default.pay");
    };

    $scope.canAddToCart = function() {
        return $scope.selectedCoffee != undefined && $scope.selectedSize != undefined && $scope.selectedAmount > 0;
    };
}]);