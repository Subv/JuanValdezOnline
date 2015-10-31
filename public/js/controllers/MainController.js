angular.module('MainCtrl', ['LoginSrv', 'CartSrv']).controller('MainController', ['$rootScope', '$scope', '$state', 'LoginService', 'CartService', function($rootScope, $scope, $state, LoginService, CartService) {
    $scope.firstName = $rootScope.globals.currentUser.info.Name;
    $scope.cartItems = CartService.items;

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