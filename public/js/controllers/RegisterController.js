angular.module('RegisterCtrl', ['LoginSrv']).controller('RegisterController', ['$scope', '$state', 'LoginService', function($scope, $state, LoginService) {
    $scope.register = function() {
        LoginService.Register($scope.username, $scope.password, $scope.name, $scope.lastName, $scope.card, function(response) {
    		if (response.result == 0) {
    			alert("Error: " + response.error);
    			return;
    		}

    		alert("Registered successfully");
    		$state.go("home.login");
        });
    }
}]);