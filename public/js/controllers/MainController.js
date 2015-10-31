angular.module('MainCtrl', ['LoginSrv']).controller('MainController', ['$rootScope', '$scope', '$state', 'LoginService', function($rootScope, $scope, $state, LoginService) {
    $scope.firstName = $rootScope.globals.currentUser.info.Name;

    $scope.logout = function() {
        LoginService.ClearCredentials();
        $state.go("home.login");
    }
}]);