'use strict';

const icons = {
  refresh: [
    {
      code: 'M32 12h-12l4.485-4.485c-2.267-2.266-5.28-3.515-8.485-3.515s-6.219 1.248-8.485 3.515c-2.266 2.267-3.515 5.28-3.515 8.485s1.248 6.219 3.515 8.485c2.267 2.266 5.28 3.515 8.485 3.515s6.219-1.248 8.485-3.515c0.189-0.189 0.371-0.384 0.546-0.583l3.010 2.634c-2.933 3.349-7.239 5.464-12.041 5.464-8.837 0-16-7.163-16-16s7.163-16 16-16c4.418 0 8.418 1.791 11.313 4.687l4.687-4.687v12z',
      id: 'svg-refresh'
    }
  ]
};

class CustomSvgComponentController {

  constructor() {
    this.iconPaths = [];

    for (let i = 0 ; i < icons[this.icon].length ; i++) {
      this.iconPaths.push(icons[this.icon][i]);
    }

    this.style = {
      'width': this.width + 'px',
      'height': this.height + 'px'
    };
  }
}

export { CustomSvgComponentController };
