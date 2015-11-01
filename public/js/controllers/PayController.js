angular.module('PayCtrl', ['CartSrv'])
    .controller('PayController', ['$rootScope', '$scope', '$state', 'CartService', 
        function($rootScope, $scope, $state, CartService) {
    $scope.cartItems = CartService.items;
    $scope.points = $rootScope.globals.currentUser.info.Points;

    $scope.mostrarAlert=function(){
        if($scope.selectedPaymentMethod==="0" && $scope.points<CartService.CalculateTotal()){
            return true;
        }
        return false;
    };
}]);