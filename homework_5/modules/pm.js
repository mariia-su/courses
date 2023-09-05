import { Employee } from "./employee.js";

export class PM extends Employee {
  #jobType = "PM";

  getJobType() {
    return `I am ${this.#jobType}`;
  }
}
