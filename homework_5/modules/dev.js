import { Employee } from "./employee.js";

export class Dev extends Employee {
  #jobType = "Dev";

  getJobType() {
    return `I am ${this.#jobType}`;
  }

  static returnArrayOfDevs(...employees) {
    return employees.filter((employee) => employee instanceof Dev);
  }
}
