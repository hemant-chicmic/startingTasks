const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let students = [];

function addStudents(n) {
  let count = 0;
  function inputStudent() {
    if (count < n) {
      rl.question("Enter student name: ", (name) => {
        rl.question("Enter no of subjects: ", (no_sub) => {
          const subMarks = [];
          let ct = 0;
          function inputSubjectMarks() {
            if (ct < parseInt(no_sub)) {
              rl.question(`Enter subject ${ct + 1} name: `, (subject) => {
                rl.question(`Enter marks for ${subject}: `, (marks) => {
                  subMarks.push({ subject, marks: parseInt(marks) });
                  ct++;
                  inputSubjectMarks();
                });
              });
            } else {
              students.push({ name, subMarks });
              count++;
              inputStudent();
            }
          }
          inputSubjectMarks();
        });
      });
    } else {
      rl.close();
      printStudents();
    }
  }
  inputStudent();
}

function printStudents() {
  console.log("Students:");
  students.forEach((student) => {
    console.log(`Name: ${student.name}`);
    // console.log("  Subject-wise marks:");
    student.subMarks.forEach((subject) => {
      console.log(`    ${subject.subject}: ${subject.marks}`);
    });
  });
}

rl.question("Enter the number of students: ", (num) => {
  const numStudents = parseInt(num);
  addStudents(numStudents);
});
