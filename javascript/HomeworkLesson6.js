class Student {
    constructor(studentId, fullName, age, averageScore) {
      this.studentId = studentId;
      this.fullName = fullName;
      this.age = age;
      this.averageScore = averageScore;
    }
  }

  const students = [];

  function addStudent(event) {
    event.preventDefault();

    const studentIdInput = document.getElementById("studentId");
    const fullNameInput = document.getElementById("fullName");
    const ageInput = document.getElementById("age");
    const averageScoreInput = document.getElementById("averageScore");

    const studentId = studentIdInput.value;
    const fullName = fullNameInput.value;
    const age = parseInt(ageInput.value);
    const averageScore = parseFloat(averageScoreInput.value);

    const student = new Student(studentId, fullName, age, averageScore);
    students.push(student);

    displayStudents();
}

