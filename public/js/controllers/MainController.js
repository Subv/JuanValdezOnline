angular.module('MainCtrl', ['LoginSrv']).controller('MainController', ['$scope', '$state', 'LoginService', function($scope, $state, LoginService) {
    $scope.logout = function() {
        LoginService.ClearCredentials();
        $state.go("home.login");
    }
}]);