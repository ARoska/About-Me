'strict';

alert('Hi there!  Let\'s see how well you know me.  I\'m going to ask you a few questions.  The first five will be Yes/No so please answer with a Y or N.  Thanks!');

var answers = [];
var correctAnswers = 0;
var questionChances = [4, 6]

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
    alert('Correct!  Although I have to admit it was kind of a trick question...  I actually do have a sister, but she is 5 years younger than me :\)');
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

alert('OK ' + answers[0] + ', these next couple are multiple choice.  You will have a limited number of chances, so do your best!')

while (questionChances[0] > 0) {
    answers[6] = prompt('Ever year I go to the largest Anime (Japanese Animation) convention in the Pacific Northwest, Sakura Con.  I haven\'t missed a year since I started going.  What year did I attend my first Sakura Con?  YOU HAVE ' + questionChances[0] + ' CHANCES LEFT.');
    console.log('Sakura Con year answer:', answers[6]);

    if (answers[6] === '2004') {
        questionChances[0] = null;
        alert('Wow!  How did you know!?');

    } else if (questionChances[0] === 1) {
        questionChances[0] = null;
        alert('Sorry ' + answers[0] + ' you\'re all out of chances...');

    } else {
        questionChances[0]--;
        alert('Nope, try again!');
    }
}

if (questionChances[0] === null) {
    alert('The first time I went to Sakura Con was in 2004.  That was also the last year it was held in Sea-Tac before moving to Seattle!');
}

while (questionChances[1] > 0) {
    answers[7] = prompt('Right then, ' + answers[0] + ', onward!  As you should know from earlier, I am an avid gamer.  I have been gaming since I was 5 years old.  Can you guess one(1) game console that I have NOT owned in my life?  YOU HAVE ' + questionChances[1] + ' CHANCES LEFT.');
    answers[7] = answers[7].toUpperCase();
    console.log('Game console answer:', answers[7]);

    if (answers[7] === 'NES' || answers[7] === 'ORIGINAL NINTENDO' || answers[7] === 'NINTENDO ENTERTAINMENT SYSTEM' || answers[7] === 'NINTENDO' || answers[7] === 'SEGA CD' || answers[7] === 'SEGA SATURN' || answers[7] === 'SATURN' || answers[7] === 'SEGA DREAMCAST' || answers[7] === 'DREAMCAST' || answers[7] === 'ORIGINAL XBOX' || answers[7] === 'XBOX' || answers[7] === 'MICROSOFT XBOX') {
        questionChances[1] = null;
        alert ('Bingo!  That\'s one!');

    } else if (questionChances[1] === 1) {
        questionChances[1] = null;
        alert('Sorry, you\'re all out of chances...');

    } else {
        questionChances[1]--;
        alert('Nope, try again!');
    }
}

if (questionChances[1] === null) {
    alert ('I\'ve had many different consoles in my life, but I have never owned: a NES, a SEGA CD, a Dreamcast, or an original Xbox');
}

alert('Thanks for playing my little guessing game!');