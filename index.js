
// Ideally this module will grab the keywords from a job
// ad page.
// I'm not exactly sure if this module will just grab
// a page's content and then pass the content to another 
// module for the parsing logic, or just parse the content itself.

"use strict";

(function(){

const websiteTextGetter = require('./includes/getText.js');
// const htmlParser = require...  this will be a module to parse returned html
// algorithms and logic for finding keywords will be in this module

// testing object to pass to getText
let testObject0 = { url:'https://jobs.lever.co/tivix/b2a3241c-9349-4658-aa82-052e145c7d58', company: 'tivix', title: 'backend-software-engineer'};
let testObject1 = { url: 'https://www.ainfosec.com/careers/current-openings/?p=job/omUf8fwn&nl=1', company: 'ais', title: 'entry-level-software-engineer'};

websiteTextGetter(testObject0)
  .then(function(data){
    let $ = data;
		console.log(Object.keys($(this).options));
		let re = /have/i;
  });
})();
