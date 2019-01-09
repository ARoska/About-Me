alert('Hi there!  Let\'s see how well you know me.  I\'m going to ask you a few Yes or No questions, please answer with a Y or N.  Thanks!');

var answers = [];

answers[0] = prompt('First, please tell me your name');
console.log('User name:', answers[0]);

answers[1] = prompt('Hi ' + answers[0] + '!  Nice to meet ya!  We\'ll start with an easy one: Is my last name ROSKA?');
answers[1] = answers[1].toUpperCase();
console.log('Last name answer:', answers[1]);

if (answers[1] === 'Y' || answers[1] === 'YES') {
    alert('Yup! Told you that was going to be easy.');
} else {
    alert('Really ' + answers[0] + '? You don\'t even know my last name?');
} 

answers[2] = prompt('Ok ' + answers[0] + ', this one is a tad tougher.  Do I live in Everett?');
answers[2] = answers[2].toUpperCase();
console.log('Home town answer:', answers[2]);

if (answers[2] === 'N' || answers[2] === 'NO') {
    alert('Correct!  I actually live in Monroe, about 20 minutes east of Everett.');
} else {
    alert('Sorry, that\'s not quite right.  I actually live in Monroe, a town about 20 minutes east of Everett.');
}

answers[3] = prompt('One last easy one for ya ' + answers[0] + ': Am I a gamer?');
answers[3] = answers[3].toUpperCase();
console.log('Gamer answer:', answers[3]);

if (answers[3] === 'Y' || answers[3] === 'YES') {
    alert('You know it ' + answers[0] + '! I have been a gamer all my life!');
}
else {
    alert('Nah, ' + answers[0] + ', I love video games lol.  Better luck next time!');
}

alert('Alright ' + answers[0] + ', you ready?  These next couple are a bit tougher!');

answers[4] = prompt('So, do you think I have an older sister?');
answers[4] = answers[4].toUpperCase();
console.log('Sister answer:', answers[4]);

if (answers[4] === 'N' || answers[4] === 'NO') {
    alert('Correct!  Although I have to admit it was kind of a trick question...  I actually do have a answers[4], but she is 5 years younger than me :\)');
} else {
    alert('HAH!  Fooled ya!  I\'m actually the older sibling!');
}

answers[5] = prompt('Last one ' + answers[0] + '!  Do you think I have a Black Belt in a martial art?');
answers[5] = answers[5].toUpperCase();
console.log('Black belt answer:', answers[5]);

if (answers[5] === 'Y' || answers[5] === 'YES') {
    alert('DING DING DING!  Nice job ' + answers[0] + ', how did you know?  I have a 4th degree Black Belt in Tae Kwon Do!')
} else {
    alert('Sorry ' + answers[0] + ', but I actually DO have a Black Belt!  It\'s a 4th degree Black Belt it Tae Kwon Do.');
}

alert('Thanks for playing my little guessing game!');