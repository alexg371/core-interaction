console.log("hello world!");

console.log('');

// STRINGS
console.log('Strings -');
console.log('I don\'t want to...');
console.log(':P' + ':0');

console.log('');

// NUMBERS
console.log('Numbers -');
console.log(8);
console.log(8 + 8);
console.log(8 - 8);
console.log(8 * 8);
console.log(8 / 8);
console.log(8 % 3);

console.log('');

// STRINGS & NUMBERS
console.log('Strings & Numbers -');
console.log('8 * 8');
console.log('8 * 8' + 8);
console.log('I am ' + (8 * 8) + ' years old');
console.log('8 * 8:', 8 * 8);

console.log('');

// BOOLEANS
console.log('Booleans -');
console.log(true, false);
console.log('3 < 4:', 3 < 4);
console.log('2 </= 2:', 2 <= 2);
console.log('2 > 1 && 2 < 12:', 2 > 1 && 2 < 12);
console.log('5 > 12 || 6 </= 18:', 5 > 12 || 6 <= 18);

console.log('');

// BASIC TYPES
console.log('Basic Types -');
console.log(typeof 'hello', typeof (8 - 7), typeof (2 > 1));

console.log('');

// VARIABLES
console.log('Variables -');
var five = 5;
console.log('five:', five)
var ten = 10;
console.log('ten:', ten)
console.log('five + ten:', five + ten);
console.log('five * ten:', five * ten);

console.log('')

// VARIABLE ALTERNATIONS
console.log('Variable Alternations -');
var myStudentDebt = 800;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt = myStudentDebt - 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt -= 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt += 100;
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt ++; // adds 1
console.log('myStudentDebt:', myStudentDebt);
myStudentDebt --; // substracts 1
console.log('myStudentDebt:', myStudentDebt);
console.log('');

// ARRAYS - a more specific type of object
console.log('Arrays -');
var myLuckyNumbers = [3, 7, 'eight', (12 + 2), 21];
console.log('myLuckyNumbers:', myLuckyNumbers);
console.log(myLuckyNumbers[1]);

console.log('');

// OBJECTS
console.log('Objects -');
var me = {
  name: 'Geddes',
  age: 19,
  nativeNewYorker: true
};
console.log('me:', me);
console.log("me['name']:", me['name']);
console.log('me.name:', me.name);

console.log('');

// FUNCTIONS
console.log('Functions -');
var sayHi = function() {
  console.log('hi!')
};
console.log('sayHi():');
sayHi();

console.log('');

var saySomeMessage = function(message) {
  console.log(message);
}
console.log('saySomeMessage(\'hello\'):');
saySomeMessage('hello');
console.log('saySomeMessage(\'goodbye\'):');
saySomeMessage('goodbye');

console.log('');

var addNumbers = function(number1, number2) {
  return number1 + number2
}

//JS CHECKIN HOMEWORK

var squared = function (number) {
  return number * number
};

var describeMe = function (me) {
  return 'My name is ' + me.name + '! I am ' + me.age + ' years old. If you asked me if I was a native New Yorker, my response would be: ' + me.nativeNewYorker + '.'
};

console.log('');

//CONDITIONAL STATEMENTS
console.log('Conditional Statements -');

if (me.age > 21) {
  console.log('party time')
} else if (me.age < 5) {
  console.log('why are you here?')
} else {
  console.log('not quite yet')
};

console.log('');

//LOOPS
console.log('Loops -');

var hamburgers = 0
for (var i = 0; hamburgers < 10; i++) {
  console.log(hamburgers + ' hamburger(s)')
  hamburgers++;
}

console.log('');

for (var i = 0; i < 5; i++) {
  console.log(i);
}

console.log('how many licks does it take to get to the center of a tootsie pop?')
for (var licks = 1; licks <= 4; licks++) {
    if (licks == 4) {
      console.log('*CRUNCH*')
    } else {
      console.log(licks)
    }
  }
