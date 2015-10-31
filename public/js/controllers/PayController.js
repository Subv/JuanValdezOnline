angular.module('PayCtrl', ['CartSrv'])
    .controller('PayController', ['$rootScope', '$scope', '$state', 'CartService', 
        function($rootScope, $scope, $state, CartService) {
    $scope.cartItems = CartService.items;
}]);