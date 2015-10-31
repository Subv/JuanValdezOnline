angular.module('MainCtrl', ['LoginSrv', 'CartSrv'])
    .controller('MainController', ['$rootScope', '$scope', '$state', 'LoginService', 'CartService',
        function($rootScope, $scope, $state, LoginService, CartService) {
    $scope.firstName = $rootScope.globals.currentUser.info.Name;
    $scope.currState = $state;

    $scope.logout = function() {
        LoginService.ClearCredentials();
        CartService.location = {};
        CartService.EmptyCart();
        $state.go("home.login");
    };

    $scope.goToOrder = function() {
        $state.go("home.default.order");
    }
}]);