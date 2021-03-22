console.log('Hello Console!');

/**
 * JS EMAIL TO DO LIST:
 *  1. ASK TO THE VISITOR FOR HIS EMAIL.
 *  2. LOOP CHECK FOR THIS EMAIL TO BE IN THE LIST.
 *  3. OUTPUT OF THE LOOP CHECK BOTH CASES TRUE OR FALSE.
 * 
 */

// CREATING ARRAY OF KNOWN EMAIL LIST

 var accounts = ['tizio.caio@gmail.com', 'davide.rossi@virgilio.it', 'andrea.sempronio.libero.it', 'francesco.ferilli@alice.it', 'randomuser.nonloso@gmail.com'];
// console.log(accounts);
// console.log(accounts.length);


// ASK FOR THE VISITOR FOR HIS EMAIL

var userEmail = prompt('Please enter your Email Address here: ');
// console.log(userEmail);

// VARIABLE TO CHECK THE PRESENCE OF THE USEREMAIL INSIDE THE LIST
var userEmailFound = false;

// LOOP CHECK FOR THIS EMAIL TO BE IN THE LIST

for (var i = 0; i < accounts.length; i++) {

    // console.log(accounts[i]);

    if (accounts[i] === userEmail) {
        userEmailFound = true;
        break;
    }
}

    if (userEmailFound) {
        // console.log('Welcome ' + accounts[i] + ' you can now Log In!');
        document.getElementById('email-result').innerHTML = 'Welcome ' + accounts[i] + ' you can now Log In!';
    } else {
        // console.log('Authentication Error, please register your Email before trying to Log In.');  
        document.getElementById('email-result').innerHTML = 'Authentication Error, please register your Email before trying to Log In';
    }
    




/**
 * GIOCO DEI DADI TO DO LIST:
 *  1. GENERATE RANDOM NUMBER BETWEEN 1 AND 6 FOR THE PLAYER.
 *  2. GENERATE RANDOM NUMBER BETWEEN 1 AND 6 FOR THE COMPUTER.
 *  3. DETERMINE THE WINNER BASED TO THE HIGHER RANDOM NUMBER.
 *  4. OUTPUT OF THE RESULT OF THE GAME.
 * 
 */

// GENERATE RANDOM NUMBER BETWEEN 1 AND 6 FOR THE PLAYER AND FOR THE COMPUTER 

/* var randomPlayerNumber = Math.floor(Math.random() * 7 ) + 1;
console.log('This is your Random Number Dear Player: ' + parseInt(randomPlayerNumber) );

var randomComputerNumber = Math.floor(Math.random() * 7 ) + 1;
console.log('This is Computer\'s Random Number: ' + parseInt(randomComputerNumber) );

// DETERMINE THE WINNER BASED TO THE HIGHER RANDOM NUMBER

if (randomPlayerNumber > randomComputerNumber) {
    console.log('PLAYER WON!');
} else if (randomPlayerNumber == randomComputerNumber) {
    console.log('NO ONE WINS THIS ROUND!');
} else {
    console.log('COMPUTER WON!');
}
*/