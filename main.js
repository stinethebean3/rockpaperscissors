const readline = require('readline');

var rps = function(a,b) {
    var a = a.toLowerCase();
    var b = b.toLowerCase();
    var choices = ['rock', 'paper', 'scissors']
    if (choices.indexOf(a) == -1 || choices.indexOf(b) == -1) {
	return new Error([ 
	    'Error! Choose one of the following: ' + choices.join(', ')
	]);
    };
    if ((a == 'scissors' || b == 'scissors') && (a == 'rock' || b == 'rock')) {
	return 'rock';
    };
    if ((a == 'scissors' || b == 'scissors') && (a == 'paper' || b == 'paper')) {
	return 'scissors';
    };
    if ((a == 'rock' || b == 'rock') && (a == 'paper' || b == 'paper')) {
	return 'paper';
    };
    if (a == b) {
	return 'tie';
    };
};

const rl = readline.createInterface( {
    input: process.stdin,
    output: process.stdout
});

rl.question('Player 1: Choose > ', (answer1) => {
   rl.question('Player 2: Choose > ', (answer2) => {
	   var response = rps(answer1,answer2);
           if (response instanceof Error){
	       console.log(response.message);
	   } else if (response == 'tie') {
	       console.log('tied game')
	   } else { 
	       console.log('Winner: ' + response);
	   };
           rl.close();
	   rl.close();
    });
});

module.exports.rps = rps;


