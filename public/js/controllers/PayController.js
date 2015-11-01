angular.module('PayCtrl', ['CartSrv', 'LoginSrv'])
    .controller('PayController', ['$rootScope', '$scope', '$state', 'CartService', 'LoginService', 
        function($rootScope, $scope, $state, CartService, LoginService) {
    $scope.cartItems = CartService.items;
    $scope.points = $rootScope.globals.currentUser.info.Points;
    $scope.price = CartService.CalculateTotal();

    $scope.mostrarPointsErrorAlert = function() {
        return $scope.selectedPaymentMethod === "0" && $scope.points < CartService.CalculateTotal();
    };

    $scope.mostrarPointsOKAlert = function() {
        return $scope.selectedPaymentMethod === "0" && $scope.points >= CartService.CalculateTotal();
    };

    $scope.editOrder = function() {
        $state.go("home.default.order");
    };

    $scope.canPay = function() {
        return !!!!$scope.selectedPaymentMethod;
    };

    $scope.pay = function() {
        if (!$scope.canPay())
            return;

        CartService.Pay($scope.selectedPaymentMethod, function(response) {
            console.log("Response: ");
            console.log(response);
            LoginService.SetUserInfo(response.user);

            if (response.result == 0) {
                alert(response.error);
                return;
            } else {
                alert("Order successful!");
                CartService.EmptyCart();
                $state.go("home.default.order");
            }
        });
    };
}]);