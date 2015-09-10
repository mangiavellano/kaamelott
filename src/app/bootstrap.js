'use strict';

import angular     from 'angular';
import { mainApp } from './app';

angular.element(document).ready(function() {
  angular.bootstrap(document.querySelector('[data-main-app]'), [
    mainApp.name
  ], {
    strictDi: true
  });
});
