//Plotly.newPlot("aaronPlot1", [{x: [1, 2, 3, 4], y: [1, 8, 27, 64]}]);
//Plotly.newPlot("aaronPlot2", [{x: [1, 2, 3, 4], y: [1, 4, 9, 16]}]);
// var trace = {
//     x: ["burrito", "pizza", "chicken"], 
//     y: [10, 18, 5],
//     type: "bar"

// };
// var layout = {
//     title: "Luncheon Survey",
//     xaxis: {title: "Food Option"},
//     yaxis: {title: "Number of Respondents"}
// };
// Plotly.newPlot("plotArea", [trace], layout);

// var trace = {
//     labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"], 
//     values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
//     type: "pie"

// };
// var data = [trace];
// var layout = {
//     title: "'Pie' Chart",
//     //xaxis: {title: "Drinks"},
//     //yaxis: {title: "% of Drinks Ordered"}
// };
// Plotly.newPlot("plotArea", data, layout);

// var numbers = [1, 2, 3, 4, 5]
// var tripled = numbers.map(function(num){
//     return num * 3;
// });
// console.log(tripled)

// var plusfive = numbers.map(function(num){
//     return num + 5;
// });
// console.log(plusfive)

// var cities = [
//     {
//       "Rank": 1,
//       "City": "San Antonio ",
//       "State": "Texas",
//       "Increase_from_2016": "24208",
//       "population": "1511946"
//     },
//     {
//       "Rank": 2,
//       "City": "Phoenix ",
//       "State": "Arizona",
//       "Increase_from_2016": "24036",
//       "population": "1626078"
//     },
//     {
//       "Rank": 3,
//       "City": "Dallas",
//       "State": "Texas",
//       "Increase_from_2016": "18935",
//       "population": "1341075"
//     }
// ];

// var cityNames = cities.map(function(city){
//     return city.City;
// });
// console.log(cityNames);

// var cityPopulation = cities.map(function(city){
//     return city.population;
// });
// console.log(cityPopulation);

// var numbers = [1,2,3,4,5];

// var larger = numbers.filter(function(num){
//     return num > 1;
// });

// console.log(larger);

var numbers = [1,2,3,4,5]
var doubled = numbers.map(num => num * 2);
console.log(doubled);

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => b - a);
console.log(sortedAge);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
var slice = words.slice(0,3);
console.log(words);

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );