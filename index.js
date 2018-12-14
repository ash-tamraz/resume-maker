
// Ideally this module will grab the keywords from a job
// ad page.
// I'm not exactly sure if this module will just grab
// a page's content and then pass the content to another 
// module for the parsing logic, or just parse the content itself.

"use strict";

(function(){

const websiteTextGetter = require('./includes/getText.js');
const htmlParser = require('./includes/htmlParser.js');//...  this will be a module to parse returned html
// algorithms and logic for finding keywords will be in this module

// testing object to pass to getText
//let testObject0 = { url:'url goes here', company: '', title: 'title goes here'};
//let testObject1 = { url: 'url goes here', company: '', title: ''};

htmlParser;
//websiteTextGetter(testObject0)
//  .then(function(data){
//    let $ = data;
//		console.log(Object.keys($(this).options));
//		let re = /have/i;
//  });
})();
