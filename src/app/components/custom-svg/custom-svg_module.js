'use strict';

import angular from 'angular';

import { CustomSvgComponentController } from './custom-svg_controller';
import { customSvgComponentDirective }  from './custom-svg_directive';

const customSvgComponentModule = angular
  .module('customSvgComponentModule', [])
  .controller('CustomSvgComponentController', CustomSvgComponentController)
  .directive('customSvg', customSvgComponentDirective)

export { customSvgComponentModule };
