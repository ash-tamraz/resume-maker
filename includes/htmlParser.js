


"use strict";

(function(){

const { execFile } = require('child_process');

const child = execFile('python', ['includes/htmlParser.py'], (err, stdout, stderr) => {
		if(err){
			console.log("Error calling Python script: ",err);
			return;
		}
		console.log(`stdout: ${stdout}`);
	}
);

})();
