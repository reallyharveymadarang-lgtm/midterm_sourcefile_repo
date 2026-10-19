let scores = [85, 72, 91, 64, 78];

let total = 0;
let highest = scores[0];
let lowest = scores[0];
let passed = 0;
let failed = 0;

console.log("Student Scores:");

for (let i = 0; i < scores.length; i++) {
    let score = scores[i];
    let grade;

    if (score >= 90) {
        grade = "Excellent";
    } else if (score >= 80) {
        grade = "Very Good";
    } else if (score >= 75) {
        grade = "Good";
    } else {
        grade = "Failed";
    }

    if (score >= 75) {
        console.log("Student " + (i + 1) + ": " + score + " - " + grade + " - Passed");
        passed++;
    } else {
        console.log("Student " + (i + 1) + ": " + score + " - " + grade);
        failed++;
    }

    total += score;

    if (score > highest) {
        highest = score;
    }

    if (score < lowest) {
        lowest = score;
    }
}

let average = total / scores.length;

console.log("Total Score: " + total);
console.log("Average Score: " + average);
console.log("Highest Score: " + highest);
console.log("Lowest Score: " + lowest);
console.log("Passed: " + passed);
console.log("Failed: " + failed);noce