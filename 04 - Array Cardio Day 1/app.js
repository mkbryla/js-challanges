// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

var inventors = [{
        first: 'Albert',
        last: 'Einstein',
        year: 1879,
        passed: 1955
    },
    {
        first: 'Isaac',
        last: 'Newton',
        year: 1643,
        passed: 1727
    },
    {
        first: 'Galileo',
        last: 'Galilei',
        year: 1564,
        passed: 1642
    },
    {
        first: 'Marie',
        last: 'Curie',
        year: 1867,
        passed: 1934
    },
    {
        first: 'Johannes',
        last: 'Kepler',
        year: 1571,
        passed: 1630
    },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543
    },
    {
        first: 'Max',
        last: 'Planck',
        year: 1858,
        passed: 1947
    },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979
    },
    {
        first: 'Ada',
        last: 'Lovelace',
        year: 1815,
        passed: 1852
    },
    {
        first: 'Sarah E.',
        last: 'Goode',
        year: 1855,
        passed: 1905
    },
    {
        first: 'Lise',
        last: 'Meitner',
        year: 1878,
        passed: 1968
    },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909
    }
];

var people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

var data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

console.log("Inventors source table");
console.table(inventors);
// ------------------------------------------------------------------
// Array.prototype.filter()
console.log("1. Filter the list of inventors for those who were born in the 1500's");
// var exercise1 = inventors.filter(function(inventor) {
//     if (inventor.year >= 1500 && inventor.year < 1600)
//         return true;
// });
//
// console.log("Option 1");
// //console.log(exercise1);
// console.table(exercise1);

var exercise1b = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);

// console.log("\nOption 2");
// //console.log(exercise1b);
console.table(exercise1b);

// ------------------------------------------------------------------
// Array.prototype.map()
console.log("\n2. Give us an array of the inventors' first and last names");
// var exercise2 = inventors.map(function(inventor) {
//     return inventor.first + ' ' + inventor.last;
// });
//
// console.log("Option 1");
// console.log(exercise2);

var exercise2b = inventors.map(inventor => inventor.first + ' ' + inventor.last);

// console.log("\nOption 2");
console.log(exercise2b);

// ------------------------------------------------------------------
// Array.prototype.sort()
console.log("\n3. Sort the inventors by birthdate, oldest to youngest");
//
// var exercise3 = inventors.sort(function(a, b) {
//     return a.year > b.year ? 1 : -1;
// });
//
// console.log("Option 1");
// //console.log(exercise3);
// console.table(exercise3);

var exercise3b = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

// console.log("\nOption 2");
// console.log(exercise3b);
console.table(exercise3b);

// Array.prototype.reduce()
console.log("\n4. How many years did all the inventors live?");
// var exercise4 = inventors.reduce(function(total, inventor) {
//     return total + (inventor.passed - inventor.year);
// }, 0);
//
// console.log("Option 1");
// console.log(exercise4);

var exercise4b = inventors.reduce((total, inventor) => {
    return total + inventor.passed - inventor.year
}, 0);

// console.log("\nOption 2");
console.log(exercise4b);

// ------------------------------------------------------------------
console.log("\n5. Sort the inventors by years lived");

// var exercise5 = inventors.sort(function(a, b) {
//     return (a.passed - a.year) > (b.passed - b.year) ? -1 : 1;
// });
//
// console.log("Option 1");
// // console.log(exercise5);
// console.table(exercise5);

var exercise5b = inventors.sort((a, b) => (a.passed - a.year) > (b.passed - b.year) ? -1 : 1);

// console.log("\nOption 2");
// console.log(exercise5b);
console.table(exercise5b);

// ------------------------------------------------------------------
// console.log("\n6. create a list of Boulevards in Paris that contain 'de' anywhere in the name");
// // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// var elements = document.querySelector('.mw-category');
// var links = Array.from(elements.querySelectorAll('a'));
//
// var exercise6 = links
//     .map(function(link) {
//         return link.textContent;
//     })
//     .filter(function(name) {
//         return name.includes('de');
//     });
//
// console.log("Option 1");
// console.log(exercise6);
//
// var exercise6b = Array.from(document.querySelectorAll('.mw-category a'))
//   .map(link => link.textContent)
//   .filter(name => name.includes('de'));
//
//   console.log("\nOption 2");
//   console.log(exercise6b);


// ------------------------------------------------------------------
console.log("People source table");
console.log(people);
console.log("7. Sort the people alphabetically by last name");
var exercise7 = people.sort(function(a, b) {
    var [aLastName, aFirstName] = a.split(', ');
    var [bLastName, bFirstName] = b.split(', ');
    return aLastName > bLastName ? 1 : -1;
});

console.log(exercise7);

// ------------------------------------------------------------------
console.log("Data source table");
console.log(data);
console.log("8. Sum up the instances of each category in data");

var exercise8 = data.reduce(function(obj, item) {
    if (!obj[item])
        obj[item] = 0;
    obj[item]++;
    return obj;
}, {});

console.log(exercise8);
