angular.module('MainCtrl', ['geolocation', 'LoginSrv', 'CartSrv']).controller('MainController', ['$rootScope', '$scope', '$state', 'geolocation', 'LoginService', 'CartService', function($rootScope, $scope, $state, geolocation, LoginService, CartService) {
    $scope.firstName = $rootScope.globals.currentUser.info.Name;
    $scope.cartItems = CartService.items;

    $scope.fillLocation = function() {
        geolocation.getLocation().then(function(data) {
            $scope.coords = { lat: data.coords.latitude, long: data.coords.longitude };
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