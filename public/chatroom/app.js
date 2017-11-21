/**
 * Angular App
 */

(function () {

    var app = angular.module('myApp', ['ui-router']);

    /* Setup Rounting For All Pages */
    app.config(['$stateProvider', '$urlRouterProvider',
        ($stateProvider, $urlRouterProvider) => {
            // Redirect any unmatched url
            $urlRouterProvider.otherwise("/dashboard.html");

            $stateProvider
                .state('login', {
                    url: "/welcome",
                    templateUrl: "views/login.html",
                    data: { pageTitle: 'Login' },
                    controller: "loginCtrl",
                    controllerAs: "ctrl"
                })
                .state('chat', {
                    url: "/chat/:username",
                    templateUrl: "views/chatroom.html",
                    data: { pageTitle: 'Chatroom' },
                    controller: "chatCtrl",
                    controllerAs: "ctrl"
                })
        }])

    app.controller('myCtrl', ['$scope', ($scope) => {
        var vm = this;
    }])

    app.controller('loginCtrl', ['$scope', ($scope) => {
        var vm = this;
        vm.post = () => {
            $state.go('chat.username({')
        }
    }])

    app.controller('chatCtrl', ['$scope', ($scope) => {
        var vm = this;
        vm.message = {};
        vm.messages = [];
        vm.send = () => {

        }
    }])

    app.service('chatSvc', ['$scope', ($scope) => {
        var vm = this;
    }])

})()