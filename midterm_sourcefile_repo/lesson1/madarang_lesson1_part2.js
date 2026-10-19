class Student {
  constructor(name, scores) {
    this.name = name;
    this.scores = scores;
  }

  getAverage() {
    let sum = 0;

    for (let i = 0; i < this.scores.length; i++) {
      sum += this.scores[i];
    }

    if (this.scores.length === 0) {
      return 0;
    }

    return sum / this.scores.length;
  }

  getLetterGrade() {
    let average = this.getAverage();

    if (average >= 90) {
      return "A";
    } else if (average >= 80) {
      return "B";
    } else if (average >= 70) {
      return "C";
    } else if (average >= 60) {
      return "D";
    } else {
      return "F";
    }
  }
}

function analyzeClass(students) {
  console.log("------- STUDENT REPORT -------");

  if (students.length === 0) {
    console.log("No students found.");
    return;
  }

  let totalSum = 0;
  let topStudent = "";
  let topAverage = 0;

  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    let average = student.getAverage();
    let grade = student.getLetterGrade();

    console.log(
      student.name +
      " - Average: " +
      average.toFixed(1) +
      " | Grade: " +
      grade
    );

    totalSum += average;

    if (average > topAverage) {
      topAverage = average;
      topStudent = student.name;
    }
  }

  let classAverage = totalSum / students.length;

  console.log("-----------------------------------");
  console.log("Class Average: " + classAverage.toFixed(1));
  console.log("Top Student: " + topStudent + " with " + topAverage.toFixed(1));
}

const studentData = [
  { name: "Junior", scores: [85, 90, 92] },
  { name: "Punyot", scores: [70, 75, 68] },
  { name: "Atan", scores: [95, 98, 92] },
  { name: "Choksang", scores: [55, 60, 58] }
];

const students = [];

for (let i = 0; i < studentData.length; i++) {
  students.push(
    new Student(studentData[i].name, studentData[i].scores)
  );
}

analyzeClass(students);