/*
1. Написати функцію, яка перетворює рядок на масив слів,
    сортує його за алфавітним порядком і повертає (у масиві не повинно бути пробілів як елементів)
 */
console.log("-----------stringToArray");

const str1 = "Це довільний   текст    для створення масиву слів ";

function stringToArray(str) {
  // Ваш код
  return str
    .trim()
    .toLowerCase()
    .split(" ")
    .filter((el) => el !== "")
    .sort();
}

console.log(stringToArray(str1)); // виводить [ 'для', 'довільний', 'масиву', 'слів', 'створення', 'текст', 'це' ]

/*
2. Написати функцію, яка видаляє з масива елементи, що дублюються, та повертає масив оригінальних елементів,
відсортованих за зростанням
 */
console.log("-----------removeDuplicatesAndSort");

const initialArray = [1, 4, 6, 6, 7, 5, 34, 5, 1000, 66, 1];

function removeDuplicatesAndSort(arr) {
  // Ваш код
  const uniqueArr = [];
  arr.forEach((i) => {
    if (!uniqueArr.includes(i)) {
      uniqueArr.push(i);
    }
  });
  return uniqueArr.sort((a, b) => a - b);
}

console.log(removeDuplicatesAndSort(initialArray)); // виводить [ 1, 4, 5, 6, 7, 34, 66, 1000 ]

/*
3. Написати функцію, яка поверне масив парних чисел
 */
console.log("-----------arrayOfEvens");

const initialArray2 = [2, 3, 6, 7, 9, 12];

function arrayOfEvens(arr) {
  // Ваш код
  const evens = [];
    initialArray2.forEach((i) => {
        if (i % 2 == 0) {
            evens.push(i);
        }
    }
    )
    return evens;
}

console.log(arrayOfEvens(initialArray2)); // виводить [ 2, 6, 12 ]

/*
4. Написати функцію, яка сформує масив з послідовності чисел, формуючи його з аргумента, який збільшує
кожний наступний елемент послідовності на самого себе. Максимальне значення масиву не повинно перевищувати число 30.
 */
console.log("-----------createArray");

function createArray(element) {
  // Ваш код
  const result = [];

  let i = element;
  while (i <= 30) {
    result.push(i);
    i += element;
  }
  return result;
}

console.log(createArray(5)); // виведе [ 5, 10, 15, 20, 25, 30 ]
console.log(createArray(3)); // виведе [ 3,  6,  9, 12, 15, 18, 21, 24, 27, 30 ]
