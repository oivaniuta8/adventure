let averageGrade = 81;
let gradeGroup = Math.floor((averageGrade - 1) / 10); 
//The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.

switch (gradeGroup) {
  case 10:
  case 9:
    console.log("Відмінно");
    break;
  case 8:
    console.log("Дуже добре");
    break;
  case 7:
    console.log("Добре");
    break;
  case 6:
    console.log("Задовільно");
    break;
  case 5:
  case 4:
  case 3:
  case 2:
  case 1:
  case 0:
    console.log("Незадовільно");
    break;
  default:
    console.log("Помилка: оцінка має бути від 0 до 100");
}
