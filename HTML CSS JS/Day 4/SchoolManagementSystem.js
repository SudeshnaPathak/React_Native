class Person {
  constructor(id, name, age, type) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.type = type;
  }
}

Person.prototype.getInfo = function() {
  return {
    id: this.id,
    name: this.name,
    age: this.age,
    type: this.type
  };
}

class Student extends Person {
  constructor(id, name, age, grade) {
    super(id, name, age, "Student");
    this.grade = grade;
  }

  getDetails() {
    return {
      id: this.id,
      name: this.name,
      age: this.age,
      grade: this.grade
    };
  }
}

class Teacher extends Person {
  constructor(id, name, age, subject, salary) {
    super(id, name, age, "Teacher");
    this.subject = subject;
    this.salary = salary;
  }

  getDetails() {
    return {
      id: this.id,
      name: this.name,
      subject: this.subject,
      salary: this.salary
    };
  }
}

let students = [];
let teachers = [];

function addStudent() {
  let studentId = document.getElementById("studentId").value;
  let studentName = document.getElementById("studentName").value;
  let studentAge = document.getElementById("studentAge").value;
  let studentGrade = document.getElementById("studentGrade").value;
  
  students.push(new Student(studentId, studentName, studentAge, studentGrade));

  document.getElementById("studentId").value = "";
  document.getElementById("studentName").value = "";
  document.getElementById("studentAge").value = "";
  document.getElementById("studentGrade").value = "";
}

function addTeacher() {
  let teacherId = document.getElementById("teacherId").value;
  let teacherName = document.getElementById("teacherName").value;
  let teacherAge = document.getElementById("teacherAge").value;
  let teacherSubject = document.getElementById("teacherSubject").value;
  let teacherSalary = document.getElementById("teacherSalary").value;

  teachers.push(new Teacher(teacherId, teacherName, teacherAge, teacherSubject, teacherSalary));

  document.getElementById("teacherId").value = "";
  document.getElementById("teacherName").value = "";
  document.getElementById("teacherAge").value = "";
  document.getElementById("teacherSubject").value = "";
  document.getElementById("teacherSalary").value = "";
}

function clearAll() {
  students = [];
  teachers = [];

  showAll();
}

function getGradeMessage(grade) {
  switch(grade) {
    case "A":
      return "Excellent";
    case "B":
      return "Good";
    case "C":
      return "Average";
    default:
      return "";
  }
}

function showAll() {
  let studentCardGroup = document.getElementById("studentCardGroup");
  let teacherCardGroup = document.getElementById("teacherCardGroup");

  document.getElementById("totalCount").innerText = students.length + teachers.length;

  studentCardGroup.innerHTML = "";
  teacherCardGroup.innerHTML = "";

  students.forEach(student => {
    let card = `<div class="card border rounded overflow-y-auto m-2" style="width: 18rem; height: 330px;">
                  <div class="card-body">
                    <p class="card-text text-center bg-primary-subtle p-2">${student.type}</p>
                    <p class="card-text">ID: ${student.id}</p>  
                    <p class="card-text">Name: ${student.name}</p>
                    <p class="card-text">Age: ${student.age}</p>
                    <p class="card-text">Grade: ${student.grade}</p>
                    <p class="card-text text-center bg-success-subtle p-2">${student.grade} : ${getGradeMessage(student.grade)}</p>
                  </div>
                </div>`;
    studentCardGroup.innerHTML += card;
  });

  teachers.forEach(teacher => {
    let card = `<div class="card border rounded overflow-y-auto m-2" style="width: 18rem; height: 330px;">
                  <div class="card-body">
                    <p class="card-text text-center bg-success-subtle p-2">${teacher.type}</p>
                    <p class="card-text">ID: ${teacher.id}</p>
                    <p class="card-text">Name: ${teacher.name}</p>
                    <p class="card-text">Age: ${teacher.age}</p>
                    <p class="card-text">Subject: ${teacher.subject}</p>
                    <p class="card-text">Salary (Monthly): ₹ ${teacher.salary}</p>
                    <p class="card-text text-center bg-primary-subtle p-2">Annual Salary: ₹ ${teacher.salary * 12}</p>
                  </div>
                </div>`;
    teacherCardGroup.innerHTML += card;
  });
}