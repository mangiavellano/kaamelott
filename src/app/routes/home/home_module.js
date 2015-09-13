'use strict';

import angular from 'angular';
import 'angular-ui-router';

import { quoteResourceModule } from 'src/app/services/quote/quote_resource';

import { HomeController } from './home_controller';
import template from './home_template.html!text';

const homeModule = angular
  .module('homeModule', [
    'ui.router',
    quoteResourceModule.name
  ])
  .config([
    '$stateProvider',
    ($stateProvider) => {
      $stateProvider.state('home', {
        url: '/',
        controller: 'HomeController',
        controllerAs: 'ctrl',
        template: template,
        resolve: {
          quotes: [
            'QuoteResource',
            (QuoteResource) => QuoteResource.getQuotes()
          ]
        }
      });
    }
  ])
  .controller('HomeController', [
    'QuoteResource',
    'quotes',
    HomeController
  ]);

export { homeModule };
