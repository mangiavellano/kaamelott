'use strict';

class HomeController {

  constructor(QuoteResource, quotes) {
    this.dep = {
      'QuoteResource': QuoteResource
    };

    this._quotes = quotes;
    this.refreshQuote();
  }

  refreshQuote() {
    const randomIdx  = Math.floor(Math.random() * this._quotes.length);

    this.activeQuote = this._quotes[randomIdx];
  }

}

export { HomeController };
