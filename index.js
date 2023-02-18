import { fifaData } from './fifa.js';

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note, you may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final
const homeTeam2014 = fifaData.filter(x=>x.Year === 2014 && x.Stage === 'Final')[0]['Home Team Name'];
console.log(homeTeam2014);
//(b) Away Team name for 2014 world cup final
const awayTeam2014 = fifaData.filter(x=>x.Year === 2014 && x.Stage === 'Final')[0]['Away Team Name'];
console.log(awayTeam2014);
//(c) Home Team goals for 2014 world cup final
const homeTeamGoals = fifaData.filter(x=>x.Year === 2014 && x.Stage === 'Final')[0]['Home Team Goals'];
console.log(homeTeamGoals);
//(d) Away Team goals for 2014 world cup final
const awayTeamGoals = fifaData.filter(x=>x.Year === 2014 && x.Stage === 'Final')[0]['Away Team Goals'];
console.log(awayTeamGoals);
//(e) Winner of 2014 world cup final */
const winner2014 = fifaData.filter(x=>x.Year === 2014 && x.Stage === 'Final')[0]['Home Team Name'];
console.log(winner2014)




/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive data as a parameter
2. Return an array of objects with the data of the teams that made it to the final stage

hint - you should be looking at the stage key inside of the objects
*/

function getFinals(data) {
    return data.filter(x => x.Stage === 'Final');
}
console.log("Task 2:", getFinals(fifaData));



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array
2. Receive a callback function getFinals from task 2 
3. Return an array called years containing all of the years in the getFinals data set*/

function getYears(arr, cb) {
    let years = cb(arr).map(x => x.Year);
    
    return years;
}
console.log("Task 3: ", getYears(fifaData, getFinals));

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receives an array
2. Receives the callback function getFinals from task 2 
3. Determines the winner (home or away) of each `finals` game. 
4. Returns the names of all winning countries in an array called `winners` */ 

function getWinners(arr, cb) {
   const winners = cb(arr).map(x => {
        if(x['Home Team Goals'] > x['Away Team Goals']) {
            return x['Home Team Name'];
        } else {
            return x['Away Team Name'];
        }
   });
   return winners;
};
console.log("Task 4", getWinners(fifaData, getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array
2. Receive a callback function getYears from task 3
3. Receive a callback function getWinners from task 4
4. Return an array of strings that say "In {year}, {country} won the world cup!" 

hint: the strings returned need to exactly match the string in step 4.
 */

function getWinnersByYear(arr, cb, cb2) {  //(fifaData, getYears, getWinners)
    let newArray = [];
    const yearsArray = cb(arr, getFinals);   //getYears(arr, getFinals)
    const winnersArray = cb2(arr, getFinals); //getWinners(arr, getFinals)
    let sol = yearsArray.map((year, i) => {
        newArray.push(`In ${year}, ${winnersArray[i]} won the world cup!`)
    });
    return newArray;
}

console.log(getWinnersByYear(fifaData, getYears, getWinners))


 
/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function getAverageGoals to do the following: 
 1. Receive the callback function getFinals from task 2 ensure you pass in the data as an argument
 2. Return the the average number of the total home team goals and away team goals scored per match and round to the second decimal place. 
 
 (Hint: use .reduce and do this in 2 steps) 
 
 Example of invocation: getAverageGoals(getFinals(fifaData));
*/

function getAverageGoals(cb) { //(getFinals(fifaData))
    let homeGoals = cb.map(x => x['Home Team Goals']);
    let awayGoals = cb.map(x => x['Away Team Goals']);
    let totalHomeGoals = homeGoals.reduce((x, y) => x + y);
    let totalAwayGoals = awayGoals.reduce((x, y) => x + y);
    let homeAvg = (totalHomeGoals/homeGoals.length).toFixed(2);
    let awayAvg = (totalAwayGoals/awayGoals.length).toFixed(2);
    return [homeAvg, awayAvg];
}

console.log("Task 6", getAverageGoals(getFinals(fifaData)));


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
export default{
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
