// students = [
//     {
//         name: "John",
//         subMarks :
//         [
//             {
//                 subject: "abc",
//                 marks : "34"
//             },
//             {
//                 subject: "abc",
//                 marks : "68"
//             },
//             {
//                 subject: "abc",
//                 marks : "67"
//             },
//         ]
//     },
//     {
//         name: "manish",
//         subMarks :
//         [
//             {
//                 subject: "dcsdc",
//                 marks : "46"
//             },
//             {
//                 subject: "pqr",
//                 marks : "90"
//             },
//             {
//                 subject: "asgh",
//                 marks : "10"
//             },
//         ]
//     },

// ];












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
              const subject = generateRandomSubject();
              rl.question(`Enter marks for ${subject}: `, (marks) => {
                subMarks.push({ subject, marks: parseInt(marks) });
                ct++;
                inputSubjectMarks();
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

function generateRandomSubject() {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  let subject = "";
  for (let i = 0; i < 5; i++) {
    subject += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return subject;
}

function printStudents() {
  console.log("Students:");
  students.forEach((student) => {
    console.log(`Name: ${student.name}`);
    student.subMarks.forEach((subject) => {
      console.log(`    ${subject.subject}: ${subject.marks}`);
    });
  });
}

rl.question("Enter the number of students: ", (num) => {
  const numStudents = parseInt(num);
  addStudents(numStudents);
});
























