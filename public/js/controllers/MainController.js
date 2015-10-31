angular.module('MainCtrl', ['ngGeolocation', 'LoginSrv', 'CartSrv']).controller('MainController', ['$rootScope', '$scope', '$state', '$geolocation', 'LoginService', 'CartService', function($rootScope, $scope, $state, $geolocation, LoginService, CartService) {
    $scope.firstName = $rootScope.globals.currentUser.info.Name;
    $scope.cartItems = CartService.items;

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
        CartService.AddItem({ Name: 'tst', Size: 'Grande', Price: 3000, Amount: 12 });
    };

    $scope.emptyCart = function() {
        CartService.EmptyCart();
    };

}]);