'use strict';

import template from './custom-svg_template.html!text';

const customSvgComponentDirective = () => {
  return {
    restrict: 'E',
    controller: 'CustomSvgComponentController',
    controllerAs: 'ctrl',
    bindToController: true,
    scope: {
      icon: '@',
      width: '@',
      height: '@'
    },
    template: template
  };
};

export { customSvgComponentDirective };
