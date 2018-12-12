


"use strict";

(function (){ // "module pattern" wrapper
const request = require('request');
const cheerio = require('cheerio');
const concat = require('concat-stream'); // concatenate stream from request

module.exports = textParser;

function textParser (opt) {

  opt = opt || {};

  let url = opt.url || null;

  opt.options = {
    headers: {'User-Agent': 'request'}
  }// end var options

  //  returns Promise of parsed html from website
  //  that will be resolved by caller module
  let options = opt.options;

  return new Promise((resolve, reject) => {
    request(url, function(error, response, html){
      if(!error && response.statusCode == 200) {
        resolve(cheerio.load(html));
      }
      reject(error);
    });
  }); // end new Promise((resolve, reject)
}

})();
