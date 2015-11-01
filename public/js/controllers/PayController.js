angular.module('PayCtrl', ['CartSrv'])
    .controller('PayController', ['$rootScope', '$scope', '$state', 'CartService', 
        function($rootScope, $scope, $state, CartService) {
    $scope.cartItems = CartService.items;
    $scope.points = $rootScope.globals.currentUser.info.Points;

    $scope.mostrarPointsErrorAlert = function() {
        return $scope.selectedPaymentMethod === "0" && $scope.points < CartService.CalculateTotal();
    };

    $scope.mostrarPointsOKAlert = function() {
        return $scope.selectedPaymentMethod === "0" && $scope.points >= CartService.CalculateTotal();
    };
}]);