// Getting stats from the Raptors last game in the 2018 season
// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// Requirements
// 1. There are 4 functions to fill in.
// 2. Some funtions will use other funtions to complete their answers
// 3. Avoid using for, forEach, for...in or for...of
// 4. Run the file using `node question.js` in your terminal and you will see the output



// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 1. Count all the points a team had in the game.
//   - Write a function to count the total points Raptors had per quarter
//     - 1st quarter - 26
//     - 2nd quarter - 21
//     - 3rd quarter - 25
//     - 4th quarter - 21

const totalScore = (pointsPerQuarter) => {
  const total = pointsPerQuarter.reduce((acc, point) => {
    return acc + point;
  }, 0);

  return total;
};

const raptorsScore = totalScore([26, 21, 25, 21]);
console.log('Total Score', raptorsScore);

// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 2. Get the average points per starting player
//   - Write a function to get get the average points scored by the starting raptors
const startingPlayers = {
  ibaka: {
    points: 12,
  },
  miles: {
    points: 13,
  },
  anunoby: {
    points: 2,
  },
  lowry: {
    points: 5,
  },
  derozen: {
    points: 13
  },
};

const getAveragePoints = (players) => {
  const totalScore = Object.keys(players).reduce((acc, player) => {
    return players[player].points + acc;
  }, 0);
  const totalPlayers = Object.keys(players).length;

  return totalScore / totalPlayers;
};

const averageScore = getAveragePoints(startingPlayers);
console.log('Scoring Average', averageScore);


// * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
// 3. Remove the starting players who scored less than the average
//   - Write a function to remove the starting players who scored less than the average
//   - The return value of the function should be in the same format as the `startingPlayers`
//     object above
//   - Make use of `startingPlayers` and `averageScore` that were created in question 2

const getHighestScorers = (players, threshold) => {
  return Object.keys(players).filter((player) => players[player].points > threshold);
};

const highestScoringPlayers = getHighestScorers(startingPlayers, averageScore);
console.log('Highest Scoring Players', highestScoringPlayers);
