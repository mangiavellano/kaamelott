'use strict';

// import angular from 'angular';

const quoteResourceModule = angular
  .module('quoteResourceModule', [])
  .service('QuoteResource', [
    '$http',
    class QuoteResource {

      constructor($http) {
        this.dep = {
          '$http': $http
        };
      }

      getQuotes() {
        const url = 'http://mangiavellano-public.s3.amazonaws.com/kaamelott/quotes.json';

        return new Promise((resolve, reject) => {
          this.dep.$http
            .get(url)
            .then(
              (res) => { resolve(res.data) },
              (res) => { reject(res) }
            );
        });
      }

    }
  ]);

export { quoteResourceModule };
