
// Ideally this module will grab the keywords from a job
// ad page.
// I'm not exactly sure if this module will just grab
// a page's content and then pass the content to another 
// module for the parsing logic, or just parse the content itself.

"use strict";

(function(){

const websiteTextGetter = require('./includes/getText.js');

// testing object to pass to getText
let testObject = { url:'https://news.ycombinator.com'};

console.log(websiteTextGetter(testObject)
  .then(function(data){
    let $ = data;
    $('span.comhead').each(function(i, element){
      let a = $(this).prev();
      console.log(a.text());
    });
  })
);
})();
