const EMPLOYEES = [
  {
    firstname: 'Douglas',
    lastname: 'Egiemeh',
    role: 'Executive',
    years: 5
  },
  {
    firstname: 'Daramola',
    lastname: 'Abiboye',
    role: 'Director',
    years: 2
  },
  {
    firstname: 'Oyindamola',
    lastname: 'Aderinwale',
    role: 'Manager',
    years: 3
  },
  {
    firstname: 'Oyindamola',
    lastname: 'Aderinwale',
    role: 'Manager',
    years: 3
  },
  {
    firstname: 'Pelumi',
    lastname: 'Longe',
    role: 'intern',
    years: 3
  },
  {
    firstname: 'Pelumi',
    lastname: 'Longe',
    role: 'intern',
    years: 3
  },
];

const SALARY = {
  Intern: 10000,
  Associate: 25000,
  Manager: 50000,
  Executive: 100000,
  Director: 150000
};

let employeeRole;
let employeeYears;
let employeeFirstname;
let employeeLastname;

const calculate = document.getElementById('calculate');
const calculateByName = document.getElementById('calculateByName')

const calculateSalary = () => {
  employeeRole = document.getElementById('role').value;
  employeeYears = parseInt(document.getElementById('years').value);
  console.log(employeeRole);
  console.log(employeeYears);
  const role = employeeRole;
  const years = employeeYears;
  const baseSalary = SALARY[role];
  const salary = baseSalary * 1.1 * years;
  document.getElementById('result').innerHTML = '$ ' + salary.toFixed(2);
}

calculate.addEventListener('click', calculateSalary);

const calculateSalaryByName = () => {
  employeeFirstname = document.getElementById('firstname').value;
  employeeLastname = document.getElementById('lastname').value;

  const firstname = employeeFirstname;
  const lastname = employeeLastname;

  EMPLOYEES.forEach((employee) => {
      if (employee.firstname === firstname && employee.lastname === lastname){
          employeeRole = employee.role;
          employeeYears = employee.years;
      }
  });

  let employeeSalary;

  if (employeeRole && employeeYears) {
      const employeeBaseSalary = SALARY[employeeRole];
      employeeSalary = employeeBaseSalary * 1.1 * employeeYears;
      document.getElementById('result').innerHTML = '$ ' + employeeSalary.toFixed(2);
  }
  else {
    document.getElementById('result').innerHTML = "Employee not found";
  }


}
calculateByName.addEventListener('click', calculateSalaryByName);
