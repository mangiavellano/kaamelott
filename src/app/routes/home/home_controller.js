'use strict';

class HomeController {

  constructor($timeout, QuoteResource, quotes) {
    this.dep = {
      '$timeout': $timeout,
      'QuoteResource': QuoteResource
    };

    this._quotes = quotes;
    this.refreshQuote();
  }

  refreshQuote() {
    const randomIdx  = Math.floor(Math.random() * this._quotes.length);
    this.transition  = true;

    this.dep.$timeout(() => {
      this.activeQuote = this._quotes[randomIdx];
      this.transition  = false;
    }, 100);
  }

}

export { HomeController };
