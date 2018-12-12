

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
