angular.module('appRoutes', ["ui.router"]).config(["$stateProvider", "$urlRouterProvider", function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");

    $stateProvider
    	.state("home", {
    		url: "/",
    		templateUrl: "views/home.html",
    		controller: function($rootScope, $state) {
    			if ($rootScope.globals.authenticated === true)
    				$state.go("home.default");
    			else
    				$state.go("home.login");
    		},
    		abstract: true
    	})
    	.state("home.default", {
    		url: "",
    		templateUrl: "views/home.default.html",
    		controller: "MainController",
    		data: {
    			public: false
    		}
    	})
    	.state("home.login", {
    		url: "",
    		templateUrl: "views/home.login.html",
    		controller: "LoginController",
    		data: {
    			public: true
    		}
    	})
    	.state("register", {
    		url: "/register",
    		templateUrl: "views/register.html",
    		controller: "RegisterController",
    		data: {
    			public: true
    		}
    	});
}]);