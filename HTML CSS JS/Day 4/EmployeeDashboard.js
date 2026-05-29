class Employee {
  constructor(id, name, department, position, salary, location, skills) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.position = position;
    this.salary = salary;
    this.location = location;
    this.skills = skills;
  }
}

let employees = [];

function addEmployee() {
  let id = document.getElementById("employeeId").value;
  let name = document.getElementById("employeeName").value;
  let department = document.getElementById("employeeDepartment").value;
  let position = document.getElementById("employeePosition").value;
  let salary = parseFloat(document.getElementById("employeeSalary").value);
  let location = document.getElementById("employeeLocation").value;
  let skills = document.getElementById("employeeSkills").value.split(",").map(skill => skill.trim());

  let employee = new Employee(id, name, department, position, salary, location, skills);
  employees.push(employee);
  alert("Employee added successfully!");
  clearForm();
  updateDashboard()
  showEmployees(employees);
}

function clearForm() {
  document.getElementById("employeeId").value = "";
  document.getElementById("employeeName").value = "";
  document.getElementById("employeeDepartment").value = "";
  document.getElementById("employeePosition").value = "";
  document.getElementById("employeeSalary").value = "";
  document.getElementById("employeeLocation").value = "";
  document.getElementById("employeeSkills").value = "";
}

function showEmployees(employees) {
  let employeeCardGroup = document.getElementById("employeeCardGroup");
  employeeCardGroup.innerHTML = "";

  employees.forEach(employee => {
    let {id, name, department, position, salary} = employee;
    
    let card = `<div class="card border rounded m-2" style="width: 18rem;">
                  <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">ID: ${id}</p>
                    <p class="card-text">Department: ${department}</p>
                    <p class="card-text">Position: ${position}</p>
                    <p class="card-text">Salary: ₹ ${salary}</p>
                    <button class="btn btn-primary" onclick="showEmployeeDetails('${id}')">View Details</button>
                  </div>
                </div>`;
    employeeCardGroup.innerHTML += card;
  });
}

function clearEmployees() {
  employees = [];
  showEmployees();
  updateDashboard();
}

function showEmployeeDetails(id) {
  let employee = employees.find(emp => emp.id === id);

  let {name, department, position, salary, location, skills} = employee;
  let [skill1, skill2] = skills;

  document.getElementById("empDetailName").innerText = name;
  document.getElementById("empDetailDepartment").innerText = department;
  document.getElementById("empDetailPosition").innerText = position;
  document.getElementById("empDetailSalary").innerText = salary;
  document.getElementById("empDetailLocation").innerText = location;
  document.getElementById("empDetailSkills").innerText = skill1 + ", " + skill2;
}

function filterEmployees() {
  let departmentFilter = document.getElementById("departmentFilter").value;
  let filteredEmployees;

  if (departmentFilter)
    filteredEmployees = employees.filter(emp => emp.department === departmentFilter);
  else
    filteredEmployees = employees;

  showEmployees(filteredEmployees);
}

function updateDashboard() {
  document.getElementById("totalCount").innerText = employees.length;

  if (employees.length === 0) {
    document.getElementById("averageSalaryValue").innerText = 0;
    document.getElementById("lowestSalaryValue").innerText = 0;
    document.getElementById("highestSalaryValue").innerText = 0;
    return;
  }

  let salaries = employees.map(emp => emp.salary);

  let total = salaries.reduce((sum, sal) => sum + sal, 0);
  let average = total / employees.length;
  let lowest = Math.min(...salaries);
  let highest = Math.max(...salaries);

  document.getElementById("averageSalaryValue").innerText = average.toFixed(2);
  document.getElementById("lowestSalaryValue").innerText = lowest;
  document.getElementById("highestSalaryValue").innerText = highest;
}