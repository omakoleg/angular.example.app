angular.module('config')
  .config(function ($httpProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $httpProvider.interceptors.push('AuthInterceptor');
  });