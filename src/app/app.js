'use strict';

import { homeModule } from './routes/home/home_module';
import { quoteResourceModule } from './services/quote/quote_resource';

// Dependencies

const appDependencies = [
  'ui.router',
  homeModule.name,
  quoteResourceModule.name
];

// Main app

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
  ]);
