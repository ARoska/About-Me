alert('Hi there!  Let\'s see how well you know me.  I\'m going to ask you a few Yes or No questions, please answer with a Y or N.  Thanks!');

var userName = prompt('First, please tell me your name');
console.log('User name:', userName);

var lastName = prompt('Hi ' + userName + '!  Nice to meet ya!  We\'ll start with an easy one: Is my last name ROSKA?');
console.log('Last name answer:', lastName);

var lastNameAnswer = lastName.toUpperCase();

if (lastNameAnswer === 'Y' || lastNameAnswer === 'YES') {
    alert('Yup! Told you that was going to be easy.');
} else {
    alert('Really ' + userName + '? You don\'t even know my last name?');
} 

var homeTown = prompt('Ok ' + userName + ', this one is a tad tougher.  Do I live in Everett?');
console.log('Home town answer:', homeTown);

var homeTownAnswer = homeTown.toUpperCase();

if (homeTownAnswer === 'N' || homeTownAnswer === 'NO') {
    alert('Correct!  I actually live in Monroe, about 20 minutes east of Everett.');
} else {
    alert('Sorry, that\'s not quite right.  I actually live in Monroe, a town about 20 minutes east of Everett.');
}

var hobby = prompt('One last easy one for ya ' + userName + ': Am I a gamer?');
console.log('Hobby answer:', hobby);

var hobbyAnswer = hobby.toUpperCase();

if (hobbyAnswer === 'Y' || hobbyAnswer === 'YES') {
    alert('You know it ' + userName + '! I have been a gamer all my life!');
}
else {
    alert('Nah, ' + userName + ', I love video games lol.  Better luck next time!');
}

alert('Alright ' + userName + ', you ready?  These next couple are a bit tougher!');

var sister = prompt('So, do you think I have an older sister?');
console.log('Sister answer:', sister);

var sisterAnswer = sister.toUpperCase();

if (sisterAnswer === 'N' || sisterAnswer === 'NO') {
    alert('Correct!  Although I have to admit it was kind of a trick question...  I actually do have a sister, but she is 5 years younger than me :\)');
} else {
    alert('HAH!  Fooled ya!  I\'m actually the older sibling!');
}

var blackBelt = prompt('Last one ' + userName + '!  Do you think I have a Black Belt in a martial art?');
console.log('Black belt answer:', blackBelt);

var blackBeltAnswer = blackBelt.toUpperCase();

if (blackBeltAnswer === 'Y' || blackBeltAnswer === 'YES') {
    alert('DING DING DING!  Nice job ' + userName + ', how did you know?  I have a 4th degree Black Belt in Tae Kwon Do!')
} else {
    alert('Sorry ' + userName + ', but I actually DO have a Black Belt!  It\'s a 4th degree Black Belt it Tae Kwon Do.');
}

alert('Thanks for playing my little guessing game!');