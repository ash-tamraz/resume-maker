

// This is actually not working. Anti-web scraping prevents
// scraping the relevant job ad info. For the time being, I'll
// manually create a handful of files to use as test files, and
// focus on implementing the qualifications/keyword finding.


"use strict";

(function (){ // "module pattern" wrapper
const request = require('request');
const cheerio = require('cheerio');
const concat = require('concat-stream'); // concatenate stream from request
const fs = require('fs');

module.exports = textParser;

function textParser (opt) {

  opt = opt || {};

  let url = opt.url || null;
  let filename = './job-ad-files/'+opt.company+'-'+opt.title;

  opt.options = {
    headers: {'User-Agent': 'request'}
  }// end var options

  //  returns Promise of parsed html from website
  //  that will be resolved by caller module
  let options = opt.options;

  return new Promise((resolve, reject) => {
    request(url, function(error, response, html){
      if(!error && response.statusCode == 200) {
				// writing file of html data to use for training
				// algorithms for finding keywords

				// will check to see if file exists before writing
				fs.access(filename, fs.constants.F_OK, (err) => {
					// if error when accessing file, file doesn't exist, so create a new file
					if(err){
						fs.writeFileSync(filename, html, 'utf8');
					}
				});
        resolve(cheerio.load(html));
      }
      reject(error);
    });
  }); // end new Promise((resolve, reject)
}

})();
