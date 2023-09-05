export class Employee {
  constructor(id, salary) {
    this.id = id;
    this.salary = salary;
  }

  static compareSalary(firstEmployee, secondEmployee) {
    if (firstEmployee.salary === secondEmployee.salary) {
      return "salaries are equal";
    }
    const biggerSalaryId =
      firstEmployee.salary > secondEmployee.salary
        ? firstEmployee.id
        : secondEmployee.id;

    return `User with id ${biggerSalaryId} has greater salary`;
  }
}