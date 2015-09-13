'use strict';

import angular from 'angular';
import 'angular-ui-router';

// Components

import { customSvgComponentModule } from './components/custom-svg/custom-svg_module';

// Main modules

import { homeModule } from './routes/home/home_module';

// Services

import { quoteResourceModule } from './services/quote/quote_resource';

// == Dependencies

const appDependencies = [
  'ui.router',
  customSvgComponentModule.name,
  homeModule.name,
  quoteResourceModule.name
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
    () => { }
  ]);
