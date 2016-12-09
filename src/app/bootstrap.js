'use strict';

import angular from 'angular';
import 'angular-ui-router';

import { mainApp } from './app';

angular.element(document).ready(() => {
  angular.bootstrap(document, [mainApp.name], { strictDi: true });
});
