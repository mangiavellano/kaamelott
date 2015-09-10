'use strict';

import angular from 'angular';
import 'angular-ui-router';

// == Dependencies

const appDependencies = [
  'ui.router'
];

// == Main app

export const mainApp = angular
  .module('mainApp', appDependencies)
  .config([
    '$locationProvider',
    '$urlRouterProvider',
    '$httpProvider',
    (
      $locationProvider,
      $urlRouterProvider,
      $httpProvider
    ) => {
      $locationProvider.html5Mode(true);
      $urlRouterProvider.otherwise('/');
      $httpProvider.useApplyAsync(true);
    }
  ])
  .run([
    () => {
      console.log('Yo');
    }
  ]);
