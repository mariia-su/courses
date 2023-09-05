export default function sortBySalary(arr) {
  arr.sort((a, b) => a.salary - b.salary || a.id - b.id);
  return arr;
}
