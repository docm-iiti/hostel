angular.module('main',[]).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider.
  when('/home', {templateUrl: 'views/home.html', controller: profileCtrl}).
  when('/facilities', {templateUrl: 'views/facilities/facilities.html', controller: profileCtrl}).
  when('/life', {templateUrl: 'views/life/life.html', controller: profileCtrl}).
  when('/contactus', {templateUrl: 'views/contactus.html', controller: profileCtrl}).
  when('/gallery', {templateUrl: 'views/gallery.html', controller: profileCtrl}).
  when('/people', {templateUrl: 'views/people.html', controller: profileCtrl}).
  otherwise({redirectTo: '/home'});
  $locationProvider.hashPrefix('!');
}]);