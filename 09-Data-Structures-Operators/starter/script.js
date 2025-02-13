'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const flightsArray = flights.split('+');
console.log(flightsArray);

const formatFlight = function (flight) {
  flight = flight.slice(1); // # remove first underscore
  let message = flight.slice(0, flight.indexOf(';')).replace('_', ' ');
  if (message.startsWith('Delayed')) message = '🔴 ' + message;
  // console.log(message);
  const remainingInfo = flight.slice(flight.indexOf(';') + 1);
  const airportFrom = remainingInfo.slice(0, 3).toUpperCase();
  const airportTo = remainingInfo
    .slice(remainingInfo.indexOf(';') + 1, remainingInfo.indexOf(';') + 4)
    .toUpperCase();
  // console.log(remainingInfo);
  // console.log(airportFrom);
  // console.log(airportTo);
  const duration = remainingInfo.slice(-5).replace(':', 'h');
  // console.log(duration);
  console.log(`${message} from ${airportFrom} to ${airportTo} (${duration})`);
};

flightsArray.forEach(flight => {
  formatFlight(flight);
});

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (starter_index, main_index) {
    return [this.starterMenu[starter_index], this.mainMenu[main_index]];
  },
};

/*
const {name, categories, location: locatedIn, openingHours} = restaurant
// console.log(name, categories, locatedIn);

const newMenu = [...restaurant.mainMenu, "Gnocci"]
console.log(newMenu);



const a = [3, 5, 7];

const [first, second] = restaurant.categories;
console.log(first, second);

console.log(restaurant.order(3, 2));
const [starter, main] = restaurant.order(3, 2);
console.log(starter, main);


const books = [
  {
    title: 'Algorithms',
    author: ['Robert Sedgewick', 'Kevin Wayne'],
    publisher: 'Addison-Wesley Professional',
    publicationDate: '2011-03-24',
    edition: 4,
    keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
    pages: 976,
    format: 'hardcover',
    ISBN: '9780321573513',
    language: 'English',
    programmingLanguage: 'Java',
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.41,
        ratingsCount: 1733,
        reviewsCount: 63,
        fiveStarRatingCount: 976,
        oneStarRatingCount: 13
      }
    },
    highlighted: true
  },
  {
    title: 'Structure and Interpretation of Computer Programs',
    author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
    publisher: 'The MIT Press',
    publicationDate: '2022-04-12',
    edition: 2,
    keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
    pages: 640,
    format: 'paperback',
    ISBN: '9780262543231',
    language: 'English',
    programmingLanguage: 'JavaScript',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.36,
        ratingsCount: 14,
        reviewsCount: 3,
        fiveStarRatingCount: 8,
        oneStarRatingCount: 0
      }
    },
    highlighted: true
  },
  {
    title: 'Computer Systems: A Programmer\'s Perspective',
    author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
    publisher: 'Prentice Hall',
    publicationDate: '2002-01-01',
    edition: 1,
    keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
    pages: 978,
    format: 'hardcover',
    ISBN: '9780130340740',
    language: 'English',
    programmingLanguage: 'C',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 4.44,
        ratingsCount: 1010,
        reviewsCount: 57,
        fiveStarRatingCount: 638,
        oneStarRatingCount: 16
      }
    },
    highlighted: true
  },
  {
    title: 'Operating System Concepts',
    author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
    publisher: 'John Wiley & Sons',
    publicationDate: '2004-12-14',
    edition: 10,
    keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
    pages: 921,
    format: 'hardcover',
    ISBN: '9780471694663',
    language: 'English',
    programmingLanguage: 'C, Java',
    onlineContent: false,
    thirdParty: {
      goodreads: {
        rating: 3.9,
        ratingsCount: 2131,
        reviewsCount: 114,
        fiveStarRatingCount: 728,
        oneStarRatingCount: 65
      }
    }
  },
  {
    title: 'Engineering Mathematics',
    author: ['K.A. Stroud', 'Dexter J. Booth'],
    publisher: 'Palgrave',
    publicationDate: '2007-01-01',
    edition: 14,
    keywords: ['mathematics', 'engineering'],
    pages: 1288,
    format: 'paperback',
    ISBN: '9781403942463',
    language: 'English',
    programmingLanguage: null,
    onlineContent: true,
    thirdParty: {
      goodreads: {
        rating: 4.35,
        ratingsCount: 370,
        reviewsCount: 18,
        fiveStarRatingCount: 211,
        oneStarRatingCount: 6
      }
    },
    highlighted: true
  },
  {
    title: 'The Personal MBA: Master the Art of Business',
    author: 'Josh Kaufman',
    publisher: 'Portfolio',
    publicationDate: '2010-12-30',
    keywords: ['business'],
    pages: 416,
    format: 'hardcover',
    ISBN: '9781591843528',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.11,
        ratingsCount: 40119,
        reviewsCount: 1351,
        fiveStarRatingCount: 18033,
        oneStarRatingCount: 1090
      }
    }
  },
  {
    title: 'Crafting Interpreters',
    author: 'Robert Nystrom',
    publisher: 'Genever Benning',
    publicationDate: '2021-07-28',
    keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
    pages: 865,
    format: 'paperback',
    ISBN: '9780990582939',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.7,
        ratingsCount: 253,
        reviewsCount: 23,
        fiveStarRatingCount: 193,
        oneStarRatingCount: 0
      }
    }
  },
  {
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    publisher: 'Grand Central Publishing',
    publicationDate: '2016-01-05',
    edition: 1,
    keywords: ['work', 'focus', 'personal development', 'business'],
    pages: 296,
    format: 'hardcover',
    ISBN: '9781455586691',
    language: 'English',
    thirdParty: {
      goodreads: {
        rating: 4.19,
        ratingsCount: 144584,
        reviewsCount: 11598,
        fiveStarRatingCount: 63405,
        oneStarRatingCount: 1808
      }
    },
    highlighted: true
  }
];

const [, , thirdBook] = books;
console.log(thirdBook);

const ratings = [['rating', 4.19], ['ratingsCount', 144584]];

const [[, rating], [, ratingsCount]] = ratings
console.log(rating, ratingsCount);

const ratingStars = [63405, 1808];

const [fiveStarRatings, fourStarRatings, threeStarRatings = 0] = ratingStars;
console.log(fiveStarRatings, fourStarRatings, threeStarRatings); 

*/

/*

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

const [players1, players2] = game.players;

// const [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

const players1Final = [...players1 , 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

// const {team1, x: draw, team2} = game.odds
// console.log(draw);

function printGoals(...players) {
  const goalsArr = game.scored;
  players.map(player => {
    let count = 0;
    for (let i = 0; i < goalsArr.length; i++) {
      player === goalsArr[i] ? count ++ : count
    }
    console.log(`${player} scored ${count} goals.`);
  })
}

// Challenge #2, Part 1
for (const [goalIndex, playerName] of game.scored.entries()) {
  console.log(`Goal ${goalIndex + 1}: ${playerName}`);
};

// Challenge #2, Part 2
function calcAvg (...odds) {
  let summation = 0
  for (const odd of odds) summation += odd;
  return summation / odds.length
}

const {team1, x: draw, team2} = game.odds
const avgOdds = calcAvg(team1, draw, team2);
console.log(avgOdds);


// Challenge #2, Part 3
for (const [teamKey, odd] of Object.entries(game.odds)) {
  if (teamKey !== "x") {
    console.log(`Odd of victory ${game[teamKey]}: ${odd}`);
  } else {
    console.log(`Odd of draw: ${odd}`)
  };
  // Another way to do this is to generate a teamStr and grab the teamname from game objects highest level. Use optional chaining and ternary operator so that if returns undefined, you know it is a draw. Or if teamKey is 'x', then you know it is draw.
}

// Challenge #2, Bonus

const scorers = {};

for (const [goalIndex, playerName] of game.scored.entries()) {
  let currentPlayerGoalsScored = scorers?.[playerName] ?? 0;
  currentPlayerGoalsScored += 1;
  scorers[playerName] = currentPlayerGoalsScored;
};

console.log(scorers);


// printGoals("Lewandowski", "Gnarby", "Thiago");

*/

/*

const rest1 = {
  name: 'Capri',
  numGuests: 20,
}

const rest2 = {
  name: 'La Piazza',
  // numGuests: 20,
  owner: 'Giovanni Rossi'
}

rest1.numGuests = rest1.numGuests || 10;
rest2.numGuests = rest2.numGuests || 10;

// More consise way to do this
rest1.numGuests ||= 10;
rest2.numGuests ||= 10;



const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu)

for (const [i, food] of menu.entries()) {
  console.log(i, food)
};



// const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// const openDays = Object.keys(restaurant.openingHours);
// // console.log(openDays);
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "Closed";
//   console.log(`${day}: ${open}`);
// }

for (const day of Object.keys(openingHours)) {
  console.log(day);
}



for (const [key, value] of Object.entries(openingHours)) {
  console.log(key);
  console.log(value);
};



//  SETS

const orderSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(orderSet);

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// MAPS

// Slow bad way
const rest = new Map();
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
rest.set(2, 'Lisbon, Portugal');

// Better way
const rest2 = new Map([
  ['name', 'Classico Italiano'],
  [1, 'Firenze, Italy'],
  [2, 'Lisbon, Portugal'],
]);

const map = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'Javascript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Wrong!'],
]);

const submittedAnswer = Number(prompt(map.get('question')));

console.log(map.get('question'));
for (const [key, value] of map) {
  if (typeof key === 'number') console.log(`${key}: ${value}`);
}
console.log(submittedAnswer);
console.log(map.get(submittedAnswer === map.get('correct')));


//  CHALLENGE #3

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1.
const events = new Set([...gameEvents.values()]);

// 2.
gameEvents.delete(64);

// 3.
const avgTime = 1 / (gameEvents.size / 90);
// console.log(`An avent happened, on average, every ${avgTime} minutes`);

// 4.
for (const [key, value] of [...gameEvents]) {
  let eventString;
  // console.log(key);
  // console.log(value);
  key <= 45 ? (eventString = '[FIRST HALF]') : (eventString = '[SECOND HALF]');
  eventString += `${key}: ${value}`;
  console.log(eventString);
}



const airline = 'American Airlines';
const plane = 'A430';

const checkMiddleSeat = function (seat) {
  let bool;
  (seat.slice(-1) === 'B') | (seat.slice(-1) === 'E')
    ? (bool = true)
    : (bool = false);
  return bool;
};

checkMiddleSeat('11B');



//  CHALLENGE #5

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const button = document.querySelector('button');
const textBox = document.querySelector('textarea');

const convertToCamel = function () {
  const arrayVariables = textBox.value.split('\n');
  let trimmedVariable;
  let words;
  const camelCaseVariables = [];
  let newVariable;
  let newLine;

  //  Note 2 differnet ways of looping through arrays here
  for (const [idx, variable] of arrayVariables.entries()) {
    trimmedVariable = variable.trim();
    words = trimmedVariable.split('_');
    words.forEach((word, index) => {
      // console.log(index, word);
      if (index === 0) {
        newVariable = word.toLowerCase();
      } else {
        newVariable += word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
    });
    newLine = newVariable.padEnd(30, ' ') + '✔️'.repeat(idx + 1);
    // camelCaseVariables.push(newVariable);
    camelCaseVariables.push(newLine);
  }
  // console.log(camelCaseVariables);
  // textBox.value = camelCaseVariables.join('\n');
  console.log(camelCaseVariables.join('\n'));
  return camelCaseVariables.join('\n');
};

button.addEventListener('click', convertToCamel);
// text.textContent = betterStrings;

// Test Data
// underscore_case
//   first_name
// Some_Variable
//      calculate_AGE
// delayed_departure
*/
