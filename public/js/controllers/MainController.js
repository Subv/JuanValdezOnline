angular.module('MainCtrl', ['ngGeolocation', 'LoginSrv', 'CartSrv', 'CoffeeSrv'])
    .controller('MainController', ['$rootScope', '$scope', '$state', '$geolocation', 'LoginService', 'CartService', 'CoffeeService', 
        function($rootScope, $scope, $state, $geolocation, LoginService, CartService, CoffeeService) {
    $scope.firstName = $rootScope.globals.currentUser.info.Name;
    $scope.cartItems = CartService.items;
    $scope.coffees = CoffeeService.coffees;
    $scope.selectedAmount = 1;

    CoffeeService.GetCoffees();

    $scope.fillLocation = function() {
        $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            $scope.coords = position.coords;
         });
    };

    $scope.logout = function() {
        LoginService.ClearCredentials();
        $state.go("home.login");
    };

    $scope.addItemToCart = function() {
        if ($scope.selectedCoffee !== undefined && $scope.selectedSize.Name !== undefined) {
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
}]);