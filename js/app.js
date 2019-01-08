alert('Hi there!  Let\'s see how well you know me.  I\'m going to ask you a few Yes or No questions, please answer with a Y or N.  Thanks!');

var userName = prompt('First, please tell me your name');
console.log('User name:', userName);

var lastName = prompt('All right ' + userName + ', we\'ll start with an easy one.  Is my last name ROSKA?');
console.log('Aswer for last name:', lastName);
var lastNameAnswer = lastName.toUpperCase();

if (lastNameAnswer === 'Y' || lastNameAnswer === 'YES') {
    alert('Yup! Told you that was going to be easy.');
} else {
    alert('Really ' + userName + '? You don\'t even know my last name?');
} 