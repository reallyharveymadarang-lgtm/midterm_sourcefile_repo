'use strict';

console.log('STUDENT SCORE ARRAY ANALYZER');

const namesList = [
    'Ana',
    'Ben',
    'Carla',
    'Daniel',
    'Ella'
];

const scoresList = [85, 72, 91, 64, 78];

const taskScores = [
    [80, 85, 90],
    [70, 72, 74],
    [88, 92, 95],
    [60, 65, 67],
    [75, 78, 81]
];

const initialNames = [...namesList];

console.log('\nPART A: ORIGINAL RECORDS');

for (let index = 0; index < namesList.length; index++) {
    console.log(
        index + ' - ' + namesList[index] + ': ' + scoresList[index]
    );
}

console.log('\nPART B: ADD NEW STUDENTS');

namesList.push('Faith');
scoresList.push(88);

namesList.unshift('Aaron');
scoresList.unshift(76);

console.log('Updated Names: ' + namesList);
console.log('Updated Scores: ' + scoresList);
console.log('Number of Students: ' + namesList.length);

console.log('\nPART C: REMOVE AND REPLACE RECORDS');

namesList.shift();
scoresList.shift();

namesList.pop();
scoresList.pop();

const targetIndex = namesList.indexOf('Daniel');

if (targetIndex !== -1) {
    namesList.splice(targetIndex, 1);
    scoresList.splice(targetIndex, 1);
}

namesList.splice(2, 0, 'Grace');
scoresList.splice(2, 0, 82);

console.log('Names: ' + namesList);
console.log('Scores: ' + scoresList);

console.log('\nPART D: CLASS STATISTICS');

let sumScore = 0;
let highest = scoresList[0];
let lowest = scoresList[0];

for (let index = 0; index < scoresList.length; index++) {
    sumScore += scoresList[index];

    if (scoresList[index] > highest) {
        highest = scoresList[index];
    }

    if (scoresList[index] < lowest) {
        lowest = scoresList[index];
    }
}

const meanScore = sumScore / scoresList.length;

console.log('Total Score: ' + sumScore);
console.log('Average Score: ' + meanScore.toFixed(2));
console.log('Highest Score: ' + highest);
console.log('Lowest Score: ' + lowest);

console.log('\nPART E: PASSING-SCORE ANALYSIS');

const qualifiedScores = scoresList.filter(function (score) {
    return score >= 75;
});

const gradeStatuses = scoresList.map(function (score) {
    if (score >= 75) {
        return 'Passed';
    } else {
        return 'Failed';
    }
});

const possessesFailures = scoresList.some(function (score) {
    return score < 75;
});

const isAllPassed = scoresList.every(function (score) {
    return score >= 75;
});

console.log('Passing Scores: ' + qualifiedScores);
console.log('Statuses: ' + gradeStatuses);
console.log('At Least One Failed: ' + possessesFailures);
console.log('All Students Passed: ' + isAllPassed);

console.log('\nPART F: SORT AND SEARCH');

const sortedScores = Array.from(scoresList);

sortedScores.sort(function (a, b) {
    return b - a;
});

const is91Present = sortedScores.includes(91);
const positionIndex91 = sortedScores.indexOf(91);

console.log('Scores from Highest to Lowest: ' + sortedScores);
console.log('Contains 91: ' + is91Present);
console.log('Index of 91: ' + positionIndex91);

console.log('\nPART G: TWO-DIMENSIONAL ARRAY');

const taskAverages = [];

for (let row = 0; row < taskScores.length; row++) {
    let subtotal = 0;

    for (let col = 0; col < taskScores[row].length; col++) {
        subtotal += taskScores[row][col];
    }

    const calculatedAvg = subtotal / taskScores[row].length;

    taskAverages.push(Number(calculatedAvg.toFixed(1)));

    console.log(
        initialNames[row] +
        "'s activity average: " +
        calculatedAvg.toFixed(2)
    );
}

console.log('Activity Averages: ' + taskAverages);

console.log('\nPART H: TEXT SUMMARY');

console.log('Students: ' + namesList.join(' | '));
console.log('Scores: ' + scoresList.join(' | '));
console.log('Class Average: ' + meanScore.toFixed(2));
console.log('Highest Score: ' + highest);
console.log('Lowest Score: ' + lowest);